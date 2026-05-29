import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const AdminTrainingsPage = () => {
  const { token } = useAuth();
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingTraining, setEditingTraining] = useState(null);
  const [formData, setFormData] = useState({
    titre: '',
    prix: '',
    duree: '',
    descriptionCourte: '',
    lieu: '',
    enLigne: false,
    placesDisponibles: 10
  });

  useEffect(() => {
    fetchTrainings();
  }, [token]);

  const fetchTrainings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/formations', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTrainings(response.data.formations || []);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTraining) {
        await axios.put(`http://localhost:5000/api/admin/formations/${editingTraining.id}`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Formation modifiée');
      } else {
        await axios.post('http://localhost:5000/api/admin/formations', formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Formation créée');
      }
      setShowModal(false);
      setEditingTraining(null);
      setFormData({ titre: '', prix: '', duree: '', descriptionCourte: '', lieu: '', enLigne: false, placesDisponibles: 10 });
      fetchTrainings();
    } catch (error) {
      toast.error('Erreur lors de l\'enregistrement');
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/formations/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Formation supprimée');
        fetchTrainings();
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des Formations</h1>
        <button onClick={() => setShowModal(true)} className="btn-primary flex items-center space-x-2">
          <PlusIcon className="w-5 h-5" />
          <span>Ajouter</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Titre</th>
              <th className="px-4 py-3 text-left">Prix</th>
              <th className="px-4 py-3 text-left">Durée</th>
              <th className="px-4 py-3 text-left">Lieu</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map((training) => (
              <tr key={training.id} className="border-t">
                <td className="px-4 py-3">{training.id}</td>
                <td className="px-4 py-3">{training.titre}</td>
                <td className="px-4 py-3">{training.prix} FCFA</td>
                <td className="px-4 py-3">{training.duree}</td>
                <td className="px-4 py-3">{training.enLigne ? 'En ligne' : training.lieu}</td>
                <td className="px-4 py-3 text-center">
                  <button onClick={() => {
                    setEditingTraining(training);
                    setFormData(training);
                    setShowModal(true);
                  }} className="text-blue-600 hover:text-blue-800 mr-3">
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDelete(training.id)} className="text-red-600 hover:text-red-800">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal similaire à AdminProductsPage */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">{editingTraining ? 'Modifier' : 'Ajouter'} une formation</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Titre" value={formData.titre} onChange={(e) => setFormData({ ...formData, titre: e.target.value })} className="w-full border rounded px-3 py-2 mb-3" required />
              <input type="number" placeholder="Prix" value={formData.prix} onChange={(e) => setFormData({ ...formData, prix: e.target.value })} className="w-full border rounded px-3 py-2 mb-3" required />
              <input type="text" placeholder="Durée" value={formData.duree} onChange={(e) => setFormData({ ...formData, duree: e.target.value })} className="w-full border rounded px-3 py-2 mb-3" />
              <textarea placeholder="Description" value={formData.descriptionCourte} onChange={(e) => setFormData({ ...formData, descriptionCourte: e.target.value })} className="w-full border rounded px-3 py-2 mb-3" rows="3"></textarea>
              <div className="flex justify-end space-x-3">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded">Annuler</button>
                <button type="submit" className="btn-primary px-4 py-2">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTrainingsPage;
