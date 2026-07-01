import { useState } from 'react';
import { FiSend, FiCheckCircle, FiMapPin, FiPhone, FiMail, FiClock, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openInfo, setOpenInfo] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const toggleInfo = (id: string) => {
    setOpenInfo(openInfo === id ? null : id);
  };

  const contactInfos = [
    { 
      id: 'adresse',
      icon: FiMapPin, 
      title: 'Adresse', 
      detail: 'Cotonou, Bénin',
      fullInfo: 'Nous sommes basés à Cotonou, au Bénin. N\'hésitez pas à nous rendre visite sur rendez-vous.'
    },
    { 
      id: 'telephone',
      icon: FiPhone, 
      title: 'Téléphone', 
      detail: '+229 XX XX XX XX',
      fullInfo: 'Nous sommes joignables du lundi au vendredi de 8h à 18h et le samedi de 9h à 13h.'
    },
    { 
      id: 'email',
      icon: FiMail, 
      title: 'Email', 
      detail: 'contact@aficollection.com',
      fullInfo: 'Réponse garantie sous 24h ouvrées. Pour toute urgence, privilégiez le téléphone.'
    },
    { 
      id: 'horaires',
      icon: FiClock, 
      title: 'Horaires', 
      detail: 'Lun - Ven : 8h - 18h',
      fullInfo: 'Lundi au Vendredi : 8h00 - 18h00\nSamedi : 9h00 - 13h00\nDimanche : Fermé'
    },
  ];

  return (
    <section className="py-20 bg-[#f5f8f5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight leading-[1.05] mt-2">
            Une question ? <br />
            <span className="text-[#1a6b3c]">Écrivez-nous</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Formulaire compact */}
            <motion.div
              className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-lg border border-green-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold text-gray-800 text-lg mb-4">Envoyez-nous un message</h3>
              
              {formSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FiCheckCircle className="w-6 h-6 text-[#1a6b3c]" />
                  </div>
                  <p className="font-semibold text-gray-800">Message envoyé !</p>
                  <p className="text-xs text-gray-500 mt-1">Nous vous répondrons rapidement.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition text-gray-800 text-sm"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition text-gray-800 text-sm"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition resize-none text-gray-800 text-sm"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1a6b3c] hover:bg-[#14532d] text-white font-bold py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm group"
                  >
                    <FiSend className="w-4 h-4 group-hover:translate-x-1 transition" />
                    Envoyer
                  </button>
                </form>
              )}
            </motion.div>

            {/* Informations de contact - Accordéon */}
            <motion.div
              className="lg:col-span-2 space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {contactInfos.map((info) => (
                <div 
                  key={info.id}
                  className="bg-white rounded-2xl shadow-md border border-green-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleInfo(info.id)}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#1a6b3c]/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-4 h-4 text-[#1a6b3c]" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-gray-800 text-sm">{info.title}</p>
                        <p className="text-xs text-gray-500">{info.detail}</p>
                      </div>
                    </div>
                    {openInfo === info.id ? (
                      <FiChevronUp className="w-4 h-4 text-gray-400" />
                    ) : (
                      <FiChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openInfo === info.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-1 text-sm text-gray-600 border-t border-gray-100">
                          {info.fullInfo.split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
