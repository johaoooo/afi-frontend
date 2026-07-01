import { Link } from 'react-router-dom';

export function AboutHero() {
  return (
    <div className="relative bg-[#1a6b3c] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12 py-16 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-green-300 font-medium mb-4">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="text-green-300/50">/</span>
            <span className="text-white">À propos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4 leading-tight">
            L'élégance artisanale <br />
            <span className="text-green-300">au service de la tradition.</span>
          </h1>
          <p className="text-green-100/80 text-lg max-w-xl leading-relaxed">
            Découvrez l'histoire d'AFI Collection, une aventure humaine 
            dédiée à la valorisation des savoir-faire artisanaux du Bénin.
          </p>
        </div>
      </div>
    </div>
  );
}
