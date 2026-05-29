import React, { useState } from 'react';
import { Search, Sparkles, Scissors, Palette, Briefcase, Home, Apple, Feather, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesHero = ({ onSearch, searchTerm, onFilterClick }) => {
  const [localSearch, setLocalSearch] = useState(searchTerm || '');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(localSearch);
  };

  const serviceCategories = [
    { icon: Scissors, name: 'Macramé', color: 'bg-green-100 text-green-600', link: '/boutique?categorie=1' },
    { icon: Palette, name: 'Teinture', color: 'bg-yellow-100 text-yellow-600', link: '/boutique?categorie=2' },
    { icon: Briefcase, name: 'Mode', color: 'bg-red-100 text-red-600', link: '/boutique?categorie=3' },
    { icon: Home, name: 'Décoration', color: 'bg-green-100 text-green-600', link: '/boutique?categorie=4' },
    { icon: Apple, name: 'Agroalimentaire', color: 'bg-yellow-100 text-yellow-600', link: '/boutique?categorie=5' },
    { icon: Feather, name: 'Tricotage', color: 'bg-red-100 text-red-600', link: '/formations' },
  ];

  return (
    <section className="relative h-48 md:h-56 lg:h-64 flex items-center justify-center overflow-hidden rounded-b-2xl shadow-lg">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      
      <div className="relative container-custom text-center z-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-2">
            <Sparkles className="w-3 h-3 text-yellow-400" />
            <span className="text-white text-xs font-medium tracking-wide">Services artisanaux</span>
          </div>
          
          <h1 className="text-xl md:text-2xl font-bold text-white mb-2">
            Que recherchez-vous ?
          </h1>
          
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mt-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un service, produit, formation..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="w-full pl-9 pr-24 py-2 rounded-full bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md text-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-600 to-yellow-500 text-white px-3 py-0.5 rounded-full text-xs font-semibold hover:shadow-lg transition flex items-center gap-1"
              >
                <Search className="w-3 h-3" />
                <span>OK</span>
              </button>
            </div>
          </form>

          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {serviceCategories.slice(0, 4).map((cat, idx) => (
              <Link
                key={idx}
                to={cat.link}
                className={`flex items-center gap-1 px-2 py-0.5 rounded-full ${cat.color} hover:scale-105 transition text-xs`}
              >
                <cat.icon className="w-3 h-3" />
                <span>{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
