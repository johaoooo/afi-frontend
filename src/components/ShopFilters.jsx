import React from 'react';
import { Search, Filter, X, ChevronDown } from 'lucide-react';

const ShopFilters = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  searchTerm,
  onSearchChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange 
}) => {
  const [showFilters, setShowFilters] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);

  const sortOptions = [
    { value: 'newest', label: 'Plus récents' },
    { value: 'price-asc', label: 'Prix croissant' },
    { value: 'price-desc', label: 'Prix décroissant' },
    { value: 'popular', label: 'Plus populaires' },
  ];

  return (
    <div className="mb-8">
      {/* Barre de recherche et bouton filtre */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-green-500 transition"
          />
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 hover:border-green-500 transition"
          >
            <Filter className="w-5 h-5" />
            <span>Filtres</span>
          </button>
          
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 hover:border-green-500 transition"
            >
              <span>Trier par</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showSort ? 'rotate-180' : ''}`} />
            </button>
            
            {showSort && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 z-20">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSortChange(option.value);
                      setShowSort(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-green-50 transition ${sortBy === option.value ? 'text-green-600 font-semibold' : 'text-gray-600'}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filtres déroulants */}
      {showFilters && (
        <div className="bg-gray-50 rounded-2xl p-5 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Filtres</h3>
            <button onClick={() => setShowFilters(false)} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Filtre catégorie */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Catégories</label>
              <div className="space-y-2">
                <button
                  onClick={() => onCategoryChange('')}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition ${!selectedCategory ? 'bg-green-100 text-green-700 font-semibold' : 'hover:bg-gray-100'}`}
                >
                  Tous les produits
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => onCategoryChange(cat.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition ${selectedCategory === cat.id ? 'bg-green-100 text-green-700 font-semibold' : 'hover:bg-gray-100'}`}
                  >
                    {cat.nom}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtre prix */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Prix</label>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={(e) => onPriceRangeChange({ ...priceRange, min: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={(e) => onPriceRangeChange({ ...priceRange, max: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500"
                  />
                </div>
                <button
                  onClick={() => onPriceRangeChange({ min: '', max: '' })}
                  className="text-sm text-green-600 hover:underline"
                >
                  Réinitialiser
                </button>
              </div>
            </div>

            {/* Filtre disponibilité */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Disponibilité</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-green-600" />
                  <span className="text-sm">En stock uniquement</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-green-600" />
                  <span className="text-sm">En promotion</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Résultat de recherche */}
      {searchTerm && (
        <div className="mb-4 text-sm text-gray-500">
          Résultats pour : <span className="font-semibold text-gray-700">"{searchTerm}"</span>
        </div>
      )}
    </div>
  );
};

export default ShopFilters;
