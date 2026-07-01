import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiUsers, FiShoppingBag, FiAward, FiStar } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const slides = [
  { id: 1, image: '/images/slide1.png' },
  { id: 2, image: '/images/slide2.png' },
  { id: 3, image: '/images/slide3.png' },
];

const stats = [
  { key: 'clients', value: '500+', icon: FiUsers, label: 'Clients satisfaits' },
  { key: 'products', value: '150+', icon: FiShoppingBag, label: 'Produits uniques' },
  { key: 'artisans', value: '50+', icon: FiAward, label: 'Artisans partenaires' },
  { key: 'satisfaction', value: '98%', icon: FiStar, label: 'Taux de satisfaction' },
];

const SLIDE_DURATION = 5000;
const FALLBACK = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600';

export function HeroCarousel() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const total = slides.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  return (
    <>
      <section
        className="relative overflow-hidden bg-black"
        style={{ height: 'calc(100vh - 88px)', minHeight: 560, maxHeight: 860 }}
        role="region"
        aria-roledescription="carrousel"
        aria-label="Présentation AFI Collection"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
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

        <div className="absolute inset-0 z-[15] bg-black/35" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1a6b3c] z-30" />

        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6 md:px-12 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl text-left">
                {t('hero.title')}
                <br />
                <span className="text-[#4ade80] drop-shadow-2xl">
                  {t('hero.highlight')}
                </span>
              </h1>

              <p className="text-white/95 text-base md:text-lg mt-4 max-w-xl leading-relaxed drop-shadow-xl text-left">
                {t('hero.description')}
              </p>

              <div className="flex flex-wrap gap-4 mt-8 justify-start">
                <Link
                  to="/boutique"
                  className="inline-flex items-center gap-2 bg-[#1a6b3c] hover:bg-[#14532d] text-white font-bold px-7 py-3.5 rounded-full transition-colors duration-300 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {t('hero.button_shop')}
                  <FiArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/formations"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-7 py-3.5 rounded-full transition-colors duration-300 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {t('hero.button_training')}
                </Link>
              </div>
            </div>
          </div>
        </div>

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

      {/* Section Statistiques améliorée */}
      <section className="bg-white border-b border-green-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 md:py-12">
            {stats.map((stat, index) => (
              <div 
                key={stat.key}
                className="group text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-[#1a6b3c]/10 group-hover:bg-[#1a6b3c]/20 transition-colors duration-300">
                    <stat.icon className="w-5 h-5 text-[#1a6b3c]" />
                  </div>
                  <p className="text-2xl md:text-3xl font-black text-[#1a6b3c] tracking-tight">
                    {stat.value}
                  </p>
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium">
                  {stat.label}
                </p>
                <div className="w-12 h-0.5 bg-[#1a6b3c]/20 mx-auto mt-3 group-hover:w-16 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
