import { Link } from 'react-router-dom';

export function FormationsHero() {
  return (
    <div className="relative overflow-hidden bg-black" style={{ minHeight: 320 }}>
      <img
        src="https://res.cloudinary.com/dzxesa3wi/image/upload/v1782717374/WhatsApp_Image_2026-06-29_at_08.08.43_jc7ddz.jpg"
        alt="Formations AFI Collection"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600';
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1a6b3c] z-10" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex items-center" style={{ minHeight: 320 }}>
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-white/50 font-medium mb-4">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="text-white/30">/</span>
            <span className="text-white">Formations</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Formations <br />
            <span className="text-[#4ade80]">professionnelles.</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg max-w-md leading-relaxed mt-3">
            Découvrez les filières du Centre de Formation Professionnelle Dorcas
            et développez des compétences uniques dans l'artisanat.
          </p>
        </div>
      </div>
    </div>
  );
}
