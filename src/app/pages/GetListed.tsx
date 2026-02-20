import { useState } from "react";
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { supabase } from "../../lib/supabase";

export default function GetListed() {
  const [loading, setLoading] = useState<string | null>(null);

  const plans = [
    {
      name: "Basic Listing",
      price: "€49",
      priceId: "price_basic_placeholder", // Replace with real ID
      period: "per month",
      description: "Perfect for individual craftspeople starting out",
      features: [
        "Profile in directory",
        "Basic business information",
        "Up to 5 project photos",
        "Client reviews & ratings",
        "Email notifications for leads"
      ],
      cta: "Start Basic",
      popular: false
    },
    {
      name: "Professional",
      price: "€99",
      priceId: "price_pro_placeholder", // Replace with real ID
      period: "per month",
      description: "Ideal for established heritage specialists",
      features: [
        "Everything in Basic",
        "Featured placement in search",
        "Unlimited project photos",
        "Portfolio gallery showcase",
        "Priority lead distribution",
        "Analytics dashboard",
        "Verified badge display"
      ],
      cta: "Go Professional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "€199",
      priceId: "price_enterprise_placeholder", // Replace with real ID
      period: "per month",
      description: "For restoration companies with multiple teams",
      features: [
        "Everything in Professional",
        "Multiple team member profiles",
        "Top search placement",
        "Featured homepage position",
        "Dedicated account manager",
        "Custom branding options",
        "API access for integration"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const handleSubscribe = async (plan: any) => {
    if (plan.cta === "Contact Sales") {
      window.location.href = "mailto:sales@monumentaal.nl";
      return;
    }

    setLoading(plan.name);
    // For MVP, we prompt for email. ideally this is a modal or pre-step.
    const email = prompt("Please enter your email to continue:");
    if (!email) {
      setLoading(null);
      return;
    }
    const companyName = prompt("Please enter your company name:");

    if (!supabase) {
      alert("Supabase client is not initialized. Please check your environment variables.");
      setLoading(null);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: {
          priceId: plan.priceId,
          email,
          companyName,
          returnUrl: window.location.origin
        }
      });

      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Payment error:", err);
      alert("Could not initiate payment. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  const benefits = [
    {
      icon: Users,
      title: "Quality Leads",
      description: "Connect with homeowners who specifically need heritage restoration expertise."
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Expand your client base in the 's-Hertogenbosch monumental property market."
    },
    {
      icon: Zap,
      title: "Save Time",
      description: "Pre-qualified leads mean you spend less time on unsuitable projects."
    }
  ];

  return (
    <div className="bg-[#F5F5F0]">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1
                className="font-['Cormorant_Garamond'] mb-6"
                style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A' }}
              >
                Join Monumentaal's Certified Directory
              </h1>
              <p
                className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-8"
                style={{ fontSize: '15px', lineHeight: 1.8 }}
              >
                Are you a heritage restoration specialist? Get discovered by homeowners actively seeking authentic craftsmanship for their monumental buildings in 's-Hertogenbosch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 bg-[#2A4D69] text-[#F5F5F0] px-8 py-4 hover:bg-[#1A3A4F] transition-colors font-['Space_Mono']"
                  style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                >
                  View Pricing
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="relative h-[600px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766499431068-7686d755cec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNyYWZ0c21hbiUyMG1hc29ucnklMjB3b3JrfGVufDF8fHx8MTc3MTQxNzA3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Heritage craftsperson at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-24 border-y border-[#1A1A1A]/10">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <h2 className="font-['Cormorant_Garamond'] text-center mb-16" style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700, color: '#1A1A1A' }}>
            Why Join Monumentaal?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2A4D69]/10 mb-6">
                  <benefit.icon className="w-8 h-8 text-[#2A4D69]" />
                </div>
                <h3 className="font-['Cormorant_Garamond'] mb-4" style={{ fontSize: '28px', fontWeight: 600, color: '#1A1A1A' }}>
                  {benefit.title}
                </h3>
                <p className="font-['Space_Mono'] text-[#1A1A1A]/70" style={{ fontSize: '14px', lineHeight: 1.8 }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <h2 className="font-['Cormorant_Garamond'] text-center mb-4" style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700, color: '#1A1A1A' }}>
            Choose Your Plan
          </h2>
          <p className="font-['Space_Mono'] text-[#1A1A1A]/70 text-center mb-16 max-w-2xl mx-auto" style={{ fontSize: '15px', lineHeight: 1.8 }}>
            Start with a plan that fits your business. Upgrade anytime as you grow.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white border-2 p-8 ${plan.popular
                  ? 'border-[#2A4D69] relative'
                  : 'border-[#1A1A1A]/10'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2A4D69] text-[#F5F5F0] px-4 py-1 font-['Space_Mono']" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-['Cormorant_Garamond'] mb-2" style={{ fontSize: '32px', fontWeight: 700, color: '#1A1A1A' }}>
                    {plan.name}
                  </h3>
                  <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-6" style={{ fontSize: '13px', lineHeight: 1.7 }}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-['Cormorant_Garamond']" style={{ fontSize: '56px', fontWeight: 700, color: '#1A1A1A', lineHeight: 1 }}>
                      {plan.price}
                    </span>
                    <span className="font-['Space_Mono'] text-[#1A1A1A]/70" style={{ fontSize: '14px' }}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2A4D69] flex-shrink-0 mt-0.5" />
                      <span className="font-['Space_Mono']" style={{ fontSize: '13px', lineHeight: 1.7 }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleSubscribe(plan)}
                  disabled={loading === plan.name}
                  className={`w-full py-4 font-['Space_Mono'] transition-colors ${plan.popular
                    ? 'bg-[#2A4D69] text-[#F5F5F0] hover:bg-[#1A3A4F]'
                    : 'border border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#2A4D69] hover:text-[#2A4D69]'
                    } ${loading === plan.name ? 'opacity-50 cursor-not-allowed' : ''}`}
                  style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                >
                  {loading === plan.name ? 'Processing...' : plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-white py-24 border-t border-[#1A1A1A]/10">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-['Cormorant_Garamond'] text-center mb-16" style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700, color: '#1A1A1A' }}>
              Application Process
            </h2>

            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Submit Application",
                  description: "Fill out our online form with your business details, certifications, and portfolio."
                },
                {
                  step: "2",
                  title: "Verification Review",
                  description: "Our team verifies your credentials, insurance, and reviews sample projects (typically 3-5 business days)."
                },
                {
                  step: "3",
                  title: "Approval & Onboarding",
                  description: "Once approved, we'll help you set up your profile and connect you with leads."
                },
                {
                  step: "4",
                  title: "Start Receiving Leads",
                  description: "Begin receiving qualified project requests from heritage property owners."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[#2A4D69] text-[#F5F5F0] font-['Cormorant_Garamond']" style={{ fontSize: '32px', fontWeight: 700 }}>
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-['Cormorant_Garamond'] mb-3" style={{ fontSize: '28px', fontWeight: 600, color: '#1A1A1A' }}>
                      {item.title}
                    </h3>
                    <p className="font-['Space_Mono'] text-[#1A1A1A]/70" style={{ fontSize: '14px', lineHeight: 1.8 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700, color: '#1A1A1A' }}>
              Ready to Grow Your Heritage Business?
            </h2>
            <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-12" style={{ fontSize: '15px', lineHeight: 1.8 }}>
              Join the leading directory for monumental restoration specialists in 's-Hertogenbosch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@monumentaal.nl"
                className="inline-flex items-center justify-center gap-2 bg-[#2A4D69] text-[#F5F5F0] px-8 py-4 hover:bg-[#1A3A4F] transition-colors font-['Space_Mono']"
                style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@monumentaal.nl"
                className="inline-flex items-center justify-center gap-2 border border-[#1A1A1A]/20 text-[#1A1A1A] px-8 py-4 hover:border-[#2A4D69] hover:text-[#2A4D69] transition-colors font-['Space_Mono']"
                style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
