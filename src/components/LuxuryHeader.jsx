import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { 
  Home, ShoppingBag, BookOpen, Calendar, Mail, 
  User, LogIn, LogOut, Menu, X, ChevronDown, ChevronRight,
  Languages, LayoutDashboard, Moon, Sun, Info
} from 'lucide-react';

const LuxuryHeader = () => {
  const { user, logout, isAdmin } = useAuth();
  const { cart } = useCart();
  const { darkMode, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [langDropdown, setLangDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();
  
  const servicesTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 200);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangDropdown(false);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const navLinks = [
    { name: t('nav.home'), href: '/', icon: Home },
    { name: t('nav.shop'), href: '/boutique', icon: ShoppingBag },
    { name: t('nav.about'), href: '/a-propos', icon: Info },
    { name: t('nav.contact'), href: '/contact', icon: Mail },
  ];

  const cartCount = cart.length;
  const currentLang = i18n.language;

  const servicesSubMenu = [
    { name: t('nav.services'), href: '/services', icon: BookOpen },
    { name: t('nav.trainings'), href: '/formations', icon: Calendar },
    { name: t('nav.events'), href: '/foires', icon: Calendar },
  ];

  return (
    <>
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 rounded-b-2xl ${
        scrolled ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-lg py-2' : 'bg-white dark:bg-dark shadow-md py-3'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <Link to="/" className="group">
              <img 
                src="/images/logo.png" 
                alt="AFI Collection Logo" 
                className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-1 bg-gray-50 dark:bg-gray-800 rounded-full p-1">
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
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{link.name}</span>
                  </Link>
                );
              })}
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  className={`px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                    location.pathname === '/services' || location.pathname === '/formations' || location.pathname === '/foires'
                      ? 'bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span className="font-medium text-sm">{t('nav.services')}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                
                {servicesDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden z-50 border border-gray-100 dark:border-gray-700"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    {servicesSubMenu.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={`flex items-center gap-3 px-4 py-3 text-sm transition ${
                            isActive 
                              ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-semibold'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Lien ADMIN pour les utilisateurs admin */}
              {isAdmin && (
                <Link
                  to="/admin"
                  className={`px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                    location.pathname === '/admin'
                      ? 'bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span className="font-medium text-sm">Admin</span>
                </Link>
              )}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
              </button>

              <div className="relative">
                <button
                  onClick={() => setLangDropdown(!langDropdown)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1"
                >
                  <Languages className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">
                    {currentLang === 'fr' ? 'FR' : 'EN'}
                  </span>
                </button>
                
                {langDropdown && (
                  <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden z-50 border border-gray-100 dark:border-gray-700">
                    <button onClick={() => changeLanguage('fr')} className="w-full text-left px-4 py-2 text-sm hover:bg-green-50 dark:hover:bg-gray-700 transition flex items-center gap-2"><span>🇫🇷</span> Français</button>
                    <button onClick={() => changeLanguage('en')} className="w-full text-left px-4 py-2 text-sm hover:bg-green-50 dark:hover:bg-gray-700 transition flex items-center gap-2"><span>🇬🇧</span> English</button>
                  </div>
                )}
              </div>

              <Link to="/panier" className="relative">
                <div className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                  <ShoppingBag className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-gradient-to-r from-green-600 to-yellow-500 text-white text-xs rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">{cartCount}</span>}
                </div>
              </Link>

              {user ? (
                <div className="relative">
                  <button onClick={() => setActiveDropdown(!activeDropdown)} className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                    <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    <span className="hidden sm:inline text-sm text-gray-700 dark:text-gray-300">{user.nom?.split(' ')[0]}</span>
                    <ChevronDown className={`w-3 h-3 text-gray-700 dark:text-gray-300 transition-transform duration-300 ${activeDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown && (
                    <div className="absolute right-0 mt-3 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100 dark:border-gray-700">
                      <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                        <p className="font-semibold text-gray-800 dark:text-white">{user.nom}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                      </div>
                      <div className="p-2">
                        <Link to={isAdmin ? "/admin" : "/mon-compte"} onClick={() => setActiveDropdown(false)} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-gray-700 transition text-green-600 dark:text-green-400">
                          <LayoutDashboard className="w-4 h-4" /><span className="text-sm">Mon compte</span>
                        </Link>
                        <button onClick={() => { setActiveDropdown(false); logout(); }} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 transition text-red-600 dark:text-red-400">
                          <LogOut className="w-4 h-4" /><span className="text-sm">Déconnexion</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/connexion">
                  <button className="px-3 sm:px-4 py-2 rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-green-600 to-yellow-500 text-white hover:shadow-lg flex items-center gap-2 text-sm sm:text-base">
                    <LogIn className="w-4 h-4" /><span className="hidden sm:inline">{t('nav.login')}</span>
                  </button>
                </Link>
              )}

              <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700 dark:text-gray-300" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-dark z-40 pt-20 px-6 overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.href;
              return (
                <Link key={link.href} to={link.href} onClick={() => setMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive ? 'bg-gradient-to-r from-green-600 to-yellow-500 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                  <Icon className="w-5 h-5" /><span className="font-medium">{link.name}</span>{!isActive && <ChevronRight className="w-4 h-4 ml-auto text-gray-400 dark:text-gray-600" />}
                </Link>
              );
            })}
            
            {/* Lien Admin dans le menu mobile */}
            {isAdmin && (
              <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-green-600 to-yellow-500 text-white">
                <LayoutDashboard className="w-5 h-5" />
                <span className="font-medium">Dashboard Admin</span>
              </Link>
            )}
            
            <div className="mt-2">
              <div className="px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t('nav.services')}</div>
              {servicesSubMenu.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link key={item.href} to={item.href} onClick={() => setMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ml-2 ${isActive ? 'bg-gradient-to-r from-green-600 to-yellow-500 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                    <Icon className="w-5 h-5" /><span className="font-medium">{item.name}</span>{!isActive && <ChevronRight className="w-4 h-4 ml-auto text-gray-400" />}
                  </Link>
                );
              })}
            </div>
            
            <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mt-2">
              {user ? (
                <>
                  <div className="px-4 py-2 mb-2"><p className="font-semibold text-gray-800 dark:text-white">{user.nom}</p><p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p></div>
                  <Link to={isAdmin ? "/admin" : "/mon-compte"} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800 transition">
                    <LayoutDashboard className="w-5 h-5" /><span className="font-medium">Mon compte</span>
                  </Link>
                  <button onClick={() => { setMobileMenuOpen(false); logout(); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition text-left">
                    <LogOut className="w-5 h-5" /><span className="font-medium">Déconnexion</span>
                  </button>
                </>
              ) : (
                <Link to="/connexion" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-green-600 to-yellow-500 text-white">
                  <LogIn className="w-5 h-5" /><span className="font-medium">Se connecter</span>
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
