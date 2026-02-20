import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router";

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    propertyType: "",
    timeline: "",
    description: "",
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setStep(4); // Success state
  };

  const services = [
    "Gevelrestauratie",
    "Dakbedekking",
    "Knipvoeg",
    "Monumentaal Schilderwerk",
    "Kozijnen & Ramen",
    "Natuursteen",
    "Not sure yet"
  ];

  const propertyTypes = [
    "Monumental Building",
    "Historic Townhouse",
    "Canal House",
    "19th Century Villa",
    "Other Heritage Property"
  ];

  const timelines = [
    "Urgent (within 1 month)",
    "Soon (1-3 months)",
    "Planning phase (3-6 months)",
    "Future project (6+ months)"
  ];

  if (step === 4) {
    return (
      <div className="bg-[#F5F5F0] min-h-screen flex items-center justify-center py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2A4D69] text-[#F5F5F0] mb-8">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h1 className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A' }}>
            Quote Request Submitted
          </h1>
          <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-12" style={{ fontSize: '15px', lineHeight: 1.8 }}>
            Thank you for your request. Our verified specialists will review your project and contact you within 24 hours with personalized recommendations.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#2A4D69] text-[#F5F5F0] px-8 py-4 hover:bg-[#1A3A4F] transition-colors font-['Space_Mono']"
            style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F5F0] py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Progress Bar */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`flex-1 h-1 ${num <= step ? 'bg-[#2A4D69]' : 'bg-[#1A1A1A]/10'} ${num !== 3 ? 'mr-2' : ''}`}
              />
            ))}
          </div>
          <div className="flex items-center justify-between">
            {['Service Details', 'Project Info', 'Your Contact'].map((label, index) => (
              <div
                key={index}
                className={`font-['Space_Mono'] ${index + 1 <= step ? 'text-[#2A4D69]' : 'text-[#1A1A1A]/50'}`}
                style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Service */}
          {step === 1 && (
            <div>
              <h1 className="font-['Cormorant_Garamond'] mb-4" style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A' }}>
                What service do you need?
              </h1>
              <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-12" style={{ fontSize: '15px', lineHeight: 1.8 }}>
                Select the type of heritage restoration work you require.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setFormData({ ...formData, service })}
                    className={`p-6 text-left border transition-all ${
                      formData.service === service
                        ? 'border-[#2A4D69] bg-[#2A4D69]/5'
                        : 'border-[#1A1A1A]/20 bg-white hover:border-[#2A4D69]/50'
                    }`}
                  >
                    <span className="font-['Space_Mono']" style={{ fontSize: '14px' }}>
                      {service}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
          {step === 2 && (
            <div>
              <h1 className="font-['Cormorant_Garamond'] mb-4" style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A' }}>
                Tell us about your project
              </h1>
              <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-12" style={{ fontSize: '15px', lineHeight: 1.8 }}>
                Help us match you with the right specialist.
              </p>

              <div className="space-y-8">
                <div>
                  <label className="font-['Space_Mono'] block mb-3" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Property Type
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {propertyTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, propertyType: type })}
                        className={`p-4 text-left border transition-all ${
                          formData.propertyType === type
                            ? 'border-[#2A4D69] bg-[#2A4D69]/5'
                            : 'border-[#1A1A1A]/20 bg-white hover:border-[#2A4D69]/50'
                        }`}
                      >
                        <span className="font-['Space_Mono']" style={{ fontSize: '14px' }}>
                          {type}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-['Space_Mono'] block mb-3" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Timeline
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {timelines.map((timeline) => (
                      <button
                        key={timeline}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline })}
                        className={`p-4 text-left border transition-all ${
                          formData.timeline === timeline
                            ? 'border-[#2A4D69] bg-[#2A4D69]/5'
                            : 'border-[#1A1A1A]/20 bg-white hover:border-[#2A4D69]/50'
                        }`}
                      >
                        <span className="font-['Space_Mono']" style={{ fontSize: '14px' }}>
                          {timeline}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-['Space_Mono'] block mb-3" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Project Description (Optional)
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your project in detail..."
                    rows={6}
                    className="w-full px-6 py-4 border border-[#1A1A1A]/20 bg-white font-['Space_Mono'] focus:border-[#2A4D69] focus:outline-none"
                    style={{ fontSize: '14px' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact */}
          {step === 3 && (
            <div>
              <h1 className="font-['Cormorant_Garamond'] mb-4" style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A' }}>
                Your contact details
              </h1>
              <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-12" style={{ fontSize: '15px', lineHeight: 1.8 }}>
                We'll use this information to connect you with specialists.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="font-['Space_Mono'] block mb-3" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 border border-[#1A1A1A]/20 bg-white font-['Space_Mono'] focus:border-[#2A4D69] focus:outline-none"
                    style={{ fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label className="font-['Space_Mono'] block mb-3" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 border border-[#1A1A1A]/20 bg-white font-['Space_Mono'] focus:border-[#2A4D69] focus:outline-none"
                    style={{ fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label className="font-['Space_Mono'] block mb-3" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-6 py-4 border border-[#1A1A1A]/20 bg-white font-['Space_Mono'] focus:border-[#2A4D69] focus:outline-none"
                    style={{ fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label className="font-['Space_Mono'] block mb-3" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Property Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="'s-Hertogenbosch"
                    className="w-full px-6 py-4 border border-[#1A1A1A]/20 bg-white font-['Space_Mono'] focus:border-[#2A4D69] focus:outline-none"
                    style={{ fontSize: '14px' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-12 pt-12 border-t border-[#1A1A1A]/10">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-2 border border-[#1A1A1A]/20 px-6 py-4 hover:border-[#2A4D69] hover:text-[#2A4D69] transition-colors font-['Space_Mono']"
                style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={step === 1 && !formData.service}
                className="flex items-center gap-2 bg-[#2A4D69] text-[#F5F5F0] px-8 py-4 hover:bg-[#1A3A4F] transition-colors font-['Space_Mono'] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#2A4D69] text-[#F5F5F0] px-8 py-4 hover:bg-[#1A3A4F] transition-colors font-['Space_Mono']"
                style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
              >
                Submit Request
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
