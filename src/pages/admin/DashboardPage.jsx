import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { 
  Users, ShoppingBag, BookOpen, Calendar, 
  TrendingUp, DollarSign, Package, Star,
  ArrowUp, ArrowDown, MoreHorizontal
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DashboardPage = () => {
  const { token } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recentOrders, setRecentOrders] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Récupérer les statistiques
        const response = await axios.get('https://afi-backend-rneb.onrender.com/api/admin/stats', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setStats(response.data.stats);
        
        // Données simulées pour les graphiques
        setSalesData([
          { mois: 'Jan', ventes: 12, revenus: 450000 },
          { mois: 'Fév', ventes: 19, revenus: 720000 },
          { mois: 'Mar', ventes: 15, revenus: 580000 },
          { mois: 'Avr', ventes: 22, revenus: 850000 },
          { mois: 'Mai', ventes: 28, revenus: 1050000 },
          { mois: 'Juin', ventes: 35, revenus: 1320000 },
        ]);
        
        setCategoryData([
          { name: 'Macramé', value: 35, color: '#2E7D32' },
          { name: 'Teinture', value: 25, color: '#F9A825' },
          { name: 'Mode', value: 20, color: '#D32F2F' },
          { name: 'Décoration', value: 15, color: '#1565C0' },
          { name: 'Agro', value: 5, color: '#7CB342' },
        ]);
        
        setRecentOrders([
          { id: 'CMD-001', client: 'Marie Kouamé', montant: 25000, status: 'payé', date: '2024-05-28' },
          { id: 'CMD-002', client: 'Jean Thomas', montant: 18000, status: 'en attente', date: '2024-05-27' },
          { id: 'CMD-003', client: 'Aïssa Diallo', montant: 35000, status: 'livré', date: '2024-05-26' },
          { id: 'CMD-004', client: 'Amadou Traoré', montant: 12000, status: 'payé', date: '2024-05-25' },
          { id: 'CMD-005', client: 'Fatou Diop', montant: 22000, status: 'expédié', date: '2024-05-24' },
        ]);
        
      } catch (error) {
        console.error('Erreur chargement stats:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, [token]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'payé': return 'bg-green-100 text-green-700';
      case 'en attente': return 'bg-yellow-100 text-yellow-700';
      case 'livré': return 'bg-blue-100 text-blue-700';
      case 'expédié': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const cards = [
    { title: 'Utilisateurs', value: stats?.totaux?.utilisateurs || 0, icon: Users, color: 'bg-blue-500', change: '+12%', trend: 'up' },
    { title: 'Produits', value: stats?.totaux?.produits || 0, icon: ShoppingBag, color: 'bg-green-600', change: '+5%', trend: 'up' },
    { title: 'Formations', value: stats?.totaux?.formations || 0, icon: BookOpen, color: 'bg-yellow-500', change: '+8%', trend: 'up' },
    { title: 'Événements', value: stats?.totaux?.evenementsAVenir || 0, icon: Calendar, color: 'bg-red-500', change: '-2%', trend: 'down' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
        <p className="text-gray-500 text-sm">Bienvenue dans votre espace d'administration</p>
      </div>

      {/* Cartes statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm mb-1">{card.title}</p>
                <p className="text-2xl font-bold text-gray-800">{card.value}</p>
                <div className="flex items-center gap-1 mt-2">
                  {card.trend === 'up' ? (
                    <ArrowUp className="w-3 h-3 text-green-500" />
                  ) : (
                    <ArrowDown className="w-3 h-3 text-red-500" />
                  )}
                  <span className={`text-xs ${card.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {card.change}
                  </span>
                  <span className="text-xs text-gray-400">vs mois dernier</span>
                </div>
              </div>
              <div className={`${card.color} p-3 rounded-xl`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Graphique ventes */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-800">Ventes mensuelles</h2>
            <select className="text-sm border rounded-lg px-2 py-1">
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mois" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="ventes" fill="#2E7D32" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Graphique revenus */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-800">Revenus (FCFA)</h2>
            <select className="text-sm border rounded-lg px-2 py-1">
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mois" />
              <YAxis />
              <Tooltip formatter={(value) => `${value.toLocaleString()} FCFA`} />
              <Line type="monotone" dataKey="revenus" stroke="#F9A825" strokeWidth={2} dot={{ fill: '#F9A825', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Deuxième ligne de graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Catégories populaires */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="font-semibold text-gray-800 mb-4">Ventes par catégorie</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Dernières commandes */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-800">Dernières commandes</h2>
            <Link to="/admin/commandes" className="text-green-600 text-sm hover:underline">Voir tout</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b">
                <tr className="text-left text-sm text-gray-500">
                  <th className="pb-2">Commande</th>
                  <th className="pb-2">Client</th>
                  <th className="pb-2">Montant</th>
                  <th className="pb-2">Statut</th>
                  <th className="pb-2"></th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b last:border-0">
                    <td className="py-3 text-sm font-medium">{order.id}</td>
                    <td className="py-3 text-sm">{order.client}</td>
                    <td className="py-3 text-sm">{order.montant.toLocaleString()} FCFA</td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Actions rapides */}
      <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-6 border border-green-200">
        <h2 className="font-semibold text-gray-800 mb-4">Actions rapides</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/admin/produits/ajouter" className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-md transition group">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition">
              <Package className="w-5 h-5 text-green-600 group-hover:text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">Ajouter</p>
              <p className="text-xs text-gray-500">un produit</p>
            </div>
          </Link>
          <Link to="/admin/produits" className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-md transition group">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-600 transition">
              <ShoppingBag className="w-5 h-5 text-yellow-600 group-hover:text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">Gérer</p>
              <p className="text-xs text-gray-500">les stocks</p>
            </div>
          </Link>
          <Link to="/admin/formations" className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-md transition group">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-600 transition">
              <BookOpen className="w-5 h-5 text-red-600 group-hover:text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">Ajouter</p>
              <p className="text-xs text-gray-500">une formation</p>
            </div>
          </Link>
          <Link to="/admin/utilisateurs" className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-md transition group">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition">
              <Users className="w-5 h-5 text-blue-600 group-hover:text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">Gérer</p>
              <p className="text-xs text-gray-500">les utilisateurs</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
