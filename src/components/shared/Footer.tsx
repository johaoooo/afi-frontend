import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail, FiArrowRight, FiHeart } from 'react-icons/fi';

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
  return (
    <footer className="bg-gray-900 text-white">
      {/* Bande newsletter */}
      <div className="bg-[#1a6b3c] px-6 py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">
              Newsletter
            </h3>
            <p className="text-green-200 text-sm">Restez informé de nos nouvelles collections.</p>
          </div>
          <form
            className="flex w-full md:w-auto gap-0 rounded-full overflow-hidden border border-white/30 focus-within:border-white/60 transition-all"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Votre email"
              aria-label="Adresse email"
              className="bg-white/10 text-white placeholder-white/50 text-sm px-4 py-2 flex-1 min-w-[180px] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-[#1a6b3c] font-bold text-sm px-4 py-2 hover:bg-gray-100 transition-colors flex items-center gap-1"
            >
              S'abonner
              <FiArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      {/* Corps du footer - réduit */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Colonne 1 — Marque */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-3">
              <img
                src="/images/afiii.png"
                alt="AFI Collection"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Vitrine de l'excellence artisanale béninoise. Chaque pièce est faite main avec passion.
            </p>
            <div className="flex gap-2 mt-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1a6b3c] border border-white/10 hover:border-[#1a6b3c] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-green-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
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
            <h4 className="text-xs font-bold tracking-widest uppercase text-green-400 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
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
            <h4 className="text-xs font-bold tracking-widest uppercase text-green-400 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <FiMapPin className="w-4 h-4 text-[#1a6b3c]" aria-hidden="true" />
                Cotonou, Bénin
              </li>
              <li>
                <a href="tel:+22900000000" className="flex items-center gap-2 hover:text-white transition-colors">
                  <FiPhone className="w-4 h-4 text-[#1a6b3c]" aria-hidden="true" />
                  +229 XX XX XX XX
                </a>
              </li>
              <li>
                <a href="mailto:contact@aficollection.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <FiMail className="w-4 h-4 text-[#1a6b3c]" aria-hidden="true" />
                  contact@aficollection.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bas de footer - réduit */}
      <div className="border-t border-white/10 px-6 py-4 bg-black/30">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} AFI Collection. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/mentions-legales" className="text-gray-500 hover:text-gray-300 transition-colors">
              Mentions légales
            </Link>
            <span className="text-gray-700">|</span>
            <Link to="/politique-confidentialite" className="text-gray-500 hover:text-gray-300 transition-colors">
              Confidentialité
            </Link>
            <span className="text-gray-700">|</span>
            <Link to="/cgv" className="text-gray-500 hover:text-gray-300 transition-colors">
              CGV
            </Link>
          </div>
          <p className="text-gray-600 text-[10px] flex items-center gap-1">
            Fait avec <FiHeart className="w-3 h-3 text-[#1a6b3c]" /> au Bénin
          </p>
        </div>
      </div>
    </footer>
  );
}
