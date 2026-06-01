import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Laptop, Users, ArrowRight, GraduationCap, Sparkles } from 'lucide-react';

const TrainingsSection = ({ trainings }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-4">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm font-semibold">Apprentissage pratique</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2">
            Formations <span className="text-green-600 dark:text-green-400">artisanales</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Apprenez les techniques traditionnelles avec nos experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainings.slice(0, 3).map((training, idx) => (
            <Link 
              key={training.id} 
              to={`/formation/${training.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-gradient-to-r from-green-600 to-yellow-500 text-white text-xs px-3 py-1 rounded-full">{training.categorie}</span>
                </div>
                <img 
                  src={training.imagePrincipale || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500'} 
                  alt={training.titre}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition line-clamp-1">
                  {training.titre}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 line-clamp-2">
                  {training.descriptionCourte}
                </p>
                <div className="flex flex-wrap gap-3 mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span>{training.duree}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {training.enLigne ? <Laptop className="w-4 h-4 text-green-600 dark:text-green-400" /> : <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />}
                    <span>{training.enLigne ? 'En ligne' : training.lieu}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span>{training.placesDisponibles} places</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div>
                    {training.estEnPromotion && training.prixPromo ? (
                      <>
                        <span className="text-green-700 dark:text-green-400 font-bold text-lg">{training.prixPromo} FCFA</span>
                        <span className="text-gray-400 line-through text-sm ml-2">{training.prix} FCFA</span>
                      </>
                    ) : (
                      <span className="text-green-700 dark:text-green-400 font-bold text-lg">{training.prix} FCFA</span>
                    )}
                  </div>
                  <ArrowRight className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/formations" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span>Voir toutes les formations</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingsSection;
