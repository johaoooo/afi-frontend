import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { 
  Home, ShoppingBag, BookOpen, Calendar, Mail, 
  User, LogIn, LogOut, Menu, X, ChevronDown, ChevronRight,
  Languages, LayoutDashboard, Moon, Sun, Info, Phone, MapPin
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
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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

  const servicesSubMenu = [
    { name: 'Services', href: '/services', icon: BookOpen },
    { name: 'Formations', href: '/formations', icon: Calendar },
    { name: 'Foires', href: '/foires', icon: Calendar },
  ];

  const cartCount = cart.length;
  const currentLang = i18n.language;

  return (
    <>
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-white dark:bg-gray-900 shadow-md py-3'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/images/logo.png" 
                alt="AFI Collection" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation - caché sur mobile */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-green-600 ${
                    location.pathname === link.href ? 'text-green-600' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Services Dropdown Desktop */}
              <div 
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
                  Services <ChevronDown className="w-3 h-3" />
                </button>
                {servicesDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                    {servicesSubMenu.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      >
                        <item.icon className="w-4 h-4" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Actions droite */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" /> : <Moon className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />}
              </button>

              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdown(!langDropdown)}
                  className="flex items-center gap-1 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition min-w-[44px] min-h-[44px]"
                >
                  <Languages className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline text-xs md:text-sm font-medium">{currentLang === 'fr' ? 'FR' : 'EN'}</span>
                </button>
                {langDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                    <button onClick={() => changeLanguage('fr')} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">🇫🇷 Français</button>
                    <button onClick={() => changeLanguage('en')} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">🇬🇧 English</button>
                  </div>
                )}
              </div>

              {/* Cart */}
              <Link to="/panier" className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition min-w-[44px] min-h-[44px] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </Link>

              {/* User / Login */}
              {user ? (
                <div className="hidden md:flex items-center gap-2">
                  <Link to={isAdmin ? "/admin" : "/mon-compte"} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition min-w-[44px] min-h-[44px] flex items-center justify-center">
                    <User className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <button onClick={() => logout()} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition min-w-[44px] min-h-[44px] flex items-center justify-center">
                    <LogOut className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              ) : (
                <Link to="/connexion" className="hidden md:flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-green-600 to-yellow-500 text-white rounded-full text-sm font-semibold hover:shadow-lg transition">
                  <LogIn className="w-3 h-3" />
                  <span>Connexion</span>
                </Link>
              )}

              {/* Menu Burger Mobile */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          
          {/* Menu Panel */}
          <div 
            ref={mobileMenuRef}
            className="absolute top-0 right-0 w-full max-w-sm h-full bg-white dark:bg-gray-900 shadow-2xl animate-slide-left"
          >
            <div className="flex flex-col h-full">
              {/* Header mobile menu */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
                <img src="/images/logo.png" alt="AFI Collection" className="h-8 w-auto" />
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation mobile */}
              <nav className="flex-1 overflow-y-auto py-4">
                <div className="space-y-1 px-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  ))}
                  
                  {/* Services submenu mobile */}
                  <div className="mt-2">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Services</div>
                    {servicesSubMenu.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition ml-4"
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Contact info mobile */}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Contact</div>
                    <a href="tel:+22996062287" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                      <Phone className="w-5 h-5" />
                      <span>+229 01 96 06 22 87</span>
                    </a>
                    <div className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300">
                      <MapPin className="w-5 h-5" />
                      <span>NADJO, Porto-Novo, Bénin</span>
                    </div>
                  </div>
                </div>
              </nav>

              {/* Footer mobile menu */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
                {user ? (
                  <div className="space-y-2">
                    <Link 
                      to={isAdmin ? "/admin" : "/mon-compte"} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300 font-medium"
                    >
                      <User className="w-4 h-4" />
                      Mon compte
                    </Link>
                    <button 
                      onClick={() => { logout(); setMobileMenuOpen(false); }}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-xl font-medium"
                    >
                      <LogOut className="w-4 h-4" />
                      Déconnexion
                    </button>
                  </div>
                ) : (
                  <Link 
                    to="/connexion" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-green-600 to-yellow-500 text-white rounded-xl font-medium"
                  >
                    <LogIn className="w-4 h-4" />
                    Connexion / Inscription
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-left {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slide-left 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default LuxuryHeader;
