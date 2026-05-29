import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, ShoppingBag } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductsSection = ({ products }) => {
  const featuredProducts = products.slice(0, 4);
  const bestSeller = products.find(p => p.nombreVentes > 100) || products[0];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Collection exclusive</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Nos <span className="text-green-600">Produits</span> Phares
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Découvrez notre sélection de créations artisanales uniques, faites main avec passion
          </p>
        </div>

        {/* Meilleure vente en vedette */}
        {bestSeller && (
          <div className="mb-12 bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-6 border-2 border-green-200 hover:border-yellow-400 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-semibold text-sm">Meilleure vente</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md border-2 border-green-200">
                <img 
                  src={bestSeller.imagePrincipale || 'https://images.unsplash.com/photo-1564229504985-403fb448ae0f?w=200'} 
                  alt={bestSeller.nom}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-bold text-lg text-gray-800">{bestSeller.nom}</h3>
                <p className="text-gray-500 text-sm">Produit le plus populaire du moment</p>
              </div>
              <Link to={`/produit/${bestSeller.slug}`} className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105 flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Découvrir</span>
              </Link>
            </div>
          </div>
        )}

        {/* Grille des produits avec bordures vertes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        {/* Bouton voir plus */}
        <div className="text-center mt-12">
          <Link to="/boutique" className="group inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span>Voir tous les produits</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
          </Link>
          <p className="text-gray-400 text-xs mt-3">+{products.length - 4} autres produits disponibles</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
