import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { TrashIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const AdminUsersPage = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, [token]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://afi-backend-rneb.onrender.com/api/admin/utilisateurs', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(response.data.users || []);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleRole = async (user) => {
    const newRole = user.role === 'admin' ? 'user' : 'admin';
    try {
      await axios.put(`https://afi-backend-rneb.onrender.com/api/admin/utilisateurs/${user.id}`, { role: newRole }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success(`Rôle modifié : ${newRole}`);
      fetchUsers();
    } catch (error) {
      toast.error('Erreur lors de la modification');
    }
  };

  const toggleStatus = async (user) => {
    try {
      await axios.put(`https://afi-backend-rneb.onrender.com/api/admin/utilisateurs/${user.id}`, { estActif: !user.estActif }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success(user.estActif ? 'Compte désactivé' : 'Compte activé');
      fetchUsers();
    } catch (error) {
      toast.error('Erreur lors de la modification');
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      try {
        await axios.delete(`https://afi-backend-rneb.onrender.com/api/admin/utilisateurs/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Utilisateur supprimé');
        fetchUsers();
      } catch (error) {
        toast.error('Erreur lors de la suppression');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-terracotta"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Gestion des Utilisateurs</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Nom</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Téléphone</th>
              <th className="px-4 py-3 text-left">Rôle</th>
              <th className="px-4 py-3 text-left">Statut</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="px-4 py-3">{user.id}</td>
                <td className="px-4 py-3">{user.nom}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.telephone || '-'}</td>
                <td className="px-4 py-3">
                  <button onClick={() => toggleRole(user)} className={`px-2 py-1 rounded text-xs ${user.role === 'admin' ? 'bg-red-100 text-red-600' : 'bg-gray-100'}`}>
                    {user.role}
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button onClick={() => toggleStatus(user)} className={`px-2 py-1 rounded text-xs ${user.estActif ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {user.estActif ? 'Actif' : 'Inactif'}
                  </button>
                </td>
                <td className="px-4 py-3 text-center">
                  <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-800">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsersPage;
