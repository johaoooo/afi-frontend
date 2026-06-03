import React, { useState } from 'react';
import { Search, Sparkles, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShopHero = ({ onSearch, searchTerm }) => {
  const [localSearch, setLocalSearch] = useState(searchTerm || '');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(localSearch);
  };

  return (
    <section className="relative h-48 md:h-56 lg:h-64 flex items-center justify-center overflow-hidden rounded-b-2xl shadow-lg">
      {/* Background image avec la deuxième sandale */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/images/products/sandals/sandal2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%'
        }}
      />
      
      {/* Overlay plus sombre pour meilleure lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
      
      {/* Contenu */}
      <div className="relative container-custom text-center z-10 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 mb-3">
            <Sparkles className="w-3 h-3 text-yellow-400" />
            <span className="text-white text-xs font-medium tracking-wide drop-shadow-md">Collection artisanale</span>
          </div>
          
          {/* Titre avec ombre */}
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
            Boutique <span className="text-yellow-400">AFI Collection</span>
          </h1>
          
          {/* Description avec ombre */}
          <p className="text-white/95 text-sm mb-4 max-w-lg mx-auto drop-shadow-md">
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
                className="w-full pl-10 pr-28 py-2.5 rounded-full bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-600 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold hover:shadow-lg transition flex items-center gap-1"
              >
                <Search className="w-3 h-3" />
                <span>OK</span>
              </button>
            </div>
          </form>

          {/* Catégories rapides */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Link to="/boutique?categorie=1" className="bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full hover:bg-white/30 transition drop-shadow-md">Macramé</Link>
            <Link to="/boutique?categorie=2" className="bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full hover:bg-white/30 transition drop-shadow-md">Teinture</Link>
            <Link to="/boutique?categorie=3" className="bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full hover:bg-white/30 transition drop-shadow-md">Mode</Link>
            <Link to="/boutique?categorie=4" className="bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full hover:bg-white/30 transition drop-shadow-md">Décoration</Link>
            <Link to="/boutique?categorie=5" className="bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full hover:bg-white/30 transition drop-shadow-md">Agroalimentaire</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;
