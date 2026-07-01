import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
  {
    id: 1,
    image: '/images/slide1.png',
    title: "L'artisanat",
    highlight: 'béninois.',
    description:
      "Des créations uniques, tissées et façonnées à la main par des artisans d'exception.",
  },
  {
    id: 2,
    image: '/images/slide2.png',
    title: 'La tradition',
    highlight: 'réinventée.',
    description:
      'Le savoir-faire ancestral rencontre l\'élégance contemporaine. Chaque pièce raconte une histoire.',
  },
  {
    id: 3,
    image: '/images/slide3.png',
    title: 'Collections',
    highlight: 'authentiques.',
    description:
      'Sacs, pagnes, bijoux, sculptures — l\'excellence artisanale du Bénin, livrée chez vous.',
  },
];

const stats = [
  { value: '500+', label: 'Clients satisfaits' },
  { value: '150+', label: 'Produits uniques' },
  { value: '50+', label: 'Artisans partenaires' },
  { value: '98%', label: 'Satisfaction client' },
];

const SLIDE_DURATION = 5000;
const FALLBACK = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600';

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const total = slides.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  // Auto-play - toujours actif
  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden bg-black"
      style={{ height: 'calc(100vh - 88px)', minHeight: 560, maxHeight: 860 }}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Présentation AFI Collection"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
          aria-hidden={i !== current}
        >
          <img
            src={imgErrors[s.id] ? FALLBACK : s.image}
            alt=""
            onError={() => setImgErrors((prev) => ({ ...prev, [s.id]: true }))}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Voile uniforme */}
      <div className="absolute inset-0 z-[15] bg-black/35" />

      {/* Dégradé directionnel */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />

      {/* Fondu bas */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Liseré vert */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1a6b3c] z-30" />

      {/* Contenu */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl">
              {slide.title}
              <br />
              <span className="text-[#4ade80] drop-shadow-2xl">
                {slide.highlight}
              </span>
            </h1>

            <p className="text-white/95 text-base md:text-lg mt-4 max-w-md leading-relaxed drop-shadow-xl">
              {slide.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/boutique"
                className="inline-flex items-center gap-2 bg-[#1a6b3c] hover:bg-[#14532d] text-white font-bold px-7 py-3.5 rounded-full transition-colors duration-300 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Explorer la boutique
                <FiArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/formations"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-7 py-3.5 rounded-full transition-colors duration-300 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Nos formations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="bg-white/95 backdrop-blur-sm border-t border-green-100">
          <div className="container mx-auto px-6 md:px-12 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl md:text-2xl font-bold text-[#1a6b3c] tracking-tight">{s.value}</p>
                <p className="text-[10px] md:text-xs text-gray-500 mt-0.5 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        aria-label="Slide précédente"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 border border-white/20 flex items-center justify-center transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c]"
      >
        <FiChevronLeft className="w-5 h-5 text-white" aria-hidden="true" />
      </button>
      <button
        onClick={next}
        aria-label="Slide suivante"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 border border-white/20 flex items-center justify-center transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c]"
      >
        <FiChevronRight className="w-5 h-5 text-white" aria-hidden="true" />
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-20 right-6 md:right-12 z-30 flex gap-2.5">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === current}
            className={`h-0.5 transition-all duration-700 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1a6b3c] ${
              i === current ? 'w-8 bg-[#1a6b3c]' : 'w-4 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
