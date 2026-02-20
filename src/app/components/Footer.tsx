import { Link } from "react-router";
import { InfoModal } from "./ui/InfoModal";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F5F5F0] py-24">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div>
            <div className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: '28px', fontWeight: 700, lineHeight: 1.2 }}>
              MONUMENTAAL
            </div>
            <p className="font-['Space_Mono'] opacity-70" style={{ fontSize: '13px', lineHeight: 1.8 }}>
              Connecting heritage craftspeople with conscious homeowners in 's-Hertogenbosch.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: '18px', fontWeight: 600 }}>
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {['Gevelrestauratie', 'Dakbedekking', 'Voegwerk', 'Monumentaal Schilderwerk'].map((item) => (
                <Link
                  key={item}
                  to="/categories"
                  className="font-['Space_Mono'] opacity-70 hover:opacity-100 transition-opacity"
                  style={{ fontSize: '13px' }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: '18px', fontWeight: 600 }}>
              Company
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'About Us', to: '/trust' },
                { label: 'Get Listed', to: '/get-listed' },
                { label: 'Contact', to: '/' },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="font-['Space_Mono'] opacity-70 hover:opacity-100 transition-opacity"
                  style={{ fontSize: '13px' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: '18px', fontWeight: 600 }}>
              Legal
            </h4>
            <div className="flex flex-col gap-3">
              <InfoModal
                title="Privacy Policy"
                description="This is a placeholder for the Monumentaal Privacy Policy. It will outline how we collect, use, and protect your personal information in accordance with GDPR and local regulations, ensuring your data is handled with the same care as our heritage properties."
                trigger={
                  <button className="font-['Space_Mono'] text-left opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '13px' }}>
                    Privacy Policy
                  </button>
                }
              />
              <InfoModal
                title="Terms of Service"
                description="This is a placeholder for the Monumentaal Terms of Service. It details the rules, guidelines, and agreements for using our directory and matching services for monumental restoration projects."
                trigger={
                  <button className="font-['Space_Mono'] text-left opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '13px' }}>
                    Terms of Service
                  </button>
                }
              />
              <InfoModal
                title="Cookie Policy"
                description="This is a placeholder for the Monumentaal Cookie Policy. We use strictly necessary cookies to ensure the platform functions correctly, as well as optional analytics cookies to help us improve the experience for homeowners and specialists."
                trigger={
                  <button className="font-['Space_Mono'] text-left opacity-70 hover:opacity-100 transition-opacity" style={{ fontSize: '13px' }}>
                    Cookie Policy
                  </button>
                }
              />
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-[#F5F5F0]/10">
          <p className="font-['Space_Mono'] opacity-50 text-center" style={{ fontSize: '11px' }}>
            © 2026 Monumentaal. All rights reserved. Built with respect for Sint-Janskathedraal heritage.
          </p>
        </div>
      </div>
    </footer>
  );
}
