import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/boutique', label: 'Boutique' },
  { to: '/services', label: 'Services' },
  { to: '/formations', label: 'Formations' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

const cartCount = 0;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Bandeau top */}
      <div className="bg-[#1a6b3c] text-white text-xs py-2 px-6 text-center font-medium tracking-wide">
        🌿 Livraison 48h à Cotonou · Paiement sécurisé · 100% Fait main au Bénin
      </div>

      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : 'border-b border-green-100'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] rounded -ml-2 md:-ml-4"
            >
              <img
                src="/images/afiii.png"
                alt="AFI Collection"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
              {navLinks.map(({ to, label }) => {
                const isActive = location.pathname === to;
                return (
                  <Link
                    key={to}
                    to={to}
                    className={`text-sm font-semibold transition-colors duration-200 relative group focus:outline-none ${
                      isActive ? 'text-[#1a6b3c]' : 'text-gray-600 hover:text-[#1a6b3c]'
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#1a6b3c] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Panier */}
              <Link
                to="/panier"
                className="relative p-2 text-gray-600 hover:text-[#1a6b3c] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] rounded-full"
                aria-label={`Panier (${cartCount} article${cartCount > 1 ? 's' : ''})`}
              >
                <FiShoppingCart className="w-5 h-5" aria-hidden="true" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#1a6b3c] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Auth — desktop uniquement */}
              <div className="hidden md:flex items-center gap-2">
                <Link
                  to="/connexion"
                  className="text-sm font-bold text-[#1a6b3c] hover:text-[#14532d] transition-colors px-4 py-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c]"
                >
                  Connexion
                </Link>
                <Link
                  to="/inscription"
                  className="text-sm font-bold bg-[#1a6b3c] hover:bg-[#14532d] text-white px-5 py-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] focus-visible:ring-offset-2"
                >
                  S'inscrire
                </Link>
              </div>

              {/* Burger — mobile uniquement */}
              <button
                className="md:hidden p-2 text-gray-600 hover:text-[#1a6b3c] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] rounded-full"
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen
                  ? <FiX className="w-6 h-6" aria-hidden="true" />
                  : <FiMenu className="w-6 h-6" aria-hidden="true" />
                }
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <nav className="border-t border-green-100 px-6 py-5 space-y-1" aria-label="Navigation mobile">
            {navLinks.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-3 py-3 text-sm font-semibold border-b border-green-50 transition-colors ${
                    isActive ? 'text-[#1a6b3c]' : 'text-gray-600 hover:text-[#1a6b3c]'
                  }`}
                >
                  {isActive && (
                    <span className="w-1 h-4 bg-[#1a6b3c] rounded-full shrink-0" />
                  )}
                  {label}
                </Link>
              );
            })}

            <div className="flex flex-col gap-2 pt-4">
              <Link
                to="/connexion"
                className="text-center text-sm font-bold text-[#1a6b3c] border-2 border-[#1a6b3c] py-2.5 rounded-full hover:bg-[#1a6b3c]/5 transition-colors"
              >
                Connexion
              </Link>
              <Link
                to="/inscription"
                className="text-center text-sm font-bold bg-[#1a6b3c] text-white py-2.5 rounded-full hover:bg-[#14532d] transition-colors"
              >
                S'inscrire
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
