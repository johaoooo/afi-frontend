import { Link } from 'react-router-dom';
import { FiArrowLeft, FiShoppingBag, FiStar, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';

const products = [
  { 
    id: 4, 
    nom: 'Farine de soja', 
    prix: 3500, 
    note: '4.4', 
    avis: 10, 
    artisan: 'AFI Agro', 
    categorie: 'Soja',
    image: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782907635/so_h3t6no.jpg'
  },
];

export default function AgroalimentairePage() {
  return (
    <div className="bg-[#f5f8f5] min-h-screen">
      <div className="bg-gradient-to-r from-[#1a6b3c] to-[#2d7d46] py-8">
        <div className="container mx-auto px-6 md:px-12">
          <Link to="/boutique" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm mb-3">
            <FiArrowLeft className="w-4 h-4" />
            Retour à la boutique
          </Link>
          <h1 className="text-3xl md:text-4xl font-black text-white">Agroalimentaire</h1>
          <p className="text-green-200 text-sm mt-1">Farine de soja artisanale du Bénin</p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.nom}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400/1a6b3c/ffffff?text=AFI';
                  }}
                />
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
                  <FiStar className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-gray-800">{product.note}</span>
                  <span className="text-gray-400">({product.avis})</span>
                </div>
                <div className="absolute top-3 right-3 bg-[#1a6b3c]/10 px-2.5 py-1 rounded-full text-xs font-medium text-[#1a6b3c]">
                  {product.categorie}
                </div>
                <button className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-[#1a6b3c] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                  <FiHeart className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5">
                <p className="text-xs text-[#1a6b3c] font-semibold">{product.artisan}</p>
                <h3 className="font-bold text-gray-800 text-base mt-1 group-hover:text-[#1a6b3c] transition-colors line-clamp-1">
                  {product.nom}
                </h3>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="font-bold text-xl text-[#1a6b3c]">
                    {product.prix.toLocaleString('fr-FR')} FCFA
                  </span>
                  <button className="px-5 py-2.5 bg-[#1a6b3c] hover:bg-[#14532d] text-white rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105">
                    <FiShoppingBag className="w-4 h-4" />
                    Commander
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
