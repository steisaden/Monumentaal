import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "17th Century Canal House Restoration",
      specialist: "Jan van der Meer",
      specialistId: 1,
      location: "Visstraat, Binnenstad",
      year: 2024,
      duration: "6 months",
      description: "Complete facade restoration using traditional lime mortar and knipvoeg techniques. This project involved careful removal of inappropriate cement-based repairs from the 1970s and replacement with historically accurate materials.",
      before: "https://images.unsplash.com/photo-1601576368385-58dcb3319b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGJ1aWxkaW5nJTIwcmVzdG9yYXRpb258ZW58MXx8fHwxNzcxNDE3MTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1664792692001-9fca2408a577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXRjaCUyMGhlcml0YWdlJTIwYXJjaGl0ZWN0dXJlJTIwZmFjYWRlfGVufDF8fHx8MTc3MTQxNzA3OHww&ixlib=rb-4.1.0&q=80&w=1080",
      techniques: ["Knipvoeg", "Lime mortar", "Brick consolidation", "Facade cleaning"]
    },
    {
      title: "Monumental Warehouse Roof Restoration",
      specialist: "Pieter Jansen",
      specialistId: 2,
      location: "Bastion Oranje",
      year: 2023,
      duration: "4 months",
      description: "Traditional clay tile roof replacement with modern waterproofing layers hidden beneath. All original ridge tiles were preserved and reinstated.",
      before: "https://images.unsplash.com/photo-1763045989502-e7b27274d484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mJTIwcmVzdG9yYXRpb24lMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc3MTQxNzA3OHww&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1548254689-2d7a62331d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWxlJTIwcm9vZiUyMHBhdHRlcm5zJTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzcxNDE3MTAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      techniques: ["Clay tile replacement", "Ridge preservation", "Gutter systems", "Waterproofing"]
    },
    {
      title: "Heritage Townhouse Painting",
      specialist: "Sophie Willems",
      specialistId: 4,
      location: "Hinthamerstraat",
      year: 2025,
      duration: "3 months",
      description: "Authentic paint research and application using linseed oil-based paints. Historical color analysis revealed the original 18th-century palette.",
      before: "https://images.unsplash.com/photo-1589955170741-9cd0b8827250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3J0YXIlMjBwb2ludGluZyUyMGJyaWNrd29ya3xlbnwxfHx8fDE3NzE0MTcxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1759307407460-154dd68c7215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGJ1aWxkaW5nJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzcxNDE3MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      techniques: ["Linseed oil paint", "Color research", "Window restoration", "Detail work"]
    }
  ];

  const currentProject = projects[selectedProject];

  return (
    <div className="bg-[#F5F5F0]">
      {/* Header */}
      <section className="py-24">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <h1
            className="font-['Cormorant_Garamond'] mb-6"
            style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A' }}
          >
            Project Showcase
          </h1>
          <p
            className="font-['Space_Mono'] text-[#1A1A1A]/70 max-w-3xl"
            style={{ fontSize: '15px', lineHeight: 1.8 }}
          >
            Explore completed heritage restoration projects by our certified specialists. Each project demonstrates the transformative power of authentic craftsmanship.
          </p>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="pb-24">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="bg-white border border-[#1A1A1A]/10 overflow-hidden">
            {/* Project Navigation */}
            <div className="flex items-center justify-between p-6 border-b border-[#1A1A1A]/10">
              <button
                onClick={() => setSelectedProject((selectedProject - 1 + projects.length) % projects.length)}
                className="p-3 hover:bg-[#E8E8E0] transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="font-['Space_Mono'] text-center" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Project {selectedProject + 1} of {projects.length}
              </div>
              <button
                onClick={() => setSelectedProject((selectedProject + 1) % projects.length)}
                className="p-3 hover:bg-[#E8E8E0] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Before/After Images Carousel */}
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent className="ml-0">
                <CarouselItem className="pl-0 md:basis-1/2">
                  <div className="relative">
                    <div className="absolute top-6 left-6 bg-white px-4 py-2 font-['Space_Mono'] z-10" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Before
                    </div>
                    <ImageWithFallback
                      src={currentProject.before}
                      alt={`${currentProject.title} - Before`}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-0 md:basis-1/2">
                  <div className="relative">
                    <div className="absolute top-6 left-6 bg-[#2A4D69] text-[#F5F5F0] px-4 py-2 font-['Space_Mono'] z-10" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      After
                    </div>
                    <ImageWithFallback
                      src={currentProject.after}
                      alt={`${currentProject.title} - After`}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>

            {/* Project Details */}
            <div className="p-12">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Info */}
                <div className="lg:col-span-2">
                  <h2 className="font-['Cormorant_Garamond'] mb-4" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.2 }}>
                    {currentProject.title}
                  </h2>
                  <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-8" style={{ fontSize: '15px', lineHeight: 1.8 }}>
                    {currentProject.description}
                  </p>

                  <div>
                    <h3 className="font-['Cormorant_Garamond'] mb-4" style={{ fontSize: '24px', fontWeight: 600 }}>
                      Techniques Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.techniques.map((technique, index) => (
                        <span
                          key={index}
                          className="font-['Space_Mono'] px-3 py-1 bg-[#E8E8E0] text-[#1A1A1A]"
                          style={{ fontSize: '12px' }}
                        >
                          {technique}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                  <div className="p-6 border border-[#1A1A1A]/10 bg-[#E8E8E0]">
                    <h4 className="font-['Space_Mono'] mb-4" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                      Project Details
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <div className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-1" style={{ fontSize: '11px', textTransform: 'uppercase' }}>
                          Specialist
                        </div>
                        <Link
                          to={`/experts/${currentProject.specialistId}`}
                          className="font-['Space_Mono'] text-[#2A4D69] hover:underline"
                          style={{ fontSize: '14px', fontWeight: 600 }}
                        >
                          {currentProject.specialist}
                        </Link>
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 text-[#2A4D69]" />
                        <div>
                          <div className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-1" style={{ fontSize: '11px', textTransform: 'uppercase' }}>
                            Location
                          </div>
                          <div className="font-['Space_Mono']" style={{ fontSize: '13px' }}>
                            {currentProject.location}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 mt-0.5 text-[#2A4D69]" />
                        <div>
                          <div className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-1" style={{ fontSize: '11px', textTransform: 'uppercase' }}>
                            Completed
                          </div>
                          <div className="font-['Space_Mono']" style={{ fontSize: '13px' }}>
                            {currentProject.year}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-1" style={{ fontSize: '11px', textTransform: 'uppercase' }}>
                          Duration
                        </div>
                        <div className="font-['Space_Mono']" style={{ fontSize: '13px' }}>
                          {currentProject.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/experts/${currentProject.specialistId}`}
                    className="block w-full text-center bg-[#2A4D69] text-[#F5F5F0] px-6 py-4 hover:bg-[#1A3A4F] transition-colors font-['Space_Mono']"
                    style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                  >
                    View Specialist
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Project Thumbnails */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(index)}
                className={`relative aspect-video overflow-hidden border-2 transition-all ${selectedProject === index ? 'border-[#2A4D69]' : 'border-[#1A1A1A]/10 hover:border-[#2A4D69]/50'
                  }`}
              >
                <ImageWithFallback
                  src={project.after}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 border-t border-[#1A1A1A]/10">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700, color: '#1A1A1A' }}>
            Start Your Heritage Project
          </h2>
          <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-8 max-w-2xl mx-auto" style={{ fontSize: '15px', lineHeight: 1.8 }}>
            Connect with the specialists who completed these transformative restorations.
          </p>
          <Link
            to="/directory"
            className="inline-flex items-center gap-2 bg-[#2A4D69] text-[#F5F5F0] px-8 py-4 hover:bg-[#1A3A4F] transition-colors font-['Space_Mono']"
            style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Browse Specialists
          </Link>
        </div>
      </section>
    </div>
  );
}
