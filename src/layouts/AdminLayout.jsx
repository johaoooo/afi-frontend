import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, ShoppingBag, BookOpen, Calendar, Users, 
  LogOut, Home, Settings, BarChart3, Package
} from 'lucide-react';

const AdminLayout = () => {
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/connexion');
    }
  }, [user, isAdmin, navigate]);

  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Produits', href: '/admin/produits', icon: ShoppingBag },
    { name: 'Formations', href: '/admin/formations', icon: BookOpen },
    { name: 'Événements', href: '/admin/evenements', icon: Calendar },
    { name: 'Utilisateurs', href: '/admin/utilisateurs', icon: Users },
  ];

  if (!user || !isAdmin) return null;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
            <h1 className="text-xl font-bold text-gray-800">
              AFI<span className="text-green-600">Admin</span>
            </h1>
          </div>
          <p className="text-xs text-gray-500 mt-1">Espace administrateur</p>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-600 transition group"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t">
          <div className="mb-3 p-3 bg-gray-50 rounded-xl">
            <p className="text-xs text-gray-500">Connecté en tant que</p>
            <p className="text-sm font-semibold text-gray-800">{user?.nom}</p>
            <p className="text-xs text-gray-400">{user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-red-600 hover:bg-red-50 transition"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Déconnexion</span>
          </button>
          <Link
            to="/"
            className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 transition mt-2"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Retour au site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
