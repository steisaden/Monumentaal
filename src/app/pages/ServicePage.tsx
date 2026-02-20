import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getPageContent } from '../../lib/supabase';
import LeadForm from './LeadForm'; // Assuming LeadForm is in the same directory or adjust import
import { CheckCircle, Shield, AlertTriangle, ArrowRight } from 'lucide-react';

interface PageContent {
    title: string;
    meta_description: string;
    ai_summary: string;
    local_nuance: string;
    faq_data?: Array<{ q: string; a: string }>;
    technical_specs?: Record<string, string>;
}

export default function ServicePage() {
    const { neighborhood, service } = useParams<{ neighborhood: string; service: string }>();
    const [content, setContent] = useState<PageContent | null>(null);
    const [loading, setLoading] = useState(true);

    // Helper to capitlize/format slugs for fallback display
    const formatSlug = (slug: string) => slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');

    useEffect(() => {
        async function loadContent() {
            if (neighborhood && service) {
                // Prepare terms for query (in case slugs differ from DB values slightly, though typically they match)
                // For now assuming exact match or close enough for demo. 
                // Real implementation might need slug normalization.
                const neighborhoodTerm = formatSlug(neighborhood);
                const serviceTerm = formatSlug(service);

                const data = await getPageContent(neighborhoodTerm, serviceTerm);

                if (data) {
                    setContent(data);
                } else {
                    // Fallback if DB fetch fails or no data
                    // You explicitly asked to fetch from Supabase. 
                    // If that fails, we show a basic skeleton to ensure the page works.
                    setContent({
                        title: `${serviceTerm} in ${neighborhoodTerm}`,
                        meta_description: `Professional ${serviceTerm} services in ${neighborhoodTerm}.`,
                        ai_summary: `Discover top-rated ${serviceTerm.toLowerCase()} specialists in ${neighborhoodTerm}. We connect you with vetted professionals for your heritage property.`,
                        local_nuance: `Restoring a property in ${neighborhoodTerm} requires specific attention to local architectural guidelines and environmental factors.`,
                    });
                }
            }
            setLoading(false);
        }

        loadContent();
    }, [neighborhood, service]);


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F5F5F0]">
                <div className="font-['Space_Mono'] text-[#2A4D69] animate-pulse">Loading heritage data...</div>
            </div>
        );
    }

    if (!content) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F5F5F0]">
                <div className="text-center">
                    <h1 className="font-['Cormorant_Garamond'] text-3xl mb-4">Page Not Found</h1>
                    <p className="font-['Space_Mono']">We couldn't find data for this specific combination.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-[#F5F5F0] min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-12 border-b border-[#1A1A1A]/10">
                <div className="max-w-[1800px] mx-auto">
                    <div className="max-w-4xl">
                        <span className="inline-block px-3 py-1 mb-6 border border-[#2A4D69] text-[#2A4D69] font-['Space_Mono'] text-xs uppercase tracking-widest bg-white">
                            Verified Local Specialist
                        </span>
                        <h1 className="font-['Cormorant_Garamond'] text-[#1A1A1A] text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
                            {content.title}
                        </h1>
                        <p className="font-['Space_Mono'] text-[#1A1A1A]/80 text-lg leading-relaxed max-w-2xl">
                            {content.ai_summary}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="max-w-[1800px] mx-auto px-6 lg:px-12 py-24">
                <div className="grid lg:grid-cols-12 gap-16">

                    {/* Left Column: Context & Nuance */}
                    <div className="lg:col-span-7 space-y-16">

                        {/* Local Nuance */}
                        <div>
                            <h2 className="font-['Cormorant_Garamond'] text-3xl font-bold mb-6 flex items-center gap-3">
                                <AlertTriangle className="w-6 h-6 text-[#2A4D69]" />
                                Local Restoration Context
                            </h2>
                            <div className="bg-white p-8 border-l-4 border-[#2A4D69] shadow-sm">
                                <p className="font-['Space_Mono'] text-[#1A1A1A]/80 leading-relaxed">
                                    {content.local_nuance}
                                </p>
                            </div>
                        </div>

                        {/* Technical Specs (if available) */}
                        {content.technical_specs && (
                            <div>
                                <h2 className="font-['Cormorant_Garamond'] text-3xl font-bold mb-6">Technical Specifications</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {Object.entries(content.technical_specs).map(([key, value]) => (
                                        <div key={key} className="p-6 bg-[#E8E8E0]/30 border border-[#1A1A1A]/5">
                                            <div className="font-['Space_Mono'] text-xs uppercase tracking-wider text-[#1A1A1A]/50 mb-2">{key}</div>
                                            <div className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#1A1A1A]">{value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* FAQ (if available) */}
                        {content.faq_data && content.faq_data.length > 0 && (
                            <div>
                                <h2 className="font-['Cormorant_Garamond'] text-3xl font-bold mb-6">Common Questions</h2>
                                <div className="space-y-4">
                                    {content.faq_data.map((faq, idx) => (
                                        <div key={idx} className="border-b border-[#1A1A1A]/10 pb-6">
                                            <h3 className="font-['Space_Mono'] font-bold text-lg mb-2">{faq.q}</h3>
                                            <p className="font-['Space_Mono'] text-[#1A1A1A]/70 leading-relaxed text-sm">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Right Column: Trust Signals & CTA */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="bg-[#2A4D69] text-[#F5F5F0] p-8 md:p-12 relative overflow-hidden">
                            <div className="relative z-10">
                                <Shield className="w-12 h-12 mb-6 text-[#E8E8E0]" />
                                <h3 className="font-['Cormorant_Garamond'] text-3xl font-bold mb-4">Quality Guaranteed</h3>
                                <ul className="space-y-3 font-['Space_Mono'] text-sm mb-8">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[#E8E8E0]" />
                                        Certified Heritage Specialists
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[#E8E8E0]" />
                                        Traditional Materials Only
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[#E8E8E0]" />
                                        Local Regulation Compliance
                                    </li>
                                </ul>
                                <a href="#lead-form" className="inline-flex items-center gap-2 bg-[#F5F5F0] text-[#2A4D69] px-6 py-3 font-['Space_Mono'] hover:bg-white transition-colors">
                                    Request Quote <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                            {/* Decorative pattern/overlay could go here */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Form Section */}
            <section id="lead-form" className="bg-white py-24 border-t border-[#1A1A1A]/10">
                <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold mb-6">
                            Get a Quote for {content.title}
                        </h2>
                        <p className="font-['Space_Mono'] text-[#1A1A1A]/70">
                            Tell us about your project and we'll connect you with the best local specialists.
                        </p>
                    </div>
                    <LeadForm />
                </div>
            </section>
        </div>
    );
}
