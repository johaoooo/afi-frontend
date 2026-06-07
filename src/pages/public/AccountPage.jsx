import React from 'react';
import { useAuth } from '../../context/AuthContext';
import PageHero from '../../components/PageHero';
import { User, Mail, Phone, MapPin, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountPage = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Vous n'êtes pas connecté</h2>
        <Link to="/connexion" className="btn-primary">Se connecter</Link>
      </div>
    );
  }

  return (
    <div>
      <PageHero title="Mon compte" subtitle="Gérez vos informations personnelles" />
      <div className="container-custom py-12">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{user.nom}</h2>
              <p className="text-gray-500">{user.role === 'admin' ? 'Administrateur' : 'Client'}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Mail className="w-5 h-5 text-green-600" />
              <span>{user.email}</span>
            </div>
            {user.telephone && (
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-green-600" />
                <span>{user.telephone}</span>
              </div>
            )}
            {user.ville && (
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-green-600" />
                <span>{user.ville}, {user.pays}</span>
              </div>
            )}
          </div>
          
          <button onClick={logout} className="mt-8 w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition">
            <LogOut className="w-5 h-5" />
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
