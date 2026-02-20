import { Link, useSearchParams } from "react-router";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function GetListedSuccess() {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");

    return (
        <div className="bg-[#F5F5F0] min-h-screen flex items-center justify-center py-24">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2A4D69] text-[#F5F5F0] mb-8">
                    <CheckCircle className="w-10 h-10" />
                </div>
                <h1
                    className="font-['Cormorant_Garamond'] mb-6"
                    style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A' }}
                >
                    Application Received
                </h1>
                <p
                    className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-8"
                    style={{ fontSize: '15px', lineHeight: 1.8 }}
                >
                    Thank you for joining Monumentaal. Your payment was successful{sessionId ? '' : ''}.
                    <br className="hidden sm:block" />
                    Our team is now verifying your credentials and insurance.
                </p>

                <div className="bg-white border border-[#1A1A1A]/10 p-6 mb-12 max-w-md mx-auto">
                    <h3 className="font-['Cormorant_Garamond'] text-xl font-bold mb-2">Next Steps</h3>
                    <ul className="text-left space-y-3 font-['Space_Mono'] text-sm text-[#1A1A1A]/70">
                        <li className="flex items-start gap-3">
                            <span className="bg-[#2A4D69] text-white w-5 h-5 flex items-center justify-center text-xs rounded-full flex-shrink-0 mt-0.5">1</span>
                            <span>We review your portfolio (2-3 business days).</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-[#2A4D69] text-white w-5 h-5 flex items-center justify-center text-xs rounded-full flex-shrink-0 mt-0.5">2</span>
                            <span>You receive an onboarding email to set up your profile.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-[#2A4D69] text-white w-5 h-5 flex items-center justify-center text-xs rounded-full flex-shrink-0 mt-0.5">3</span>
                            <span>Your listing goes live in the directory.</span>
                        </li>
                    </ul>
                </div>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-[#2A4D69] text-[#F5F5F0] px-8 py-4 hover:bg-[#1A3A4F] transition-colors font-['Space_Mono']"
                    style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                >
                    Return Home
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
