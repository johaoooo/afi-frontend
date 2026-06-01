import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/Loader';
import MainLayout from './layouts/MainLayout';

// Pages publiques
import HomePage from './pages/public/HomePage';
import ShopPage from './pages/public/ShopPage';
import ServicesPage from './pages/public/ServicesPage';
import AboutUsPage from './pages/public/AboutUsPage';
import ProductDetailPage from './pages/public/ProductDetailPage';
import TrainingsPage from './pages/public/TrainingsPage';
import TrainingDetailPage from './pages/public/TrainingDetailPage';
import EventsPage from './pages/public/EventsPage';
import CartPage from './pages/public/CartPage';
import CheckoutPage from './pages/public/CheckoutPage';
import LoginPage from './pages/public/LoginPage';
import RegisterPage from './pages/public/RegisterPage';
import ContactPage from './pages/public/ContactPage';

// Layout Admin
import AdminLayout from './layouts/AdminLayout';
import DashboardPage from './pages/admin/DashboardPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminTrainingsPage from './pages/admin/AdminTrainingsPage';
import AdminEventsPage from './pages/admin/AdminEventsPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';

// Import i18n
import './i18n';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <Suspense fallback={<Loader />}>
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#363636',
                    color: '#fff',
                    borderRadius: '12px',
                  },
                  success: {
                    iconTheme: {
                      primary: '#2E7D32',
                      secondary: '#fff',
                    },
                  },
                }}
              />
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="boutique" element={<ShopPage />} />
                  <Route path="services" element={<ServicesPage />} />
                  <Route path="a-propos" element={<AboutUsPage />} />
                  <Route path="produit/:slug" element={<ProductDetailPage />} />
                  <Route path="formations" element={<TrainingsPage />} />
                  <Route path="formation/:slug" element={<TrainingDetailPage />} />
                  <Route path="foires" element={<EventsPage />} />
                  <Route path="panier" element={<CartPage />} />
                  <Route path="checkout" element={<CheckoutPage />} />
                  <Route path="connexion" element={<LoginPage />} />
                  <Route path="inscription" element={<RegisterPage />} />
                  <Route path="contact" element={<ContactPage />} />
                </Route>
                
                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<DashboardPage />} />
                  <Route path="produits" element={<AdminProductsPage />} />
                  <Route path="formations" element={<AdminTrainingsPage />} />
                  <Route path="evenements" element={<AdminEventsPage />} />
                  <Route path="utilisateurs" element={<AdminUsersPage />} />
                </Route>
              </Routes>
            </Suspense>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
