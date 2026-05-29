import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  User, Mail, Lock, Phone, MapPin, Eye, EyeOff, 
  UserPlus, Shield, Sparkles, CheckCircle, XCircle,
  Building2
} from 'lucide-react';
import PageHero from '../../components/PageHero';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    motDePasse: '',
    confirmPassword: '',
    telephone: '',
    ville: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordValid, setPasswordValid] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (name === 'motDePasse') {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    setPasswordValid({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    });
    
    const strength = Object.values(passwordValid).filter(Boolean).length;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return 'Faible';
    if (passwordStrength <= 3) return 'Moyen';
    return 'Fort';
  };

  const passwordsMatch = formData.motDePasse === formData.confirmPassword;
  const isFormValid = formData.nom && formData.email && passwordsMatch && passwordStrength >= 3;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setLoading(true);
    const { confirmPassword, ...registerData } = formData;
    const result = await register(registerData);
    setLoading(false);
    if (result.success) {
      navigate('/');
    }
  };

  return (
    <div>
      <PageHero 
        title="Inscription" 
        subtitle="Créez votre compte et rejoignez la communauté AFI Collection"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
      />

      <div className="container-custom py-12">
        <div className="max-w-2xl mx-auto">
          {/* Carte d'inscription */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* En-tête décoratif */}
            <div className="bg-gradient-to-r from-green-600 to-yellow-500 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <UserPlus className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl">Créer un compte</h2>
                  <p className="text-white/80 text-sm">Rejoignez notre communauté artisanale</p>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nom complet */}
                <div className="mb-4 md:mb-0">
                  <label className="block text-gray-700 font-semibold mb-2">Nom complet *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Téléphone */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Téléphone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                      placeholder="+229 99 99 99 99"
                    />
                  </div>
                </div>

                {/* Ville */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Ville</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="ville"
                      value={formData.ville}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                      placeholder="Cotonou"
                    />
                  </div>
                </div>

                {/* Mot de passe */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Mot de passe *</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="motDePasse"
                      value={formData.motDePasse}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
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
                  
                  {/* Indicateur de force du mot de passe */}
                  {formData.motDePasse && (
                    <div className="mt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${getPasswordStrengthColor()} transition-all duration-300`}
                            style={{ width: `${(passwordStrength / 5) * 100}%` }}
                          ></div>
                        </div>
                        <span className={`text-xs font-semibold ${
                          passwordStrength <= 2 ? 'text-red-500' : passwordStrength <= 3 ? 'text-yellow-500' : 'text-green-500'
                        }`}>
                          {getPasswordStrengthText()}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        <div className={`flex items-center gap-1 ${passwordValid.length ? 'text-green-600' : 'text-gray-400'}`}>
                          {passwordValid.length ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                          <span>8 caractères</span>
                        </div>
                        <div className={`flex items-center gap-1 ${passwordValid.uppercase ? 'text-green-600' : 'text-gray-400'}`}>
                          {passwordValid.uppercase ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                          <span>Majuscule</span>
                        </div>
                        <div className={`flex items-center gap-1 ${passwordValid.lowercase ? 'text-green-600' : 'text-gray-400'}`}>
                          {passwordValid.lowercase ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                          <span>Minuscule</span>
                        </div>
                        <div className={`flex items-center gap-1 ${passwordValid.number ? 'text-green-600' : 'text-gray-400'}`}>
                          {passwordValid.number ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                          <span>Chiffre</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirmation mot de passe */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Confirmer le mot de passe *</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-12 py-3 rounded-xl border transition ${
                        formData.confirmPassword && !passwordsMatch
                          ? 'border-red-500 focus:ring-red-200'
                          : formData.confirmPassword && passwordsMatch
                          ? 'border-green-500 focus:ring-green-200'
                          : 'border-gray-200 focus:border-green-500'
                      } focus:outline-none focus:ring-2`}
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {formData.confirmPassword && !passwordsMatch && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <XCircle className="w-3 h-3" />
                      Les mots de passe ne correspondent pas
                    </p>
                  )}
                  {formData.confirmPassword && passwordsMatch && (
                    <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Les mots de passe correspondent
                    </p>
                  )}
                </div>
              </div>

              {/* Conditions générales */}
              <div className="mb-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-600">
                    J'accepte les{' '}
                    <Link to="/conditions" className="text-green-600 hover:underline">
                      conditions générales d'utilisation
                    </Link>
                  </span>
                </label>
              </div>

              {/* Bouton d'inscription */}
              <button
                type="submit"
                disabled={loading || !isFormValid}
                className="w-full bg-gradient-to-r from-green-600 to-yellow-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5" />
                    <span>Créer mon compte</span>
                  </>
                )}
              </button>

              {/* Séparateur */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">ou</span>
                </div>
              </div>

              {/* Lien de connexion */}
              <p className="text-center text-gray-600">
                Déjà inscrit ?{' '}
                <Link to="/connexion" className="text-green-600 font-semibold hover:text-green-700 hover:underline">
                  Se connecter
                </Link>
              </p>
            </form>
          </div>

          {/* Avantages */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-xs text-gray-500">Données sécurisées</p>
            </div>
            <div className="text-center p-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Sparkles className="w-5 h-5 text-yellow-600" />
              </div>
              <p className="text-xs text-gray-500">Offres exclusives</p>
            </div>
            <div className="text-center p-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-5 h-5 text-red-600" />
              </div>
              <p className="text-xs text-gray-500">Inscription rapide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
