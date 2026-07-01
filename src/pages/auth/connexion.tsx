import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowLeft, FiShield } from 'react-icons/fi';

const features = [
  'Authentification produit par QR code',
  'Suivi de livraison en 48h sur Cotonou',
  'Paiements mobiles & cartes sécurisés',
];

export default function ConnexionPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); navigate('/'); }, 2000);
  };

  return (
    <div className="min-h-screen flex">

      {/* ── Panneau gauche — sombre ── */}
      <div className="hidden lg:flex lg:w-[55%] relative flex-col bg-gray-950 overflow-hidden">
        <img
          src="/images/about/artisanat.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200';
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
              <span className="text-[#1a6b3c]">✦</span> ESPACE MEMBRES
            </p>

            <h2 className="text-5xl font-black text-white leading-[1.05] tracking-tight mb-5">
              AFI<br />
              <span className="text-[#1a6b3c]">Collection</span>
            </h2>

            <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-xs">
              Retrouvez vos commandes, votre traçabilité produit et vos artisans favoris.
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
      <div className="w-full lg:w-[45%] flex items-center justify-center bg-[#faf8f5] px-8 py-12">
        <div className="w-full max-w-sm">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#1a6b3c] text-sm font-medium transition-colors mb-10 lg:hidden"
          >
            <FiArrowLeft className="w-4 h-4" /> Retour à l'accueil
          </Link>

          <p className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase mb-3">
            CONNEXION
          </p>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight leading-tight mb-2">
            Accéder à<br />votre compte
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Pas encore membre ?{' '}
            <Link to="/inscription" className="text-[#1a6b3c] font-bold hover:underline">
              Créer un compte
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1a6b3c] transition-colors duration-200"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                  Mot de passe
                </label>
                <Link
                  to="/mot-de-passe-oublie"
                  className="text-xs text-[#1a6b3c] font-semibold hover:underline"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" aria-hidden="true" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1a6b3c] transition-colors duration-200"
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

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1a6b3c] hover:bg-[#14532d] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 text-sm mt-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf8f5]"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Connexion en cours…
                </>
              ) : 'Se connecter'}
            </button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
            En vous connectant, vous acceptez nos{' '}
            <Link to="/cgv" className="hover:text-[#1a6b3c] transition-colors">conditions</Link>
            {' '}et notre{' '}
            <Link to="/politique-confidentialite" className="hover:text-[#1a6b3c] transition-colors">
              politique de confidentialité
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
