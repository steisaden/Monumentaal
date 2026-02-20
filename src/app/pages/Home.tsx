import { Link } from "react-router";
import { Search, ArrowRight, Shield, Users, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const stats = [
    { value: "150+", label: "Certified Specialists", icon: Users },
    { value: "98%", label: "Client Satisfaction", icon: Award },
    { value: "25yr", label: "Average Experience", icon: Shield },
  ];

  const services = [
    { name: "Gevelrestauratie", count: "45 experts" },
    { name: "Dakbedekking", count: "32 experts" },
    { name: "Knipvoeg", count: "28 experts" },
    { name: "Schilderwerk", count: "38 experts" },
  ];

  return (
    <div className="bg-[#F5F5F0]">
      {/* Hero Section */}
      <section className="max-w-[1800px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h1 
              className="font-['Cormorant_Garamond'] mb-8" 
              style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A' }}
            >
              Heritage Craftspeople for Modern Times
            </h1>
            <p 
              className="font-['Space_Mono'] mb-12 text-[#1A1A1A]/70"
              style={{ fontSize: '15px', lineHeight: 1.8 }}
            >
              Discover verified specialists for monumental restoration in 's-Hertogenbosch. 
              Each expert vetted for traditional techniques and modern reliability.
            </p>

            {/* AI Search Input */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Describe your project... (e.g., 'Knipvoeg restoration needed')"
                className="w-full px-8 py-6 bg-white border border-[#1A1A1A]/20 focus:border-[#2A4D69] focus:outline-none transition-colors font-['Space_Mono']"
                style={{ fontSize: '14px' }}
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#2A4D69] text-[#F5F5F0] px-6 py-3 hover:bg-[#1A3A4F] transition-colors flex items-center gap-2">
                <Search className="w-4 h-4" />
                <span className="font-['Space_Mono']" style={{ fontSize: '13px' }}>Search</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <Link
                  key={service.name}
                  to="/categories"
                  className="px-4 py-2 border border-[#1A1A1A]/20 hover:border-[#2A4D69] hover:text-[#2A4D69] transition-colors font-['Space_Mono']"
                  style={{ fontSize: '12px' }}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764535729870-443a0c25a008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGNhdGhlZHJhbCUyMHN0b25lJTIwcmVzdG9yYXRpb258ZW58MXx8fHwxNzcxNDE3MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Sint-Janskathedraal restoration"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 border border-[#1A1A1A]/10">
              <p className="font-['Cormorant_Garamond']" style={{ fontSize: '24px', fontWeight: 600, color: '#1A1A1A' }}>
                Inspired by Sint-Janskathedraal
              </p>
              <p className="font-['Space_Mono'] mt-2 text-[#1A1A1A]/70" style={{ fontSize: '13px' }}>
                The same level of craftsmanship for your historic home
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-y border-[#1A1A1A]/10">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-[#2A4D69]/10">
                  <stat.icon className="w-6 h-6 text-[#2A4D69]" />
                </div>
                <div className="font-['Cormorant_Garamond']" style={{ fontSize: '56px', fontWeight: 700, color: '#1A1A1A', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div className="font-['Space_Mono'] mt-2 text-[#1A1A1A]/70" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1800px] mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.2 }}>
            Ready to Start Your Heritage Project?
          </h2>
          <p className="font-['Space_Mono'] mb-12 text-[#1A1A1A]/70 max-w-2xl mx-auto" style={{ fontSize: '15px', lineHeight: 1.8 }}>
            Browse our verified directory or submit your project details for personalized specialist recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/directory"
              className="inline-flex items-center justify-center gap-2 bg-[#2A4D69] text-[#F5F5F0] px-8 py-4 hover:bg-[#1A3A4F] transition-colors font-['Space_Mono']"
              style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
            >
              Browse Experts
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/lead-form"
              className="inline-flex items-center justify-center gap-2 bg-white border border-[#1A1A1A]/20 text-[#1A1A1A] px-8 py-4 hover:border-[#2A4D69] hover:text-[#2A4D69] transition-colors font-['Space_Mono']"
              style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
