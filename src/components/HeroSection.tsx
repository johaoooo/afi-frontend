import { Link } from 'react-router-dom';
import { FiShoppingBag, FiBookOpen, FiStar } from 'react-icons/fi';

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Motif décoratif vert */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border-4 border-green-700 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 border-4 border-green-700 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-green-700 rounded-full"></div>
      </div>
      
      {/* Contenu */}
      <div className="relative container mx-auto text-center z-10 px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <FiStar className="w-4 h-4 text-green-700" />
            <span className="text-green-700 text-sm font-medium tracking-wide">Collections uniques</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4 leading-tight">
            AFI
            <span className="text-green-600">Collection</span>
            <span className="block text-2xl md:text-3xl mt-2 font-light text-gray-600 tracking-wide">L'Élégance Artisanale</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Découvrez des créations uniques, faites main avec passion par des artisans talentueux.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/boutique" className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 group">
              <FiShoppingBag className="w-5 h-5 group-hover:scale-110 transition" />
              <span>Découvrir la boutique</span>
            </Link>
            <Link to="/formations" className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-700 hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 group">
              <FiBookOpen className="w-5 h-5 group-hover:scale-110 transition" />
              <span>Nos formations</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
