import { Shield, Search, Award, Users, CheckCircle, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Trust() {
  const verificationSteps = [
    {
      icon: Search,
      title: "Initial Screening",
      description: "We verify business registration, insurance, and professional certifications."
    },
    {
      icon: Award,
      title: "Portfolio Review",
      description: "Assessment of past heritage projects and technical expertise in traditional methods."
    },
    {
      icon: Users,
      title: "Reference Checks",
      description: "Direct contact with previous clients to verify quality and reliability."
    },
    {
      icon: CheckCircle,
      title: "Ongoing Monitoring",
      description: "Continuous review of client feedback and project outcomes."
    }
  ];

  const standards = [
    {
      title: "Technical Expertise",
      items: [
        "Minimum 15 years experience in heritage work",
        "Knowledge of traditional techniques (lime mortar, knipvoeg, etc.)",
        "Understanding of monumental building regulations",
        "Proven track record with period-appropriate materials"
      ]
    },
    {
      title: "Business Ethics",
      items: [
        "Valid business registration and VAT number",
        "Comprehensive liability insurance",
        "Transparent pricing and contract terms",
        "Professional communication standards"
      ]
    },
    {
      title: "Client Satisfaction",
      items: [
        "Minimum 4.5-star average rating",
        "Verified client testimonials",
        "Documented project completion rate",
        "Responsive to client inquiries"
      ]
    }
  ];

  return (
    <div className="bg-[#F5F5F0]">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2A4D69] text-[#F5F5F0] mb-8">
              <Shield className="w-10 h-10" />
            </div>
            <h1 
              className="font-['Cormorant_Garamond'] mb-6" 
              style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A' }}
            >
              Our Verification Process
            </h1>
            <p 
              className="font-['Space_Mono'] text-[#1A1A1A]/70 max-w-3xl mx-auto"
              style={{ fontSize: '15px', lineHeight: 1.8 }}
            >
              Every specialist in our directory undergoes rigorous screening to ensure they meet the highest standards for heritage restoration work. Your monumental building deserves nothing less than certified expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Verification Steps */}
      <section className="bg-white py-24 border-y border-[#1A1A1A]/10">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <h2 className="font-['Cormorant_Garamond'] text-center mb-16" style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700, color: '#1A1A1A' }}>
            Four-Stage Verification
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {verificationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2A4D69]/10 mb-6">
                  <step.icon className="w-8 h-8 text-[#2A4D69]" />
                </div>
                <div className="font-['Space_Mono'] text-[#1A1A1A]/50 mb-3" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  Step {index + 1}
                </div>
                <h3 className="font-['Cormorant_Garamond'] mb-4" style={{ fontSize: '24px', fontWeight: 600, color: '#1A1A1A' }}>
                  {step.title}
                </h3>
                <p className="font-['Space_Mono'] text-[#1A1A1A]/70" style={{ fontSize: '13px', lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Grid */}
      <section className="py-24">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <h2 className="font-['Cormorant_Garamond'] text-center mb-16" style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700, color: '#1A1A1A' }}>
            Certification Standards
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white p-8 border border-[#1A1A1A]/10">
                <h3 className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: '28px', fontWeight: 600, color: '#1A1A1A' }}>
                  {standard.title}
                </h3>
                <div className="space-y-4">
                  {standard.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2A4D69] flex-shrink-0 mt-0.5" />
                      <span className="font-['Space_Mono'] text-[#1A1A1A]/70" style={{ fontSize: '13px', lineHeight: 1.7 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-24 border-t border-[#1A1A1A]/10">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700, color: '#1A1A1A' }}>
                What the Badge Means
              </h2>
              <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-8" style={{ fontSize: '15px', lineHeight: 1.8 }}>
                When you see the Monumentaal Certified badge, you can trust that the specialist has been thoroughly vetted for both technical skill and professional conduct. We only certify craftspeople who demonstrate exceptional expertise in heritage restoration.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#2A4D69]/10 flex-shrink-0">
                    <Star className="w-6 h-6 text-[#2A4D69]" />
                  </div>
                  <div>
                    <h4 className="font-['Cormorant_Garamond'] mb-2" style={{ fontSize: '20px', fontWeight: 600 }}>
                      Verified Reviews
                    </h4>
                    <p className="font-['Space_Mono'] text-[#1A1A1A]/70" style={{ fontSize: '13px', lineHeight: 1.7 }}>
                      All reviews are verified from actual project completions, not anonymous ratings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#2A4D69]/10 flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#2A4D69]" />
                  </div>
                  <div>
                    <h4 className="font-['Cormorant_Garamond'] mb-2" style={{ fontSize: '20px', fontWeight: 600 }}>
                      Insurance Protection
                    </h4>
                    <p className="font-['Space_Mono'] text-[#1A1A1A]/70" style={{ fontSize: '13px', lineHeight: 1.7 }}>
                      Every specialist carries comprehensive liability insurance for heritage work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#2A4D69]/10 flex-shrink-0">
                    <Award className="w-6 h-6 text-[#2A4D69]" />
                  </div>
                  <div>
                    <h4 className="font-['Cormorant_Garamond'] mb-2" style={{ fontSize: '20px', fontWeight: 600 }}>
                      Continuous Monitoring
                    </h4>
                    <p className="font-['Space_Mono'] text-[#1A1A1A]/70" style={{ fontSize: '13px', lineHeight: 1.7 }}>
                      We regularly review performance and client satisfaction to maintain standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[600px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764535729870-443a0c25a008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGNhdGhlZHJhbCUyMHN0b25lJTIwcmVzdG9yYXRpb258ZW58MXx8fHwxNzcxNDE3MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Heritage craftmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700, color: '#1A1A1A' }}>
              Work with Confidence
            </h2>
            <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-8" style={{ fontSize: '15px', lineHeight: 1.8 }}>
              Browse our certified directory knowing every specialist has been rigorously vetted.
            </p>
            <a
              href="/directory"
              className="inline-flex items-center gap-2 bg-[#2A4D69] text-[#F5F5F0] px-8 py-4 hover:bg-[#1A3A4F] transition-colors font-['Space_Mono']"
              style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
            >
              View Certified Specialists
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
