import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { PencilIcon, TrashIcon, PlusIcon, XIcon, ImageIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminProductsPage = () => {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('general'); // general, images, seo
  const [formData, setFormData] = useState({
    nom: '',
    prix: '',
    stock: '',
    descriptionCourte: '',
    descriptionLongue: '',
    categorieId: '',
    imagePrincipale: '',
    images: [],
    matiere: '',
    dimensions: '',
    couleur: '',
    prixPromo: '',
    estEnPromotion: false,
    estNouveaute: false
  });
  const [imagesInput, setImagesInput] = useState('');

  useEffect(() => {
    fetchData();
  }, [token]);

  const fetchData = async () => {
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        axios.get('https://afi-backend-rneb.onrender.com/api/produits'),
        axios.get('https://afi-backend-rneb.onrender.com/api/categories')
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
      const url = editingProduct 
        ? `https://afi-backend-rneb.onrender.com/api/admin/produits/${editingProduct.id}`
        : 'https://afi-backend-rneb.onrender.com/api/admin/produits';
      const method = editingProduct ? 'put' : 'post';
      
      const productData = {
        nom: formData.nom,
        prix: parseFloat(formData.prix),
        stock: parseInt(formData.stock),
        descriptionCourte: formData.descriptionCourte,
        descriptionLongue: formData.descriptionLongue,
        categorieId: parseInt(formData.categorieId),
        imagePrincipale: formData.imagePrincipale || null,
        images: formData.images.filter(img => img.trim() !== ''),
        matiere: formData.matiere,
        dimensions: formData.dimensions,
        couleur: formData.couleur,
        prixPromo: formData.prixPromo ? parseFloat(formData.prixPromo) : null,
        estEnPromotion: formData.estEnPromotion,
        estNouveaute: formData.estNouveaute
      };
      
      await axios[method](url, productData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success(editingProduct ? 'Produit modifié' : 'Produit créé');
      setShowModal(false);
      setEditingProduct(null);
      resetForm();
      fetchData();
    } catch (error) {
      console.error('Erreur:', error);
      toast.error(error.response?.data?.message || 'Erreur lors de l\'enregistrement');
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      try {
        await axios.delete(`https://afi-backend-rneb.onrender.com/api/admin/produits/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Produit supprimé');
        fetchData();
      } catch (error) {
        toast.error('Erreur lors de la suppression');
      }
    }
  };

  const addImage = () => {
    if (imagesInput.trim()) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, imagesInput.trim()]
      }));
      setImagesInput('');
    }
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const resetForm = () => {
    setFormData({
      nom: '',
      prix: '',
      stock: '',
      descriptionCourte: '',
      descriptionLongue: '',
      categorieId: '',
      imagePrincipale: '',
      images: [],
      matiere: '',
      dimensions: '',
      couleur: '',
      prixPromo: '',
      estEnPromotion: false,
      estNouveaute: false
    });
    setImagesInput('');
    setActiveTab('general');
  };

  const openModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        nom: product.nom || '',
        prix: product.prix || '',
        stock: product.stock || '',
        descriptionCourte: product.descriptionCourte || '',
        descriptionLongue: product.descriptionLongue || '',
        categorieId: product.categorieId || '',
        imagePrincipale: product.imagePrincipale || '',
        images: product.images || [],
        matiere: product.matiere || '',
        dimensions: product.dimensions || '',
        couleur: product.couleur || '',
        prixPromo: product.prixPromo || '',
        estEnPromotion: product.estEnPromotion || false,
        estNouveaute: product.estNouveaute || false
      });
    } else {
      setEditingProduct(null);
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
        <h1 className="text-2xl font-bold">Gestion des Produits</h1>
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
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Catégorie</th>
              <th className="px-4 py-3">Prix</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Promo</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t dark:border-gray-700 text-sm">
                <td className="px-4 py-3">{product.id}</td>
                <td className="px-4 py-3">
                  {product.imagePrincipale ? (
                    <img src={product.imagePrincipale} alt={product.nom} className="w-10 h-10 object-cover rounded" />
                  ) : (
                    <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">📷</div>
                  )}
                </td>
                <td className="px-4 py-3">{product.nom}</td>
                <td className="px-4 py-3">{product.categorie?.nom || '-'}</td>
                <td className="px-4 py-3">{product.prix} FCFA</td>
                <td className="px-4 py-3">{product.stock}</td>
                <td className="px-4 py-3">
                  {product.estEnPromotion ? <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Promo</span> : '-'}
                </td>
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

      {/* Modal avec onglets */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-5 border-b">
              <h2 className="text-xl font-bold">{editingProduct ? 'Modifier' : 'Ajouter'} un produit</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            
            {/* Onglets */}
            <div className="flex border-b px-5">
              <button 
                onClick={() => setActiveTab('general')}
                className={`py-2 px-4 text-sm font-medium transition ${activeTab === 'general' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500'}`}
              >
                Général
              </button>
              <button 
                onClick={() => setActiveTab('images')}
                className={`py-2 px-4 text-sm font-medium transition ${activeTab === 'images' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500'}`}
              >
                Images & Média
              </button>
              <button 
                onClick={() => setActiveTab('seo')}
                className={`py-2 px-4 text-sm font-medium transition ${activeTab === 'seo' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500'}`}
              >
                Détails & Promo
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              {/* Onglet Général */}
              {activeTab === 'general' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nom *</label>
                    <input type="text" value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value })} className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600" required />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Prix (FCFA) *</label>
                      <input type="number" value={formData.prix} onChange={(e) => setFormData({ ...formData, prix: e.target.value })} className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Stock *</label>
                      <input type="number" value={formData.stock} onChange={(e) => setFormData({ ...formData, stock: e.target.value })} className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Catégorie *</label>
                    <select value={formData.categorieId} onChange={(e) => setFormData({ ...formData, categorieId: e.target.value })} className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600" required>
                      <option value="">Sélectionner</option>
                      {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.nom}</option>)}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Description courte</label>
                    <textarea value={formData.descriptionCourte} onChange={(e) => setFormData({ ...formData, descriptionCourte: e.target.value })} className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600" rows="2"></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Description longue</label>
                    <textarea value={formData.descriptionLongue} onChange={(e) => setFormData({ ...formData, descriptionLongue: e.target.value })} className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600" rows="4" placeholder="Description détaillée du produit..."></textarea>
                  </div>
                </div>
              )}
              
              {/* Onglet Images & Média */}
              {activeTab === 'images' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Image principale (URL)</label>
                    <input type="text" value={formData.imagePrincipale} onChange={(e) => setFormData({ ...formData, imagePrincipale: e.target.value })} className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600" placeholder="https://res.cloudinary.com/..." />
                    {formData.imagePrincipale && (
                      <div className="mt-2">
                        <img src={formData.imagePrincipale} alt="Aperçu" className="w-20 h-20 object-cover rounded border" />
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Galerie d'images</label>
                    <div className="flex gap-2 mb-2">
                      <input type="text" value={imagesInput} onChange={(e) => setImagesInput(e.target.value)} className="flex-1 border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600" placeholder="URL de l'image" />
                      <button type="button" onClick={addImage} className="bg-gray-200 hover:bg-gray-300 px-4 rounded-lg">+</button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.images.map((img, idx) => (
                        <div key={idx} className="relative group">
                          <img src={img} alt={`Image ${idx + 1}`} className="w-16 h-16 object-cover rounded border" />
                          <button type="button" onClick={() => removeImage(idx)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">×</button>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Ajoutez plusieurs URLs d'images Cloudinary</p>
                  </div>
                </div>
              )}
              
              {/* Onglet Détails & Promo */}
              {activeTab === 'seo' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Matière</label>
                      <input type="text" value={formData.matiere} onChange={(e) => setFormData({ ...formData, matiere: e.target.value })} className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600" placeholder="Coton, Bois, Bronze..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Dimensions</label>
                      <input type="text" value={formData.dimensions} onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })} className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600" placeholder="30x20x10 cm" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Couleur</label>
                    <input type="text" value={formData.couleur} onChange={(e) => setFormData({ ...formData, couleur: e.target.value })} className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600" placeholder="Rouge, Bleu, Multicolore..." />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Prix promotion (FCFA)</label>
                      <input type="number" value={formData.prixPromo} onChange={(e) => setFormData({ ...formData, prixPromo: e.target.value })} className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600" placeholder="Prix en promo" />
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked={formData.estEnPromotion} onChange={(e) => setFormData({ ...formData, estEnPromotion: e.target.checked })} className="rounded" />
                      <span className="text-sm">En promotion</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked={formData.estNouveaute} onChange={(e) => setFormData({ ...formData, estNouveaute: e.target.checked })} className="rounded" />
                      <span className="text-sm">Nouveauté</span>
                    </label>
                  </div>
                </div>
              )}
              
              <div className="flex justify-end gap-3 pt-4 border-t">
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

export default AdminProductsPage;
