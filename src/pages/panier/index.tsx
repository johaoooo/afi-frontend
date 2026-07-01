import { Link } from 'react-router-dom';
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowLeft, FiHeart, FiTruck, FiShield, FiClock } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Données temporaires du panier
const initialCartItems = [
  {
    id: 1,
    nom: 'Sac en cuir artisanal',
    prix: 25000,
    quantite: 1,
    image: '/images/sac.png',
    artisan: 'Atelier Kossou',
    enStock: true
  },
  {
    id: 2,
    nom: 'Pagne traditionnel',
    prix: 15000,
    quantite: 2,
    image: '/images/pagne.png',
    artisan: 'Maison Dossa',
    enStock: true
  }
];

export default function PanierPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantite: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.prix * item.quantite, 0);
  const livraison = subtotal > 50000 ? 0 : 2000;
  const reduction = promoApplied ? subtotal * 0.1 : 0;
  const total = subtotal + livraison - reduction;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'AFI10') {
      setPromoApplied(true);
    } else {
      alert('Code promo invalide');
    }
  };

  return (
    <div className="bg-[#f5f8f5] min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* En-tête */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-500 hover:text-[#1a6b3c] transition">
              <FiArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-3xl font-black text-gray-800">Mon panier</h1>
            <span className="text-sm text-white font-medium bg-[#1a6b3c] px-3 py-1 rounded-full">
              {cartItems.length} articles
            </span>
          </div>
          <Link to="/boutique" className="text-sm text-[#1a6b3c] hover:underline font-medium">
            Continuer mes achats
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <motion.div
            className="text-center py-20 bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm border border-green-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-28 h-28 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiShoppingBag className="w-14 h-14 text-[#1a6b3c]/40" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Votre panier est vide</h2>
            <p className="text-gray-500 mb-6">Découvrez nos collections et trouvez l'inspiration</p>
            <Link
              to="/boutique"
              className="inline-flex items-center gap-2 bg-[#1a6b3c] hover:bg-[#14532d] text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              Découvrir la boutique
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Liste des articles */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex gap-5 border border-green-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  layout
                >
                  <img
                    src={item.image}
                    alt={item.nom}
                    className="w-28 h-28 object-cover rounded-xl bg-green-50"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/112/1a6b3c/ffffff?text=AFI';
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-bold text-gray-800">{item.nom}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{item.artisan}</p>
                        <span className="inline-block mt-1 text-xs bg-green-100 text-[#1a6b3c] px-2 py-0.5 rounded-full font-medium">
                          {item.enStock ? '✓ En stock' : 'Rupture'}
                        </span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors p-1"
                        aria-label="Supprimer"
                      >
                        <FiTrash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-1 bg-green-50 rounded-full p-1 border border-green-100">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantite - 1)}
                          className="w-8 h-8 rounded-full hover:bg-white hover:shadow transition flex items-center justify-center"
                        >
                          <FiMinus className="w-3 h-3 text-gray-600" />
                        </button>
                        <span className="font-semibold w-8 text-center text-sm text-gray-800">{item.quantite}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantite + 1)}
                          className="w-8 h-8 rounded-full hover:bg-white hover:shadow transition flex items-center justify-center"
                        >
                          <FiPlus className="w-3 h-3 text-gray-600" />
                        </button>
                      </div>
                      <span className="font-bold text-[#1a6b3c] text-lg">
                        {(item.prix * item.quantite).toLocaleString('fr-FR')} FCFA
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Suggestions */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-green-100">
                <h3 className="font-semibold text-gray-800 mb-3">Vous pourriez aussi aimer</h3>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="min-w-[120px] bg-white rounded-xl p-3 text-center flex-shrink-0 border border-green-50">
                      <div className="w-full h-20 bg-green-50 rounded-lg mb-2"></div>
                      <p className="text-xs font-medium text-gray-700">Produit {i}</p>
                      <p className="text-xs font-bold text-[#1a6b3c]">15 000 FCFA</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Résumé */}
            <div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-green-100 sticky top-24">
                <h2 className="font-bold text-xl text-gray-800 mb-6">Résumé de la commande</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sous-total</span>
                    <span className="font-semibold text-gray-800">{subtotal.toLocaleString('fr-FR')} FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Livraison</span>
                    <span className="font-semibold text-gray-800">
                      {livraison === 0 ? 'Gratuite' : `${livraison.toLocaleString('fr-FR')} FCFA`}
                    </span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Réduction (10%)</span>
                      <span>-{reduction.toLocaleString('fr-FR')} FCFA</span>
                    </div>
                  )}
                  
                  {/* Code promo */}
                  <div className="pt-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Code promo"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 px-3 py-2 bg-white border border-green-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] text-gray-800 placeholder-gray-400"
                      />
                      <button
                        onClick={handleApplyPromo}
                        className="px-4 py-2 bg-[#1a6b3c] hover:bg-[#14532d] text-white font-semibold rounded-lg text-sm transition"
                      >
                        Appliquer
                      </button>
                    </div>
                    {promoApplied && (
                      <p className="text-xs text-green-600 mt-1">✓ Code promo appliqué !</p>
                    )}
                  </div>

                  <div className="border-t-2 border-green-100 pt-3 flex justify-between">
                    <span className="font-bold text-gray-800 text-base">Total</span>
                    <span className="font-bold text-[#1a6b3c] text-xl">{total.toLocaleString('fr-FR')} FCFA</span>
                  </div>

                  <div className="space-y-2 text-xs text-gray-500 pt-2">
                    <div className="flex items-center gap-2">
                      <FiTruck className="w-4 h-4 text-[#1a6b3c]" />
                      <span>Livraison estimée : 2-3 jours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiShield className="w-4 h-4 text-[#1a6b3c]" />
                      <span>Paiement 100% sécurisé</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock className="w-4 h-4 text-[#1a6b3c]" />
                      <span>Retour sous 14 jours</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="w-full bg-[#1a6b3c] hover:bg-[#14532d] text-white font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-6 hover:shadow-lg"
                >
                  Procéder au paiement
                </Link>

                <button
                  onClick={() => alert('Ajouté aux favoris !')}
                  className="w-full flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-[#1a6b3c] transition mt-3"
                >
                  <FiHeart className="w-4 h-4" />
                  Ajouter aux favoris
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
