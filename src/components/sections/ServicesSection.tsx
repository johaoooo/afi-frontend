import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'macrame',
    title: 'Macramé & Tricotage',
    description: 'Créations artisanales faites à la main avec finesse et originalité.',
    details: ['Objets décoratifs', 'Sacs', 'Rideaux', 'Accessoires'],
  },
  {
    id: 'teinture',
    title: 'Teinture de Pagne',
    description: "Transformation de tissus en œuvres d'art traditionnelles.",
    details: ['Motifs traditionnels', 'Personnalisation', 'Événements'],
  },
  {
    id: 'decoration',
    title: 'Décoration Artisanale',
    description: 'Une touche unique et authentique pour vos espaces.',
    details: ['Intérieure', 'Événementielle', 'Mariages'],
  },
  {
    id: 'agroalimentaire',
    title: 'Agroalimentaire',
    description: 'Valorisation des produits naturels locaux du Bénin.',
    details: ['Sésame', 'Soja', 'Transformation'],
  },
];

export function ServicesSection() {
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
            Nos services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight leading-[1.05] mt-3">
            Des savoir-faire
            <br />
            <span className="text-[#1a6b3c]">d'exception.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="group bg-white p-8 rounded-2xl border border-green-100 hover:border-[#1a6b3c]/30 hover:shadow-xl transition-all duration-500 flex flex-col"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Trait vert animé */}
              <div className="w-10 h-0.5 bg-[#1a6b3c] mb-6 group-hover:w-full transition-all duration-500" />

              <h3 className="font-black text-xl text-gray-800 group-hover:text-[#1a6b3c] transition-colors duration-300 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed flex-1">
                {service.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {service.details.map((detail) => (
                  <span
                    key={detail}
                    className="text-xs bg-[#1a6b3c]/8 text-[#1a6b3c] font-medium px-2.5 py-1 rounded-full"
                  >
                    {detail}
                  </span>
                ))}
              </div>

              <Link
                to={`/services#${service.id}`}
                className="inline-flex items-center gap-2 text-[#1a6b3c] text-sm font-bold mt-6 group-hover:gap-3 transition-all duration-300 focus:outline-none"
              >
                En savoir plus <FiArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
