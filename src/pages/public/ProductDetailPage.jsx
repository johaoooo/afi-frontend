import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../../context/CartContext';
import toast from 'react-hot-toast';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/produits/${slug}`);
        setProduct(response.data.produit);
      } catch (error) {
        console.error('Erreur:', error);
        toast.error('Produit non trouvé');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-terracotta"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container-custom py-12 text-center">
        <h2 className="text-2xl font-bold">Produit non trouvé</h2>
        <Link to="/boutique" className="btn-primary mt-4 inline-block">Retour à la boutique</Link>
      </div>
    );
  }

  const prixFinal = product.estEnPromotion && product.prixPromo ? product.prixPromo : product.prix;

  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={product.imagePrincipale || 'https://via.placeholder.com/500'} 
            alt={product.nom} 
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Infos produit */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.nom}</h1>
          {product.categorie && (
            <Link to={`/boutique?categorie=${product.categorie.id}`} className="text-terracotta hover:underline mb-2 inline-block">
              {product.categorie.nom}
            </Link>
          )}
          
          <div className="mt-4">
            {product.estEnPromotion ? (
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-terracotta">{prixFinal} FCFA</span>
                <span className="text-lg text-gray-400 line-through">{product.prix} FCFA</span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-terracotta">{product.prix} FCFA</span>
            )}
          </div>

          {product.matiere && (
            <p className="mt-4 text-gray-600"><span className="font-semibold">Matière:</span> {product.matiere}</p>
          )}
          {product.stock !== undefined && (
            <p className="text-gray-600">
              <span className="font-semibold">Stock:</span> {product.stock > 0 ? `${product.stock} disponibles` : 'Rupture de stock'}
            </p>
          )}

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{product.descriptionLongue || product.descriptionCourte || 'Aucune description disponible.'}</p>
          </div>

          {/* Quantité et ajout panier */}
          {product.stock > 0 && (
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex items-center border rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 border-r hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button 
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-3 py-2 border-l hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button 
                onClick={() => addToCart(product, quantity)}
                className="btn-primary"
              >
                Ajouter au panier
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
