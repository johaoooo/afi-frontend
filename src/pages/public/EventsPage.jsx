import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PageHero from '../../components/PageHero';
import { Calendar, MapPin, Clock, Sparkles, Users, Award, ArrowRight, Ticket, Star } from 'lucide-react';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('aVenir');
  const [loading, setLoading] = useState(true);
  const [hoveredEvent, setHoveredEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`https://afi-backend-rneb.onrender.com/api/evenements?type=${filter}`);
        setEvents(response.data.events || []);
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [filter]);

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
        title="Foires & Événements" 
        subtitle="Retrouvez AFI Collection dans les salons et foires artisanales. Venez découvrir nos créations en personne !"
        backgroundImage="https://images.unsplash.com/photo-1566737236501-e88e7b6ccecf?w=1600"
      />

      <div className="container-custom py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold">Notre agenda</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2">
            Prochains <span className="text-green-600 dark:text-green-400">Événements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Découvrez où nous trouver et venez rencontrer nos artisans
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          <button 
            onClick={() => setFilter('aVenir')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              filter === 'aVenir' 
                ? 'bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-lg' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" />À venir</span>
          </button>
          <button 
            onClick={() => setFilter('passe')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              filter === 'passe' 
                ? 'bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-lg' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />Passés</span>
          </button>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
              <Calendar className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {filter === 'aVenir' ? 'Aucun événement à venir' : 'Aucun événement passé'}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {filter === 'aVenir' ? 'Revenez bientôt pour découvrir nos prochaines dates !' : 'Aucun événement passé pour le moment'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="relative group"
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 rounded-2xl blur-md transition-all duration-500 ${hoveredEvent === event.id ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className="relative block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="absolute top-4 right-4 z-10">
                    {event.estAVenir ? (
                      <span className="bg-gradient-to-r from-green-600 to-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />À venir
                      </span>
                    ) : (
                      <span className="bg-gray-500 text-white text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                        <Calendar className="w-3 h-3" />Passé
                      </span>
                    )}
                  </div>
                  <div className="h-56 overflow-hidden bg-gradient-to-br from-green-100 to-yellow-100 dark:from-green-900/50 dark:to-yellow-900/50">
                    <img 
                      src={event.imagePrincipale || 'https://images.unsplash.com/photo-1566737236501-e88e7b6ccecf?w=600'}
                      alt={event.titre}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-green-600 transition line-clamp-1">
                      {event.titre}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-green-600" /><span>{event.lieu}, {event.ville} ({event.pays})</span></div>
                      <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-green-600" /><span>{new Date(event.dateDebut).toLocaleDateString('fr-FR')} - {new Date(event.dateFin).toLocaleDateString('fr-FR')}</span></div>
                      {event.horaires && (<div className="flex items-center gap-2"><Clock className="w-4 h-4 text-green-600" /><span>{event.horaires}</span></div>)}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 line-clamp-2">
                      {event.descriptionCourte || 'Rejoignez-nous lors de cet événement pour découvrir nos créations uniques.'}
                    </p>
                    {event.stand && (
                      <div className="mt-4 inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs px-3 py-1.5 rounded-full">
                        <Ticket className="w-3 h-3" /><span>Stand: {event.stand}</span>
                      </div>
                    )}
                    <div className="mt-5 pt-3 border-t border-gray-100 dark:border-gray-700">
                      <button className="flex items-center gap-2 text-green-600 dark:text-green-400 group-hover:gap-3 transition-all duration-300">
                        <span className="text-sm font-semibold">Plus d'informations</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </button>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filter === 'aVenir' && events.length > 0 && (
          <div className="mt-16 p-8 bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-3xl text-center border-2 border-green-200 dark:border-green-800">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4" /><span className="text-sm font-semibold">Pourquoi nous rejoindre ?</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Venez rencontrer nos artisans</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Lors de nos événements, profitez d'ateliers gratuits, de démonstrations en direct et d'offres exclusives.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-green-700 dark:text-green-400"><Star className="w-5 h-5 fill-yellow-500 text-yellow-500" /><span>Démonstrations live</span></div>
              <div className="flex items-center gap-2 text-green-700 dark:text-green-400"><Award className="w-5 h-5" /><span>Offres exclusives</span></div>
              <div className="flex items-center gap-2 text-green-700 dark:text-green-400"><Users className="w-5 h-5" /><span>Rencontres artisans</span></div>
            </div>
          </div>
        )}
      </div>

      <section className="py-12 bg-gradient-to-r from-green-700 to-yellow-600 dark:from-green-900 dark:to-yellow-900">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3">
            <Calendar className="w-3 h-3 text-yellow-300" /><span className="text-white text-xs font-semibold">Restez informé</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Ne manquez aucun événement</h3>
          <p className="text-white/90 text-sm mb-4 max-w-md mx-auto">Inscrivez-vous pour recevoir nos prochaines dates</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Votre email" className="flex-1 px-4 py-2 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <button className="bg-white text-green-700 px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition transform hover:scale-105">S'abonner</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
