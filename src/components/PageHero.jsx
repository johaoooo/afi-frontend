import React from 'react';

const PageHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="relative h-48 md:h-56 lg:h-64 flex items-center justify-center overflow-hidden rounded-b-2xl shadow-lg">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%'
        }}
      />
      
      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
      
      {/* Contenu */}
      <div className="relative container-custom text-center z-10 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Titre */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 drop-shadow-lg">
            {title}
          </h1>
          
          {/* Sous-titre */}
          {subtitle && (
            <p className="text-white/95 text-sm md:text-base max-w-2xl mx-auto drop-shadow-md">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
