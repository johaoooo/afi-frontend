import React from 'react';
import { 
  Truck, Lock, Headphones, Leaf, 
  Globe, HandMetal, Gem, Clock, 
  ThumbsUp, Sparkles
} from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    { icon: Truck, title: 'Livraison rapide', desc: 'Expédition sous 24h au Bénin', color: 'from-blue-500 to-blue-600' },
    { icon: Lock, title: 'Paiement sécurisé', desc: 'Wave, MTN, Orange Money, Carte', color: 'from-green-500 to-green-600' },
    { icon: Headphones, title: 'Support client', desc: 'À votre écoute 7j/7', color: 'from-purple-500 to-purple-600' },
    { icon: Leaf, title: 'Matériaux naturels', desc: 'Produits écologiques et durables', color: 'from-emerald-500 to-emerald-600' },
    { icon: Globe, title: 'Made in Africa', desc: 'Valorisation du savoir-faire local', color: 'from-orange-500 to-orange-600' },
    { icon: HandMetal, title: 'Fait main', desc: 'Chaque pièce est unique', color: 'from-red-500 to-red-600' },
    { icon: Gem, title: 'Qualité premium', desc: 'Sélection rigoureuse des matériaux', color: 'from-indigo-500 to-indigo-600' },
    { icon: Clock, title: 'Service rapide', desc: 'Traitement des commandes', color: 'from-teal-500 to-teal-600' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <ThumbsUp className="w-4 h-4" />
            <span className="text-sm font-semibold">Pourquoi nous choisir</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Nos <span className="text-green-600">engagements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Nous mettons un point d'honneur à vous offrir la meilleure expérience d'achat
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
