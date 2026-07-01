import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const univers = [
  {
    id: 1,
    name: 'Macramé & Tricotage',
    description: 'Objets décoratifs, sacs, rideaux, suspensions murales et accessoires en fil tissé.',
    image: '/images/sac.png',
    link: '/boutique/macrame',
  },
  {
    id: 2,
    name: 'Teinture de Pagne',
    description: 'Tissus transformés en œuvres d\'art avec des motifs traditionnels africains.',
    image: '/images/pagne.png',
    link: '/boutique/teinture',
  },
  {
    id: 3,
    name: 'Décoration Artisanale',
    description: 'Objets uniques pour embellir vos espaces intérieurs et événements.',
    image: '/images/sa1.jpeg',
    link: '/boutique/decoration',
  },
  {
    id: 4,
    name: 'Agroalimentaire',
    description: 'Produits naturels transformés à base de sésame et de soja du Bénin.',
    image: '/images/sa2.jpeg',
    link: '/boutique/agroalimentaire',
  },
  {
    id: 5,
    name: 'Mode & Accessoires',
    description: 'Sacs, chaussures et accessoires artisanaux pour valoriser votre élégance.',
    image: '/images/sac.png',
    link: '/boutique/mode',
  },
  {
    id: 6,
    name: 'Art & Sculptures',
    description: 'Sculptures et œuvres d\'art uniques pour sublimer votre intérieur.',
    image: '/images/sa3.jpeg',
    link: '/boutique/art',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {univers.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link to={item.link} className="block">
                <div className="relative h-48 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-800 group-hover:text-[#1a6b3c] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1 text-[#1a6b3c] text-sm font-semibold mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Découvrir <FiArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/boutique"
            className="inline-flex items-center gap-2 text-[#1a6b3c] font-bold hover:gap-3 transition-all duration-300"
          >
            Voir tout <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
