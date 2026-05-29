import React, { useState } from 'react';
import PageHero from '../../components/PageHero';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulation d'envoi
    setTimeout(() => {
      toast.success('Message envoyé ! Nous vous répondrons rapidement.');
      setFormData({ nom: '', email: '', sujet: '', message: '' });
      setSubmitted(true);
      setLoading(false);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    { icon: Phone, title: 'Téléphone', details: ['+229 99 99 99 99', '+229 97 97 97 97'], color: 'bg-green-100', iconColor: 'text-green-600', hoverColor: 'hover:bg-green-50' },
    { icon: Mail, title: 'Email', details: ['contact@aficollection.com', 'afi.collection@gmail.com'], color: 'bg-yellow-100', iconColor: 'text-yellow-600', hoverColor: 'hover:bg-yellow-50' },
    { icon: MapPin, title: 'Adresse', details: ['Cotonou, Bénin', 'Quartier Saint-Michel'], color: 'bg-red-100', iconColor: 'text-red-600', hoverColor: 'hover:bg-red-50' },
    { icon: Clock, title: 'Horaires', details: ['Lundi - Vendredi: 9h - 18h', 'Samedi: 10h - 14h'], color: 'bg-green-100', iconColor: 'text-green-600', hoverColor: 'hover:bg-green-50' },
  ];

  return (
    <div>
      <PageHero 
        title="Contactez-nous" 
        subtitle="Nous sommes à votre écoute pour toute question sur nos produits ou formations"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200"
      />

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Infos contact - Cartes améliorées */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, idx) => (
              <div 
                key={idx} 
                className={`${info.color} ${info.hoverColor} rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-transparent hover:border-green-200`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-md group-hover:scale-110 transition">
                    <info.icon className={`w-5 h-5 ${info.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1" style={{ fontFamily: 'Calibri, sans-serif' }}>{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Carte des réseaux sociaux */}
            <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-5 text-center border border-green-200">
              <h3 className="font-bold text-gray-800 mb-3" style={{ fontFamily: 'Calibri, sans-serif' }}>Suivez-nous</h3>
              <div className="flex justify-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
                  <span className="text-white text-sm">i</span>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
                  <span className="text-white text-sm">w</span>
                </div>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
                  <span className="text-white text-sm">t</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact amélioré */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-semibold" style={{ fontFamily: 'Calibri, sans-serif' }}>Formulaire de contact</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Calibri, sans-serif' }}>Envoyez-nous un message</h2>
              <p className="text-gray-500" style={{ fontFamily: 'Calibri, sans-serif' }}>Nous vous répondrons dans les meilleurs délais</p>
            </div>
            
            {submitted ? (
              <div className="text-center py-8 animate-fadeInUp">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Calibri, sans-serif' }}>Message envoyé !</h3>
                <p className="text-gray-500" style={{ fontFamily: 'Calibri, sans-serif' }}>Merci de nous avoir contactés. Nous vous répondrons rapidement.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-1 font-medium" style={{ fontFamily: 'Calibri, sans-serif' }}>Nom complet</label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                      style={{ fontFamily: 'Calibri, sans-serif' }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 font-medium" style={{ fontFamily: 'Calibri, sans-serif' }}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                      style={{ fontFamily: 'Calibri, sans-serif' }}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1 font-medium" style={{ fontFamily: 'Calibri, sans-serif' }}>Sujet</label>
                  <input
                    type="text"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                    style={{ fontFamily: 'Calibri, sans-serif' }}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-1 font-medium" style={{ fontFamily: 'Calibri, sans-serif' }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition resize-none"
                    style={{ fontFamily: 'Calibri, sans-serif' }}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full bg-gradient-to-r from-green-600 to-yellow-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Calibri, sans-serif' }}
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Carte Google Maps améliorée */}
        <div className="mt-12">
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-64 md:h-96 shadow-lg border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63460.83919104986!2d2.38354415!3d6.44118845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a2c1b8e8f8f9%3A0x8e8f8f9a8e8f8f9!2sCotonou%2C%20Benin!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="AFI Collection Location"
            ></iframe>
          </div>
        </div>

        {/* Section FAQ rapide */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 text-xl">🛒</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-1" style={{ fontFamily: 'Calibri, sans-serif' }}>Commande en ligne</h4>
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>Paiement sécurisé</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-yellow-600 text-xl">🚚</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-1" style={{ fontFamily: 'Calibri, sans-serif' }}>Livraison rapide</h4>
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>Partout au Bénin</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-red-600 text-xl">🔄</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-1" style={{ fontFamily: 'Calibri, sans-serif' }}>Satisfait ou remboursé</h4>
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>14 jours pour échanger</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
