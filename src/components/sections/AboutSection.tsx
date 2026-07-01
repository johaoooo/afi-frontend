import { Link } from 'react-router-dom';
import { FiAward, FiUsers, FiShield, FiGlobe, FiArrowRight, FiHeart, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

const badges = [
  { icon: FiAward, label: 'Qualité Premium' },
  { icon: FiGlobe, label: 'Livraison nationale' },
  { icon: FiUsers, label: '50+ Artisans' },
  { icon: FiShield, label: 'Paiement Sécurisé' },
];

const stats = [
  { value: '50+', label: 'Artisans', icon: FiUsers },
  { value: '500+', label: 'Clients', icon: FiHeart },
  { value: '150+', label: 'Produits', icon: FiAward },
  { value: '98%', label: 'Satisfaction', icon: FiClock },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-xl">
              <img
                src="https://res.cloudinary.com/dzxesa3wi/image/upload/v1781005605/WhatsApp_Image_2026-06-04_at_09.55.33_1_e5jtjs.jpg"
                alt="Artisane béninoise au travail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800';
                }}
              />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-2xl px-5 py-4 border border-green-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-3xl font-black text-[#1a6b3c]">100%</p>
              <p className="text-sm font-semibold text-gray-700 mt-0.5">Authentique & fait main</p>
            </motion.div>

            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#1a6b3c] rounded-tl-3xl" />
          </motion.div>

          <div className="space-y-6">
            <motion.span
              className="inline-block text-[#1a6b3c] text-xs font-bold tracking-widest uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              À propos de nous
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl font-black text-gray-800 leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              L'artisanat africain
              <br />
              <span className="text-[#1a6b3c]">à son meilleur.</span>
            </motion.h2>

            <motion.p
              className="text-gray-500 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AFI Collection est une vitrine de l'excellence artisanale béninoise — macramé,
              teinture de pagne, décoration, agroalimentaire. Chaque pièce raconte l'histoire
              d'un artisan passionné qui perpétue des techniques transmises de génération en génération.
            </motion.p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {badges.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-[#1a6b3c]/5 transition-all duration-300"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1a6b3c]/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-[#1a6b3c]" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-black text-[#1a6b3c]">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 bg-[#1a6b3c] hover:bg-[#14532d] text-white font-bold px-7 py-3.5 rounded-full transition-colors duration-300 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] focus-visible:ring-offset-2"
              >
                En savoir plus
                <FiArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
