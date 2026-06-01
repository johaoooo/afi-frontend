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
            return (
              <Link 
                key={cat.id} 
                to={`/boutique?categorie=${cat.id}`}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-5 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-yellow-100 dark:from-green-800/50 dark:to-yellow-800/50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition duration-300">
                    <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition text-sm md:text-base">{cat.nom}</h3>
                  <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">Découvrir →</p>
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
