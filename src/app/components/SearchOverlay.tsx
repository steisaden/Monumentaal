import { X, Search, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const popularSearches = [
    "Knipvoeg restoration",
    "Facade repair",
    "Roof tile replacement",
    "Window restoration",
    "Stone conservation",
    "Heritage painting"
  ];

  const categories = [
    { name: "Gevelrestauratie", count: 45 },
    { name: "Dakbedekking", count: 32 },
    { name: "Knipvoeg", count: 28 },
    { name: "Monumentaal Schilderwerk", count: 38 },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#1A1A1A]/95 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-6 py-12 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-['Cormorant_Garamond'] text-[#F5F5F0]" style={{ fontSize: '36px', fontWeight: 700 }}>
            Search Monumentaal
          </h2>
          <button
            onClick={onClose}
            className="p-3 text-[#F5F5F0] hover:bg-[#F5F5F0]/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative mb-12">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for specialists, services, or neighborhoods..."
            autoFocus
            className="w-full px-8 py-6 bg-[#F5F5F0] border-2 border-[#F5F5F0] focus:border-[#2A4D69] focus:outline-none font-['Space_Mono'] text-[#1A1A1A]"
            style={{ fontSize: '18px' }}
          />
          <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#1A1A1A]/50" />
        </div>

        {/* Quick Links */}
        <div className="flex-1 overflow-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Popular Searches */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-[#2A4D69]" />
                <h3 className="font-['Space_Mono'] text-[#F5F5F0]" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  Popular Searches
                </h3>
              </div>
              <div className="space-y-3">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(search);
                      onClose();
                    }}
                    className="block w-full text-left px-4 py-3 bg-[#F5F5F0]/10 hover:bg-[#F5F5F0]/20 transition-colors font-['Space_Mono'] text-[#F5F5F0]"
                    style={{ fontSize: '14px' }}
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Search className="w-5 h-5 text-[#2A4D69]" />
                <h3 className="font-['Space_Mono'] text-[#F5F5F0]" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  Browse by Service
                </h3>
              </div>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/directory?category=${encodeURIComponent(category.name)}`}
                    onClick={onClose}
                    className="block px-4 py-3 bg-[#F5F5F0]/10 hover:bg-[#F5F5F0]/20 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-['Space_Mono'] text-[#F5F5F0]" style={{ fontSize: '14px' }}>
                        {category.name}
                      </span>
                      <span className="font-['Space_Mono'] text-[#F5F5F0]/50" style={{ fontSize: '12px' }}>
                        {category.count} experts
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
