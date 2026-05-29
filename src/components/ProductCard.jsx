import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Eye, ShoppingCart, TrendingUp, Flame, Check, Zap } from 'lucide-react';

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const prixFinal = product.estEnPromotion && product.prixPromo ? product.prixPromo : product.prix;
  const reduction = product.estEnPromotion ? Math.round((1 - product.prixPromo / product.prix) * 100) : 0;

  const demoImages = [
    'https://images.unsplash.com/photo-1564229504985-403fb448ae0f?w=400',
    'https://images.unsplash.com/photo-1598622025912-9b72e5fe6b8c?w=400',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
  ];

  const images = product.images?.length ? product.images : demoImages;

  return (
    <div 
      className="relative group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Carte avec hauteur fixe */}
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border-2 border-green-400 group-hover:border-yellow-500 h-full flex flex-col">
        
        {/* Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
          {product.estEnPromotion && (
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
              <Flame className="w-3 h-3" />
              -{reduction}%
            </div>
          )}
          {product.estNouveaute && (
            <div className="bg-gradient-to-r from-green-600 to-green-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
              <Zap className="w-3 h-3" />
              Nouveau
            </div>
          )}
          {product.stock > 0 && product.stock < 5 && (
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
              <TrendingUp className="w-3 h-3" />
              Dernières pièces
            </div>
          )}
        </div>

        {/* Bouton like */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:scale-110 transition duration-300 hover:shadow-lg"
        >
          <Heart className={`w-4 h-4 transition ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>

        {/* Image - hauteur fixe */}
        <div className="relative h-56 flex-shrink-0 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img 
            src={images[selectedImage]} 
            alt={product.nom}
            className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${isHovered ? 'scale-110' : 'scale-100'}`}
            onLoad={() => setImageLoaded(true)}
          />
          
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center gap-4 transition-all duration-400 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <Link 
              to={`/produit/${product.slug}`}
              className="bg-white text-green-700 p-3 rounded-full hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Eye className="w-5 h-5" />
            </Link>
            <button className="bg-white text-green-700 p-3 rounded-full hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          {product.stock > 0 && (
            <div className="absolute bottom-3 left-3 z-20 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
              <div className="flex items-center gap-1">
                <Check className="w-3 h-3 text-green-400" />
                <span className="text-white text-xs">En stock</span>
              </div>
            </div>
          )}
        </div>

        {/* Infos produit - flex-grow pour occuper l'espace restant */}
        <div className="p-4 flex flex-col flex-grow">
          {product.categorie && (
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-green-600 font-semibold uppercase tracking-wider">
                {product.categorie.nom}
              </span>
            </div>
          )}
          
          <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-green-600 transition line-clamp-1">
            {product.nom}
          </h3>
          
          <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-grow">
            {product.descriptionCourte || 'Découvrez ce produit artisanal unique fait main avec passion.'}
          </p>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-gray-400">(4.9)</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <TrendingUp className="w-3 h-3" />
              <span>{product.nombreVentes || 128} vendus</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
            <div>
              {product.estEnPromotion ? (
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-green-700 font-bold text-xl">{prixFinal.toLocaleString()} FCFA</span>
                    <span className="text-gray-400 line-through text-sm">{product.prix.toLocaleString()} FCFA</span>
                  </div>
                  <p className="text-xs text-green-600 font-semibold mt-1">Économisez {reduction}%</p>
                </div>
              ) : (
                <span className="text-green-700 font-bold text-xl">{product.prix.toLocaleString()} FCFA</span>
              )}
            </div>
            
            <button className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-1">
              <ShoppingCart className="w-4 h-4" />
              <span>Ajouter</span>
            </button>
          </div>
        </div>

        {/* Bordure colorée animée en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
};

export default ProductCard;
