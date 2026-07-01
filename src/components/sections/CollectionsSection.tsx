import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const collections = [
  { id: 1, key: 'sacs', image: '/images/sac.png', count: '12 pièces', link: '/boutique/mode' },
  { id: 2, key: 'tissus', image: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782717379/WhatsApp_Image_2026-06-26_at_17.21.21_b51wtr.jpg', count: '8 pièces', link: '/boutique/mode' },
  { id: 3, key: 'bijoux', image: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782908539/tric_ehoj1b.jpg', count: '15 pièces', link: '/boutique/mode' },
];

export function CollectionsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#f5f8f5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
              {t('collections.title')}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight leading-[1.05] mt-3">
              {t('collections.heading')}
              <br />
              <span className="text-[#1a6b3c]">{t('collections.highlight')}</span>
            </h2>
          </motion.div>

          <Link
            to="/boutique"
            className="inline-flex items-center gap-2 text-[#1a6b3c] font-bold text-sm hover:gap-3 transition-all duration-300 shrink-0 focus:outline-none"
          >
            {t('collections.view_all')} <FiArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {collections.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={col.link}
                className="group relative block overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c]"
              >
                <img
                  src={col.image}
                  alt={t(`collections.${col.key}`)}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs text-white/60 font-medium mb-1">{col.count}</p>
                  <h3 className="text-white font-black text-lg leading-tight">{t(`collections.${col.key}`)}</h3>
                  <div className="flex items-center gap-1 text-[#4ade80] text-xs font-bold mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {t('collections.discover')} <FiArrowRight className="w-3 h-3" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
