import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  HomeIcon, 
  ShoppingBagIcon, 
  BookOpenIcon, 
  CalendarIcon, 
  UsersIcon,
  ChartBarIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

const AdminLayout = () => {
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/connexion');
    }
  }, [user, isAdmin, navigate]);

  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: ChartBarIcon },
    { name: 'Produits', href: '/admin/produits', icon: ShoppingBagIcon },
    { name: 'Formations', href: '/admin/formations', icon: BookOpenIcon },
    { name: 'Événements', href: '/admin/evenements', icon: CalendarIcon },
    { name: 'Utilisateurs', href: '/admin/utilisateurs', icon: UsersIcon },
  ];

  if (!user || !isAdmin) return null;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-dark text-white flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-playfair font-bold">
            AFI<span className="text-terracotta">Admin</span>
          </h1>
          <p className="text-sm text-gray-400 mt-1">{user?.nom}</p>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-terracotta hover:text-white transition group"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={logout}
            className="flex items-center space-x-3 px-4 py-3 w-full rounded-lg hover:bg-red-600 transition"
          >
            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            <span>Déconnexion</span>
          </button>
          <Link
            to="/"
            className="flex items-center space-x-3 px-4 py-3 w-full rounded-lg hover:bg-gray-700 transition mt-2"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Retour au site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
