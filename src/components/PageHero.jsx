import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const PageHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="relative h-40 md:h-48 lg:h-52 flex items-center overflow-hidden rounded-b-2xl shadow-lg">
      {/* Background avec overlay léger */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage || 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1200'})`,
          filter: 'brightness(0.8)'
        }}
      />
      
      {/* Overlay gradient subtil */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      
      {/* Contenu */}
      <div className="relative container-custom z-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-white/80 text-xs mb-2">
          <Link to="/" className="hover:text-yellow-300 transition flex items-center space-x-1">
            <Home className="w-3 h-3" />
            <span>Accueil</span>
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-yellow-300 font-medium">{title}</span>
        </div>
        
        {/* Titre */}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
          {title}
        </h1>
        
        {/* Sous-titre */}
        {subtitle && (
          <p className="text-white/90 text-xs md:text-sm max-w-2xl line-clamp-2">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
