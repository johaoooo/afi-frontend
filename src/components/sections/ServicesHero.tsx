import { Link } from 'react-router-dom';

export function ServicesHero() {
  return (
    <div className="relative overflow-hidden bg-black" style={{ minHeight: 320 }}>
      <img
        src="/images/services-hero-bg.jpg"
        alt="Services AFI Collection"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600';
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1a6b3c] z-10" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex items-center" style={{ minHeight: 320 }}>
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-white/50 font-medium mb-4">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="text-white/30">/</span>
            <span className="text-white">Services</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Des savoir-faire <br />
            <span className="text-[#4ade80]">d'exception.</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg max-w-md leading-relaxed mt-3">
            Découvrez l'étendue de notre savoir-faire artisanal 
            et laissez-vous inspirer par nos créations uniques.
          </p>
        </div>
      </div>
    </div>
  );
}
