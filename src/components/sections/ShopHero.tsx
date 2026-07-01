import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/boutique/mode', label: 'Mode & Accessoires' },
  { to: '/boutique/macrame', label: 'Macramé & Tricotage' },
  { to: '/boutique/decoration', label: 'Décoration' },
  { to: '/boutique/agroalimentaire', label: 'Agroalimentaire' },
];

export function ShopHero() {
  return (
    <div className="relative overflow-hidden bg-black" style={{ minHeight: 320 }}>
      <img
        src="https://res.cloudinary.com/dzxesa3wi/image/upload/v1782907637/tissa_q55ztd.jpg"
        alt="Boutique AFI Collection"
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
            <span className="text-white">Boutique</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            L'artisanat <br />
            <span className="text-[#4ade80]">béninois.</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg max-w-md leading-relaxed mt-3">
            Des créations uniques, faites main avec passion.
            Chaque achat soutient directement un artisan local.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {quickLinks.map(({ to, label }, i) => (
              <Link
                key={to}
                to={to}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] ${
                  i === 0
                    ? 'bg-[#1a6b3c] hover:bg-[#14532d] text-white'
                    : 'border border-white/30 text-white hover:border-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
