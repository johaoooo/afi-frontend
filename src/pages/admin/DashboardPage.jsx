import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { 
  UsersIcon, 
  ShoppingBagIcon, 
  BookOpenIcon, 
  CalendarIcon
} from '@heroicons/react/24/outline';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DashboardPage = () => {
  const { token } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/stats', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setStats(response.data.stats);
        
        setMonthlyData([
          { mois: 'Jan', ventes: 12, inscriptions: 5 },
          { mois: 'Fév', ventes: 19, inscriptions: 8 },
          { mois: 'Mar', ventes: 15, inscriptions: 12 },
          { mois: 'Avr', ventes: 22, inscriptions: 15 },
          { mois: 'Mai', ventes: 28, inscriptions: 20 },
          { mois: 'Juin', ventes: 35, inscriptions: 25 },
        ]);
      } catch (error) {
        console.error('Erreur chargement stats:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-terracotta"></div>
      </div>
    );
  }

  const cards = [
    { title: 'Utilisateurs', value: stats?.totaux?.utilisateurs || 0, icon: UsersIcon, color: 'bg-blue-500' },
    { title: 'Produits', value: stats?.totaux?.produits || 0, icon: ShoppingBagIcon, color: 'bg-terracotta' },
    { title: 'Formations', value: stats?.totaux?.formations || 0, icon: BookOpenIcon, color: 'bg-green-500' },
    { title: 'Événements', value: stats?.totaux?.evenementsAVenir || 0, icon: CalendarIcon, color: 'bg-purple-500' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card) => (
          <div key={card.title} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{card.title}</p>
                <p className="text-2xl font-bold">{card.value}</p>
              </div>
              <div className={`${card.color} p-3 rounded-full`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Ventes mensuelles</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mois" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="ventes" fill="#C2691E" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Inscriptions utilisateurs</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mois" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="inscriptions" stroke="#2D6A4F" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Derniers utilisateurs inscrits</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">Nom</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Rôle</th>
                <th className="px-4 py-3 text-left">Date</th>
               </tr>
            </thead>
            <tbody>
              {stats?.derniersUtilisateurs?.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="px-4 py-3">{user.nom}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs ${user.role === 'admin' ? 'bg-red-100 text-red-600' : 'bg-gray-100'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-3">{new Date(user.createdAt).toLocaleDateString('fr-FR')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
