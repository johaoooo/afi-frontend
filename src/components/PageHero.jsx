import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const PageHero = ({ title, subtitle, backgroundImage }) => {
  // Images locales selon le titre
  const getImageUrl = () => {
    if (backgroundImage) return backgroundImage;
    
    // Images locales par défaut
    if (title?.toLowerCase().includes('formation')) {
      return '/images/hero/formations.jpg';
    }
    if (title?.toLowerCase().includes('foire') || title?.toLowerCase().includes('événement')) {
      return '/images/hero/events.jpg';
    }
    if (title?.toLowerCase().includes('contact')) {
      return '/images/hero/contact.jpg';
    }
    if (title?.toLowerCase().includes('propos')) {
      return '/images/hero/about.jpg';
    }
    // Image par défaut
    return '/images/slide2.png';
  };
  
  const imageUrl = getImageUrl();
  
  return (
    <section className="relative h-48 md:h-56 lg:h-64 flex items-center justify-center overflow-hidden rounded-b-2xl shadow-lg">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
      
      <div className="relative container-custom text-center z-10 px-4">
        <div className="flex justify-center items-center space-x-2 text-white/80 text-xs mb-2">
          <Link to="/" className="hover:text-yellow-300 transition flex items-center space-x-1">
            <Home className="w-3 h-3" />
            <span>Accueil</span>
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-yellow-300 font-medium">{title}</span>
        </div>
        
        <h1 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-white/90 text-xs md:text-sm max-w-2xl mx-auto drop-shadow-md line-clamp-2">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
