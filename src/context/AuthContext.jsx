import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const API_URL = 'http://localhost:5000/api';

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Configurer axios avec l'URL de base
  axios.defaults.baseURL = API_URL;

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [token]);

  const fetchUser = async () => {
    try {
      const response = await axios.get('/auth/profil');
      setUser(response.data.utilisateur);
    } catch (error) {
      console.error('Erreur chargement profil:', error);
      localStorage.removeItem('token');
      setToken(null);
      delete axios.defaults.headers.common['Authorization'];
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, motDePasse, navigate) => {
    try {
      const response = await axios.post('/auth/connexion', { email, motDePasse });
      const { token, utilisateur } = response.data;
      localStorage.setItem('token', token);
      setToken(token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(utilisateur);
      toast.success('Connexion réussie !');
      
      // Rediriger selon le rôle
      if (utilisateur.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
      return { success: true };
    } catch (error) {
      toast.error(error.response?.data?.message || 'Erreur de connexion');
      return { success: false, message: error.response?.data?.message };
    }
  };

  const register = async (userData, navigate) => {
    try {
      const response = await axios.post('/auth/inscription', userData);
      const { token, utilisateur } = response.data;
      localStorage.setItem('token', token);
      setToken(token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(utilisateur);
      toast.success('Inscription réussie !');
      navigate('/');
      return { success: true };
    } catch (error) {
      toast.error(error.response?.data?.message || 'Erreur d\'inscription');
      return { success: false, message: error.response?.data?.message };
    }
  };

  const logout = (navigate) => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
    toast.success('Déconnexion réussie');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, loading, token, login, register, logout, isAdmin: user?.role === 'admin' }}>
      {children}
    </AuthContext.Provider>
  );
};
