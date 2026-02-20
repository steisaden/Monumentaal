import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : null;

export async function getPageContent(neighborhood: string, service: string) {
    if (!supabase) {
        console.warn('Supabase credentials missing. Returning null content.');
        return null;
    }

    try {
        const { data, error } = await supabase
            .from('content_pages')
            .select('ai_summary, local_nuance, title, meta_description, faq_data, technical_specs')
            .eq('neighborhood', neighborhood)
            .eq('service', service)
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching page content:', error);
        return null;
    }
}
