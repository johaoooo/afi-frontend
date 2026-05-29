import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, GraduationCap, Truck, Shield, Headphones, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

// Vos images sont dans public/images/
const slides = [
  {
    id: 1,
    title: 'AFI Collection',
    subtitle: 'L\'Élégance Artisanale',
    description: 'Découvrez des créations uniques, faites main avec passion par des artisans talentueux.',
    bgImage: '/images/slide2.png',
    buttonText: 'Découvrir la boutique',
    buttonLink: '/boutique',
    buttonIcon: ShoppingBag,
    badge: 'Collections uniques'
  },
  {
    id: 2,
    title: 'Formations Artisanales',
    subtitle: 'Apprenez les techniques traditionnelles',
    description: 'Formations pratiques avec nos experts artisans. Certificat à la clé.',
    bgImage: '/images/slide3.png',
    buttonText: 'Voir les formations',
    buttonLink: '/formations',
    buttonIcon: GraduationCap,
    badge: 'Apprentissage pratique'
  },
  {
    id: 3,
    title: 'Teinture & Macramé',
    subtitle: 'Couleurs et traditions',
    description: 'Découvrez nos créations uniques faites main avec des matériaux naturels.',
    bgImage: '/images/slide4.png',
    buttonText: 'Explorer la boutique',
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
    <section className="relative h-[75vh] md:h-[70vh] overflow-hidden rounded-b-3xl md:rounded-b-4xl shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/85 via-green-800/80 to-yellow-700/75" />
          
          <div className="relative container-custom h-full flex items-center z-20">
            <div className="max-w-3xl mx-auto text-center px-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fadeInUp">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium tracking-wide">{slide.badge}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight animate-slideInLeft">
                {slide.title}
                <span className="block text-2xl md:text-3xl mt-2 font-light tracking-wide text-yellow-400">{slide.subtitle}</span>
              </h1>
              
              <p className="text-sm md:text-base text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed animate-slideInRight delay-200">
                {slide.description}
              </p>
              
              <Link 
                to={slide.buttonLink}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp delay-300"
              >
                <slide.buttonIcon className="w-5 h-5" />
                <span>{slide.buttonText}</span>
              </Link>

              <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/80 text-xs md:text-sm animate-fadeInUp delay-400">
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
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 h-2 bg-yellow-400'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 animate-bounce cursor-pointer">
        <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-1.5 bg-white rounded-full mt-1.5 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
