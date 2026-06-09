import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Feather, Paintbrush, Shirt, Home, Apple, Grid3x3, Sparkles, Package, TrendingUp } from 'lucide-react';
import axios from 'axios';

const CategoriesSection = ({ categories }) => {
  const [productCounts, setProductCounts] = useState({});
  const [loading, setLoading] = useState(true);

  // Icônes pour chaque catégorie
  const categoryIcons = {
    'Macramé': Feather,
    'Teinture de Pagne': Paintbrush,
    'Mode et Accessoires': Shirt,
    'Décoration': Home,
    'Agroalimentaire': Apple,
    'Pagne Tissé': Paintbrush,
    'Sculpture': Sparkles,
    'Bijoux': Sparkles,
  };

  // Couleurs pour chaque catégorie (fond et texte)
  const categoryColors = {
    'Macramé': { bg: 'from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20', border: 'border-amber-200 dark:border-amber-800', iconBg: 'bg-amber-100 dark:bg-amber-900/50', iconColor: 'text-amber-600' },
    'Teinture de Pagne': { bg: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20', border: 'border-purple-200 dark:border-purple-800', iconBg: 'bg-purple-100 dark:bg-purple-900/50', iconColor: 'text-purple-600' },
    'Mode et Accessoires': { bg: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20', border: 'border-blue-200 dark:border-blue-800', iconBg: 'bg-blue-100 dark:bg-blue-900/50', iconColor: 'text-blue-600' },
    'Décoration': { bg: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20', border: 'border-emerald-200 dark:border-emerald-800', iconBg: 'bg-emerald-100 dark:bg-emerald-900/50', iconColor: 'text-emerald-600' },
    'Agroalimentaire': { bg: 'from-lime-50 to-green-50 dark:from-lime-900/20 dark:to-green-900/20', border: 'border-lime-200 dark:border-lime-800', iconBg: 'bg-lime-100 dark:bg-lime-900/50', iconColor: 'text-lime-600' },
    'Pagne Tissé': { bg: 'from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20', border: 'border-indigo-200 dark:border-indigo-800', iconBg: 'bg-indigo-100 dark:bg-indigo-900/50', iconColor: 'text-indigo-600' },
    'default': { bg: 'from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700', border: 'border-gray-200 dark:border-gray-700', iconBg: 'bg-gray-100 dark:bg-gray-700', iconColor: 'text-gray-600' },
  };

  // Récupérer le nombre de produits par catégorie
  useEffect(() => {
    const fetchProductCounts = async () => {
      try {
        const response = await axios.get('https://afi-backend-rneb.onrender.com/api/produits');
        const products = response.data.produits || [];
        
        const counts = {};
        products.forEach(product => {
          const catId = product.categorieId;
          if (catId) {
            counts[catId] = (counts[catId] || 0) + 1;
          }
        });
        setProductCounts(counts);
      } catch (error) {
        console.error('Erreur chargement compteurs:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProductCounts();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
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
            const Icon = categoryIcons[cat.nom] || Package;
            const colors = categoryColors[cat.nom] || categoryColors.default;
            const productCount = productCounts[cat.id] || 0;
            
            return (
              <Link 
                key={cat.id} 
                to={`/boutique?categorie=${cat.id}`}
                className={`group relative bg-gradient-to-br ${colors.bg} rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border ${colors.border}`}
              >
                <div className="relative z-10 p-5 text-center min-h-[180px] flex flex-col items-center justify-between">
                  {/* Icône */}
                  <div className={`w-16 h-16 ${colors.iconBg} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition duration-300`}>
                    <Icon className={`w-8 h-8 ${colors.iconColor}`} />
                  </div>
                  
                  {/* Titre */}
                  <h3 className="font-bold text-gray-800 dark:text-white text-sm md:text-base">{cat.nom}</h3>
                  
                  {/* Statistiques */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <Package className="w-3 h-3" />
                      <span>{productCount} produits</span>
                    </div>
                  </div>
                  
                  {/* Bouton découverte */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-green-600 dark:text-green-400 font-semibold flex items-center gap-1">
                      Découvrir <TrendingUp className="w-3 h-3" />
                    </span>
                  </div>
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
