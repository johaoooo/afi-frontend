import React, { useEffect, useState } from 'react';
import { Sparkles, ShoppingBag, Heart, Feather, Scissors, Palette, Globe } from 'lucide-react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(0);
  const [dots, setDots] = useState('');

  const icons = [
    { icon: Feather, name: 'Macramé', delay: 0 },
    { icon: Scissors, name: 'Artisanat', delay: 0.3 },
    { icon: Palette, name: 'Création', delay: 0.6 },
    { icon: Heart, name: 'Passion', delay: 0.9 },
    { icon: Globe, name: 'Local', delay: 1.2 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const dotInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    const iconInterval = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % icons.length);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(dotInterval);
      clearInterval(iconInterval);
    };
  }, []);

  const CurrentIcon = icons[currentIcon].icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-yellow-800 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-white rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border-4 border-white rounded-full animate-spin-slow-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/30 rounded-full"></div>
        
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white"></div>
          <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-white"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-white"></div>
        </div>

        <div className="absolute top-1/3 right-1/4 w-32 h-32">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.sin(i * 30 * Math.PI / 180) * 50}%`,
                left: `${Math.cos(i * 30 * Math.PI / 180) * 50}%`,
                animation: `pulse 2s ease-in-out ${i * 0.2}s infinite`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative text-center z-10 max-w-md mx-auto px-6">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-white/5 rounded-full animate-ping-slow"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/10 rounded-full animate-pulse-slow"></div>
          </div>
          <div className="relative w-20 h-20 bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl animate-float">
            <CurrentIcon className="w-10 h-10 text-white" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">
          AFI<span className="text-yellow-400">Collection</span>
        </h1>
        
        {/* Nouveau slogan */}
        <p className="text-white/80 text-sm mb-6 tracking-wide font-medium">
          Tisser l'avenir, valoriser le local
        </p>

        <div className="w-full max-w-xs mx-auto mb-4">
          <div className="relative h-1.5 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/50 text-xs mt-2 font-mono">
            {progress}%{dots}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {icons.map((item, idx) => (
            <span
              key={idx}
              className={`text-xs px-3 py-1 rounded-full transition-all duration-500 ${
                idx === currentIcon
                  ? 'bg-white/20 text-white scale-105'
                  : 'bg-white/5 text-white/40'
              }`}
              style={{ transitionDelay: `${item.delay}s` }}
            >
              {item.name}
            </span>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-white/40 text-xs italic">
            "L'artisanat, c'est l'âme d'un peuple qui se transmet à travers les générations"
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
