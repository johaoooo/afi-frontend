import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, GraduationCap, Truck, Shield, Headphones, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[75vh] md:h-[70vh] flex items-center justify-center overflow-hidden rounded-b-3xl md:rounded-b-4xl shadow-2xl">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1598622025912-9b72e5fe6b8c?w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/85 via-green-800/80 to-yellow-700/75" />
      
      {/* Motif décoratif */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 border-4 border-white rounded-full"></div>
      </div>
      
      {/* Contenu */}
      <div className="relative container-custom text-center z-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-white text-sm font-medium tracking-wide">Collections uniques</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            AFI
            <span className="text-yellow-400">Collection</span>
            <span className="block text-2xl md:text-3xl mt-2 font-light tracking-wide">L'Élégance Artisanale</span>
          </h1>
          
          <p className="text-sm md:text-base text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed">
            Découvrez des créations uniques, faites main avec passion par des artisans talentueux.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/boutique" className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 group">
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition" />
              <span>Découvrir la boutique</span>
            </Link>
            <Link to="/formations" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300 inline-flex items-center justify-center gap-2 group">
              <GraduationCap className="w-5 h-5" />
              <span>Nos formations</span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/80 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-yellow-400" />
              <span>Livraison offerte</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-yellow-400" />
              <span>Paiement sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-yellow-400" />
              <span>Support 7j/7</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-1.5 bg-white rounded-full mt-1.5 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
