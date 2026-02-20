import { useParams, Link } from "react-router";
import { MapPin, Star, Shield, Phone, Mail, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function ExpertProfile() {
  const { id } = useParams();

  // Mock expert data - in real app would fetch by ID
  const expert = {
    id: 1,
    name: "Jan van der Meer",
    company: "Van der Meer Restauratie",
    specialization: "Gevelrestauratie",
    location: "Binnenstad, 's-Hertogenbosch",
    experience: 28,
    rating: 4.9,
    reviews: 47,
    certified: true,
    phone: "+31 73 123 4567",
    email: "info@vandermeer-restauratie.nl",
    tags: ["Knipvoeg", "Voegwerk", "Steenreparatie", "Monumentaal"],
    bio: "Jan van der Meer is a third-generation master craftsman specializing in monumental facade restoration. With 28 years of experience, he has worked on over 200 heritage buildings in 's-Hertogenbosch, including several projects in the vicinity of Sint-Janskathedraal. His expertise in traditional lime mortar techniques and knipvoeg has made him a trusted name among heritage conservationists.",
    image: "https://images.unsplash.com/photo-1762712393685-fbe773b97605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjcmFmdHNtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzEzMzUzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    certifications: [
      "Monumentenwacht Nederland Certified",
      "Traditional Lime Mortar Specialist",
      "Heritage Building Conservation Diploma",
      "VCA Safety Certification"
    ],
    services: [
      "Facade restoration and repair",
      "Traditional knipvoeg pointing",
      "Lime mortar application",
      "Stone conservation",
      "Brick replacement",
      "Facade cleaning and protection"
    ],
    projects: [
      {
        title: "Historic Canal House Restoration",
        location: "Visstraat, Binnenstad",
        year: 2024,
        description: "Complete facade restoration using traditional materials and techniques.",
        image: "https://images.unsplash.com/photo-1664792692001-9fca2408a577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXRjaCUyMGhlcml0YWdlJTIwYXJjaGl0ZWN0dXJlJTIwZmFjYWRlfGVufDF8fHx8MTc3MTQxNzA3OHww&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        title: "17th Century Townhouse",
        location: "Hinthamerstraat",
        year: 2023,
        description: "Knipvoeg restoration with custom-matched lime mortar blend.",
        image: "https://images.unsplash.com/photo-1601576368385-58dcb3319b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGJ1aWxkaW5nJTIwcmVzdG9yYXRpb258ZW58MXx8fHwxNzcxNDE3MTc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        title: "Monumental Warehouse",
        location: "Bastion Oranje",
        year: 2023,
        description: "Structural masonry repair and facade consolidation.",
        image: "https://images.unsplash.com/photo-1770281380343-d14cf5a89c6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGJ1aWxkaW5nJTIwZGV0YWlsJTIwd29ya3xlbnwxfHx8fDE3NzE0MTcxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ],
    reviews: [
      {
        author: "Maria Hendriksen",
        rating: 5,
        date: "January 2026",
        text: "Jan restored our 18th-century facade with incredible attention to detail. His knowledge of historical techniques is unmatched. Highly recommended!"
      },
      {
        author: "Henk Vermeer",
        rating: 5,
        date: "December 2025",
        text: "Professional, reliable, and passionate about heritage conservation. The knipvoeg work on our monument exceeded all expectations."
      },
      {
        author: "Lisa de Jong",
        rating: 4.8,
        date: "November 2025",
        text: "Excellent craftsmanship and clear communication throughout the project. Very pleased with the results."
      }
    ]
  };

  return (
    <div className="bg-[#F5F5F0]">
      {/* Hero Section */}
      <section className="bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#E8E8E0]">
                <ImageWithFallback
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
                {expert.certified && (
                  <div className="absolute top-6 right-6 bg-[#2A4D69] text-[#F5F5F0] p-3">
                    <Shield className="w-6 h-6" />
                  </div>
                )}
              </div>

              {/* Technical Specs Box */}
              <div className="mt-6 p-6 border border-[#1A1A1A]/20 bg-[#E8E8E0]">
                <h4 className="font-['Space_Mono'] mb-4" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  Technical Specs
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 mt-0.5 text-[#2A4D69]" />
                    <div>
                      <div className="font-['Space_Mono']" style={{ fontSize: '13px', fontWeight: 600 }}>
                        {expert.experience} Years
                      </div>
                      <div className="font-['Space_Mono'] text-[#1A1A1A]/70" style={{ fontSize: '11px' }}>
                        Experience
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-[#2A4D69]" />
                    <div>
                      <div className="font-['Space_Mono']" style={{ fontSize: '13px', fontWeight: 600 }}>
                        {expert.location}
                      </div>
                      <div className="font-['Space_Mono'] text-[#1A1A1A]/70" style={{ fontSize: '11px' }}>
                        Service Area
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 mt-0.5 text-[#2A4D69]" />
                    <div>
                      <div className="font-['Space_Mono']" style={{ fontSize: '13px', fontWeight: 600 }}>
                        {expert.rating} / 5.0
                      </div>
                      <div className="font-['Space_Mono'] text-[#1A1A1A]/70" style={{ fontSize: '11px' }}>
                        {expert.reviews} Reviews
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="lg:col-span-2">
              <h1 className="font-['Cormorant_Garamond'] mb-2" style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A' }}>
                {expert.name}
              </h1>
              <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-2" style={{ fontSize: '16px' }}>
                {expert.company}
              </p>
              <p className="font-['Space_Mono'] text-[#2A4D69] mb-8" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {expert.specialization}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {expert.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="font-['Space_Mono'] px-3 py-1 border border-[#1A1A1A]/20 text-[#1A1A1A]"
                    style={{ fontSize: '12px' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bio */}
              <div className="mb-8">
                <h3 className="font-['Cormorant_Garamond'] mb-4" style={{ fontSize: '24px', fontWeight: 600 }}>
                  About
                </h3>
                <p className="font-['Space_Mono'] text-[#1A1A1A]/70" style={{ fontSize: '14px', lineHeight: 1.8 }}>
                  {expert.bio}
                </p>
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h3 className="font-['Cormorant_Garamond'] mb-4" style={{ fontSize: '24px', fontWeight: 600 }}>
                  Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {expert.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-[#2A4D69] flex-shrink-0" />
                      <span className="font-['Space_Mono']" style={{ fontSize: '13px' }}>
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="font-['Cormorant_Garamond'] mb-4" style={{ fontSize: '24px', fontWeight: 600 }}>
                  Services Offered
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {expert.services.map((service, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 text-[#2A4D69] flex-shrink-0" />
                      <span className="font-['Space_Mono']" style={{ fontSize: '13px' }}>
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA Bar */}
      <div className="sticky top-20 z-40 bg-[#2A4D69] text-[#F5F5F0] border-b border-[#F5F5F0]/20">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <a href={`tel:${expert.phone}`} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <Phone className="w-4 h-4" />
                <span className="font-['Space_Mono']" style={{ fontSize: '13px' }}>{expert.phone}</span>
              </a>
              <a href={`mailto:${expert.email}`} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <Mail className="w-4 h-4" />
                <span className="font-['Space_Mono']" style={{ fontSize: '13px' }}>{expert.email}</span>
              </a>
            </div>
            <Link
              to="/lead-form"
              className="inline-flex items-center gap-2 bg-[#F5F5F0] text-[#1A1A1A] px-6 py-2 hover:bg-white transition-colors font-['Space_Mono']"
              style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
            >
              Request Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Portfolio Gallery */}
      <section className="py-24">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <h2 className="font-['Cormorant_Garamond'] mb-12" style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700, color: '#1A1A1A' }}>
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expert.projects.map((project, index) => (
              <div key={index} className="bg-white border border-[#1A1A1A]/10 overflow-hidden hover:border-[#2A4D69] transition-colors">
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="font-['Space_Mono'] text-[#1A1A1A]/50 mb-2" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    {project.year} • {project.location}
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] mb-3" style={{ fontSize: '24px', fontWeight: 600, color: '#1A1A1A' }}>
                    {project.title}
                  </h3>
                  <p className="font-['Space_Mono'] text-[#1A1A1A]/70" style={{ fontSize: '13px', lineHeight: 1.7 }}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-white py-24 border-t border-[#1A1A1A]/10">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <h2 className="font-['Cormorant_Garamond'] mb-12" style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700, color: '#1A1A1A' }}>
            Client Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expert.reviews.map((review, index) => (
              <div key={index} className="p-6 border border-[#1A1A1A]/10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'fill-[#2A4D69] text-[#2A4D69]' : 'text-[#1A1A1A]/20'}`}
                    />
                  ))}
                </div>
                <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-4" style={{ fontSize: '13px', lineHeight: 1.7 }}>
                  "{review.text}"
                </p>
                <div>
                  <div className="font-['Space_Mono']" style={{ fontSize: '13px', fontWeight: 600 }}>
                    {review.author}
                  </div>
                  <div className="font-['Space_Mono'] text-[#1A1A1A]/50" style={{ fontSize: '11px' }}>
                    {review.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
