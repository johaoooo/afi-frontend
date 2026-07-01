import { FiMapPin, FiClock, FiAward } from 'react-icons/fi';

const artisans = [
  {
    id: 1,
    name: 'Aminata Diallo',
    specialty: 'Tissage traditionnel',
    image: '/images/sa1.jpeg',
    location: 'Ouagadougou, Burkina Faso',
    experience: '15 ans',
    description: 'Artisane tisserande depuis 15 ans, elle perpétue les techniques ancestrales du Burkina Faso.',
    achievements: 'Prix de l\'Artisanat Africain 2024'
  },
  {
    id: 2,
    name: 'Kouadio N\'Guessan',
    specialty: 'Sculpture sur bois',
    image: '/images/sa2.jpeg',
    location: 'Abidjan, Côte d\'Ivoire',
    experience: '20 ans',
    description: 'Maître sculpteur ivoirien, ses œuvres sont exposées dans plusieurs galeries internationales.',
    achievements: 'Exposition à Paris, Dakar, New York'
  },
  {
    id: 3,
    name: 'Fatou Diop',
    specialty: 'Bijouterie artisanale',
    image: '/images/sa3.jpeg',
    location: 'Dakar, Sénégal',
    experience: '12 ans',
    description: 'Créatrice de bijoux en perles et métaux précieux, inspirée par les traditions sénégalaises.',
    achievements: 'Collaboration avec des marques internationales'
  },
];

export function ArtisansSection() {
  return (
    <section className="py-24 bg-[#f5f8f5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
            Nos artisans
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight leading-[1.05] mt-3">
            Derrière chaque <span className="text-[#1a6b3c]">création</span>, un artisan
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-2">
            Des talents exceptionnels qui perpétuent des savoir-faire uniques à travers l'Afrique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artisans.map((artisan, index) => (
            <div 
              key={artisan.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-green-100"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100 flex items-center justify-center p-4">
                <img 
                  src={artisan.image} 
                  alt={artisan.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(artisan.name)}&background=1a6b3c&color=fff&size=300`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-[#1a6b3c] flex items-center gap-1.5 shadow-lg">
                  <FiClock className="w-3 h-3" />
                  {artisan.experience}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-800 group-hover:text-[#1a6b3c] transition-colors">
                  {artisan.name}
                </h3>
                <p className="text-[#1a6b3c] font-medium text-sm">{artisan.specialty}</p>
                
                <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-2">
                  <FiMapPin className="w-3 h-3" />
                  <span>{artisan.location}</span>
                </div>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-2">{artisan.description}</p>

                <div className="mt-4 pt-4 border-t border-green-100 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#1a6b3c]/10 flex items-center justify-center flex-shrink-0">
                    <FiAward className="w-3 h-3 text-[#1a6b3c]" />
                  </div>
                  <span className="text-xs text-gray-600">{artisan.achievements}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
