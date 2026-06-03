import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, ShoppingBag } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductsSection = ({ products }) => {
  // Sélectionner des produits spécifiques par ID
  const sac = products.find(p => p.id === 24); // Sac Artisanal Élégant
  const sandale = products.find(p => p.id === 36); // Sandale Artisanale
  const chemise = products.find(p => p.id === 31); // Chemise Tissée Main
  const autre = products.find(p => p.id === 30); // Sac de Soirée
  
  // Construire la liste des produits phares
  const featuredProducts = [];
  
  if (sac) featuredProducts.push(sac);
  if (sandale) featuredProducts.push(sandale);
  if (chemise) featuredProducts.push(chemise);
  if (autre) featuredProducts.push(autre);
  
  // Si certains produits manquent, compléter avec d'autres
  if (featuredProducts.length < 4) {
    const otherProducts = products.filter(p => !featuredProducts.includes(p)).slice(0, 4 - featuredProducts.length);
    featuredProducts.push(...otherProducts);
  }
  
  // Produit vedette (le premier produit)
  const bestSeller = featuredProducts[0] || products[0];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Collection exclusive</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2">
            Nos <span className="text-green-600 dark:text-green-400">Produits</span> Phares
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Découvrez notre sélection de créations artisanales uniques, faites main avec passion
          </p>
        </div>

        {/* Produit vedette */}
        {bestSeller && (
          <div className="mb-12 bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-2xl p-6 border-2 border-green-200 dark:border-green-800 hover:border-yellow-400 dark:hover:border-yellow-600 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-green-600 dark:text-green-400 font-semibold text-sm">⭐ Produit vedette</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md border-2 border-green-200 dark:border-green-800">
                <img 
                  src={bestSeller.imagePrincipale || '/images/logo.png'} 
                  alt={bestSeller.nom}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/images/logo.png'; }}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-bold text-lg text-gray-800 dark:text-white">{bestSeller.nom}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Notre produit le plus populaire</p>
              </div>
              <Link to={`/produit/${bestSeller.slug}`} className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105 flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Découvrir</span>
              </Link>
            </div>
          </div>
        )}

        {/* Grille des produits phares */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/boutique" className="group inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span>Voir tous les produits</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
          </Link>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-3">+{products.length - 4} autres produits disponibles</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
