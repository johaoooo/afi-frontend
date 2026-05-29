import React from 'react';
import { Mail, Bell, Sparkles, Send } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-700 via-green-600 to-yellow-600">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Bell className="w-4 h-4" />
              <span className="text-sm font-semibold">Newsletter exclusive</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Restez <span className="text-yellow-300">connectés</span>
            </h2>
            <p className="text-white/90 mb-4">
              Recevez nos offres spéciales et découvrez nos nouveautés en avant-première
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Promos exclusives</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4 text-yellow-300" />
                <span>Événements</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-1 px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-green-500 transition"
              />
              <button type="submit" className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition flex items-center gap-2 justify-center whitespace-nowrap">
                <Send className="w-4 h-4" />
                <span>S'abonner</span>
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-3 text-center">
              Pas de spam, vous pouvez vous désinscrire à tout moment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
