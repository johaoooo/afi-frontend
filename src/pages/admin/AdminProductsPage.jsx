import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { PencilIcon, TrashIcon, PlusIcon, XIcon, ImageIcon, VideoIcon } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminProductsPage = () => {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    nom: '',
    prix: '',
    stock: '',
    descriptionCourte: '',
    categorieId: '',
    imageUrl: '',
    videoUrl: ''
  });

  useEffect(() => {
    fetchData();
  }, [token]);

  const fetchData = async () => {
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        axios.get('http://localhost:5000/api/admin/produits', {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get('http://localhost:5000/api/categories')
      ]);
      setProducts(productsRes.data.produits || []);
      setCategories(categoriesRes.data.categories || []);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await axios.put(`http://localhost:5000/api/admin/produits/${editingProduct.id}`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Produit modifié');
      } else {
        await axios.post('http://localhost:5000/api/admin/produits', formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Produit créé');
      }
      setShowModal(false);
      setEditingProduct(null);
      setFormData({ nom: '', prix: '', stock: '', descriptionCourte: '', categorieId: '', imageUrl: '', videoUrl: '' });
      fetchData();
    } catch (error) {
      toast.error('Erreur lors de l\'enregistrement');
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/produits/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Produit supprimé');
        fetchData();
      } catch (error) {
        toast.error('Erreur lors de la suppression');
      }
    }
  };

  const openModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        nom: product.nom,
        prix: product.prix,
        stock: product.stock,
        descriptionCourte: product.descriptionCourte || '',
        categorieId: product.categorieId || '',
        imageUrl: product.imagePrincipale || '',
        videoUrl: product.videoUrl || ''
      });
    } else {
      setEditingProduct(null);
      setFormData({ nom: '', prix: '', stock: '', descriptionCourte: '', categorieId: '', imageUrl: '', videoUrl: '' });
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
        <h1 className="text-2xl font-bold">Gestion des Produits</h1>
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
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Catégorie</th>
              <th className="px-4 py-3">Prix</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t text-sm">
                <td className="px-4 py-3">{product.id}</td>
                <td className="px-4 py-3">{product.nom}</td>
                <td className="px-4 py-3">{product.categorie?.nom || '-'}</td>
                <td className="px-4 py-3">{product.prix} FCFA</td>
                <td className="px-4 py-3">{product.stock}</td>
                <td className="px-4 py-3 text-center">
                  <button onClick={() => openModal(product)} className="text-blue-600 hover:text-blue-800 mr-3">
                    <PencilIcon className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-800">
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
              <h2 className="text-lg font-bold">{editingProduct ? 'Modifier' : 'Ajouter'} un produit</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Nom</label>
                <input type="text" value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" required />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Prix (FCFA)</label>
                  <input type="number" value={formData.prix} onChange={(e) => setFormData({ ...formData, prix: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" required />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Stock</label>
                  <input type="number" value={formData.stock} onChange={(e) => setFormData({ ...formData, stock: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" required />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Catégorie</label>
                <select value={formData.categorieId} onChange={(e) => setFormData({ ...formData, categorieId: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm">
                  <option value="">Sélectionner</option>
                  {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.nom}</option>)}
                </select>
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

export default AdminProductsPage;
