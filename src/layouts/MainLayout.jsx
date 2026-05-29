import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import LuxuryHeader from '../components/LuxuryHeader';
import { 
  ShoppingBag, BookOpen, HelpCircle, 
  MapPin, Phone, Mail, Clock,
  Truck, Shield, Award, Heart,
  ChevronRight
} from 'lucide-react';
import { 
  FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp,
  FaCcVisa, FaCcMastercard, FaPaypal
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';

const MainLayout = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    boutique: [
      { name: 'Macramé', href: '/boutique?categorie=1' },
      { name: 'Teinture de Pagne', href: '/boutique?categorie=2' },
      { name: 'Mode et Accessoires', href: '/boutique?categorie=3' },
      { name: 'Décoration', href: '/boutique?categorie=4' },
      { name: 'Agroalimentaire', href: '/boutique?categorie=5' },
    ],
    formations: [
      { name: 'Initiation Macramé', href: '/formations' },
      { name: 'Teinture de Pagne', href: '/formations' },
      { name: 'Tricotage Créatif', href: '/formations' },
      { name: 'Décoration', href: '/formations' },
    ],
    aide: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Livraison', href: '/livraison' },
      { name: 'Paiement sécurisé', href: '/paiement' },
      { name: 'Retours', href: '/retours' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <LuxuryHeader />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-100 text-gray-600 mt-20 border-t border-gray-300">
        <div className="border-b border-gray-300">
          <div className="container-custom py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="/images/logo.png" 
                    alt="AFI Collection Logo" 
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  L'élégance artisanale au service de la tradition et de l'innovation.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition text-gray-600">
                    <FaFacebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition text-gray-600">
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition text-gray-600">
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition text-gray-600">
                    <FaYoutube className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition text-gray-600">
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-green-600" />
                  Boutique
                </h3>
                <ul className="space-y-2">
                  {footerLinks.boutique.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className="text-gray-500 text-sm hover:text-green-600 transition flex items-center gap-1">
                        <ChevronRight className="w-3 h-3" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-green-600" />
                  Formations
                </h3>
                <ul className="space-y-2">
                  {footerLinks.formations.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className="text-gray-500 text-sm hover:text-green-600 transition flex items-center gap-1">
                        <ChevronRight className="w-3 h-3" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-green-600" />
                  Aide
                </h3>
                <ul className="space-y-2">
                  {footerLinks.aide.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className="text-gray-500 text-sm hover:text-green-600 transition flex items-center gap-1">
                        <ChevronRight className="w-3 h-3" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                    <span>Cotonou, Bénin</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-500 text-sm">
                    <Phone className="w-4 h-4 text-green-600" />
                    <a href="tel:+22999999999" className="hover:text-green-600">+229 99 99 99 99</a>
                  </li>
                  <li className="flex items-center gap-3 text-gray-500 text-sm">
                    <Mail className="w-4 h-4 text-green-600" />
                    <a href="mailto:contact@aficollection.com" className="hover:text-green-600">contact@aficollection.com</a>
                  </li>
                  <li className="flex items-center gap-3 text-gray-500 text-sm">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span>Lun-Ven: 9h-18h | Sam: 10h-14h</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300">
          <div className="container-custom py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Truck className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Livraison rapide</p>
                  <p className="text-gray-500 text-xs">Partout au Bénin</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Paiement sécurisé</p>
                  <p className="text-gray-500 text-xs">Transactions protégées</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Qualité garantie</p>
                  <p className="text-gray-500 text-xs">100% artisanal</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Satisfaction client</p>
                  <p className="text-gray-500 text-xs">Support réactif</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs">
              &copy; {currentYear} AFI Collection. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-xs">Paiement sécurisé :</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full">
                  <MdPhoneIphone className="w-3 h-3 text-green-600" />
                  <span className="text-xs text-gray-600">Wave</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full">
                  <MdPhoneIphone className="w-3 h-3 text-yellow-600" />
                  <span className="text-xs text-gray-600">MTN</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full">
                  <MdPhoneIphone className="w-3 h-3 text-red-600" />
                  <span className="text-xs text-gray-600">Orange</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full">
                  <FaCcVisa className="w-4 h-3 text-blue-700" />
                  <span className="text-xs text-gray-600">Visa</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full">
                  <FaCcMastercard className="w-4 h-3 text-orange-600" />
                  <span className="text-xs text-gray-600">Mastercard</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full">
                  <FaPaypal className="w-3 h-3 text-blue-600" />
                  <span className="text-xs text-gray-600">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
