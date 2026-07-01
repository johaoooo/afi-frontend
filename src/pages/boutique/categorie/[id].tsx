import { useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const categoriesData = {
  mode: {
    name: 'Mode et Accessoires',
    icon: '👗',
    description: 'Des créations qui valorisent l\'élégance africaine',
    produits: [
      'Sacs à main artisanaux',
      'Sacs traditionnels tissés',
      'Sacs de voyage traditionnels',
      'Valises artisanales',
      'Chaussures artisanales',
      'Accessoires de mode',
      'Articles en pagne tissé'
    ]
  },
  macrame: {
    name: 'Macramé et Tricotage',
    icon: '🧵',
    description: 'Des œuvres faites main avec style et qualité',
    produits: [
      'Sacs en macramé',
      'Porte-clés artisanaux',
      'Décorations murales',
      'Paniers tissés',
      'Sets de table',
      'Articles de tricotage personnalisés'
    ]
  },
  decoration: {
    name: 'Décoration Artisanale',
    icon: '🏠',
    description: 'Des articles qui embellissent votre maison',
    produits: [
      'Cadres décoratifs',
      'Rideaux artisanaux',
      'Objets de décoration',
      'Centres de table',
      'Articles de décoration personnalisés'
    ]
  },
  agroalimentaire: {
    name: 'Agroalimentaire',
    icon: '🌾',
    description: 'Des produits naturels locaux transformés avec qualité',
    produits: [
      'Chips de sésame',
      'Épices de sésame',
      'Farine de sésame',
      'Sésame transformé',
      'Farine de soja',
      'Épices de soja',
      'Produits dérivés du soja'
    ]
  }
};

export default function CategoriePage() {
  const { id } = useParams();
  const category = categoriesData[id as keyof typeof categoriesData];

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Catégorie non trouvée</h1>
        <Link to="/boutique" className="text-[#1a6b3c] hover:underline mt-4 inline-block">
          Retour à la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/boutique" className="inline-flex items-center gap-2 text-[#1a6b3c] hover:gap-3 transition-all mb-6">
        <FiArrowLeft className="w-4 h-4" />
        Retour à la boutique
      </Link>

      <div className="text-center mb-10">
        <div className="text-6xl mb-4">{category.icon}</div>
        <h1 className="text-4xl font-bold text-gray-800">{category.name}</h1>
        <p className="text-gray-600 mt-2">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.produits.map((produit, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">✦</span>
              <h3 className="font-semibold text-gray-800">{produit}</h3>
            </div>
            <p className="text-sm text-gray-500">À partir de 5 000 FCFA</p>
            <button className="mt-3 px-4 py-2 rounded-full text-sm font-medium transition hover:scale-105" style={{ backgroundColor: '#1a6b3c', color: 'white' }}>
              Commander
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
