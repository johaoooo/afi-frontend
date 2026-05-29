import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ShopHero from '../../components/ShopHero';
import { Filter, ChevronDown, ChevronLeft, ChevronRight, ShoppingBag, Sparkles, X, Star, Eye, ArrowRight, Award, Clock, Users } from 'lucide-react';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          axios.get('http://localhost:5000/api/produits'),
          axios.get('http://localhost:5000/api/categories')
        ]);
        setProducts(productsRes.data.produits || []);
        setFilteredProducts(productsRes.data.produits || []);
        setCategories(categoriesRes.data.categories || []);
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter(p => p.categorieId === parseInt(selectedCategory));
    }

    if (searchTerm) {
      result = result.filter(p => 
        p.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.descriptionCourte?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (priceRange.min) {
      result = result.filter(p => p.prix >= parseInt(priceRange.min));
    }
    if (priceRange.max) {
      result = result.filter(p => p.prix <= parseInt(priceRange.max));
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.prix - b.prix);
        break;
      case 'price-desc':
        result.sort((a, b) => b.prix - a.prix);
        break;
      case 'popular':
        result.sort((a, b) => (b.nombreVentes || 0) - (a.nombreVentes || 0));
        break;
      default:
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [products, selectedCategory, searchTerm, priceRange, sortBy]);

  const sortOptions = [
    { value: 'newest', label: 'Plus récents' },
    { value: 'price-asc', label: 'Prix croissant' },
    { value: 'price-desc', label: 'Prix décroissant' },
    { value: 'popular', label: 'Plus populaires' },
  ];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const clearFilters = () => {
    setSelectedCategory('');
    setSearchTerm('');
    setPriceRange({ min: '', max: '' });
    setSortBy('newest');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const hasActiveFilters = selectedCategory || searchTerm || priceRange.min || priceRange.max;
  const selectedCategoryName = categories.find(c => c.id === parseInt(selectedCategory))?.nom || '';

  return (
    <div>
      <ShopHero onSearch={setSearchTerm} searchTerm={searchTerm} />

      <div className="container-custom py-8">
        {/* Barre de filtres */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition text-sm ${
                showFilters ? 'border-green-500 bg-green-50 text-green-600' : 'border-gray-200 hover:border-green-500'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>Filtres</span>
              {hasActiveFilters && (
                <span className="bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">!</span>
              )}
            </button>
            
            <div className="relative">
              <button
                onClick={() => setShowSort(!showSort)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 hover:border-green-500 transition text-sm"
              >
                <span>Trier</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${showSort ? 'rotate-180' : ''}`} />
              </button>
              
              {showSort && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 z-20">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setShowSort(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-green-50 transition ${sortBy === option.value ? 'text-green-600 font-semibold bg-green-50' : 'text-gray-600'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <p className="text-gray-500 text-sm">
            <span className="font-semibold text-gray-700">{filteredProducts.length}</span> articles trouvés
          </p>
        </div>

        {/* Panneau filtres */}
        {showFilters && (
          <div className="bg-gray-50 rounded-2xl p-5 mb-6 animate-fadeInUp border-2 border-green-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Filtres</h3>
              <button onClick={() => setShowFilters(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Catégories</label>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition ${!selectedCategory ? 'bg-green-100 text-green-700 font-semibold' : 'hover:bg-gray-100'}`}
                  >
                    Tous les produits
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition ${selectedCategory === cat.id ? 'bg-green-100 text-green-700 font-semibold' : 'hover:bg-gray-100'}`}
                    >
                      {cat.nom}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Prix (FCFA)</label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500 text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  className="text-sm text-green-600 hover:underline"
                >
                  Réinitialiser tous les filtres
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Affichage par catégories */}
        {!selectedCategory && !searchTerm && !priceRange.min && !priceRange.max && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Catégories</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-green-600 hover:text-white transition"
                >
                  {cat.nom}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Titre de la catégorie sélectionnée */}
        {selectedCategory && selectedCategoryName && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{selectedCategoryName}</h2>
            <p className="text-gray-500 text-sm mt-1">Découvrez notre collection de {selectedCategoryName.toLowerCase()}</p>
          </div>
        )}

        {/* Grille des produits - STYLE FORMATIONS */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <ShoppingBag className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Aucun article trouvé</h3>
            <p className="text-gray-500 text-sm mb-6">Essayez de modifier vos critères de recherche</p>
            <button
              onClick={clearFilters}
              className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-5 py-2 rounded-full text-sm hover:shadow-lg transition transform hover:scale-105"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="relative"
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Effet de contour lumineux au hover */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 rounded-2xl blur-md transition-all duration-500 ${hoveredCard === product.id ? 'opacity-100' : 'opacity-0'}`}></div>
                  
                  {/* Carte principale - style formations */}
                  <Link 
                    to={`/produit/${product.slug}`}
                    className="relative block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200"
                  >
                    {/* Bannière de catégorie */}
                    {product.categorie && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-gradient-to-r from-green-600 to-green-700 text-white text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {product.categorie.nom}
                        </span>
                      </div>
                    )}

                    {/* Badge promotion */}
                    {product.estEnPromotion && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          -{Math.round((1 - product.prixPromo/product.prix) * 100)}%
                        </span>
                      </div>
                    )}

                    {/* Image */}
                    <div className="h-48 overflow-hidden bg-gradient-to-br from-green-100 to-yellow-100">
                      <img 
                        src={product.imagePrincipale || 'https://placehold.co/400x300/2E7D32/white?text=AFI+Product'}
                        alt={product.nom}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = 'https://placehold.co/400x300/2E7D32/white?text=AFI+Product';
                        }}
                      />
                    </div>

                    {/* Contenu de la carte */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition line-clamp-1">
                        {product.nom}
                      </h3>
                      
                      <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                        {product.descriptionCourte || 'Découvrez ce produit artisanal unique fait main avec passion.'}
                      </p>
                      
                      {/* Étoiles */}
                      <div className="flex items-center mt-3">
                        <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <span className="text-xs text-gray-400 ml-2">(4.9)</span>
                      </div>

                      {/* Prix et action */}
                      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                        <div>
                          {product.estEnPromotion && product.prixPromo ? (
                            <div className="flex items-center gap-2">
                              <span className="text-green-700 font-bold text-lg">{product.prixPromo.toLocaleString()} FCFA</span>
                              <span className="text-gray-400 line-through text-sm">{product.prix.toLocaleString()} FCFA</span>
                            </div>
                          ) : (
                            <span className="text-green-700 font-bold text-lg">{product.prix.toLocaleString()} FCFA</span>
                          )}
                          <p className="text-xs text-gray-400">TTC</p>
                        </div>
                        <div className="flex items-center gap-2 text-green-600 group-hover:gap-3 transition-all duration-300">
                          <span className="text-sm font-semibold">Voir</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                        </div>
                      </div>
                    </div>

                    {/* Bordure colorée en bas */}
                    <div className="h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg border transition ${
                    currentPage === 1 
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                      : 'border-gray-300 hover:bg-green-50 hover:border-green-500'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                {[...Array(Math.min(totalPages, 5))].map((_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-lg text-sm transition ${
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-md'
                          : 'border border-gray-300 hover:bg-green-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg border transition ${
                    currentPage === totalPages 
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                      : 'border-gray-300 hover:bg-green-50 hover:border-green-500'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Bannière promotionnelle */}
      <section className="mt-8 py-10 bg-gradient-to-r from-green-700 to-yellow-600">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3">
            <Sparkles className="w-3 h-3 text-yellow-300" />
            <span className="text-white text-xs font-semibold">Offre spéciale</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Livraison offerte dès 50 000 FCFA
          </h3>
          <p className="text-white/90 text-sm mb-4">
            Profitez de la livraison gratuite sur toutes vos commandes
          </p>
          <Link to="/boutique" className="inline-flex items-center gap-2 bg-white text-green-700 px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition transform hover:scale-105">
            <ShoppingBag className="w-3 h-3" />
            <span>Commander maintenant</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
