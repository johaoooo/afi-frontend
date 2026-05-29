import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, GraduationCap, Truck, Shield, Headphones, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'AFI Collection',
    subtitle: 'L\'Élégance Artisanale',
    description: 'Des créations uniques faites main avec passion.',
    bgImage: '/images/slide2.png',
    objectPosition: 'center 35%',
    buttonText: 'Découvrir',
    buttonLink: '/boutique',
    buttonIcon: ShoppingBag,
    badge: 'Collections uniques'
  },
  {
    id: 2,
    title: 'Formations',
    subtitle: 'Apprenez les techniques',
    description: 'Formations pratiques avec nos experts artisans.',
    bgImage: '/images/slide3.png',
    objectPosition: 'center',
    buttonText: 'Voir les formations',
    buttonLink: '/formations',
    buttonIcon: GraduationCap,
    badge: 'Apprentissage pratique'
  },
  {
    id: 3,
    title: 'Teinture & Macramé',
    subtitle: 'Couleurs et traditions',
    description: 'Créations uniques faites main avec des matériaux naturels.',
    bgImage: '/images/slide4.png',
    objectPosition: 'center 25%',
    buttonText: 'Explorer',
    buttonLink: '/boutique',
    buttonIcon: ShoppingBag,
    badge: 'Artisanat authentique'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="relative h-[80vh] md:h-[75vh] overflow-hidden rounded-b-3xl md:rounded-b-4xl shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img 
            src={slide.bgImage}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: slide.objectPosition }}
          />
          
          {/* Overlay plus sombre pour meilleure lisibilité du texte */}
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative container-custom h-full flex items-center justify-center z-20">
            <div className="max-w-2xl mx-auto text-center px-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md rounded-full px-3 py-1 mb-4 animate-fadeInUp border border-white/30">
                <Sparkles className="w-3 h-3 text-yellow-400" />
                <span className="text-white text-xs font-medium tracking-wide">{slide.badge}</span>
              </div>
              
              {/* Titre */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight animate-slideInLeft drop-shadow-lg">
                {slide.title}
                <span className="block text-xl md:text-2xl mt-1 font-light tracking-wide text-yellow-400">{slide.subtitle}</span>
              </h1>
              
              {/* Description */}
              <p className="text-sm md:text-base text-white mb-6 max-w-lg mx-auto leading-relaxed animate-slideInRight delay-200">
                {slide.description}
              </p>
              
              {/* Bouton */}
              <Link 
                to={slide.buttonLink}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp delay-300 text-sm"
              >
                <slide.buttonIcon className="w-4 h-4" />
                <span>{slide.buttonText}</span>
              </Link>

              {/* Avantages - plus compacts */}
              <div className="flex flex-wrap justify-center gap-3 mt-8 animate-fadeInUp delay-400">
                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md rounded-full px-2.5 py-1 border border-white/20">
                  <Truck className="w-3 h-3 text-yellow-400" />
                  <span className="text-white text-[11px]">Livraison offerte</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md rounded-full px-2.5 py-1 border border-white/20">
                  <Shield className="w-3 h-3 text-yellow-400" />
                  <span className="text-white text-[11px]">Paiement sécurisé</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md rounded-full px-2.5 py-1 border border-white/20">
                  <Headphones className="w-3 h-3 text-yellow-400" />
                  <span className="text-white text-[11px]">Support 7j/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 backdrop-blur-md p-2 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110 border border-white/20"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 backdrop-blur-md p-2 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110 border border-white/20"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Dots indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-6 h-1.5 bg-yellow-400'
                : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 animate-bounce cursor-pointer">
        <div className="w-4 h-7 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-1.5 bg-white rounded-full mt-1.5 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
