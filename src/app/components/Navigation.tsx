import { Link, useLocation } from "react-router";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { SearchOverlay } from "./SearchOverlay";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/categories", label: "Services" },
    { to: "/directory", label: "Experts" },
    { to: "/neighborhoods", label: "Neighborhoods" },
    { to: "/projects", label: "Projects" },
    { to: "/trust", label: "Our Process" },
    { to: "/get-listed", label: "Get Listed" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F0]/95 backdrop-blur-sm border-b border-[#1A1A1A]/10">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-['Cormorant_Garamond'] tracking-tight" style={{ fontSize: '28px', fontWeight: 700, lineHeight: 1.2, color: '#1A1A1A' }}>
          MONUMENTAAL
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-['Space_Mono'] uppercase tracking-widest transition-colors hover:text-[#2A4D69]"
              style={{ fontSize: '11px', fontWeight: 400, color: location.pathname === link.to ? '#2A4D69' : '#1A1A1A' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search Icon */}
        <button 
          onClick={() => setIsSearchOpen(true)}
          className="hidden lg:block p-2 hover:text-[#2A4D69] transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#F5F5F0] border-t border-[#1A1A1A]/10 px-6 py-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="font-['Space_Mono'] uppercase tracking-widest transition-colors hover:text-[#2A4D69]"
                style={{ fontSize: '13px', fontWeight: 400, color: location.pathname === link.to ? '#2A4D69' : '#1A1A1A' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
}