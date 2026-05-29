import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import PageHero from '../../components/PageHero';
import { 
  Clock, MapPin, Laptop, Users, Award, 
  Calendar, BookOpen, CheckCircle, ArrowLeft,
  Sparkles, CreditCard
} from 'lucide-react';
import toast from 'react-hot-toast';

const TrainingDetailPage = () => {
  const { slug } = useParams();
  const [training, setTraining] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTraining = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/formations/${slug}`);
        setTraining(response.data.formation);
      } catch (error) {
        console.error('Erreur:', error);
        toast.error('Formation non trouvée');
      } finally {
        setLoading(false);
      }
    };
    fetchTraining();
  }, [slug]);

  const handleInscription = () => {
    toast.success('Formulaire d\'inscription à venir');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!training) {
    return (
      <div className="container-custom py-12 text-center">
        <h2 className="text-2xl font-bold">Formation non trouvée</h2>
        <Link to="/formations" className="btn-primary mt-4 inline-block">Voir les formations</Link>
      </div>
    );
  }

  const prixFinal = training.estEnPromotion && training.prixPromo ? training.prixPromo : training.prix;

  return (
    <div>
      <PageHero 
        title={training.titre} 
        subtitle={training.descriptionCourte}
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
      />

      <div className="container-custom py-8">
        {/* Fil d'Ariane */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-green-600">Accueil</Link>
          <span>/</span>
          <Link to="/formations" className="hover:text-green-600">Formations</Link>
          <span>/</span>
          <span className="text-gray-800">{training.titre}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2">
            {/* Image principale */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-6">
              <img 
                src={training.imagePrincipale || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800'} 
                alt={training.titre}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 mb-6">
              <h2 className="text-xl font-playfair font-bold text-gray-800 mb-4">À propos de cette formation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {training.descriptionLongue || training.descriptionCourte || 'Découvrez notre formation complète pour maîtriser cet art traditionnel.'}
              </p>
            </div>

            {/* Programme */}
            {training.programme && (
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 mb-6">
                <h2 className="text-xl font-playfair font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  Programme détaillé
                </h2>
                <div className="prose max-w-none">
                  <p className="text-gray-600 whitespace-pre-line">{training.programme}</p>
                </div>
              </div>
            )}

            {/* Prérequis */}
            {training.prerequis && (
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <h2 className="text-xl font-playfair font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Prérequis
                </h2>
                <p className="text-gray-600">{training.prerequis}</p>
              </div>
            )}
          </div>

          {/* Sidebar - Carte d'inscription avec contour */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Cadre avec effet de contour */}
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 rounded-2xl blur opacity-75"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-green-600" />
                      Détails de la formation
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">Durée : <span className="font-semibold">{training.duree || 'Flexible'}</span></span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        {training.enLigne ? (
                          <Laptop className="w-4 h-4 text-green-600" />
                        ) : (
                          <MapPin className="w-4 h-4 text-green-600" />
                        )}
                        <span className="text-gray-600">Lieu : <span className="font-semibold">{training.enLigne ? 'En ligne' : (training.lieu || 'Sur place')}</span></span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Users className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">Places : <span className="font-semibold">{training.placesDisponibles || 10} disponibles</span></span>
                      </div>
                      {training.horaires && (
                        <div className="flex items-center gap-3 text-sm">
                          <Calendar className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600">Horaires : <span className="font-semibold">{training.horaires}</span></span>
                        </div>
                      )}
                      {training.certificat && (
                        <div className="flex items-center gap-3 text-sm">
                          <Award className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600">Certificat <span className="font-semibold">délivré en fin de formation</span></span>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-gray-100 pt-4 mb-6">
                      <div className="text-center">
                        {training.estEnPromotion ? (
                          <>
                            <p className="text-3xl font-bold text-green-700">{prixFinal.toLocaleString()} FCFA</p>
                            <p className="text-gray-400 line-through text-sm">{training.prix.toLocaleString()} FCFA</p>
                          </>
                        ) : (
                          <p className="text-3xl font-bold text-green-700">{training.prix.toLocaleString()} FCFA</p>
                        )}
                        <p className="text-xs text-gray-400 mt-1">TTC</p>
                      </div>
                    </div>

                    <button 
                      onClick={handleInscription}
                      className="w-full bg-gradient-to-r from-green-600 to-yellow-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <CreditCard className="w-4 h-4" />
                      S'inscrire maintenant
                    </button>
                    <p className="text-xs text-gray-400 text-center mt-3">
                      Paiement sécurisé • Wave • MTN • Orange Money
                    </p>
                  </div>
                </div>
              </div>

              {/* Bouton retour */}
              <Link 
                to="/formations" 
                className="mt-4 inline-flex items-center gap-2 text-gray-500 hover:text-green-600 transition text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour aux formations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetailPage;
