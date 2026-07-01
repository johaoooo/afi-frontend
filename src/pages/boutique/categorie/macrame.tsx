import { Link } from 'react-router-dom';
import { FiArrowLeft, FiShoppingBag, FiStar, FiFilter, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';

const products = [
  { id: 1, nom: 'Sac en macramé', prix: 18000, image: '/images/sac.png', note: '4.7', avis: 20, artisan: 'Atelier Kossou', categorie: 'Sacs' },
  { id: 2, nom: 'Porte-clés artisanal', prix: 3500, image: '/images/sa1.jpeg', note: '4.5', avis: 14, artisan: 'Maison Dossa', categorie: 'Accessoires' },
  { id: 3, nom: 'Décoration murale', prix: 12000, image: '/images/sa2.jpeg', note: '4.8', avis: 16, artisan: 'Atelier Houénou', categorie: 'Décoration' },
  { id: 4, nom: 'Paniers tissés', prix: 8000, image: '/images/pagne.png', note: '4.6', avis: 10, artisan: 'Maison Dossa', categorie: 'Accessoires' },
  { id: 5, nom: 'Sets de table', prix: 15000, image: '/images/sa3.jpeg', note: '4.4', avis: 8, artisan: 'Atelier Kossou', categorie: 'Accessoires' },
  { id: 6, nom: 'Rideau décoratif', prix: 25000, image: '/images/sa4.jpeg', note: '4.9', avis: 12, artisan: 'Atelier Houénou', categorie: 'Décoration' },
];

const categories = ['Tous', 'Sacs', 'Accessoires', 'Décoration'];

export default function MacramePage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredProducts = selectedCategory === 'Tous' 
    ? products 
    : products.filter(p => p.categorie === selectedCategory);

  return (
    <div className="bg-[#f5f8f5] min-h-screen">
      <div className="bg-gradient-to-r from-[#1a6b3c] to-[#2d7d46] py-8">
        <div className="container mx-auto px-6 md:px-12">
          <Link to="/boutique" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm mb-3">
            <FiArrowLeft className="w-4 h-4" />
            Retour à la boutique
          </Link>
          <h1 className="text-3xl md:text-4xl font-black text-white">Macramé & Tricotage</h1>
          <p className="text-green-200 text-sm mt-1">Sacs, décorations et accessoires en macramé, tricotés avec soin</p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-8">
        <div className="bg-white rounded-2xl shadow-md p-4 border border-green-100 mb-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <FiFilter className="w-4 h-4 text-[#1a6b3c]" />
            <span className="text-sm font-medium text-gray-600">Filtrer :</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#1a6b3c] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, i) => (
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
