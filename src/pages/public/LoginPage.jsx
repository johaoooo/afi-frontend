import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Mail, Lock, Eye, EyeOff, LogIn, Shield, Sparkles } from 'lucide-react';
import PageHero from '../../components/PageHero';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await login(email, password, navigate);
    setLoading(false);
  };

  return (
    <div>
      <PageHero 
        title="Connexion" 
        subtitle="Accédez à votre compte AFI Collection"
        backgroundImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
      />
      <div className="container-custom py-12">
        <div className="max-w-md mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="bg-gradient-to-r from-green-600 to-yellow-500 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <LogIn className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl">Bienvenue</h2>
                  <p className="text-white/80 text-sm">Connectez-vous à votre compte</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="mb-5">
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-600 to-yellow-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <><LogIn className="w-5 h-5" /><span>Se connecter</span></>}
              </button>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200 dark:border-gray-700"></div></div>
                <div className="relative flex justify-center text-sm"><span className="px-4 bg-white dark:bg-gray-800 text-gray-500">ou</span></div>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Pas encore de compte ?{' '}
                <Link to="/inscription" className="text-green-600 font-semibold hover:text-green-700 hover:underline">
                  Créer un compte
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
