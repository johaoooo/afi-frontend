import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';
import { 
  Home, ShoppingBag, BookOpen, Calendar, Mail, 
  User, LogIn, LogOut, Menu, X, ChevronDown, ChevronRight,
  Languages, LayoutDashboard
} from 'lucide-react';

const LuxuryHeader = () => {
  const { user, logout, isAdmin } = useAuth();
  const { cart } = useCart();
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [langDropdown, setLangDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangDropdown(false);
  };

  const navLinks = [
    { name: t('nav.home'), href: '/', icon: Home },
    { name: t('nav.shop'), href: '/boutique', icon: ShoppingBag },
    { name: t('nav.services'), href: '/services', icon: BookOpen },
    { name: t('nav.trainings'), href: '/formations', icon: Calendar },
    { name: t('nav.events'), href: '/foires', icon: Calendar },
    { name: t('nav.contact'), href: '/contact', icon: Mail },
  ];

  const cartCount = cart.length;
  const currentLang = i18n.language;

  return (
    <>
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 rounded-b-2xl ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white shadow-md py-3'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="group">
              <img 
                src="/images/logo.png" 
                alt="AFI Collection Logo" 
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 bg-gray-50 rounded-full p-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                      isActive 
                        ? 'bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-md' 
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdown(!langDropdown)}
                  className="p-2 rounded-full hover:bg-gray-100 transition flex items-center gap-1"
                >
                  <Languages className="w-5 h-5 text-gray-700" />
                  <span className="text-sm font-medium text-gray-700 hidden md:inline">
                    {currentLang === 'fr' ? 'FR' : 'EN'}
                  </span>
                </button>
                
                {langDropdown && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg overflow-hidden z-50 border border-gray-100">
                    <button
                      onClick={() => changeLanguage('fr')}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-green-50 transition flex items-center gap-2 ${currentLang === 'fr' ? 'bg-green-100 text-green-700 font-semibold' : 'text-gray-700'}`}
                    >
                      <span>🇫🇷</span> Français
                    </button>
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-green-50 transition flex items-center gap-2 ${currentLang === 'en' ? 'bg-green-100 text-green-700 font-semibold' : 'text-gray-700'}`}
                    >
                      <span>🇬🇧</span> English
                    </button>
                  </div>
                )}
              </div>

              {/* Panier */}
              <Link to="/panier" className="relative">
                <div className="p-2 rounded-full hover:bg-gray-100 transition">
                  <ShoppingBag className="w-5 h-5 text-gray-700" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-green-600 to-yellow-500 text-white text-xs rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>

              {/* Menu utilisateur */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setActiveDropdown(!activeDropdown)}
                    className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition"
                  >
                    <User className="w-5 h-5 text-gray-700" />
                    <span className="hidden md:inline text-sm text-gray-700">
                      {user.nom?.split(' ')[0]}
                    </span>
                    <ChevronDown className={`w-3 h-3 text-gray-700 transition-transform duration-300 ${activeDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown && (
                    <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100">
                      <div className="p-4 border-b border-gray-100">
                        <p className="font-semibold text-gray-800">{user.nom}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                      <div className="p-2">
                        {/* Option Mon compte / Dashboard */}
                        <Link
                          to={isAdmin ? "/admin" : "/mon-compte"}
                          onClick={() => setActiveDropdown(false)}
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-50 transition text-green-600 mb-1"
                        >
                          <LayoutDashboard className="w-4 h-4" />
                          <span className="text-sm">Mon compte</span>
                        </Link>
                        {/* Option Déconnexion */}
                        <button 
                          onClick={() => {
                            setActiveDropdown(false);
                            logout();
                          }} 
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 transition text-red-600"
                        >
                          <LogOut className="w-4 h-4" />
                          <span className="text-sm">Déconnexion</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/connexion">
                  <button className="px-4 py-2 rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-green-600 to-yellow-500 text-white hover:shadow-lg flex items-center gap-2">
                    <LogIn className="w-4 h-4" />
                    <span>{t('nav.login')}</span>
                  </button>
                </Link>
              )}

              {/* Mobile menu button */}
              <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 px-6">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                    isActive ? 'bg-gradient-to-r from-green-600 to-yellow-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{link.name}</span>
                  {!isActive && <ChevronRight className="w-4 h-4 ml-auto text-gray-400" />}
                </Link>
              );
            })}
            
            {/* Espace membre dans menu mobile */}
            <div className="border-t border-gray-100 pt-4 mt-2">
              {user ? (
                <>
                  <div className="px-4 py-2 mb-2">
                    <p className="font-semibold text-gray-800">{user.nom}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <Link
                    to={isAdmin ? "/admin" : "/mon-compte"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-green-600 hover:bg-green-50 transition"
                  >
                    <LayoutDashboard className="w-5 h-5" />
                    <span className="font-medium">Mon compte</span>
                  </Link>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      logout();
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition text-left"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Déconnexion</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/connexion"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-green-600 to-yellow-500 text-white"
                >
                  <LogIn className="w-5 h-5" />
                  <span className="font-medium">Se connecter</span>
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default LuxuryHeader;
