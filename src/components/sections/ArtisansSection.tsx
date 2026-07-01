import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiAward } from 'react-icons/fi';

const artisans = [
  {
    id: 1,
    name: 'Aminata Diallo',
    specialty: 'Tissage traditionnel',
    image: '/images/team/aminata.jpg',
    location: 'Ouagadougou, Burkina Faso',
    experience: '15 ans',
    description: 'Artisane tisserande depuis 15 ans, elle perpétue les techniques ancestrales du Burkina Faso. Ses créations sont reconnues pour leur qualité et leur authenticité.',
    achievements: 'Prix de l\'Artisanat Africain 2024'
  },
  {
    id: 2,
    name: 'Kouadio N\'Guessan',
    specialty: 'Sculpture sur bois',
    image: '/images/team/kouadio.jpg',
    location: 'Abidjan, Côte d\'Ivoire',
    experience: '20 ans',
    description: 'Maître sculpteur ivoirien, ses œuvres sont exposées dans plusieurs galeries internationales. Il travaille le bois d\'ébène et le teck avec une précision exceptionnelle.',
    achievements: 'Exposition à Paris, Dakar, New York'
  },
  {
    id: 3,
    name: 'Fatou Diop',
    specialty: 'Bijouterie artisanale',
    image: '/images/team/fatou.jpg',
    location: 'Dakar, Sénégal',
    experience: '12 ans',
    description: 'Créatrice de bijoux en perles et métaux précieux, inspirée par les traditions sénégalaises. Chaque pièce est unique et raconte une histoire.',
    achievements: 'Collaboration avec des marques internationales'
  }
];

export function ArtisansSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#1a6b3c' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-green-300 font-semibold text-sm uppercase tracking-wider">Nos artisans</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
            Derrière chaque création, un artisan
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto">
            Des talents exceptionnels qui perpétuent des savoir-faire uniques à travers l'Afrique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artisans.map((artisan) => (
            <div key={artisan.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
              <div className="aspect-[4/3] bg-gray-200 relative">
                <img 
                  src={artisan.image} 
                  alt={artisan.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300/1a6b3c/ffffff?text=Artisan';
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">{artisan.name}</h3>
                  <p className="text-green-300 text-sm">{artisan.specialty}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1"><FiMapPin className="w-3 h-3" /> {artisan.location}</span>
                  <span className="flex items-center gap-1"><FiClock className="w-3 h-3" /> {artisan.experience}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{artisan.description}</p>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium" style={{ color: '#1a6b3c' }}>
                  <FiAward className="w-4 h-4" />
                  <span>{artisan.achievements}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
