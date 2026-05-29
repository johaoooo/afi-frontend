import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const newTotal = cart.reduce((sum, item) => sum + (item.prix * item.quantite), 0);
    setTotal(newTotal);
  }, [cart]);

  const addToCart = (product, quantite = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantite: item.quantite + quantite }
            : item
        );
      }
      return [...prevCart, { ...product, quantite }];
    });
    toast.success(`${product.nom} ajouté au panier`);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    toast.success('Article retiré du panier');
  };

  const updateQuantity = (productId, quantite) => {
    if (quantite <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantite } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    toast.success('Panier vidé');
  };

  return (
    <CartContext.Provider value={{ cart, total, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
