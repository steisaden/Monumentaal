import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@12.18.0?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") as string, {
    apiVersion: "2023-08-16",
    httpClient: Stripe.createFetchHttpClient(),
});

const cryptoProvider = Stripe.createSubtleCryptoProvider();

const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

serve(async (req) => {
    try {
        const signature = req.headers.get("Stripe-Signature");
        const body = await req.text();
        const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");

        if (!signature || !webhookSecret) {
            return new Response("Webhook Error: Missing signature or secret", { status: 400 });
        }

        let event;
        try {
            event = await stripe.webhooks.constructEventAsync(
                body,
                signature,
                webhookSecret,
                undefined,
                cryptoProvider
            );
        } catch (err) {
            console.error(`⚠️  Webhook signature verification failed.`, err.message);
            return new Response(`Webhook Error: ${err.message}`, { status: 400 });
        }

        if (event.type === "checkout.session.completed") {
            const session = event.data.object;
            const customerEmail = session.customer_email;
            const companyName = session.metadata?.company_name;

            if (customerEmail) {
                // Upsert contractor
                const { error } = await supabase
                    .from('contractors')
                    .upsert({
                        email: customerEmail,
                        company_name: companyName || "Unknown Company", // Fallback if meta missing
                        is_verified: true,
                        subscription_tier: 'professional', // Assuming this flow is primarily for pro tier
                        updated_at: new Date().toISOString(),
                    }, { onConflict: 'email' });

                if (error) {
                    console.error('Error updating contractor:', error);
                    return new Response('Database Error', { status: 500 });
                }
            }
        }

        return new Response(JSON.stringify({ received: true }), {
            headers: { "Content-Type": "application/json" },
            status: 200,
        });

    } catch (err) {
        return new Response(`Server Error: ${err.message}`, { status: 500 });
    }
});
