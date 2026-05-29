import React, { useState, useEffect } from 'react';
import { Truck, Shield, Headphones, Clock, Award, Globe, Leaf, Heart } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AdvantagesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const advantages = [
    {
      icon: Truck,
      title: 'Livraison offerte',
      description: 'Partout au Bénin',
      color: 'bg-green-100',
      iconColor: 'text-green-600',
      bgGradient: 'from-green-50 to-green-100'
    },
    {
      icon: Shield,
      title: 'Paiement sécurisé',
      description: 'Transactions protégées',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      bgGradient: 'from-yellow-50 to-yellow-100'
    },
    {
      icon: Headphones,
      title: 'Support 7j/7',
      description: 'À votre écoute',
      color: 'bg-red-100',
      iconColor: 'text-red-600',
      bgGradient: 'from-red-50 to-red-100'
    },
    {
      icon: Clock,
      title: 'Service rapide',
      description: 'Traitement sous 24h',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: Award,
      title: 'Qualité garantie',
      description: '100% artisanal',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
      bgGradient: 'from-purple-50 to-purple-100'
    },
    {
      icon: Globe,
      title: 'Made in Africa',
      description: 'Valorisation locale',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
      bgGradient: 'from-orange-50 to-orange-100'
    },
    {
      icon: Leaf,
      title: 'Écologique',
      description: 'Matériaux naturels',
      color: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      bgGradient: 'from-emerald-50 to-emerald-100'
    },
    {
      icon: Heart,
      title: 'Satisfaction client',
      description: 'Support réactif',
      color: 'bg-rose-100',
      iconColor: 'text-rose-600',
      bgGradient: 'from-rose-50 to-rose-100'
    }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(advantages.length / itemsPerPage);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const getCurrentAdvantages = () => {
    const start = currentIndex * itemsPerPage;
    return advantages.slice(start, start + itemsPerPage);
  };

  return (
    <section className="py-8 bg-gradient-to-r from-white to-gray-50 border-b border-gray-100">
      <div className="container-custom">
        {/* Titre de la section - plus petit */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Pourquoi choisir <span className="text-green-600">AFI Collection</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Carrousel */}
        <div className="relative">
          {/* Flèche gauche */}
          <button
            onClick={prevSlide}
            className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-1.5 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Conteneur des cartes */}
          <div className="overflow-hidden px-2">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {advantages.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((adv, idx) => (
                      <div
                        key={idx}
                        className="group relative overflow-hidden rounded-xl p-3 transition-all duration-500 hover:shadow-md hover:-translate-y-1 bg-white border border-gray-100"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${adv.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`}></div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center">
                          <div className={`${adv.color} p-2 rounded-full group-hover:scale-110 transition-all duration-300 shadow-sm mb-2`}>
                            <adv.icon className={`w-5 h-5 ${adv.iconColor} group-hover:rotate-12 transition-transform duration-300`} />
                          </div>
                          
                          <h3 className="font-semibold text-sm text-gray-800 mb-0.5">{adv.title}</h3>
                          <p className="text-gray-500 text-xs">{adv.description}</p>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flèche droite */}
          <button
            onClick={nextSlide}
            className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-1.5 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Indicateurs (dots) - plus petits */}
        <div className="flex justify-center gap-1.5 mt-4">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? 'w-5 h-1.5 bg-green-600'
                  : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
