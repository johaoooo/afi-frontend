import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ShopHero from '../../components/ShopHero';
import {
  Filter, ChevronDown, ChevronLeft, ChevronRight,
  ShoppingBag, Sparkles, X, Star, Eye, ArrowRight,
  Grid3x3, List, SlidersHorizontal, TrendingUp, Zap
} from 'lucide-react';

const CSS = `
  :root {
    --ink:    #1a1a1a;
    --forest: #2E7D32;
    --leaf:   #40916C;
    --mint:   #52B788;
    --amber:  #F9A825;
    --gold:   #F9A825;
    --cream:  #F5F6F5;
    --warm:   #F8F9FA;
    --paper:  #FFFFFF;
    --border: rgba(0,0,0,.10);
    --shadow: 0 4px 24px rgba(0,0,0,.09);
    --shadow-lg: 0 12px 48px rgba(0,0,0,.14);
  }

  .dark {
    --ink:    #e5e5e5;
    --forest: #52B788;
    --leaf:   #74C69D;
    --mint:   #74C69D;
    --amber:  #F9A825;
    --gold:   #F9A825;
    --cream:  #1a1a1a;
    --warm:   #252525;
    --paper:  #1e1e1e;
    --border: rgba(255,255,255,.10);
    --shadow: 0 4px 24px rgba(0,0,0,.3);
    --shadow-lg: 0 12px 48px rgba(0,0,0,.4);
  }

  .shop-root { 
    font-family: 'Clash Display', 'Inter', 'Poppins', sans-serif; 
    background: var(--cream); 
    min-height: 100vh; 
  }

  /* Toolbar */
  .toolbar { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; padding: 20px 0 16px; }
  .toolbar-left, .toolbar-right { display: flex; align-items: center; gap: 10px; }

  .btn-pill {
    display: inline-flex; align-items: center; gap: 7px;
    padding: 9px 18px; border-radius: 999px; border: 1.5px solid var(--border);
    background: var(--paper); font-family: 'Clash Display', sans-serif;
    font-size: 13px; font-weight: 500; color: var(--ink); cursor: pointer;
    transition: all .2s ease; white-space: nowrap;
  }
  .btn-pill:hover { border-color: var(--leaf); color: var(--leaf); background: rgba(82,183,136,0.1); }
  .btn-pill.active { border-color: var(--leaf); background: var(--forest); color: #fff; }
  .btn-pill .badge {
    width: 18px; height: 18px; border-radius: 50%;
    background: var(--gold); color: #000; font-size: 10px;
    font-weight: 700; display: flex; align-items: center; justify-content: center;
  }

  /* Sort Dropdown */
  .sort-wrapper { position: relative; }
  .sort-menu {
    position: absolute; top: calc(100% + 8px); right: 0; z-index: 40;
    background: var(--paper); border: 1.5px solid var(--border);
    border-radius: 16px; overflow: hidden; min-width: 180px;
    box-shadow: var(--shadow-lg);
    animation: dropIn .18s ease;
  }
  @keyframes dropIn { from { opacity:0; transform: translateY(-6px) } to { opacity:1; transform: translateY(0) } }
  .sort-item {
    display: block; width: 100%; text-align: left;
    padding: 11px 16px; font-size: 13px; font-weight: 500;
    font-family: 'Clash Display', sans-serif; cursor: pointer; color: var(--ink);
    background: none; border: none; transition: background .15s;
  }
  .sort-item:hover { background: var(--cream); }
  .sort-item.selected { color: var(--forest); font-weight: 600; background: rgba(46,125,50,0.1); }

  /* View Toggle */
  .view-toggle { display: flex; gap: 2px; background: var(--warm); border-radius: 10px; padding: 3px; }
  .view-btn { padding: 6px 8px; border-radius: 8px; border: none; background: none; cursor: pointer; color: #9aaa9e; transition: all .15s; }
  .view-btn.active { background: var(--paper); color: var(--forest); box-shadow: var(--shadow); }
  .count-label { font-size: 13px; color: #6b8070; }
  .count-label strong { color: var(--ink); font-weight: 600; }

  /* Filter Panel */
  .filter-panel {
    background: var(--paper); border: 1.5px solid var(--border);
    border-radius: 20px; padding: 24px 28px; margin-bottom: 24px;
    animation: slideDown .22s ease;
  }
  @keyframes slideDown { from { opacity:0; transform: translateY(-8px) } to { opacity:1; transform: translateY(0) } }
  .filter-panel h3 { font-size: 18px; font-weight: 600; color: var(--ink); margin: 0 0 20px; }
  .filter-grid { display: grid; grid-template-columns: 1fr 1fr auto; gap: 28px; align-items: start; }
  @media (max-width: 768px) { .filter-grid { grid-template-columns: 1fr; } }
  .filter-label { font-size: 11px; font-weight: 600; color: #6b8070; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 10px; }
  .cat-list { display: flex; flex-direction: column; gap: 2px; max-height: 200px; overflow-y: auto; }
  .cat-btn {
    display: block; width: 100%; text-align: left;
    padding: 8px 12px; border-radius: 10px; border: none; background: none;
    font-size: 13px; font-family: 'Clash Display', sans-serif;
    cursor: pointer; color: var(--ink); transition: all .15s;
  }
  .cat-btn:hover { background: var(--cream); }
  .cat-btn.selected { background: var(--forest); color: #fff; font-weight: 600; }
  .price-row { display: flex; gap: 10px; }
  .price-input {
    width: 100%; padding: 9px 12px; border-radius: 10px;
    border: 1.5px solid var(--border); background: var(--cream);
    font-size: 13px; font-family: 'Clash Display', sans-serif; color: var(--ink);
    outline: none; transition: border .2s;
  }
  .price-input:focus { border-color: var(--leaf); background: var(--paper); }
  .reset-link {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 12px; font-weight: 600; color: var(--amber);
    background: none; border: none; cursor: pointer; letter-spacing: .03em;
    padding: 0; text-decoration: none; transition: opacity .15s;
  }
  .reset-link:hover { opacity: .7; }

  /* Category Chips */
  .chips-section { margin-bottom: 32px; }
  .chips-title { font-size: 22px; font-weight: 600; color: var(--ink); margin: 0 0 14px; }
  .chips-row { display: flex; flex-wrap: wrap; gap: 8px; }
  .chip {
    padding: 8px 18px; border-radius: 999px;
    border: 1.5px solid var(--border); background: var(--paper);
    font-size: 13px; font-weight: 500; color: var(--ink);
    cursor: pointer; transition: all .18s; font-family: 'Clash Display', sans-serif;
  }
  .chip:hover { border-color: var(--leaf); color: var(--leaf); transform: translateY(-1px); }

  /* Section Heading */
  .section-heading { margin-bottom: 24px; }
  .section-heading h2 { font-size: 28px; font-weight: 600; color: var(--ink); margin: 0 0 4px; }
  .section-heading p { font-size: 13px; color: #6b8070; margin: 0; }

  /* Product Grid */
  .products-grid { display: grid; gap: 20px; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
  .products-list { display: flex; flex-direction: column; gap: 14px; }

  /* Product Card */
  .card {
    background: var(--paper); border-radius: 20px; overflow: hidden;
    border: 2px solid var(--forest); transition: all .28s cubic-bezier(.4,0,.2,1);
    display: block; text-decoration: none; position: relative;
  }
  .card:hover { border-color: var(--amber); transform: translateY(-4px); box-shadow: var(--shadow-lg); }
  .card-img-wrap { position: relative; height: 220px; overflow: hidden; background: var(--warm); }
  .card-img { width: 100%; height: 100%; object-fit: cover; transition: transform .55s; }
  .card:hover .card-img { transform: scale(1.07); }

  .badge-promo {
    position: absolute; top: 12px; left: 12px; z-index: 2;
    background: #D32F2F; color: #fff;
    font-size: 11px; font-weight: 700; padding: 5px 10px; border-radius: 999px;
  }
  .badge-new {
    position: absolute; top: 12px; right: 12px; z-index: 2;
    background: var(--forest); color: #fff;
    font-size: 11px; font-weight: 700; padding: 5px 10px; border-radius: 999px;
  }

  .card-overlay {
    position: absolute; inset: 0; background: rgba(0,0,0,.6);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transition: opacity .25s;
  }
  .card:hover .card-overlay { opacity: 1; }
  .overlay-btn {
    display: inline-flex; align-items: center; gap: 8px;
    background: #fff; color: var(--forest);
    padding: 10px 20px; border-radius: 999px;
    font-size: 13px; font-weight: 600; transform: translateY(8px); transition: transform .25s .05s;
  }
  .card:hover .overlay-btn { transform: translateY(0); }

  .card-accent {
    position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--forest), var(--amber), #D32F2F);
    transform: scaleX(0); transform-origin: left; transition: transform .3s;
  }
  .card:hover .card-accent { transform: scaleX(1); }

  .card-body { padding: 16px 18px 20px; }
  .card-cat { display: flex; align-items: center; gap: 6px; font-size: 10px; font-weight: 700; text-transform: uppercase; color: var(--mint); margin-bottom: 7px; }
  .card-cat-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--mint); }
  .card-name { font-size: 17px; font-weight: 600; color: var(--ink); margin: 0 0 6px; transition: color .15s; }
  .card:hover .card-name { color: var(--forest); }
  .card-desc { font-size: 12.5px; color: #6b8070; margin: 0 0 10px; line-height: 1.55; }
  .stars { display: flex; align-items: center; gap: 4px; margin-bottom: 12px; }
  .star-icon { width: 13px; height: 13px; color: var(--gold); fill: var(--gold); }
  .star-count { font-size: 11px; color: #9aaa9e; }

  .card-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid var(--border); }
  .price { font-size: 20px; font-weight: 600; color: var(--forest); }
  .price-old { font-size: 12px; color: #b0b8b3; text-decoration: line-through; margin-left: 6px; }
  .price-save { font-size: 11px; color: #D32F2F; font-weight: 600; margin-top: 1px; }
  .card-cta { display: flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; color: var(--leaf); }

  /* List Card */
  .list-card {
    display: block; text-decoration: none;
    background: var(--paper); border-radius: 18px; overflow: hidden;
    border: 2px solid var(--forest); transition: all .25s ease;
  }
  .list-card:hover { border-color: var(--amber); box-shadow: var(--shadow); transform: translateX(4px); }
  .list-inner { display: flex; }
  .list-img-wrap { position: relative; width: 160px; flex-shrink: 0; }
  @media (max-width: 540px) { .list-img-wrap { width: 110px; } }
  .list-img { width: 100%; height: 100%; min-height: 140px; object-fit: cover; }
  .list-body { flex: 1; padding: 18px 20px; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
  @media (max-width: 540px) { .list-body { flex-direction: column; } }
  .list-right { text-align: right; flex-shrink: 0; }
  .list-add-btn {
    display: inline-flex; align-items: center; gap: 6px; margin-top: 10px;
    background: var(--forest); color: #fff; padding: 8px 16px; border-radius: 999px;
    font-size: 12px; font-weight: 600; border: none; cursor: pointer; transition: all .2s;
  }
  .list-add-btn:hover { background: var(--leaf); transform: scale(1.04); }

  /* Empty State */
  .empty-state { text-align: center; padding: 80px 20px; }
  .empty-icon { width: 72px; height: 72px; border-radius: 50%; background: var(--warm); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; }
  .empty-title { font-size: 22px; font-weight: 600; color: var(--ink); margin-bottom: 8px; }
  .empty-sub { font-size: 13px; color: #7a9080; margin-bottom: 24px; }
  .btn-cta {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--forest); color: #fff; padding: 12px 26px;
    border-radius: 999px; font-size: 13px; font-weight: 600;
    border: none; cursor: pointer; transition: all .2s;
  }
  .btn-cta:hover { background: var(--leaf); transform: scale(1.03); }

  /* Pagination */
  .pagination { display: flex; justify-content: center; align-items: center; gap: 6px; margin-top: 48px; }
  .page-arrow {
    width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center;
    border: 1.5px solid var(--border); background: var(--paper); color: var(--ink);
    cursor: pointer; transition: all .15s;
  }
  .page-arrow:hover:not(:disabled) { border-color: var(--leaf); color: var(--leaf); }
  .page-arrow:disabled { opacity: .35; cursor: not-allowed; }
  .page-num {
    width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center;
    border: 1.5px solid var(--border); background: var(--paper);
    font-size: 13px; font-weight: 500; cursor: pointer; transition: all .15s;
  }
  .page-num:hover { border-color: var(--leaf); color: var(--leaf); }
  .page-num.active { background: var(--forest); border-color: var(--forest); color: #fff; font-weight: 700; }

  /* Promo Banner */
  .promo-banner {
    margin-top: 48px;
    background: linear-gradient(135deg, #2E7D32 0%, #F9A825 100%);
    padding: 56px 24px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .dark .promo-banner { background: linear-gradient(135deg, #1a3d22 0%, #8a5a0a 100%); }
  .promo-eyebrow {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(255,255,255,.18); border: 1px solid rgba(255,255,255,.3);
    border-radius: 999px; padding: 5px 14px; margin-bottom: 16px;
  }
  .promo-eyebrow span { font-size: 11px; font-weight: 700; color: var(--gold); letter-spacing: .08em; text-transform: uppercase; }
  .promo-title { font-size: clamp(26px, 4vw, 38px); font-weight: 700; color: #fff; margin-bottom: 10px; }
  .promo-sub { font-size: 14px; color: rgba(255,255,255,.7); margin-bottom: 28px; }
  .promo-cta {
    display: inline-flex; align-items: center; gap: 8px;
    background: #fff; color: #2E7D32; padding: 14px 30px;
    border-radius: 999px; font-size: 13px; font-weight: 700; text-decoration: none; transition: all .2s;
  }
  .dark .promo-cta { color: #1a3d22; }
  .promo-cta:hover { background: var(--cream); transform: scale(1.04); }

  /* Loading */
  .loading-wrap { display: flex; justify-content: center; align-items: center; min-height: 320px; }
  .spinner {
    width: 44px; height: 44px; border-radius: 50%;
    border: 3px solid var(--warm); border-top-color: var(--forest);
    animation: spin .75s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg) } }

  .container-custom { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
`;

