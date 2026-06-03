import React from 'react';
import { Link } from 'react-router-dom';
import { Feather, Paintbrush, Shirt, Home, Apple, Grid3x3, Sparkles } from 'lucide-react';

const CategoriesSection = ({ categories }) => {
  const categoryIcons = {
    'Macramé': Feather,
    'Teinture de Pagne': Paintbrush,
    'Mode et Accessoires': Shirt,
    'Décoration': Home,
    'Agroalimentaire': Apple,
  };

  // Images d'arrière-plan pour chaque catégorie
  const categoryBgImages = {
    'Macramé': '/images/products/sa/sa1.jpg',
    'Teinture de Pagne': '/images/pagne.png',
    'Mode et Accessoires': '/images/products/chem/chem1.jpg',
    'Décoration': '/images/slide4.png',
    'Agroalimentaire': '/images/slide3.png',
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-4">
            <Grid3x3 className="w-4 h-4" />
            <span className="text-sm font-semibold">Nos savoir-faire</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2">
            Catégories <span className="text-green-600 dark:text-green-400">phares</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Découvrez notre gamme de produits artisanaux faits main
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat, idx) => {
            const Icon = categoryIcons[cat.nom] || Feather;
            const bgImage = categoryBgImages[cat.nom] || '/images/slide2.png';
            return (
              <Link 
                key={cat.id} 
                to={`/boutique?categorie=${cat.id}`}
                className="group relative bg-cover bg-center rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition duration-300"></div>
                <div className="relative z-10 p-5 text-center min-h-[160px] flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-sm md:text-base">{cat.nom}</h3>
                  <p className="text-white/70 text-xs mt-1">Découvrir →</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
