import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, ShoppingBag } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductsSection = ({ products }) => {
  // Chercher les produits Afisac (sacs macramé) - catégorie Macramé (id:1)
  const afisacProducts = products.filter(p => 
    p.categorieId === 1 || 
    p.nom.toLowerCase().includes('afisac') || 
    p.nom.toLowerCase().includes('macramé') || 
    p.nom.toLowerCase().includes('macrame')
  );
  
  console.log('Produits Afisac trouvés:', afisacProducts.length);
  
  // Prendre les 4 premiers produits Afisac
  const featuredProducts = afisacProducts.slice(0, 4);
  
  // Produit vedette (le premier Afisac)
  const bestSeller = afisacProducts[0];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Collection exclusive</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Nos <span className="text-green-600">Afisac</span> - Sacs Macramé
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Découvrez nos célèbres sacs Afisac, fabriqués artisanalement en macramé
          </p>
        </div>

        {/* Produit vedette Afisac */}
        {bestSeller && (
          <div className="mb-12 bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-6 border-2 border-green-200 hover:border-yellow-400 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-semibold text-sm">⭐ Collection Afisac</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md border-2 border-green-200">
                <img 
                  src={bestSeller.imagePrincipale || '/images/logo.png'} 
                  alt={bestSeller.nom}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/images/logo.png'; }}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-bold text-lg text-gray-800">{bestSeller.nom}</h3>
                <p className="text-gray-500 text-sm">Le sac Afisac le plus populaire</p>
              </div>
              <Link to={`/produit/${bestSeller.slug}`} className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105 flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Découvrir</span>
              </Link>
            </div>
          </div>
        )}

        {/* Grille des produits Afisac */}
        {featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun produit Afisac disponible pour le moment.</p>
            <p className="text-gray-400 text-sm mt-2">Découvrez bientôt notre collection de sacs macramé.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Link to="/boutique?categorie=1" className="group inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span>Voir tous les Afisac</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
          </Link>
          <p className="text-gray-400 text-xs mt-3">Collection de sacs macramé Afisac</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
