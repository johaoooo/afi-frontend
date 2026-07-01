import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiShoppingCart, FiMenu, FiX, FiTruck, FiShield, 
  FiSearch, FiChevronDown 
} from 'react-icons/fi';

const categories = [
  { to: '/boutique/mode', label: 'Mode & Accessoires' },
  { to: '/boutique/macrame', label: 'Macramé & Tricotage' },
  { to: '/boutique/decoration', label: 'Décoration Artisanale' },
  { to: '/boutique/agroalimentaire', label: 'Agroalimentaire' },
];

const offers = [
  { to: '/boutique', label: 'Acheter' },
  { to: '/services', label: 'Services' },
  { to: '/formations', label: 'Formations' },
];

const cartCount = 0;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isOffersOpen, setIsOffersOpen] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const location = useLocation();
  const categoriesRef = useRef<HTMLDivElement>(null);
  const offersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsCategoriesOpen(false);
    setIsOffersOpen(false);
  }, [location.pathname]);

  // Fermer les dropdowns en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target as Node)) {
        setIsCategoriesOpen(false);
      }
      if (offersRef.current && !offersRef.current.contains(event.target as Node)) {
        setIsOffersOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Bandeau supérieur - Blanc sur vert */}
      <div className="bg-[#1a6b3c] text-white text-xs py-1.5 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <FiTruck className="w-3.5 h-3.5 text-green-300" />
              <span className="text-white/90">Livraison 48h</span>
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="hidden sm:inline text-white/90">Dakar · Abidjan · Cotonou</span>
            <span className="hidden md:inline text-white/30">·</span>
            <span className="flex items-center gap-1.5">
              <FiShield className="w-3.5 h-3.5 text-green-300" />
              <span className="text-white/90">Paiement sécurisé</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage('fr')}
              className={`text-xs font-medium transition-colors ${
                language === 'fr' ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              FR
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`text-xs font-medium transition-colors ${
                language === 'en' ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : 'border-b border-gray-100'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between gap-4 py-2.5">
            {/* Logo */}
            <Link to="/" className="shrink-0 focus:outline-none">
              <img
                src="/images/afiii.png"
                alt="AFI Collection"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>

            {/* Barre de recherche */}
            <div className="flex-1 max-w-sm mx-4 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1a6b3c] focus:bg-white transition-all duration-200"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-[#1a6b3c] transition-colors">
                  <FiSearch className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Navigation + Actions sur une ligne */}
            <div className="flex items-center gap-4">
              {/* Menu Catégories */}
              <div className="relative hidden md:block" ref={categoriesRef}>
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                    isCategoriesOpen ? 'text-[#1a6b3c]' : 'text-gray-600 hover:text-[#1a6b3c]'
                  }`}
                >
                  Catégories
                  <FiChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isCategoriesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {categories.map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#1a6b3c]/5 hover:text-[#1a6b3c] transition-colors"
                        onClick={() => setIsCategoriesOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Menu Offres */}
              <div className="relative hidden md:block" ref={offersRef}>
                <button
                  onClick={() => setIsOffersOpen(!isOffersOpen)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                    isOffersOpen ? 'text-[#1a6b3c]' : 'text-gray-600 hover:text-[#1a6b3c]'
                  }`}
                >
                  Offres
                  <FiChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOffersOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOffersOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {offers.map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#1a6b3c]/5 hover:text-[#1a6b3c] transition-colors"
                        onClick={() => setIsOffersOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Panier */}
              <Link
                to="/panier"
                className="relative p-2 text-gray-600 hover:text-[#1a6b3c] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] rounded-full"
                aria-label="Panier"
              >
                <FiShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#1a6b3c] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Auth desktop */}
              <div className="hidden md:flex items-center gap-2">
                <Link
                  to="/connexion"
                  className="text-sm font-semibold text-gray-600 hover:text-[#1a6b3c] transition-colors px-3 py-1.5"
                >
                  Connexion
                </Link>
                <Link
                  to="/inscription"
                  className="text-sm font-semibold bg-[#1a6b3c] hover:bg-[#14532d] text-white px-4 py-1.5 rounded-full transition-colors"
                >
                  S'inscrire
                </Link>
              </div>

              {/* Burger mobile */}
              <button
                className="md:hidden p-2 text-gray-600 hover:text-[#1a6b3c] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] rounded-full"
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="border-t border-gray-100 px-6 py-5 space-y-1 bg-white">
            {/* Search mobile */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1a6b3c]"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FiSearch className="w-4 h-4" />
              </button>
            </div>

            {/* Catégories sur mobile */}
            <div className="py-2 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Catégories</p>
              {categories.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="block py-2 text-sm text-gray-600 hover:text-[#1a6b3c] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Offres sur mobile */}
            <div className="py-2 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Offres</p>
              {offers.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="block py-2 text-sm text-gray-600 hover:text-[#1a6b3c] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
              <Link
                to="/connexion"
                className="text-center text-sm font-semibold text-[#1a6b3c] border-2 border-[#1a6b3c] py-2.5 rounded-full hover:bg-[#1a6b3c]/5 transition-colors"
              >
                Connexion
              </Link>
              <Link
                to="/inscription"
                className="text-center text-sm font-semibold bg-[#1a6b3c] text-white py-2.5 rounded-full hover:bg-[#14532d] transition-colors"
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
