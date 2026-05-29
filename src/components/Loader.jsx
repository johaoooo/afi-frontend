import React, { useEffect, useState } from 'react';
import { Sparkles, ShoppingBag, Heart } from 'lucide-react';

const Loader = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-yellow-700">
      {/* Motif décoratif */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border-4 border-white rounded-full"></div>
      </div>

      {/* Contenu du loader */}
      <div className="relative text-center z-10">
        {/* Logo animé */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-1 animate-bounce-slow">
            <span className="text-5xl font-bold text-white animate-pulse">A</span>
            <span className="text-5xl font-bold text-yellow-400 animate-pulse delay-100">F</span>
            <span className="text-5xl font-bold text-red-500 animate-pulse delay-200">I</span>
          </div>
        </div>

        {/* Titre */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          AFI Collection
        </h1>
        <p className="text-white/80 text-sm mb-6">
          L'élégance artisanale
        </p>

        {/* Barre de progression animée */}
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden mx-auto mb-4">
          <div className="h-full w-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full animate-loading-bar"></div>
        </div>

        {/* Texte de chargement avec points animés */}
        <p className="text-white/60 text-sm">
          Chargement{dots}
        </p>

        {/* Icônes flottantes */}
        <div className="absolute -top-10 -right-10 animate-float-slow">
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </div>
        <div className="absolute -bottom-10 -left-10 animate-float">
          <ShoppingBag className="w-6 h-6 text-green-400" />
        </div>
        <div className="absolute top-1/2 -right-8 animate-float-fast">
          <Heart className="w-5 h-5 text-red-400" />
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float 2s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 1s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
};

export default Loader;
