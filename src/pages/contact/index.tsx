import { useState } from 'react';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiSend, 
  FiCheckCircle, 
  FiMessageSquare,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiFacebook
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const contactInfos = [
    {
      icon: FiMapPin,
      title: 'Adresse',
      details: ['Cotonou, Bénin'],
      color: '#1a6b3c'
    },
    {
      icon: FiPhone,
      title: 'Téléphone',
      details: ['+229 XX XX XX XX'],
      link: 'tel:+22900000000',
      color: '#1a6b3c'
    },
    {
      icon: FiMail,
      title: 'Email',
      details: ['contact@aficollection.com'],
      link: 'mailto:contact@aficollection.com',
      color: '#1a6b3c'
    },
    {
      icon: FiClock,
      title: 'Horaires',
      details: ['Lun - Ven : 8h - 18h', 'Sam : 9h - 13h'],
      color: '#1a6b3c'
    }
  ];

  const socials = [
    { icon: FiFacebook, label: 'Facebook', href: '#', color: '#1877f2' },
    { icon: FiInstagram, label: 'Instagram', href: '#', color: '#e4405f' },
    { icon: FiTwitter, label: 'Twitter', href: '#', color: '#1da1f2' },
    { icon: FiLinkedin, label: 'LinkedIn', href: '#', color: '#0a66c2' }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
    })
  };

  return (
    <div className="bg-[#f5f8f5] min-h-screen">
      {/* Section supérieure avec dégradé */}
      <div className="relative bg-[#1a6b3c] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 md:px-12 py-16 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs text-green-300 font-medium mb-4">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="text-green-300/50">/</span>
              <span className="text-white">Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4 leading-tight">
              Parlons de votre <br />
              <span className="text-green-300">projet</span>
            </h1>
            <p className="text-green-100/80 text-lg max-w-xl leading-relaxed">
              Une question, une collaboration, un projet sur mesure ? 
              Nous sommes à votre écoute pour donner vie à vos idées.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Colonne gauche - Formulaire (3/5) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-green-100">
              <h2 className="text-2xl font-black text-gray-800 mb-2">Envoyez-nous un message</h2>
              <p className="text-gray-500 text-sm mb-6">
                Nous vous répondrons dans les 24 heures suivant votre demande.
              </p>
              
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-[#1a6b3c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheckCircle className="w-8 h-8 text-[#1a6b3c]" />
                  </div>
                  <h3 className="font-black text-gray-900 text-xl">Message envoyé !</h3>
                  <p className="text-gray-600 mt-2">
                    Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Nom complet <span className="text-[#1a6b3c]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition text-gray-800"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Email <span className="text-[#1a6b3c]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition text-gray-800"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Sujet <span className="text-[#1a6b3c]">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition text-gray-800"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message <span className="text-[#1a6b3c]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition resize-none text-gray-800"
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1a6b3c] hover:bg-[#14532d] text-white font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <FiSend className="w-4 h-4 group-hover:translate-x-1 transition" />
                    Envoyer le message
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-2">
                    Les champs marqués d'un <span className="text-[#1a6b3c]">*</span> sont obligatoires
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Colonne droite - Informations (2/5) */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Coordonnées */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-green-100">
              <h3 className="font-black text-gray-800 text-lg mb-4 flex items-center gap-2">
                <FiMessageSquare className="w-5 h-5 text-[#1a6b3c]" />
                Nos coordonnées
              </h3>
              
              <div className="space-y-4">
                {contactInfos.map((info, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-[#1a6b3c]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1a6b3c]/20 transition-colors">
                      <info.icon className="w-4 h-4 text-[#1a6b3c]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{info.title}</p>
                      {info.link ? (
                        <a href={info.link} className="text-gray-600 text-sm hover:text-[#1a6b3c] transition-colors">
                          {info.details[0]}
                        </a>
                      ) : (
                        info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carte */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-green-100">
              <div className="h-48 bg-gray-200 relative">
                <img
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800"
                  alt="Carte de localisation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#1a6b3c] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    📍 Cotonou, Bénin
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-green-100">
              <h3 className="font-black text-gray-800 text-lg mb-4">Suivez-nous</h3>
              <div className="flex gap-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl bg-gray-50 hover:bg-[#1a6b3c] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
