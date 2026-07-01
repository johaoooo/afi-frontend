import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const univers = [
  {
    id: 1,
    name: 'Macramé & Tricotage',
    description: 'Objets décoratifs, sacs, rideaux et accessoires en fil tissé.',
    link: '/boutique/macrame'
  },
  {
    id: 2,
    name: 'Teinture de Pagne',
    description: 'Tissus transformés en œuvres d\'art aux motifs traditionnels africains.',
    link: '/boutique/teinture'
  },
  {
    id: 3,
    name: 'Décoration Artisanale',
    description: 'Objets uniques pour embellir vos espaces intérieurs et événements.',
    link: '/boutique/decoration'
  },
  {
    id: 4,
    name: 'Agroalimentaire',
    description: 'Produits naturels transformés à base de sésame et de soja du Bénin.',
    link: '/boutique/agroalimentaire'
  },
  {
    id: 5,
    name: 'Mode & Accessoires',
    description: 'Sacs, chaussures et accessoires artisanaux pour valoriser votre élégance.',
    link: '/boutique/mode'
  },
  {
    id: 6,
    name: 'Art & Sculptures',
    description: 'Sculptures et œuvres d\'art uniques pour sublimer votre intérieur.',
    link: '/boutique/art'
  },
];

export function UniversSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
            Nos univers
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight leading-[1.05] mt-3">
            Un continent, <span className="text-[#1a6b3c]">mille trésors</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-3">
            Six mondes, un seul continent. Chaque univers rassemble les artisans certifiés AFI Collection.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {univers.map((item, index) => (
            <motion.div
              key={item.id}
              className="group bg-[#1a6b3c] rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link to={item.link} className="block">
                <h3 className="font-bold text-sm text-white group-hover:text-green-300 transition-colors">
                  {item.name}
                </h3>
                <div className="w-full h-0.5 bg-white/20 mx-auto mt-3 group-hover:bg-white/50 transition-all duration-300" />
                <span className="inline-block text-white/60 text-xs font-medium mt-3 group-hover:text-white transition-colors">
                  Découvrir →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/boutique"
            className="inline-flex items-center gap-2 bg-[#1a6b3c] hover:bg-[#14532d] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl text-sm"
          >
            Voir toutes les collections
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
