export default function NotFound() {
  return (
    <div className="bg-[#F5F5F0] min-h-screen flex items-center justify-center py-24">
      <div className="text-center">
        <h1 className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A' }}>
          404
        </h1>
        <p className="font-['Space_Mono'] text-[#1A1A1A]/70 mb-8" style={{ fontSize: '15px' }}>
          Page not found
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-[#2A4D69] text-[#F5F5F0] px-8 py-4 hover:bg-[#1A3A4F] transition-colors font-['Space_Mono']"
          style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
