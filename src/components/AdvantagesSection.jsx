import React, { useState, useEffect } from 'react';
import { Truck, Shield, Headphones, Clock, Award, Globe, Leaf, Heart } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AdvantagesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const advantages = [
    { icon: Truck, title: 'Livraison offerte', description: 'Partout au Bénin', color: 'bg-green-100 dark:bg-green-900/30', iconColor: 'text-green-600 dark:text-green-400' },
    { icon: Shield, title: 'Paiement sécurisé', description: 'Transactions protégées', color: 'bg-yellow-100 dark:bg-yellow-900/30', iconColor: 'text-yellow-600 dark:text-yellow-400' },
    { icon: Headphones, title: 'Support 7j/7', description: 'À votre écoute', color: 'bg-red-100 dark:bg-red-900/30', iconColor: 'text-red-600 dark:text-red-400' },
    { icon: Clock, title: 'Service rapide', description: 'Traitement sous 24h', color: 'bg-blue-100 dark:bg-blue-900/30', iconColor: 'text-blue-600 dark:text-blue-400' },
    { icon: Award, title: 'Qualité garantie', description: '100% artisanal', color: 'bg-purple-100 dark:bg-purple-900/30', iconColor: 'text-purple-600 dark:text-purple-400' },
    { icon: Globe, title: 'Made in Africa', description: 'Valorisation locale', color: 'bg-orange-100 dark:bg-orange-900/30', iconColor: 'text-orange-600 dark:text-orange-400' },
    { icon: Leaf, title: 'Écologique', description: 'Matériaux naturels', color: 'bg-emerald-100 dark:bg-emerald-900/30', iconColor: 'text-emerald-600 dark:text-emerald-400' },
    { icon: Heart, title: 'Satisfaction client', description: 'Support réactif', color: 'bg-rose-100 dark:bg-rose-900/30', iconColor: 'text-rose-600 dark:text-rose-400' },
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

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  const goToSlide = (index) => { setIsAutoPlaying(false); setCurrentIndex(index); setTimeout(() => setIsAutoPlaying(true), 5000); };

  return (
    // Fond UNIFORME en mode clair ET en mode sombre
    <section className="py-8 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
            Pourquoi choisir <span className="text-green-600 dark:text-green-400">AFI Collection</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="relative">
          <button onClick={prevSlide} className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-20 bg-white dark:bg-gray-800 shadow-md rounded-full p-1.5 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110">
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="overflow-hidden px-2">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {advantages.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((adv, idx) => (
                      <div key={idx} className="group relative overflow-hidden rounded-xl p-3 transition-all duration-500 hover:shadow-md hover:-translate-y-1 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                        <div className="relative z-10 flex flex-col items-center text-center">
                          <div className={`${adv.color} p-2 rounded-full group-hover:scale-110 transition-all duration-300 shadow-sm mb-2`}>
                            <adv.icon className={`w-5 h-5 ${adv.iconColor} group-hover:rotate-12 transition-transform duration-300`} />
                          </div>
                          <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-0.5">{adv.title}</h3>
                          <p className="text-gray-500 dark:text-gray-400 text-xs">{adv.description}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={nextSlide} className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-20 bg-white dark:bg-gray-800 shadow-md rounded-full p-1.5 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex justify-center gap-1.5 mt-4">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button key={idx} onClick={() => goToSlide(idx)} className={`transition-all duration-300 rounded-full ${currentIndex === idx ? 'w-5 h-1.5 bg-green-600 dark:bg-green-400' : 'w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
