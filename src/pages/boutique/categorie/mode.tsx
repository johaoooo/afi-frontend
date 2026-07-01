import { Link } from 'react-router-dom';
import { FiArrowLeft, FiShoppingBag, FiStar, FiFilter } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';

const products = [
  { id: 1, nom: 'Sac en cuir artisanal', prix: 25000, image: '/images/sac.png', note: '4.8', avis: 24, artisan: 'Atelier Kossou', categorie: 'Sacs' },
  { id: 2, nom: 'Pagne traditionnel', prix: 15000, image: '/images/pagne.png', note: '4.9', avis: 18, artisan: 'Maison Dossa', categorie: 'Tissus' },
  { id: 3, nom: 'Sac en raphia tressé', prix: 18000, image: '/images/sac1.png', note: '4.6', avis: 15, artisan: 'Atelier Houénou', categorie: 'Sacs' },
  { id: 4, nom: 'Boubou traditionnel', prix: 32000, image: '/images/sa3.jpeg', note: '4.8', avis: 22, artisan: 'Maison Dossa', categorie: 'Vêtements' },
  { id: 5, nom: 'Collier en pierres naturelles', prix: 12000, image: '/images/sa4.jpeg', note: '4.7', avis: 19, artisan: 'Atelier Kossou', categorie: 'Bijoux' },
  { id: 6, nom: 'Sac à main artisanal', prix: 22000, image: '/images/sac2.png', note: '4.5', avis: 12, artisan: 'Atelier Houénou', categorie: 'Sacs' },
];

const categories = ['Tous', 'Sacs', 'Tissus', 'Vêtements', 'Bijoux'];

export default function ModePage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [sortBy, setSortBy] = useState('popularite');

  const filteredProducts = selectedCategory === 'Tous' 
    ? products 
    : products.filter(p => p.categorie === selectedCategory);

  return (
    <div className="bg-[#f5f8f5] min-h-screen">
      {/* Hero simplifié */}
      <div className="bg-[#1a6b3c] py-8">
        <div className="container mx-auto px-6 md:px-12">
          <Link to="/boutique" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm mb-3">
            <FiArrowLeft className="w-4 h-4" />
            Retour à la boutique
          </Link>
          <h1 className="text-3xl md:text-4xl font-black text-white">Mode & Accessoires</h1>
          <p className="text-green-200 text-sm mt-1">Sacs, chaussures et accessoires artisanaux façonnés à la main</p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-8">
        {/* Filtres */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-green-100 mb-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <FiFilter className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Filtrer :</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-[#1a6b3c] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="ml-auto">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#1a6b3c]"
            >
              <option value="popularite">Plus populaires</option>
              <option value="prix-croissant">Prix croissant</option>
              <option value="prix-decroissant">Prix décroissant</option>
            </select>
          </div>
        </div>

        {/* Grille produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="aspect-square bg-gray-100 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.nom}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400/1a6b3c/ffffff?text=AFI';
                  }}
                />
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium">
                  <FiStar className="w-3 h-3 text-yellow-500 fill-current" />
                  {product.note} ({product.avis})
                </div>
                <div className="absolute top-3 right-3 bg-[#1a6b3c]/10 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-[#1a6b3c]">
                  {product.categorie}
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-[#1a6b3c] font-semibold">{product.artisan}</p>
                <h3 className="font-bold text-gray-800 text-sm mt-1">{product.nom}</h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-bold text-lg text-[#1a6b3c]">{product.prix.toLocaleString('fr-FR')} FCFA</span>
                  <button className="px-4 py-2 bg-[#1a6b3c] hover:bg-[#14532d] text-white rounded-full text-sm font-medium transition flex items-center gap-2">
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
