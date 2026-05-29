import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { TrashIcon } from '@heroicons/react/24/outline';

const CartPage = () => {
  const { cart, total, removeFromCart, updateQuantity, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container-custom py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Votre panier est vide</h1>
        <Link to="/boutique" className="btn-primary inline-block">Continuer mes achats</Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      <h1 className="text-2xl font-bold mb-8">Mon Panier</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Liste des articles */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left">Produit</th>
                  <th className="px-4 py-3 text-center">Quantité</th>
                  <th className="px-4 py-3 text-right">Prix</th>
                  <th className="px-4 py-3 text-center"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-semibold">{item.nom}</p>
                        <p className="text-sm text-gray-500">{item.matiere || ''}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantite - 1)}
                          className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantite}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantite + 1)}
                          className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      {item.prix * item.quantite} FCFA
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between">
            <button onClick={clearCart} className="text-red-500 hover:underline">
              Vider le panier
            </button>
            <Link to="/boutique" className="text-terracotta hover:underline">
              + Ajouter d'autres articles
            </Link>
          </div>
        </div>

        {/* Résumé */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Résumé de la commande</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>{total} FCFA</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span>À calculer</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-terracotta text-xl">{total} FCFA</span>
                </div>
              </div>
            </div>
            <Link to="/checkout" className="btn-primary w-full block text-center">
              Procéder au paiement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
