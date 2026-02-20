import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { Filter, MapPin, Star, Shield, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ProfileModal } from "../components/ui/ProfileModal";

export default function Directory() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All", "Gevelrestauratie", "Dakbedekking", "Knipvoeg", "Monumentaal Schilderwerk", "Kozijnen & Ramen", "Natuursteen"];
  const locations = ["All", "Binnenstad", "Uilenburg", "Hinthamerpoort", "De Boschvelden", "Orthen"];

  const experts = [
    {
      id: 1,
      name: "Jan van der Meer",
      company: "Van der Meer Restauratie",
      specialization: "Gevelrestauratie",
      location: "Binnenstad",
      experience: 28,
      rating: 4.9,
      reviews: 47,
      certified: true,
      tags: ["Knipvoeg", "Voegwerk", "Steenreparatie"],
      description: "Specialized in monumental facades with traditional lime mortar techniques.",
      image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmF3aW5nfGVufDF8fHx8MTcyMjg3NjcyMHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      name: "Pieter Jansen",
      company: "Jansen Dakwerken",
      specialization: "Dakbedekking",
      location: "Uilenburg",
      experience: 35,
      rating: 5.0,
      reviews: 62,
      certified: true,
      tags: ["Pannen", "Leien", "Dakisolatie"],
      description: "Third-generation roofer with expertise in historic tile restoration.",
      image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxNDE3MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      name: "Maarten de Vries",
      company: "De Vries Voegwerken",
      specialization: "Knipvoeg",
      location: "Binnenstad",
      experience: 22,
      rating: 4.8,
      reviews: 38,
      certified: true,
      tags: ["Kalkmortel", "Historische technieken", "Voegrestauratie"],
      description: "Master craftsman in traditional pointing methods for heritage buildings.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzIxOTM3OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      name: "Sophie Willems",
      company: "Willems Schilders",
      specialization: "Monumentaal Schilderwerk",
      location: "Hinthamerpoort",
      experience: 19,
      rating: 4.9,
      reviews: 54,
      certified: true,
      tags: ["Lijnzaadverf", "Kleurenonderzoek", "Raamrestauratie"],
      description: "Expert in authentic paint research and application for historic buildings.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwxfHx8fDE3Mjg5MjMxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 5,
      name: "Erik Bakker",
      company: "Bakker Kozijnen",
      specialization: "Kozijnen & Ramen",
      location: "Orthen",
      experience: 31,
      rating: 4.7,
      reviews: 41,
      certified: true,
      tags: ["Houtrestauratie", "Dubbel glas", "Beslag"],
      description: "Specialist in window restoration preserving original character with modern efficiency.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R8ZW58MXx8fHwxNjk5MjI3MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 6,
      name: "Lucas van Dijk",
      company: "Van Dijk Natuursteen",
      specialization: "Natuursteen",
      location: "Binnenstad",
      experience: 26,
      rating: 5.0,
      reviews: 29,
      certified: true,
      tags: ["Mergel", "Zandsteen", "Steenconservering"],
      description: "Stone conservation expert with deep knowledge of regional materials.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW58ZW58MXx8fHwxNzA3NzQ4Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const filteredExperts = experts.filter(expert => {
    const matchesCategory = selectedCategory === "All" || expert.specialization === selectedCategory;
    const matchesLocation = selectedLocation === "All" || expert.location === selectedLocation;
    return matchesCategory && matchesLocation;
  });

  return (
    <div className="bg-[#F5F5F0] py-24">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="font-['Cormorant_Garamond'] mb-6"
            style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A' }}
          >
            Certified Specialists
          </h1>
          <p
            className="font-['Space_Mono'] text-[#1A1A1A]/70 max-w-3xl"
            style={{ fontSize: '15px', lineHeight: 1.8 }}
          >
            {filteredExperts.length} verified experts ready to help with your heritage project.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 mb-4 px-4 py-2 border border-[#1A1A1A]/20 font-['Space_Mono']"
            style={{ fontSize: '13px' }}
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>

          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white border border-[#1A1A1A]/10">
              {/* Category Filter */}
              <div>
                <label className="font-['Space_Mono'] block mb-3" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  Specialization
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-[#1A1A1A]/20 bg-[#F5F5F0] font-['Space_Mono'] focus:border-[#2A4D69] focus:outline-none"
                  style={{ fontSize: '14px' }}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="font-['Space_Mono'] block mb-3" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  Neighborhood
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-[#1A1A1A]/20 bg-[#F5F5F0] font-['Space_Mono'] focus:border-[#2A4D69] focus:outline-none"
                  style={{ fontSize: '14px' }}
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Expert Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredExperts.map((expert) => (
            <ProfileModal
              key={expert.id}
              expert={expert}
              trigger={
                <button
                  className="block w-full text-left group bg-white border border-[#1A1A1A]/10 hover:border-[#2A4D69] transition-all overflow-hidden"
                >
                  <div className="grid md:grid-cols-5 gap-6 p-6">
                    {/* Image */}
                    <div className="md:col-span-2">
                      <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E8E0]">
                        <ImageWithFallback
                          src={expert.image}
                          alt={expert.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {expert.certified && (
                          <div className="absolute top-4 right-4 bg-[#2A4D69] text-[#F5F5F0] p-2">
                            <Shield className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-['Cormorant_Garamond']" style={{ fontSize: '28px', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.2 }}>
                              {expert.name}
                            </h3>
                            <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mt-1" style={{ fontSize: '13px' }}>
                              {expert.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-[#2A4D69] text-[#2A4D69]" />
                            <span className="font-['Space_Mono']" style={{ fontSize: '14px', fontWeight: 600 }}>
                              {expert.rating}
                            </span>
                            <span className="font-['Space_Mono'] text-[#1A1A1A]/50" style={{ fontSize: '13px' }}>
                              ({expert.reviews})
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-[#1A1A1A]/70">
                            <MapPin className="w-4 h-4" />
                            <span className="font-['Space_Mono']" style={{ fontSize: '13px' }}>
                              {expert.location}
                            </span>
                          </div>
                        </div>

                        <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-4" style={{ fontSize: '13px', lineHeight: 1.7 }}>
                          {expert.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {expert.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="font-['Space_Mono'] px-2 py-1 bg-[#E8E8E0] text-[#1A1A1A]"
                              style={{ fontSize: '11px' }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-[#1A1A1A]/10">
                        <span className="font-['Space_Mono'] text-[#1A1A1A]/70" style={{ fontSize: '13px' }}>
                          {expert.experience} years experience
                        </span>
                        <div className="flex items-center gap-2 text-[#2A4D69] font-['Space_Mono']" style={{ fontSize: '13px' }}>
                          View Profile
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              }
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredExperts.length === 0 && (
          <div className="text-center py-24">
            <p className="font-['Cormorant_Garamond'] mb-4" style={{ fontSize: '32px', fontWeight: 600, color: '#1A1A1A' }}>
              No specialists found
            </p>
            <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-8" style={{ fontSize: '14px' }}>
              Try adjusting your filters or search criteria
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedLocation("All");
              }}
              className="inline-flex items-center gap-2 border border-[#1A1A1A]/20 px-6 py-3 hover:border-[#2A4D69] hover:text-[#2A4D69] transition-colors font-['Space_Mono']"
              style={{ fontSize: '13px' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
