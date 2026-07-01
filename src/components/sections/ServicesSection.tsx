import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const services = [
  { id: 'macrame', key: 'macrame', details: ['Objets décoratifs', 'Sacs', 'Rideaux', 'Accessoires'] },
  { id: 'teinture', key: 'teinture', details: ['Motifs traditionnels', 'Personnalisation', 'Événements'] },
  { id: 'decoration', key: 'decoration', details: ['Intérieure', 'Événementielle', 'Mariages'] },
  { id: 'agro', key: 'agro', details: ['Sésame', 'Soja', 'Transformation'] },
];

export function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
            {t('services.title')}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight leading-[1.05] mt-3">
            {t('services.heading')}
            <br />
            <span className="text-[#1a6b3c]">{t('services.highlight')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const images = [
              'https://res.cloudinary.com/dzxesa3wi/image/upload/v1780563925/sli1_j3e686.jpg',
              'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782719675/tttt_tx2vi0.jpg',
              'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782907157/meuble_gopyp6.jpg',
              'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782907636/soj_rys07t.jpg',
            ];
            return (
              <motion.div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden border border-green-100 hover:border-[#1a6b3c]/30 hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/services#${service.id}`} className="block">
                  <div className="relative h-48 overflow-hidden bg-gray-100 flex items-center justify-center p-4">
                    <img
                      src={images[i]}
                      alt={t(`services.${service.key}`)}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-[#1a6b3c]">
                      {service.details.length} prestations
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="w-10 h-0.5 bg-[#1a6b3c] mb-3 group-hover:w-full transition-all duration-500" />
                    <h3 className="font-black text-lg text-gray-800 group-hover:text-[#1a6b3c] transition-colors duration-300">
                      {t(`services.${service.key}`)}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1.5 leading-relaxed line-clamp-2">
                      {t(`services.${service.key}_desc`)}
                    </p>
                    <div className="flex items-center gap-1 text-[#1a6b3c] text-sm font-semibold mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {t('services.learn_more')} <FiArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
