import { Link } from "react-router";
import { MapPin, TrendingUp, Users, Building } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Neighborhoods() {
  const neighborhoods = [
    {
      name: "Binnenstad",
      description: "Historic city center with numerous monumental buildings dating back to the medieval period.",
      specialists: 42,
      projects: 156,
      heritage: "89% monumental status",
      image: "https://images.unsplash.com/photo-1664792692001-9fca2408a577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXRjaCUyMGhlcml0YWdlJTIwYXJjaGl0ZWN0dXJlJTIwZmFjYWRlfGVufDF8fHx8MTc3MTQxNzA3OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Uilenburg",
      description: "A charming district featuring 19th-century architecture and traditional Dutch building techniques.",
      specialists: 28,
      projects: 94,
      heritage: "67% monumental status",
      image: "https://images.unsplash.com/photo-1519292585351-6f2aeb34ce86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmljayUyMGZhY2FkZSUyMHJlc3RvcmF0aW9ufGVufDF8fHx8MTc3MTQxNzEwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Hinthamerpoort",
      description: "Gateway neighborhood with a mix of heritage and contemporary restoration projects.",
      specialists: 35,
      projects: 118,
      heritage: "54% monumental status",
      image: "https://images.unsplash.com/photo-1589955170741-9cd0b8827250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3J0YXIlMjBwb2ludGluZyUyMGJyaWNrd29ya3xlbnwxfHx8fDE3NzE0MTcxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="bg-[#F5F5F0] py-24">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <h1 
            className="font-['Cormorant_Garamond'] mb-6" 
            style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A' }}
          >
            Neighborhood Guides
          </h1>
          <p 
            className="font-['Space_Mono'] text-[#1A1A1A]/70 max-w-3xl"
            style={{ fontSize: '15px', lineHeight: 1.8 }}
          >
            Explore heritage specialists organized by neighborhood. Each area has unique architectural characteristics requiring specialized knowledge.
          </p>
        </div>

        {/* Neighborhoods Grid */}
        <div className="space-y-16">
          {neighborhoods.map((neighborhood, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative h-[500px] overflow-hidden">
                  <ImageWithFallback
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent"></div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-[#2A4D69]" />
                  <span className="font-['Space_Mono'] text-[#2A4D69]" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    's-Hertogenbosch
                  </span>
                </div>

                <h2 className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A' }}>
                  {neighborhood.name}
                </h2>

                <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-8" style={{ fontSize: '15px', lineHeight: 1.8 }}>
                  {neighborhood.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8 p-6 border border-[#1A1A1A]/10 bg-white">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 mb-3 bg-[#2A4D69]/10">
                      <Users className="w-5 h-5 text-[#2A4D69]" />
                    </div>
                    <div className="font-['Cormorant_Garamond']" style={{ fontSize: '32px', fontWeight: 700, color: '#1A1A1A', lineHeight: 1 }}>
                      {neighborhood.specialists}
                    </div>
                    <div className="font-['Space_Mono'] text-[#1A1A1A]/70 mt-1" style={{ fontSize: '11px', textTransform: 'uppercase' }}>
                      Specialists
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center w-10 h-10 mb-3 bg-[#2A4D69]/10">
                      <Building className="w-5 h-5 text-[#2A4D69]" />
                    </div>
                    <div className="font-['Cormorant_Garamond']" style={{ fontSize: '32px', fontWeight: 700, color: '#1A1A1A', lineHeight: 1 }}>
                      {neighborhood.projects}
                    </div>
                    <div className="font-['Space_Mono'] text-[#1A1A1A]/70 mt-1" style={{ fontSize: '11px', textTransform: 'uppercase' }}>
                      Projects
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center w-10 h-10 mb-3 bg-[#2A4D69]/10">
                      <TrendingUp className="w-5 h-5 text-[#2A4D69]" />
                    </div>
                    <div className="font-['Cormorant_Garamond']" style={{ fontSize: '32px', fontWeight: 700, color: '#1A1A1A', lineHeight: 1 }}>
                      {neighborhood.heritage.split('%')[0]}%
                    </div>
                    <div className="font-['Space_Mono'] text-[#1A1A1A]/70 mt-1" style={{ fontSize: '11px', textTransform: 'uppercase' }}>
                      Heritage
                    </div>
                  </div>
                </div>

                <Link
                  to={`/directory?location=${encodeURIComponent(neighborhood.name)}`}
                  className="inline-flex items-center gap-2 bg-[#2A4D69] text-[#F5F5F0] px-8 py-4 hover:bg-[#1A3A4F] transition-colors font-['Space_Mono']"
                  style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                >
                  View Specialists
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
