import React, { useState } from 'react';
import { Search, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShopHero = ({ onSearch, searchTerm }) => {
  const [localSearch, setLocalSearch] = useState(searchTerm || '');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(localSearch);
  };

  return (
    <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden rounded-b-3xl md:rounded-b-4xl shadow-2xl">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%'
        }}
      />
      
      {/* Overlay avec les couleurs du logo */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/85 via-green-800/80 to-yellow-700/75" />
      
      {/* Motif décoratif léger */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full"></div>
      </div>
      
      {/* Contenu */}
      <div className="relative container-custom text-center z-10 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3">
            <Sparkles className="w-3 h-3 text-yellow-400" />
            <span className="text-white text-xs font-medium tracking-wide" style={{ fontFamily: 'Calibri, sans-serif' }}>Collection artisanale</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Calibri, sans-serif' }}>
            Boutique <span className="text-yellow-400">AFI Collection</span>
          </h1>
          
          <p className="text-white/90 text-sm mb-4 max-w-lg mx-auto" style={{ fontFamily: 'Calibri, sans-serif' }}>
            Découvrez des créations uniques, faites main avec passion
          </p>
          
          {/* Barre de recherche */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="w-full pl-10 pr-28 py-2.5 rounded-full bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md text-sm"
                style={{ fontFamily: 'Calibri, sans-serif' }}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-600 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold hover:shadow-lg transition flex items-center gap-1"
                style={{ fontFamily: 'Calibri, sans-serif' }}
              >
                <Search className="w-3 h-3" />
                <span>OK</span>
              </button>
            </div>
          </form>

          {/* Catégories rapides */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Link to="/boutique?categorie=1" className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full hover:bg-white/30 transition" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Macramé
            </Link>
            <Link to="/boutique?categorie=2" className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full hover:bg-white/30 transition" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Teinture
            </Link>
            <Link to="/boutique?categorie=3" className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full hover:bg-white/30 transition" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Mode
            </Link>
            <Link to="/boutique?categorie=4" className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full hover:bg-white/30 transition" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Décoration
            </Link>
            <Link to="/boutique?categorie=5" className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full hover:bg-white/30 transition" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Agroalimentaire
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;
