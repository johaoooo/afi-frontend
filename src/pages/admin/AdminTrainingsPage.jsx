import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { PencilIcon, TrashIcon, PlusIcon, XIcon, ImageIcon, VideoIcon } from 'lucide-react';
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
    placesDisponibles: 10,
    imageUrl: '',
    videoUrl: ''
  });

  useEffect(() => {
    fetchTrainings();
  }, [token]);

  const fetchTrainings = async () => {
    try {
      const response = await axios.get('https://afi-backend-rneb.onrender.com/api/admin/formations', {
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
        await axios.put(`https://afi-backend-rneb.onrender.com/api/admin/formations/${editingTraining.id}`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Formation modifiée');
      } else {
        await axios.post('https://afi-backend-rneb.onrender.com/api/admin/formations', formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Formation créée');
      }
      setShowModal(false);
      setEditingTraining(null);
      setFormData({ titre: '', prix: '', duree: '', descriptionCourte: '', lieu: '', enLigne: false, placesDisponibles: 10, imageUrl: '', videoUrl: '' });
      fetchTrainings();
    } catch (error) {
      toast.error('Erreur lors de l\'enregistrement');
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      try {
        await axios.delete(`https://afi-backend-rneb.onrender.com/api/admin/formations/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Formation supprimée');
        fetchTrainings();
      } catch (error) {
        toast.error('Erreur lors de la suppression');
      }
    }
  };

  const openModal = (training = null) => {
    if (training) {
      setEditingTraining(training);
      setFormData({
        titre: training.titre,
        prix: training.prix,
        duree: training.duree || '',
        descriptionCourte: training.descriptionCourte || '',
        lieu: training.lieu || '',
        enLigne: training.enLigne || false,
        placesDisponibles: training.placesDisponibles || 10,
        imageUrl: training.imagePrincipale || '',
        videoUrl: training.videoUrl || ''
      });
    } else {
      setEditingTraining(null);
      setFormData({ titre: '', prix: '', duree: '', descriptionCourte: '', lieu: '', enLigne: false, placesDisponibles: 10, imageUrl: '', videoUrl: '' });
    }
    setShowModal(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des Formations</h1>
        <button onClick={() => openModal()} className="btn-primary flex items-center space-x-2 text-sm py-2 px-4">
          <PlusIcon className="w-4 h-4" />
          <span>Ajouter</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Titre</th>
              <th className="px-4 py-3">Prix</th>
              <th className="px-4 py-3">Durée</th>
              <th className="px-4 py-3">Lieu</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map((training) => (
              <tr key={training.id} className="border-t text-sm">
                <td className="px-4 py-3">{training.id}</td>
                <td className="px-4 py-3">{training.titre}</td>
                <td className="px-4 py-3">{training.prix} FCFA</td>
                <td className="px-4 py-3">{training.duree}</td>
                <td className="px-4 py-3">{training.enLigne ? 'En ligne' : training.lieu}</td>
                <td className="px-4 py-3 text-center">
                  <button onClick={() => openModal(training)} className="text-blue-600 hover:text-blue-800 mr-3">
                    <PencilIcon className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(training.id)} className="text-red-600 hover:text-red-800">
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal compact */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-5 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">{editingTraining ? 'Modifier' : 'Ajouter'} une formation</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Titre</label>
                <input type="text" value={formData.titre} onChange={(e) => setFormData({ ...formData, titre: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" required />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Prix (FCFA)</label>
                  <input type="number" value={formData.prix} onChange={(e) => setFormData({ ...formData, prix: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" required />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Durée</label>
                  <input type="text" value={formData.duree} onChange={(e) => setFormData({ ...formData, duree: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="2 jours" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Lieu</label>
                  <input type="text" value={formData.lieu} onChange={(e) => setFormData({ ...formData, lieu: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Places</label>
                  <input type="number" value={formData.placesDisponibles} onChange={(e) => setFormData({ ...formData, placesDisponibles: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" />
                </div>
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={formData.enLigne} onChange={(e) => setFormData({ ...formData, enLigne: e.target.checked })} className="rounded" />
                  Formation en ligne
                </label>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Description courte</label>
                <textarea value={formData.descriptionCourte} onChange={(e) => setFormData({ ...formData, descriptionCourte: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" rows="2"></textarea>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  URL de l'image
                </label>
                <input type="text" value={formData.imageUrl} onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="https://..." />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1 flex items-center gap-2">
                  <VideoIcon className="w-4 h-4" />
                  URL vidéo (YouTube)
                </label>
                <input type="text" value={formData.videoUrl} onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="https://youtube.com/..." />
              </div>
              
              <div className="flex justify-end gap-2 pt-3">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-lg text-sm">Annuler</button>
                <button type="submit" className="btn-primary px-4 py-2 text-sm">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTrainingsPage;
