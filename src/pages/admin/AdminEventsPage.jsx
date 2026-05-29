import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const AdminEventsPage = () => {
  const { token } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    titre: '',
    lieu: '',
    ville: '',
    dateDebut: '',
    dateFin: '',
    descriptionCourte: '',
    stand: ''
  });

  useEffect(() => {
    fetchEvents();
  }, [token]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/evenements', {
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
      if (editingEvent) {
        await axios.put(`http://localhost:5000/api/admin/evenements/${editingEvent.id}`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Événement modifié');
      } else {
        await axios.post('http://localhost:5000/api/admin/evenements', formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Événement créé');
      }
      setShowModal(false);
      setEditingEvent(null);
      setFormData({ titre: '', lieu: '', ville: '', dateDebut: '', dateFin: '', descriptionCourte: '', stand: '' });
      fetchEvents();
    } catch (error) {
      toast.error('Erreur lors de l\'enregistrement');
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/evenements/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Événement supprimé');
        fetchEvents();
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
        <h1 className="text-2xl font-bold">Gestion des Événements</h1>
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
              <th className="px-4 py-3 text-left">Lieu</th>
              <th className="px-4 py-3 text-left">Dates</th>
              <th className="px-4 py-3 text-left">Stand</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-t">
                <td className="px-4 py-3">{event.id}</td>
                <td className="px-4 py-3">{event.titre}</td>
                <td className="px-4 py-3">{event.lieu}, {event.ville}</td>
                <td className="px-4 py-3">
                  {new Date(event.dateDebut).toLocaleDateString('fr-FR')}<br/>
                  <span className="text-xs">au {new Date(event.dateFin).toLocaleDateString('fr-FR')}</span>
                </td>
                <td className="px-4 py-3">{event.stand || '-'}</td>
                <td className="px-4 py-3 text-center">
                  <button onClick={() => {
                    setEditingEvent(event);
                    setFormData(event);
                    setShowModal(true);
                  }} className="text-blue-600 hover:text-blue-800 mr-3">
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDelete(event.id)} className="text-red-600 hover:text-red-800">
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

export default AdminEventsPage;
