import { FiMapPin, FiClock, FiAward, FiUser } from 'react-icons/fi';

const artisans = [
  {
    id: 1,
    name: 'Aminata Diallo',
    specialty: 'Tissage traditionnel',
    gender: 'female',
    location: 'Ouagadougou, Burkina Faso',
    experience: '15 ans',
    description: 'Artisane tisserande depuis 15 ans.',
    achievements: 'Prix de l\'Artisanat Africain 2024'
  },
  {
    id: 2,
    name: 'Kouadio N\'Guessan',
    specialty: 'Sculpture sur bois',
    gender: 'male',
    location: 'Abidjan, Côte d\'Ivoire',
    experience: '20 ans',
    description: 'Maître sculpteur ivoirien.',
    achievements: 'Exposition à Paris, Dakar, New York'
  },
  {
    id: 3,
    name: 'Fatou Diop',
    specialty: 'Bijouterie artisanale',
    gender: 'female',
    location: 'Dakar, Sénégal',
    experience: '12 ans',
    description: 'Créatrice de bijoux en perles.',
    achievements: 'Collaboration avec des marques internationales'
  },
  {
    id: 4,
    name: 'Moussa Traoré',
    specialty: 'Maroquinerie',
    gender: 'male',
    location: 'Bamako, Mali',
    experience: '18 ans',
    description: 'Artisan maroquinier spécialiste du cuir.',
    achievements: 'Exposition à Milan et Paris'
  },
  {
    id: 5,
    name: 'Aïssa Koné',
    specialty: 'Teinture textile',
    gender: 'female',
    location: 'Bouaké, Côte d\'Ivoire',
    experience: '14 ans',
    description: 'Spécialiste de la teinture artisanale.',
    achievements: 'Prix de la meilleure création textile 2023'
  },
  {
    id: 6,
    name: 'Ibrahim Diarra',
    specialty: 'Sculpture sur bois',
    gender: 'male',
    location: 'Ségou, Mali',
    experience: '25 ans',
    description: 'Maître sculpteur de renommée internationale.',
    achievements: 'Exposition au Louvre en 2022'
  },
];

// Silhouettes SVG
const MaleSilhouette = () => (
  <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-[#1a6b3c]/30">
    <circle cx="100" cy="60" r="40" />
    <ellipse cx="100" cy="160" rx="50" ry="60" />
    <rect x="50" y="100" width="100" height="15" rx="5" />
  </svg>
);

const FemaleSilhouette = () => (
  <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-[#1a6b3c]/30">
    <circle cx="100" cy="55" r="38" />
    <ellipse cx="100" cy="150" rx="45" ry="55" />
    <rect x="55" y="95" width="90" height="12" rx="5" />
    {/* Cheveux */}
    <path d="M60 55 Q80 20 100 18 Q120 20 140 55" stroke="currentColor" strokeWidth="4" fill="none" />
    <path d="M62 48 Q90 15 100 15 Q110 15 138 48" stroke="currentColor" strokeWidth="4" fill="none" />
  </svg>
);

export function ArtisansSection() {
  return (
    <section className="py-20 bg-[#f5f8f5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
            Nos artisans
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight leading-[1.05] mt-3">
            Derrière chaque <span className="text-[#1a6b3c]">création</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-2">
            Des talents exceptionnels qui perpétuent des savoir-faire uniques
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {artisans.map((artisan) => (
            <div 
              key={artisan.id} 
              className="group bg-white rounded-2xl p-5 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-green-100 text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-gray-100 border-2 border-[#1a6b3c]/20 group-hover:border-[#1a6b3c] transition-all duration-300 flex items-center justify-center">
                {artisan.gender === 'female' ? <FemaleSilhouette /> : <MaleSilhouette />}
              </div>
              <h3 className="font-bold text-gray-800 text-sm mt-3 group-hover:text-[#1a6b3c] transition-colors">
                {artisan.name}
              </h3>
              <p className="text-[#1a6b3c] text-xs font-medium">{artisan.specialty}</p>
              <div className="flex items-center justify-center gap-1 text-gray-400 text-xs mt-1">
                <FiMapPin className="w-3 h-3" />
                <span>{artisan.location}</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-gray-400 text-xs">
                <FiClock className="w-3 h-3" />
                <span>{artisan.experience}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
