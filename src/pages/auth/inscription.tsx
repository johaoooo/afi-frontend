import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FiMail, FiLock, FiEye, FiEyeOff,
  FiUser, FiPhone, FiArrowLeft, FiShield,
} from 'react-icons/fi';

const features = [
  'Inscription gratuite, sans engagement',
  'Vérification email pour la sécurité du compte',
  'Accès vendeur après validation admin',
];

type AccountType = 'client' | 'vendeur';

export default function InscriptionPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [accountType, setAccountType] = useState<AccountType>('client');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) return;
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); navigate('/connexion'); }, 2000);
  };

  return (
    <div className="min-h-screen flex">

      {/* ── Panneau gauche — sombre ── */}
      <div className="hidden lg:flex lg:w-[55%] relative flex-col bg-gray-950 overflow-hidden">
        <img
          src="/images/slide1.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-950/60 to-transparent" />

        <div className="relative z-10 flex flex-col justify-between h-full p-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <div>
            <p className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase flex items-center gap-2 mb-6">
              <span>✦</span> REJOIGNEZ-NOUS
            </p>

            <h2 className="text-5xl font-black text-white leading-[1.05] tracking-tight mb-5">
              Le marché
              <br />
              <span className="text-[#1a6b3c]">artisanal béninois</span>
              <br />
              à votre porte.
            </h2>

            <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-xs">
              Créez votre compte en 30 secondes : achetez des pièces authentiques,
              livrées en 48h à Cotonou.
            </p>

            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                  <FiShield className="w-4 h-4 text-[#1a6b3c] shrink-0 mt-0.5" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-white/25 text-xs">
            © AFI Collection · Cotonou, Bénin
          </p>
        </div>
      </div>

      {/* ── Panneau droit — formulaire ── */}
      <div className="w-full lg:w-[45%] flex items-center justify-center bg-[#faf8f5] px-8 py-12 overflow-y-auto">
        <div className="w-full max-w-sm">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#1a6b3c] text-sm font-medium transition-colors mb-10 lg:hidden"
          >
            <FiArrowLeft className="w-4 h-4" /> Retour à l'accueil
          </Link>

          <p className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase mb-3">
            INSCRIPTION
          </p>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight leading-tight mb-2">
            Créer un compte
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Déjà un compte ?{' '}
            <Link to="/connexion" className="text-[#1a6b3c] font-bold hover:underline">
              Se connecter
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="prenom" className="block text-sm font-semibold text-gray-700 mb-2">
                  Prénom
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                  <input
                    type="text"
                    id="prenom"
                    required
                    placeholder="Aïssa"
                    className="w-full pl-10 pr-3 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1a6b3c] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                  <input
                    type="text"
                    id="nom"
                    required
                    placeholder="Hounkpè"
                    className="w-full pl-10 pr-3 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1a6b3c] transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="votre@email.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1a6b3c] transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Téléphone
              </label>
              <div className="relative">
                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                <input
                  type="tel"
                  id="phone"
                  placeholder="+229 97 00 00 00"
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1a6b3c] transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  required
                  minLength={6}
                  placeholder="6 caractères minimum"
                  className="w-full pl-11 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1a6b3c] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Masquer' : 'Afficher'}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                >
                  {showPassword
                    ? <FiEyeOff className="w-4 h-4" aria-hidden="true" />
                    : <FiEye className="w-4 h-4" aria-hidden="true" />
                  }
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Type de compte
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAccountType('client')}
                  className={`p-4 rounded-xl border-2 text-left transition-all duration-200 focus:outline-none ${
                    accountType === 'client'
                      ? 'border-[#1a6b3c] bg-[#1a6b3c]/5'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <p className={`text-sm font-bold ${accountType === 'client' ? 'text-[#1a6b3c]' : 'text-gray-700'}`}>
                    Client
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">Acheter des pièces</p>
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType('vendeur')}
                  className={`p-4 rounded-xl border-2 text-left transition-all duration-200 focus:outline-none ${
                    accountType === 'vendeur'
                      ? 'border-[#1a6b3c] bg-[#1a6b3c]/5'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <p className={`text-sm font-bold ${accountType === 'vendeur' ? 'text-[#1a6b3c]' : 'text-gray-700'}`}>
                    Vendeur
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">Vendre mes créations</p>
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer select-none pt-1">
              <div
                role="checkbox"
                aria-checked={acceptTerms}
                tabIndex={0}
                onClick={() => setAcceptTerms((v) => !v)}
                onKeyDown={(e) => e.key === ' ' && setAcceptTerms((v) => !v)}
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200 focus:outline-none ${
                  acceptTerms ? 'bg-[#1a6b3c] border-[#1a6b3c]' : 'border-gray-200 bg-white'
                }`}
              >
                {acceptTerms && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-500 leading-relaxed">
                J'accepte les{' '}
                <Link to="/cgv" className="text-[#1a6b3c] font-bold hover:underline">CGV</Link>
                {' '}et la{' '}
                <Link to="/politique-confidentialite" className="text-[#1a6b3c] font-bold hover:underline">
                  politique de confidentialité
                </Link>
              </span>
            </label>

            <button
              type="submit"
              disabled={isLoading || !acceptTerms}
              className="w-full bg-[#1a6b3c] hover:bg-[#14532d] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf8f5]"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Création en cours…
                </>
              ) : 'Créer mon compte'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
