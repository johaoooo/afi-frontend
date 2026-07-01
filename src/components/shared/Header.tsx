import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiShoppingCart, FiMenu, FiX, FiTruck, FiShield, 
  FiSearch, FiChevronDown 
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

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
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isOffersOpen, setIsOffersOpen] = useState(false);
  const location = useLocation();
  const categoriesRef = useRef<HTMLDivElement>(null);
  const offersRef = useRef<HTMLDivElement>(null);

  const currentLanguage = i18n.language;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

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
      {/* Bandeau supérieur - texte plus petit sur mobile */}
      <div className="bg-[#1a6b3c] text-white py-1.5 px-2 sm:px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Texte - version mobile compacte */}
          <div className="flex-1 flex items-center justify-center md:justify-center overflow-hidden">
            <div className="flex items-center gap-1 text-[10px] xs:text-xs sm:text-xs whitespace-nowrap">
              <FiTruck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-300 flex-shrink-0" />
              <span className="hidden xs:inline">Livraison 48h</span>
              <span className="xs:hidden">48h</span>
              <span className="text-white/30">·</span>
              <span>Dakar</span>
              <span className="text-white/30">·</span>
              <span>Abidjan</span>
              <span className="text-white/30">·</span>
              <span>Cotonou</span>
              <span className="text-white/30">·</span>
              <span>Congo</span>
              <span className="text-white/30">·</span>
              <FiShield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-300 flex-shrink-0" />
              <span className="hidden xs:inline">Paiement sécurisé</span>
              <span className="xs:hidden">Sécurisé</span>
            </div>
          </div>

          {/* Sélecteur langue */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0 ml-2">
            <button
              onClick={() => changeLanguage('fr')}
              className={`text-[10px] sm:text-xs font-medium transition-colors ${
                currentLanguage === 'fr' ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              FR
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => changeLanguage('en')}
              className={`text-[10px] sm:text-xs font-medium transition-colors ${
                currentLanguage === 'en' ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

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
                className="h-12 md:h-20 w-auto object-contain"
              />
            </Link>

            {/* Barre de recherche */}
            <div className="flex-1 max-w-md mx-4 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('header.search')}
                  className="w-full px-5 py-2.5 bg-gray-100 border-2 border-gray-200 rounded-full text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#1a6b3c] focus:bg-white focus:shadow-md transition-all duration-200"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-[#1a6b3c] transition-colors bg-gray-200/50 rounded-full hover:bg-gray-200">
                  <FiSearch className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Menu Catégories */}
              <div className="relative hidden md:block" ref={categoriesRef}>
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                    isCategoriesOpen ? 'text-[#1a6b3c]' : 'text-gray-600 hover:text-[#1a6b3c]'
                  }`}
                >
                  {t('header.categories')}
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
                  {t('header.offers')}
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
                  {t('header.login')}
                </Link>
                <Link
                  to="/inscription"
                  className="text-sm font-semibold bg-[#1a6b3c] hover:bg-[#14532d] text-white px-4 py-1.5 rounded-full transition-colors"
                >
                  {t('header.register')}
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
            <div className="relative mb-4">
              <input
                type="text"
                placeholder={t('header.search')}
                className="w-full px-4 py-2.5 bg-gray-100 border-2 border-gray-200 rounded-full text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#1a6b3c]"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-500">
                <FiSearch className="w-4 h-4" />
              </button>
            </div>

            <div className="py-2 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{t('header.categories')}</p>
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

            <div className="py-2 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{t('header.offers')}</p>
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
                {t('header.login')}
              </Link>
              <Link
                to="/inscription"
                className="text-center text-sm font-semibold bg-[#1a6b3c] text-white py-2.5 rounded-full hover:bg-[#14532d] transition-colors"
              >
                {t('header.register')}
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
