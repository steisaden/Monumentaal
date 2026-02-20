import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Categories() {
  const categories = [
    {
      name: "Gevelrestauratie",
      description: "Expert restoration of historic facades and brickwork",
      count: 45,
      image: "https://images.unsplash.com/photo-1519292585351-6f2aeb34ce86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmljayUyMGZhY2FkZSUyMHJlc3RvcmF0aW9ufGVufDF8fHx8MTc3MTQxNzEwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Voegwerk", "Steenreparatie", "Gevelbescherming"]
    },
    {
      name: "Dakbedekking",
      description: "Traditional roofing with modern weather protection",
      count: 32,
      image: "https://images.unsplash.com/photo-1548254689-2d7a62331d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWxlJTIwcm9vZiUyMHBhdHRlcm5zJTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzcxNDE3MTAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Pannen", "Leien", "Zinken goten"]
    },
    {
      name: "Knipvoeg",
      description: "Specialized pointing techniques for heritage buildings",
      count: 28,
      image: "https://images.unsplash.com/photo-1589955170741-9cd0b8827250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3J0YXIlMjBwb2ludGluZyUyMGJyaWNrd29ya3xlbnwxfHx8fDE3NzE0MTcxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Kalkmortel", "Voegrestauratie", "Historische technieken"]
    },
    {
      name: "Monumentaal Schilderwerk",
      description: "Authentic painting with traditional materials",
      count: 38,
      image: "https://images.unsplash.com/photo-1759307407460-154dd68c7215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGJ1aWxkaW5nJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzcxNDE3MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Lijnzaadverf", "Kleurenonderzoek", "Raamrestauratie"]
    },
    {
      name: "Kozijnen & Ramen",
      description: "Window and frame restoration preserving original character",
      count: 24,
      image: "https://images.unsplash.com/photo-1567098406704-403809e60ca6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjB3aW5kb3clMjByZXN0b3JhdGlvbnxlbnwxfHx8fDE3NzEzMjU5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Houtrestauratie", "Dubbel glas", "Beslag"]
    },
    {
      name: "Natuursteen",
      description: "Stone masonry and conservation for historic structures",
      count: 19,
      image: "https://images.unsplash.com/photo-1756728584560-b1231ef4d088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMG1hc29ucnklMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc3MTQxNzEwNXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Mergel", "Zandsteen", "Steenconservering"]
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
            Specializations
          </h1>
          <p 
            className="font-['Space_Mono'] text-[#1A1A1A]/70 max-w-3xl"
            style={{ fontSize: '15px', lineHeight: 1.8 }}
          >
            Each category represents a distinct craft tradition. Our specialists are verified for both technical expertise and ethical business practices.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/directory?category=${encodeURIComponent(category.name)}`}
              className="group bg-white border border-[#1A1A1A]/10 hover:border-[#2A4D69] transition-all overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-['Space_Mono'] text-[#F5F5F0]/70 mb-2" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    {category.count} Certified Experts
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] text-[#F5F5F0]" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2 }}>
                    {category.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-4" style={{ fontSize: '13px', lineHeight: 1.7 }}>
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {category.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="font-['Space_Mono'] px-2 py-1 bg-[#E8E8E0] text-[#1A1A1A]"
                      style={{ fontSize: '11px' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[#2A4D69] font-['Space_Mono']" style={{ fontSize: '13px' }}>
                  View Specialists
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <p className="font-['Space_Mono'] mb-6 text-[#1A1A1A]/70" style={{ fontSize: '15px' }}>
            Not sure which service you need?
          </p>
          <Link
            to="/lead-form"
            className="inline-flex items-center gap-2 bg-[#2A4D69] text-[#F5F5F0] px-8 py-4 hover:bg-[#1A3A4F] transition-colors font-['Space_Mono']"
            style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Request Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
