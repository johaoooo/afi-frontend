import { FiHeart, FiGlobe, FiStar, FiClock, FiShield, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';

const reasons = [
  { icon: FiHeart, title: 'Authenticité', description: 'Produits 100% artisanaux, faits à la main au Bénin.' },
  { icon: FiGlobe, title: 'Diversité', description: 'Une large gamme qui célèbre les savoir-faire locaux.' },
  { icon: FiStar, title: 'Qualité', description: 'Matériaux nobles et savoir-faire transmis de génération en génération.' },
  { icon: FiClock, title: 'Durabilité', description: 'Des créations conçues pour traverser le temps.' },
  { icon: FiShield, title: 'Confiance', description: 'Produits authentiques, paiement sécurisé, service garanti.' },
  { icon: FiUsers, title: 'Communauté', description: 'Plus de 50 artisans partenaires soutenus directement.' },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-[#1a6b3c]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-green-300 text-xs font-bold tracking-widest uppercase">
            Pourquoi nous
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.05] mt-3">
            Pourquoi choisir
            <br />
            <span className="text-green-200">AFI Collection.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              className="group flex items-start gap-5 p-6 rounded-2xl bg-white/8 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-400"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-black text-white text-lg leading-tight">{item.title}</h3>
                <p className="text-green-100/80 text-sm mt-1.5 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
