import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const CheckoutPage = () => {
  const { cart, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nom: user?.nom || '',
    email: user?.email || '',
    telephone: user?.telephone || '',
    adresse: user?.adresse || '',
    ville: user?.ville || '',
    pays: user?.pays || 'Bénin',
    modeLivraison: 'standard',
    modePaiement: 'wave'
  });

  if (cart.length === 0) {
    navigate('/panier');
    return null;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simuler la commande
    setTimeout(() => {
      toast.success('Commande passée avec succès !');
      clearCart();
      navigate('/');
      setLoading(false);
    }, 2000);
  };

  const fraisLivraison = formData.modeLivraison === 'international' ? 15000 : 2000;
  const totalFinal = total + fraisLivraison;

  return (
    <div className="container-custom py-12">
      <h1 className="text-2xl font-bold mb-8">Finaliser ma commande</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Informations de livraison</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-1">Nom complet</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Téléphone</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Adresse</label>
            <input
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-1">Ville</label>
              <input
                type="text"
                name="ville"
                value={formData.ville}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Pays</label>
              <input
                type="text"
                name="pays"
                value={formData.pays}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>
          </div>

          <h2 className="text-xl font-bold mb-4 mt-6">Mode de livraison</h2>
          <div className="space-y-2 mb-6">
            <label className="flex items-center space-x-3">
              <input type="radio" name="modeLivraison" value="standard" checked={formData.modeLivraison === 'standard'} onChange={handleChange} />
              <span>Standard (2 000 FCFA) - 2-3 jours</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="radio" name="modeLivraison" value="express" checked={formData.modeLivraison === 'express'} onChange={handleChange} />
              <span>Express (5 000 FCFA) - 24h</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="radio" name="modeLivraison" value="international" checked={formData.modeLivraison === 'international'} onChange={handleChange} />
              <span>International (15 000 FCFA) - 5-7 jours</span>
            </label>
          </div>

          <h2 className="text-xl font-bold mb-4">Mode de paiement</h2>
          <div className="space-y-2 mb-6">
            <label className="flex items-center space-x-3">
              <input type="radio" name="modePaiement" value="wave" checked={formData.modePaiement === 'wave'} onChange={handleChange} />
              <span>Wave</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="radio" name="modePaiement" value="mtn" checked={formData.modePaiement === 'mtn'} onChange={handleChange} />
              <span>MTN Mobile Money</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="radio" name="modePaiement" value="orange" checked={formData.modePaiement === 'orange'} onChange={handleChange} />
              <span>Orange Money</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="radio" name="modePaiement" value="carte" checked={formData.modePaiement === 'carte'} onChange={handleChange} />
              <span>Carte bancaire</span>
            </label>
          </div>

          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? 'Traitement...' : `Confirmer - ${totalFinal} FCFA`}
          </button>
        </form>

        {/* Résumé commande */}
        <div className="bg-gray-50 rounded-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Récapitulatif</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2 text-sm">
              <span>{item.nom} x{item.quantite}</span>
              <span>{item.prix * item.quantite} FCFA</span>
            </div>
          ))}
          <div className="border-t my-4 pt-4">
            <div className="flex justify-between mb-2">
              <span>Sous-total</span>
              <span>{total} FCFA</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Livraison</span>
              <span>{fraisLivraison} FCFA</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t">
              <span>Total</span>
              <span className="text-terracotta">{totalFinal} FCFA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
