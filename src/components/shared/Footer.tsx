import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail, FiArrowRight, FiHeart, FiChevronUp } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/boutique', label: 'Boutique' },
  { to: '/services', label: 'Services' },
  { to: '/formations', label: 'Formations' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { to: '/services#macrame', label: 'Macramé & Tricotage' },
  { to: '/services#teinture', label: 'Teinture de Pagne' },
  { to: '/services#decoration', label: 'Décoration Artisanale' },
  { to: '/services#agroalimentaire', label: 'Agroalimentaire' },
];

const socials = [
  { href: '#', icon: FaFacebook, label: 'Facebook' },
  { href: '#', icon: FaInstagram, label: 'Instagram' },
  { href: '#', icon: FaWhatsapp, label: 'WhatsApp' },
  { href: '#', icon: FaYoutube, label: 'YouTube' },
];

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white">
      {/* Bande verte avec motif */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#1a6b3c] to-[#2d7d46] px-6 md:px-12 py-12">
        {/* Motifs décoratifs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-green-200 mb-2">
              Newsletter
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
              Restez informé de nos
              <br />
              <span className="text-green-300">nouvelles collections.</span>
            </h3>
          </div>
          <form
            className="flex w-full md:w-auto gap-0 rounded-full overflow-hidden border-2 border-white/30 focus-within:border-white/70 transition-all duration-300 shadow-xl hover:shadow-2xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Votre adresse email"
              aria-label="Adresse email pour la newsletter"
              className="bg-white/10 backdrop-blur-sm text-white placeholder-white/60 text-sm px-6 py-3.5 flex-1 min-w-[200px] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white hover:bg-gray-50 text-[#1a6b3c] font-bold text-sm px-6 py-3.5 transition-all duration-300 shrink-0 flex items-center gap-2 hover:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white group"
            >
              S'abonner
              <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      {/* Corps du footer */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Colonne 1 — Marque */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] rounded">
              <img
                src="/images/afiii.png"
                alt="AFI Collection"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Vitrine de l'excellence artisanale béninoise. Macramé, teintures, décoration,
              agroalimentaire — chaque pièce est faite main avec passion.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1a6b3c] border border-gray-200 hover:border-[#1a6b3c] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] group"
                >
                  <Icon className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#1a6b3c] mb-6 border-b-2 border-[#1a6b3c]/20 pb-3">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-500 hover:text-[#1a6b3c] transition-colors duration-200 inline-flex items-center gap-2 group focus:outline-none"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#1a6b3c] transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#1a6b3c] mb-6 border-b-2 border-[#1a6b3c]/20 pb-3">
              Nos services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-500 hover:text-[#1a6b3c] transition-colors duration-200 inline-flex items-center gap-2 group focus:outline-none"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#1a6b3c] transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#1a6b3c] mb-6 border-b-2 border-[#1a6b3c]/20 pb-3">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 group">
                <div className="w-8 h-8 rounded-full bg-[#1a6b3c]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1a6b3c]/20 transition-colors duration-300">
                  <FiMapPin className="w-4 h-4 text-[#1a6b3c]" aria-hidden="true" />
                </div>
                <span>Cotonou, Bénin</span>
              </li>
              <li>
                <a
                  href="tel:+22900000000"
                  className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 group focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-[#1a6b3c]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1a6b3c]/20 transition-colors duration-300">
                    <FiPhone className="w-4 h-4 text-[#1a6b3c]" aria-hidden="true" />
                  </div>
                  +229 XX XX XX XX
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@aficollection.com"
                  className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 group focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-[#1a6b3c]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1a6b3c]/20 transition-colors duration-300">
                    <FiMail className="w-4 h-4 text-[#1a6b3c]" aria-hidden="true" />
                  </div>
                  contact@aficollection.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-gray-200">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-[#1a6b3c] animate-pulse" />
            <span className="text-xs text-gray-500 font-medium">100% Fait main</span>
          </div>
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 bg-gray-50">
            <FiHeart className="w-3 h-3 text-[#1a6b3c]" />
            <span className="text-xs text-gray-500 font-medium">Artisanat béninois</span>
          </div>
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-gray-500 font-medium">Livraison 48h</span>
          </div>
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-xs text-gray-500 font-medium">Paiement sécurisé</span>
          </div>
        </div>
      </div>

      {/* Bas de footer */}
      <div className="border-t border-gray-200 px-6 md:px-12 py-6 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} AFI Collection. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/mentions-legales" className="text-gray-400 hover:text-[#1a6b3c] transition-colors">
              Mentions légales
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/politique-confidentialite" className="text-gray-400 hover:text-[#1a6b3c] transition-colors">
              Confidentialité
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/cgv" className="text-gray-400 hover:text-[#1a6b3c] transition-colors">
              CGV
            </Link>
          </div>
          <p className="text-gray-300 text-[10px] flex items-center gap-1">
            Fait avec <FiHeart className="w-3 h-3 text-[#1a6b3c] animate-pulse" /> au Bénin
          </p>
        </div>
      </div>

      {/* Bouton retour en haut */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#1a6b3c] hover:bg-[#14532d] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] focus-visible:ring-offset-2"
          aria-label="Retour en haut"
        >
          <FiChevronUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}