const Stars = () => (
  <div className="stars">
    {[...Array(5)].map((_, i) => <Star key={i} className="star-icon" />)}
    <span className="star-count">(4.9)</span>
  </div>
);

const Price = ({ product }) => {
  if (product.estEnPromotion) {
    const pct = Math.round((1 - product.prixPromo / product.prix) * 100);
    return (
      <div>
        <div>
          <span className="price">{product.prixPromo.toLocaleString()} FCFA</span>
          <span className="price-old">{product.prix.toLocaleString()}</span>
        </div>
        <div className="price-save">– {pct}% économisé</div>
      </div>
    );
  }
  return <span className="price">{product.prix.toLocaleString()} FCFA</span>;
};

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
  const [viewMode, setViewMode] = useState('grid');
  const productsPerPage = 12;
  const sortRef = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (sortRef.current && !sortRef.current.contains(e.target)) setShowSort(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

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
      } catch (err) {
        console.error('Erreur fetch:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let result = [...products];
    if (selectedCategory) result = result.filter(p => p.categorieId === parseInt(selectedCategory));
    if (searchTerm) result = result.filter(p =>
      p.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.descriptionCourte?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (priceRange.min) result = result.filter(p => p.prix >= parseInt(priceRange.min));
    if (priceRange.max) result = result.filter(p => p.prix <= parseInt(priceRange.max));
    switch (sortBy) {
      case 'price-asc':  result.sort((a, b) => a.prix - b.prix); break;
      case 'price-desc': result.sort((a, b) => b.prix - a.prix); break;
      case 'popular':    result.sort((a, b) => (b.nombreVentes||0) - (a.nombreVentes||0)); break;
      default:           result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    setFilteredProducts(result);
    setCurrentPage(1);
  }, [products, selectedCategory, searchTerm, priceRange, sortBy]);

  const sortOptions = [
    { value: 'newest',     label: 'Plus récents',     icon: <Zap className="w-3.5 h-3.5" /> },
    { value: 'price-asc',  label: 'Prix croissant',   icon: <TrendingUp className="w-3.5 h-3.5" /> },
    { value: 'price-desc', label: 'Prix décroissant', icon: <TrendingUp className="w-3.5 h-3.5" style={{transform:'scaleY(-1)'}} /> },
    { value: 'popular',    label: 'Plus populaires',  icon: <Star className="w-3.5 h-3.5" /> },
  ];

  const clearFilters = () => { setSelectedCategory(''); setSearchTerm(''); setPriceRange({ min:'', max:'' }); setSortBy('newest'); };
  const hasActiveFilters = selectedCategory || searchTerm || priceRange.min || priceRange.max;
  const activeFilterCount = [selectedCategory, searchTerm, priceRange.min, priceRange.max].filter(Boolean).length;
  const selectedCategoryName = categories.find(c => c.id === parseInt(selectedCategory))?.nom || '';
  const currentSortLabel = sortOptions.find(o => o.value === sortBy)?.label || 'Trier';

  const indexOfLast  = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast  - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const getPageNums = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 3) return [1,2,3,4,5];
    if (currentPage >= totalPages - 2) return [totalPages-4, totalPages-3, totalPages-2, totalPages-1, totalPages];
    return [currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2];
  };

  if (loading) return (
    <div className="shop-root">
      <style>{CSS}</style>
      <div className="loading-wrap"><div className="spinner"></div></div>
    </div>
  );

  return (
    <div className="shop-root">
      <style>{CSS}</style>

      <ShopHero onSearch={setSearchTerm} searchTerm={searchTerm} />

      <div className="container-custom" style={{ paddingTop: 32, paddingBottom: 48 }}>

        <div className="toolbar">
          <div className="toolbar-left">
            <button className={`btn-pill${showFilters ? ' active' : ''}`} onClick={() => setShowFilters(v => !v)}>
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filtres</span>
              {activeFilterCount > 0 && <span className="badge">{activeFilterCount}</span>}
            </button>

            <div className="sort-wrapper" ref={sortRef}>
              <button className="btn-pill" onClick={() => setShowSort(v => !v)}>
                <span>{currentSortLabel}</span>
                <ChevronDown className="w-3.5 h-3.5" style={{ transition: 'transform .2s', transform: showSort ? 'rotate(180deg)' : 'rotate(0)' }} />
              </button>
              {showSort && (
                <div className="sort-menu">
                  {sortOptions.map(opt => (
                    <button key={opt.value} className={`sort-item${sortBy === opt.value ? ' selected' : ''}`} onClick={() => { setSortBy(opt.value); setShowSort(false); }}>
                      <span style={{ display:'flex', alignItems:'center', gap:8 }}>{opt.icon}{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {hasActiveFilters && (
              <button className="reset-link" onClick={clearFilters}>
                <X className="w-3.5 h-3.5" /> Réinitialiser
              </button>
            )}
          </div>

          <div className="toolbar-right">
            <div className="view-toggle">
              <button className={`view-btn${viewMode==='grid'?' active':''}`} onClick={() => setViewMode('grid')} title="Grille">
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button className={`view-btn${viewMode==='list'?' active':''}`} onClick={() => setViewMode('list')} title="Liste">
                <List className="w-4 h-4" />
              </button>
            </div>
            <span className="count-label"><strong>{filteredProducts.length}</strong> articles</span>
          </div>
        </div>

        {showFilters && (
          <div className="filter-panel">
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20 }}>
              <h3>Affiner la recherche</h3>
              <button onClick={() => setShowFilters(false)} style={{ background:'none', border:'none', cursor:'pointer', color:'#9aaa9e' }}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="filter-grid">
              <div>
                <div className="filter-label">Catégorie</div>
                <div className="cat-list">
                  <button className={`cat-btn${!selectedCategory?' selected':''}`} onClick={() => setSelectedCategory('')}>Tous les produits</button>
                  {categories.map(cat => (
                    <button key={cat.id} className={`cat-btn${selectedCategory===cat.id?' selected':''}`} onClick={() => setSelectedCategory(cat.id)}>
                      {cat.nom}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="filter-label">Prix (FCFA)</div>
                <div className="price-row">
                  <input className="price-input" type="number" placeholder="Min" value={priceRange.min} onChange={e => setPriceRange({ ...priceRange, min: e.target.value })} />
                  <input className="price-input" type="number" placeholder="Max" value={priceRange.max} onChange={e => setPriceRange({ ...priceRange, max: e.target.value })} />
                </div>
              </div>
              <div style={{ paddingTop: 22 }}>
                <button className="reset-link" onClick={clearFilters}>
                  <X className="w-3.5 h-3.5" /> Tout réinitialiser
                </button>
              </div>
            </div>
          </div>
        )}

        {!selectedCategory && !searchTerm && !priceRange.min && !priceRange.max && categories.length > 0 && (
          <div className="chips-section">
            <h2 className="chips-title">Explorer par catégorie</h2>
            <div className="chips-row">
              {categories.map(cat => (
                <button key={cat.id} className="chip" onClick={() => setSelectedCategory(cat.id)}>
                  {cat.nom}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedCategory && selectedCategoryName && (
          <div className="section-heading">
            <h2>{selectedCategoryName}</h2>
            <p>Découvrez notre sélection de {selectedCategoryName.toLowerCase()}</p>
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon"><ShoppingBag style={{ width:32, height:32, color:'#9aaa9e' }} /></div>
            <div className="empty-title">Aucun résultat trouvé</div>
            <p className="empty-sub">Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.</p>
            <button className="btn-cta" onClick={clearFilters}><X className="w-4 h-4" /> Réinitialiser les filtres</button>
          </div>
        ) : (
          <>
            {viewMode === 'grid' ? (
              <div className="products-grid">
                {currentProducts.map(product => (
                  <Link key={product.id} to={`/produit/${product.slug}`} className="card">
                    <div className="card-img-wrap">
                      <img className="card-img" src={product.imagePrincipale || 'https://placehold.co/400x300/2E7D32/white?text=AFI+Product'} alt={product.nom} loading="lazy" />
                      {product.estEnPromotion && <span className="badge-promo">–{Math.round((1 - product.prixPromo / product.prix) * 100)}%</span>}
                      {product.estNouveaute && <span className="badge-new">✦ Nouveau</span>}
                      <div className="card-overlay"><div className="overlay-btn"><Eye className="w-4 h-4" /> Voir détails</div></div>
                    </div>
                    <div className="card-body">
                      {product.categorie && (<div className="card-cat"><span className="card-cat-dot"></span>{product.categorie.nom}</div>)}
                      <div className="card-name">{product.nom}</div>
                      <p className="card-desc">{product.descriptionCourte || 'Produit artisanal fait main avec passion.'}</p>
                      <Stars />
                      <div className="card-footer"><Price product={product} /><div className="card-cta">Voir <ArrowRight className="w-4 h-4" /></div></div>
                    </div>
                    <div className="card-accent"></div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="products-list">
                {currentProducts.map(product => (
                  <Link key={product.id} to={`/produit/${product.slug}`} className="list-card">
                    <div className="list-inner">
                      <div className="list-img-wrap">
                        <img className="list-img" src={product.imagePrincipale || 'https://placehold.co/400x300/2E7D32/white?text=AFI+Product'} alt={product.nom} loading="lazy" />
                        {product.estEnPromotion && <span className="badge-promo" style={{ position:'absolute', top:10, left:10 }}>–{Math.round((1 - product.prixPromo / product.prix) * 100)}%</span>}
                      </div>
                      <div className="list-body">
                        <div style={{ flex:1 }}>
                          {product.categorie && <div className="card-cat" style={{ marginBottom:5 }}><span className="card-cat-dot"></span>{product.categorie.nom}</div>}
                          <div className="card-name" style={{ fontSize:18, WebkitLineClamp:2 }}>{product.nom}</div>
                          <p className="card-desc" style={{ marginTop:6 }}>{product.descriptionCourte || 'Produit artisanal fait main avec passion.'}</p>
                          <Stars />
                        </div>
                        <div className="list-right">
                          <Price product={product} />
                          <button className="list-add-btn"><ShoppingBag className="w-3.5 h-3.5" /> Ajouter</button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="pagination">
                <button className="page-arrow" onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1}><ChevronLeft className="w-4 h-4" /></button>
                {getPageNums().map((n, i) => (<button key={i} className={`page-num${currentPage === n ? ' active' : ''}`} onClick={() => setCurrentPage(n)}>{n}</button>))}
                <button className="page-arrow" onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === totalPages}><ChevronRight className="w-4 h-4" /></button>
              </div>
            )}
          </>
        )}
      </div>

      <section className="promo-banner">
        <div className="promo-eyebrow"><Sparkles style={{ width:12, height:12, color:'#f5c842' }} /><span>Offre exclusive</span></div>
        <h3 className="promo-title">Livraison offerte dès 50 000 FCFA</h3>
        <p className="promo-sub">Profitez de la livraison gratuite sur toutes vos commandes qualifiées</p>
        <Link to="/boutique" className="promo-cta"><ShoppingBag className="w-4 h-4" /> Commander maintenant</Link>
      </section>
    </div>
  );
};

export default ShopPage;
