import React, { useState } from 'react';
import PageHero from '../../components/PageHero';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaTiktok, FaLinkedin } from 'react-icons/fa';
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
    setTimeout(() => {
      toast.success('Message envoyé ! Nous vous répondrons rapidement.');
      setFormData({ nom: '', email: '', sujet: '', message: '' });
      setSubmitted(true);
      setLoading(false);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div>
      <PageHero 
        title="Contactez-nous" 
        subtitle="Une question ? Un projet ? N'hésitez pas à nous écrire"
        backgroundImage="https://res.cloudinary.com/dzxesa3wi/image/upload/v1779441636/WhatsApp_Image_2026-05-03_at_13.14.05_hl21fy.jpg"
      />

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Nos coordonnées</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Adresse</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">NADJO, Porto-Novo, Bénin</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Téléphone</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">+229 01 96 06 22 87</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">afiavitossa@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Horaires</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Lun-Ven: 9h-18h<br />Sam: 10h-14h</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Suivez-nous</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition">
                    <FaFacebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition">
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition">
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition">
                    <FaTiktok className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom complet</label>
                    <input type="text" name="nom" value={formData.nom} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:border-gray-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:border-gray-600" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sujet</label>
                  <input type="text" name="sujet" value={formData.sujet} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:border-gray-600" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:border-gray-600"></textarea>
                </div>
                
                <button type="submit" disabled={loading} className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center gap-2">
                  {loading ? 'Envoi...' : <><Send className="w-4 h-4" /> Envoyer</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
