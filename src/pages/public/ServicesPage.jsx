import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ServicesHero from '../../components/ServicesHero';
import { 
  Scissors, Palette, Briefcase, Home, Apple, 
  Feather, ArrowRight, Sparkles, Star, Clock, MapPin, Users, Search,
  Award, BookOpen
} from 'lucide-react';

const ServicesPage = () => {
  const [products, setProducts] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredTrainings, setFilteredTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, trainingsRes] = await Promise.all([
          axios.get('https://afi-backend-rneb.onrender.com/api/produits'),
          axios.get('https://afi-backend-rneb.onrender.com/api/formations')
        ]);
        setProducts(productsRes.data.produits || []);
        setTrainings(trainingsRes.data.formations || []);
        setFilteredProducts(productsRes.data.produits || []);
        setFilteredTrainings(trainingsRes.data.formations || []);
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredProducts(products);
      setFilteredTrainings(trainings);
      return;
    }

    const term = searchTerm.toLowerCase();
    
    const filteredProds = products.filter(p => 
      p.nom.toLowerCase().includes(term) ||
      p.descriptionCourte?.toLowerCase().includes(term) ||
      p.categorie?.nom?.toLowerCase().includes(term)
    );
    
    const filteredTps = trainings.filter(t => 
      t.titre.toLowerCase().includes(term) ||
      t.descriptionCourte?.toLowerCase().includes(term) ||
      t.categorie?.toLowerCase().includes(term)
    );
    
    setFilteredProducts(filteredProds);
    setFilteredTrainings(filteredTps);
  }, [searchTerm, products, trainings]);

  const categories = [
    { id: 1, name: 'Macramé', icon: Scissors, description: 'Sacs, rideaux, suspensions murales', bg: 'bg-green-50', color: 'text-green-600', link: '/boutique?categorie=1' },
    { id: 2, name: 'Teinture de Pagne', icon: Palette, description: 'Tissus teints à la main', bg: 'bg-yellow-50', color: 'text-yellow-600', link: '/boutique?categorie=2' },
    { id: 3, name: 'Mode et Accessoires', icon: Briefcase, description: 'Sacs, chaussures, bijoux', bg: 'bg-red-50', color: 'text-red-600', link: '/boutique?categorie=3' },
    { id: 4, name: 'Décoration', icon: Home, description: 'Objets déco, cadres, rideaux', bg: 'bg-green-50', color: 'text-green-600', link: '/boutique?categorie=4' },
    { id: 5, name: 'Agroalimentaire', icon: Apple, description: 'Produits à base de sésame et soja', bg: 'bg-yellow-50', color: 'text-yellow-600', link: '/boutique?categorie=5' },
    { id: 6, name: 'Tricotage', icon: Feather, description: 'Articles tricotés sur mesure', bg: 'bg-red-50', color: 'text-red-600', link: '/formations' },
  ];

  const totalResults = filteredProducts.length + filteredTrainings.length;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <ServicesHero onSearch={setSearchTerm} searchTerm={searchTerm} />

      <div className="container-custom py-12">
        {/* Résultats de recherche */}
        {searchTerm && (
          <div className="mb-8 p-4 bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl border-2 border-green-500 animate-fadeInUp">
            <p className="text-gray-600">
              <span className="font-semibold text-green-600">{totalResults}</span> résultats trouvés pour 
              <span className="font-semibold text-gray-800"> "{searchTerm}"</span>
            </p>
            {totalResults === 0 && (
              <p className="text-gray-500 mt-2">Aucun résultat trouvé. Essayez avec d'autres mots-clés.</p>
            )}
          </div>
        )}

        {/* Catégories de services */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Nos domaines d'expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 tracking-wide">
              Catégories de <span className="text-green-600">services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={cat.id}
                className="relative group"
                onMouseEnter={() => setHoveredCard(cat.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 rounded-2xl blur-md transition-all duration-500 ${hoveredCard === cat.id ? 'opacity-100' : 'opacity-0'}`}></div>
                <Link
                  to={cat.link}
                  className="relative block bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                >
                  <div className={`${cat.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300`}>
                    <cat.icon className={`w-8 h-8 ${cat.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition mb-2">{cat.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{cat.description}</p>
                  <div className="flex items-center gap-2 text-green-600 group-hover:gap-3 transition">
                    <span className="text-sm font-semibold">Découvrir</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Onglets Produits / Formations */}
        {(filteredProducts.length > 0 || filteredTrainings.length > 0) && (
          <div>
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'all' 
                    ? 'bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-md transform scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Tout ({filteredProducts.length + filteredTrainings.length})
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'products' 
                    ? 'bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-md transform scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Produits ({filteredProducts.length})
              </button>
              <button
                onClick={() => setActiveTab('trainings')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'trainings' 
                    ? 'bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-md transform scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Formations ({filteredTrainings.length})
              </button>
            </div>

            {/* PRODUITS - Style identique aux formations */}
            {(activeTab === 'all' || activeTab === 'products') && filteredProducts.length > 0 && (
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.slice(0, 6).map((product) => (
                    <div
                      key={product.id}
                      className="relative"
                      onMouseEnter={() => setHoveredCard(`p-${product.id}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 rounded-2xl blur-md transition-all duration-500 ${hoveredCard === `p-${product.id}` ? 'opacity-100' : 'opacity-0'}`}></div>
                      <Link
                        to={`/produit/${product.slug}`}
                        className="relative block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                      >
                        <div className="relative h-48 overflow-hidden bg-gray-100">
                          <img
                            src={product.imagePrincipale || 'https://placehold.co/400x300/2E7D32/white?text=AFI+Product'}
                            alt={product.nom}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {product.estEnPromotion && (
                            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">Promo</span>
                          )}
                        </div>
                        <div className="p-5">
                          {product.categorie && (
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              <span className="text-xs text-green-600 font-semibold uppercase tracking-wider">{product.categorie.nom}</span>
                            </div>
                          )}
                          <h3 className="font-bold text-gray-800 group-hover:text-green-600 transition line-clamp-1">{product.nom}</h3>
                          <div className="flex items-center mt-2">
                            <div className="flex text-yellow-500">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                            <span className="text-xs text-gray-400 ml-2">(4.9)</span>
                          </div>
                          <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                            <span className="text-green-700 font-bold text-lg">{product.prix.toLocaleString()} FCFA</span>
                            <div className="flex items-center gap-1 text-green-600">
                              <span className="text-sm font-semibold">Voir</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                            </div>
                          </div>
                        </div>
                        <div className="h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </Link>
                    </div>
                  ))}
                </div>
                {filteredProducts.length > 6 && (
                  <div className="text-center mt-8">
                    <Link to="/boutique" className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center gap-2 group">
                      Voir tous les produits <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* FORMATIONS - Style amélioré */}
            {(activeTab === 'all' || activeTab === 'trainings') && filteredTrainings.length > 0 && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredTrainings.slice(0, 6).map((training) => (
                    <div
                      key={training.id}
                      className="relative"
                      onMouseEnter={() => setHoveredCard(`t-${training.id}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 rounded-2xl blur-md transition-all duration-500 ${hoveredCard === `t-${training.id}` ? 'opacity-100' : 'opacity-0'}`}></div>
                      <Link
                        to={`/formation/${training.slug}`}
                        className="relative block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                      >
                        {/* Bannière de catégorie */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-gradient-to-r from-green-600 to-green-700 text-white text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            {training.categorie}
                          </span>
                        </div>
                        {/* Badge promotion */}
                        {training.estEnPromotion && (
                          <div className="absolute top-4 right-4 z-10">
                            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              -{Math.round((1 - training.prixPromo/training.prix) * 100)}%
                            </span>
                          </div>
                        )}
                        {/* Image */}
                        <div className="h-48 overflow-hidden bg-gradient-to-br from-green-100 to-yellow-100">
                          <img 
                            src={training.imagePrincipale || 'https://placehold.co/400x300/2E7D32/white?text=AFI+Training'}
                            alt={training.titre}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition line-clamp-1">{training.titre}</h3>
                          <p className="text-gray-500 text-sm mt-2 line-clamp-2">{training.descriptionCourte || 'Une formation complète pour maîtriser cet art traditionnel.'}</p>
                          <div className="flex flex-wrap gap-3 mt-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /><span>{training.duree || 'Flexible'}</span></div>
                            <div className="flex items-center gap-1">{training.enLigne ? <Laptop className="w-3.5 h-3.5" /> : <MapPin className="w-3.5 h-3.5" />}<span>{training.enLigne ? 'En ligne' : (training.lieu || 'Sur place')}</span></div>
                            <div className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /><span>{training.placesDisponibles || 10} places</span></div>
                            {training.certificat && (<div className="flex items-center gap-1 text-green-600"><Award className="w-3.5 h-3.5" /><span>Certifié</span></div>)}
                          </div>
                          <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                            <div>{training.estEnPromotion && training.prixPromo ? (<div className="flex items-center gap-2"><span className="text-green-700 font-bold text-lg">{training.prixPromo.toLocaleString()} FCFA</span><span className="text-gray-400 line-through text-sm">{training.prix.toLocaleString()} FCFA</span></div>) : (<span className="text-green-700 font-bold text-lg">{training.prix.toLocaleString()} FCFA</span>)}<p className="text-xs text-gray-400">TTC</p></div>
                            <div className="flex items-center gap-2 text-green-600 group-hover:gap-3 transition-all duration-300"><span className="text-sm font-semibold">S'inscrire</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" /></div>
                          </div>
                          <div className="mt-3"><div className="flex justify-between text-xs text-gray-400 mb-1"><span>Places disponibles</span><span>{training.placesDisponibles || 10}/{training.placesDisponibles || 10}</span></div><div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-green-600 to-yellow-500 rounded-full" style={{ width: '100%' }}></div></div></div>
                        </div>
                        <div className="h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </Link>
                    </div>
                  ))}
                </div>
                {filteredTrainings.length > 6 && (
                  <div className="text-center mt-8">
                    <Link to="/formations" className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center gap-2 group">
                      Voir toutes les formations <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Aucun résultat */}
        {searchTerm && totalResults === 0 && (
          <div className="text-center py-16 animate-fadeInUp">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4"><Search className="w-8 h-8 text-gray-400" /></div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Aucun résultat trouvé</h3>
            <p className="text-gray-500 text-sm mb-6">Nous n'avons pas trouvé de produits ou formations correspondant à "{searchTerm}"</p>
            <button onClick={() => setSearchTerm('')} className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-5 py-2 rounded-full text-sm hover:shadow-lg transition transform hover:scale-105">Effacer la recherche</button>
          </div>
        )}

        {/* Bannière contact */}
        <div className="mt-16 p-8 bg-gradient-to-r from-green-700 to-yellow-600 rounded-3xl text-center text-white border-4 border-white/30 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold mb-3">Besoin d'un service personnalisé ?</h3>
          <p className="mb-6">Contactez-nous pour une création sur mesure ou un devis personnalisé</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">Nous contacter <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
