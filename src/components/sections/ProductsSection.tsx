import { Link } from 'react-router-dom';
import { FiArrowRight, FiStar, FiShoppingBag } from 'react-icons/fi';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    nom: 'Sac en cuir artisanal',
    prix: 25000,
    image: '/images/sac.png',
    note: '4.8',
    avis: 24,
    artisan: 'Atelier Kossou',
  },
  {
    id: 2,
    nom: 'Pagne traditionnel',
    prix: 15000,
    image: '/images/pagne.png',
    note: '4.9',
    avis: 18,
    artisan: 'Maison Dossa',
  },
  {
    id: 3,
    nom: 'Bijoux en perles de verre',
    prix: 8500,
    image: '/images/sa1.jpeg',
    note: '4.7',
    avis: 31,
    artisan: 'Atelier Houénou',
  },
  {
    id: 4,
    nom: "Sculpture en bois d'ébène",
    prix: 45000,
    image: '/images/sa2.jpeg',
    note: '4.9',
    avis: 12,
    artisan: 'Maître Amoussou',
  },
];

export function ProductsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
              Nos produits
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight leading-[1.05] mt-3">
              Pièces
              <br />
              <span className="text-[#1a6b3c]">populaires.</span>
            </h2>
          </motion.div>

          <Link
            to="/boutique"
            className="inline-flex items-center gap-2 text-[#1a6b3c] font-bold text-sm hover:gap-3 transition-all duration-300 shrink-0"
          >
            Voir tout <FiArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-green-100 hover:border-[#1a6b3c]/20 hover:shadow-xl transition-all duration-500 flex flex-col"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="aspect-square bg-gray-50 overflow-hidden relative flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.nom}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-600"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400';
                  }}
                />
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
                  <FiStar className="w-3 h-3 text-[#1a6b3c] fill-current" aria-hidden="true" />
                  <span className="text-gray-800">{product.note}</span>
                  <span className="text-gray-400">({product.avis})</span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-[#1a6b3c] font-semibold mb-1">{product.artisan}</p>
                <h3 className="font-bold text-gray-800 leading-snug flex-1">{product.nom}</h3>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="font-black text-[#1a6b3c] text-lg">
                    {product.prix.toLocaleString('fr-FR')} FCFA
                  </span>
                  <button
                    className="w-9 h-9 rounded-full bg-[#1a6b3c] hover:bg-[#14532d] flex items-center justify-center transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] focus-visible:ring-offset-2"
                    aria-label={`Commander ${product.nom}`}
                  >
                    <FiShoppingBag className="w-4 h-4 text-white" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
