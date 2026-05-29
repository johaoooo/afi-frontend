import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PageHero from '../../components/PageHero';
import { Clock, MapPin, Laptop, Users, ArrowRight, Sparkles, Award, BookOpen, Calendar } from 'lucide-react';

const TrainingsPage = () => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/formations');
        setTrainings(response.data.formations || []);
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrainings();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <PageHero 
        title="Nos Formations" 
        subtitle="Apprenez l'artisanat africain avec nos experts. Des formations pratiques et certifiantes."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
      />
      
      <div className="container-custom py-12">
        {/* En-tête de section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-semibold">Formations artisanales</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">
            Choisissez la formation qui vous correspond
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training, index) => (
            <div
              key={training.id}
              className="relative"
              onMouseEnter={() => setHoveredCard(training.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Effet de contour lumineux au hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 rounded-2xl blur-md transition-all duration-500 ${hoveredCard === training.id ? 'opacity-100' : 'opacity-0'}`}></div>
              
              {/* Carte principale */}
              <Link 
                to={`/formation/${training.slug}`}
                className="relative block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200"
              >
                {/* Bannière de catégorie */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-green-600 to-green-700 text-white text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {training.categorie}
                  </span>
                </div>

                {/* Badge promotion */}
                {training.estEnPromotion && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      -{Math.round((1 - training.prixPromo/training.prix) * 100)}%
                    </span>
                  </div>
                )}

                {/* Image d'illustration */}
                <div className="h-48 overflow-hidden bg-gradient-to-br from-green-100 to-yellow-100">
                  <img 
                    src={training.imagePrincipale || `https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500`}
                    alt={training.titre}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500';
                    }}
                  />
                </div>

                {/* Contenu de la carte */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition line-clamp-1">
                    {training.titre}
                  </h3>
                  
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {training.descriptionCourte || 'Une formation complète pour maîtriser cet art traditionnel.'}
                  </p>
                  
                  {/* Détails */}
                  <div className="flex flex-wrap gap-3 mt-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{training.duree || 'Flexible'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {training.enLigne ? (
                        <Laptop className="w-3.5 h-3.5" />
                      ) : (
                        <MapPin className="w-3.5 h-3.5" />
                      )}
                      <span>{training.enLigne ? 'En ligne' : (training.lieu || 'Sur place')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>{training.placesDisponibles || 10} places</span>
                    </div>
                    {training.certificat && (
                      <div className="flex items-center gap-1 text-green-600">
                        <Award className="w-3.5 h-3.5" />
                        <span>Certifié</span>
                      </div>
                    )}
                  </div>

                  {/* Prix et action */}
                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                    <div>
                      {training.estEnPromotion && training.prixPromo ? (
                        <div className="flex items-center gap-2">
                          <span className="text-green-700 font-bold text-lg">{training.prixPromo.toLocaleString()} FCFA</span>
                          <span className="text-gray-400 line-through text-sm">{training.prix.toLocaleString()} FCFA</span>
                        </div>
                      ) : (
                        <span className="text-green-700 font-bold text-lg">{training.prix.toLocaleString()} FCFA</span>
                      )}
                      <p className="text-xs text-gray-400">TTC</p>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 group-hover:gap-3 transition-all duration-300">
                      <span className="text-sm font-semibold">S'inscrire</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </div>
                  </div>

                  {/* Indicateur de disponibilité */}
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Places disponibles</span>
                      <span>{training.placesDisponibles || 10}/{training.placesDisponibles || 10}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-600 to-yellow-500 rounded-full"
                        style={{ width: `${Math.min(100, ((training.placesDisponibles || 10) / (training.placesDisponibles || 10)) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Bordure colorée en bas */}
                <div className="h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
            </div>
          ))}
        </div>

        {/* Section FAQ rapide */}
        <div className="mt-16 p-6 bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl text-center border border-green-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Vous avez des questions ?</h3>
          <p className="text-gray-600 text-sm mb-4">Notre équipe est à votre disposition pour vous guider dans votre choix</p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-3 transition-all">
            <span>Contactez-nous</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingsPage;
