import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const PageHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="relative h-48 md:h-56 lg:h-64 flex items-center overflow-hidden rounded-b-3xl shadow-2xl">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage || 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1200'})`,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Overlay avec les couleurs du logo */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-yellow-800/80" />
      
      {/* Contenu */}
      <div className="relative container-custom z-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-white/80 text-xs md:text-sm mb-2 md:mb-3" style={{ fontFamily: 'Calibri, sans-serif' }}>
          <Link to="/" className="hover:text-yellow-300 transition flex items-center space-x-1">
            <Home className="w-3 h-3 md:w-4 md:h-4" />
            <span>Accueil</span>
          </Link>
          <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
          <span className="text-yellow-300 font-medium">{title}</span>
        </div>
        
        {/* Titre */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2" style={{ fontFamily: 'Calibri, sans-serif' }}>
          {title}
        </h1>
        
        {/* Sous-titre */}
        {subtitle && (
          <p className="text-white/90 text-sm md:text-base max-w-2xl" style={{ fontFamily: 'Calibri, sans-serif' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
