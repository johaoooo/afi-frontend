import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { PencilIcon, TrashIcon, PlusIcon, XIcon, ImageIcon, VideoIcon } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminEventsPage = () => {
  const { token } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    titre: '',
    descriptionCourte: '',
    lieu: '',
    ville: '',
    pays: 'Bénin',
    dateDebut: '',
    dateFin: '',
    horaires: '',
    stand: '',
    imagePrincipale: '',      // ← Changé: imageUrl → imagePrincipale
    videoUrl: ''
  });

  useEffect(() => {
    fetchEvents();
  }, [token]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('https://afi-backend-rneb.onrender.com/api/admin/evenements', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setEvents(response.data.events || []);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Préparer les données avec le bon nom de champ
      const eventData = {
        titre: formData.titre,
        descriptionCourte: formData.descriptionCourte,
        lieu: formData.lieu,
        ville: formData.ville,
        pays: formData.pays,
        dateDebut: formData.dateDebut,
        dateFin: formData.dateFin,
        horaires: formData.horaires,
        stand: formData.stand,
        imagePrincipale: formData.imagePrincipale,  // ← Envoi avec le bon nom
        videoUrl: formData.videoUrl
      };

      if (editingEvent) {
        await axios.put(`https://afi-backend-rneb.onrender.com/api/admin/evenements/${editingEvent.id}`, eventData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Événement modifié');
      } else {
        await axios.post('https://afi-backend-rneb.onrender.com/api/admin/evenements', eventData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Événement créé');
      }
      setShowModal(false);
      setEditingEvent(null);
      resetForm();
      fetchEvents();
    } catch (error) {
      console.error('Erreur:', error);
      toast.error(error.response?.data?.message || 'Erreur lors de l\'enregistrement');
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      try {
        await axios.delete(`https://afi-backend-rneb.onrender.com/api/admin/evenements/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Événement supprimé');
        fetchEvents();
      } catch (error) {
        toast.error('Erreur lors de la suppression');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      titre: '',
      descriptionCourte: '',
      lieu: '',
      ville: '',
      pays: 'Bénin',
      dateDebut: '',
      dateFin: '',
      horaires: '',
      stand: '',
      imagePrincipale: '',
      videoUrl: ''
    });
  };

  const openModal = (event = null) => {
    if (event) {
      setEditingEvent(event);
      setFormData({
        titre: event.titre,
        descriptionCourte: event.descriptionCourte || '',
        lieu: event.lieu,
        ville: event.ville,
        pays: event.pays || 'Bénin',
        dateDebut: event.dateDebut ? event.dateDebut.slice(0, 16) : '',
        dateFin: event.dateFin ? event.dateFin.slice(0, 16) : '',
        horaires: event.horaires || '',
        stand: event.stand || '',
        imagePrincipale: event.imagePrincipale || '',  // ← Changé: imageUrl → imagePrincipale
        videoUrl: event.videoUrl || ''
      });
    } else {
      setEditingEvent(null);
      resetForm();
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
        <h1 className="text-2xl font-bold">Gestion des Événements</h1>
        <button onClick={() => openModal()} className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2 text-sm py-2 px-4 rounded-lg transition">
          <PlusIcon className="w-4 h-4" />
          <span>Ajouter</span>
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr className="text-left text-sm">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Titre</th>
              <th className="px-4 py-3">Lieu</th>
              <th className="px-4 py-3">Dates</th>
              <th className="px-4 py-3">Stand</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-t dark:border-gray-700 text-sm">
                <td className="px-4 py-3">{event.id}</td>
                <td className="px-4 py-3">
                  {event.imagePrincipale ? (
                    <img src={event.imagePrincipale} alt={event.titre} className="w-10 h-10 object-cover rounded" />
                  ) : (
                    <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">📷</div>
                  )}
                </td>
                <td className="px-4 py-3">{event.titre}</td>
                <td className="px-4 py-3">{event.lieu}, {event.ville}</td>
                <td className="px-4 py-3 text-xs">
                  {new Date(event.dateDebut).toLocaleDateString('fr-FR')}<br/>
                  <span className="text-gray-400">au {new Date(event.dateFin).toLocaleDateString('fr-FR')}</span>
                </td>
                <td className="px-4 py-3">{event.stand || '-'}</td>
                <td className="px-4 py-3 text-center">
                  <button onClick={() => openModal(event)} className="text-blue-600 hover:text-blue-800 mr-3">
                    <PencilIcon className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(event.id)} className="text-red-600 hover:text-red-800">
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
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">{editingEvent ? 'Modifier' : 'Ajouter'} un événement</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">Titre</label>
                <input type="text" value={formData.titre} onChange={(e) => setFormData({ ...formData, titre: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600" required />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">Lieu</label>
                  <input type="text" value={formData.lieu} onChange={(e) => setFormData({ ...formData, lieu: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600" required />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">Ville</label>
                  <input type="text" value={formData.ville} onChange={(e) => setFormData({ ...formData, ville: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600" required />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">Pays</label>
                <input type="text" value={formData.pays} onChange={(e) => setFormData({ ...formData, pays: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600" />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">Date début</label>
                  <input type="datetime-local" value={formData.dateDebut} onChange={(e) => setFormData({ ...formData, dateDebut: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600" required />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">Date fin</label>
                  <input type="datetime-local" value={formData.dateFin} onChange={(e) => setFormData({ ...formData, dateFin: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600" required />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">Horaires</label>
                <input type="text" value={formData.horaires} onChange={(e) => setFormData({ ...formData, horaires: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder="9h-18h" />
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">Stand</label>
                <input type="text" value={formData.stand} onChange={(e) => setFormData({ ...formData, stand: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder="Stand A12" />
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">Description courte</label>
                <textarea value={formData.descriptionCourte} onChange={(e) => setFormData({ ...formData, descriptionCourte: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600" rows="2"></textarea>
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  URL de l'image (Cloudinary)
                </label>
                <input 
                  type="text" 
                  value={formData.imagePrincipale} 
                  onChange={(e) => setFormData({ ...formData, imagePrincipale: e.target.value })} 
                  className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600" 
                  placeholder="https://res.cloudinary.com/..."
                />
                {formData.imagePrincipale && (
                  <div className="mt-2">
                    <img src={formData.imagePrincipale} alt="Aperçu" className="w-20 h-20 object-cover rounded border" />
                    <p className="text-xs text-gray-500 mt-1">Aperçu de l'image</p>
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
                  <VideoIcon className="w-4 h-4" />
                  URL vidéo (YouTube)
                </label>
                <input type="text" value={formData.videoUrl} onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder="https://youtube.com/..." />
              </div>
              
              <div className="flex justify-end gap-2 pt-3">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-lg text-sm">Annuler</button>
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEventsPage;
