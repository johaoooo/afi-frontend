import { useState } from 'react';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Marie K.',
    city: 'Abidjan, Côte d\'Ivoire',
    text: 'Des produits d\'une qualité exceptionnelle. Le sac que j\'ai commandé est arrivé parfaitement emballé, avec une petite note de l\'artisan. On sent vraiment que chaque pièce est faite avec amour et savoir-faire.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jean P.',
    city: 'Dakar, Sénégal',
    text: 'Je cherchais un cadeau unique pour ma femme — les bijoux en perles ont dépassé toutes mes attentes. Qualité irréprochable, livraison rapide sur Dakar. AFI Collection est désormais ma référence.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sophie L.',
    city: 'Paris, France',
    text: 'La décoration en macramé que j\'ai achetée est absolument magnifique. Ma famille entière veut savoir d\'où elle vient. C\'est rare de trouver un site qui valorise autant l\'artisanat africain avec une telle authenticité.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section className="py-24 bg-[#f5f8f5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
              Témoignages
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight leading-[1.05] mt-3">
              Ils nous font
              <br />
              <span className="text-[#1a6b3c]">confiance.</span>
            </h2>
          </motion.div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Témoignage précédent"
              className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-[#1a6b3c] hover:text-[#1a6b3c] flex items-center justify-center transition-colors duration-300"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Témoignage suivant"
              className="w-11 h-11 rounded-full bg-[#1a6b3c] hover:bg-[#14532d] text-white flex items-center justify-center transition-colors duration-300"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <FiStar key={i} className="w-5 h-5 text-[#1a6b3c] fill-current" />
              ))}
            </div>

            <p className="text-2xl md:text-3xl font-medium text-gray-700 leading-snug mb-8">
              « {t.text} »
            </p>

            <div>
              <p className="font-bold text-gray-900 text-lg">{t.name}</p>
              <p className="text-sm text-gray-500">{t.city}</p>
            </div>

            {/* Indicateurs */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Aller au témoignage ${i + 1}`}
                  aria-current={i === active}
                  className={`h-0.5 transition-all duration-500 focus:outline-none ${
                    i === active ? 'w-8 bg-[#1a6b3c]' : 'w-4 bg-gray-200 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
