import { Link } from 'react-router-dom';
import { FiArrowRight, FiUsers, FiAward, FiClock, FiCheckCircle, FiBookOpen, FiMapPin, FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { FormationsHero } from '../../components/sections/FormationsHero';

const formations = [
  {
    id: 'macrame',
    name: 'Macramé et Tricotage',
    description: 'Apprenez les techniques de macramé et de tricotage pour créer des objets décoratifs et accessoires uniques.',
    image: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1779441677/WhatsApp_Image_2026-05-03_at_13.08.20_m5mbxc.jpg',
    duree: '3 mois',
    niveau: 'Débutant à avancé',
    places: 12,
    date: 'Prochaine session : Septembre 2026',
    details: [
      'Techniques de base du macramé',
      'Création de sacs et accessoires',
      'Réalisation de rideaux et suspensions',
      'Tricotage avancé',
      'Personnalisation des créations',
      'Projet de fin de formation'
    ]
  },
  {
    id: 'teinture',
    name: 'Teinture de Pagne',
    description: 'Maîtrisez l\'art de la teinture artisanale pour transformer les tissus en œuvres d\'art traditionnelles.',
    image: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782717374/WhatsApp_Image_2026-06-29_at_08.14.08_afi42z.jpg',
    duree: '2 mois',
    niveau: 'Tous niveaux',
    places: 15,
    date: 'Prochaine session : Octobre 2026',
    details: [
      'Techniques de teinture artisanale',
      'Création de motifs traditionnels',
      'Personnalisation des couleurs',
      'Teinture pour cérémonies',
      'Valorisation du textile local',
      'Projet de création'
    ]
  },
  {
    id: 'decoration',
    name: 'Décoration Artisanale',
    description: 'Développez votre créativité pour apporter une touche unique et authentique à vos espaces.',
    image: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782907157/meuble_gopyp6.jpg',
    duree: '2 mois',
    niveau: 'Débutant',
    places: 10,
    date: 'Prochaine session : Novembre 2026',
    details: [
      'Décoration intérieure',
      'Décoration événementielle',
      'Création d\'objets décoratifs',
      'Décoration pour mariages',
      'Personnalisation de cadres',
      'Projet de décoration'
    ]
  },
  {
    id: 'agroalimentaire',
    name: 'Agroalimentaire',
    description: 'Apprenez à valoriser les produits naturels locaux à travers une transformation de qualité.',
    image: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782907638/soja_thw2zy.jpg',
    duree: '2 mois',
    niveau: 'Tous niveaux',
    places: 15,
    date: 'Prochaine session : Décembre 2026',
    details: [
      'Transformation du sésame',
      'Transformation du soja',
      'Création de produits dérivés',
      'Épices et condiments',
      'Conditionnement et conservation',
      'Projet de création d\'entreprise'
    ]
  }
];

const stats = [
  { value: '150+', label: 'Étudiants formés', icon: FiUsers },
  { value: '98%', label: 'Taux de satisfaction', icon: FiAward },
  { value: '4', label: 'Filières disponibles', icon: FiBookOpen },
  { value: '12', label: 'Places par session', icon: FiUsers }
];

export default function FormationsPage() {
  return (
    <div className="bg-[#f5f8f5] min-h-screen">
      <FormationsHero />

      <div className="container mx-auto px-6 md:px-12 -mt-8 relative z-20">
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-green-100 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
                CFP Dorcas
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mt-3 mb-4">
                L'excellence au service <br />
                <span className="text-[#1a6b3c]">de la formation</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le Centre de Formation Professionnelle (CFP) Dorcas est une institution dédiée à la transmission 
                des savoir-faire artisanaux et à la professionnalisation des métiers d'art au Bénin.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Créé par des artisans passionnés, le CFP Dorcas forme chaque année des dizaines de jeunes 
                talents aux métiers de l'artisanat traditionnel, alliant techniques ancestrales et innovation.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                  <FiMapPin className="w-4 h-4 text-[#1a6b3c]" />
                  <span className="text-sm text-gray-600">Cotonou, Bénin</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
                  <FiCalendar className="w-4 h-4 text-[#1a6b3c]" />
                  <span className="text-sm text-gray-600">Inscriptions ouvertes</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl h-72 bg-gray-100 flex items-center justify-center p-4">
                <img
                  src="https://res.cloudinary.com/dzxesa3wi/image/upload/v1779441633/WhatsApp_Image_2026-05-03_at_13.13.55_xrgmtq.jpg"
                  alt="CFP Dorcas - Centre de formation"
                  className="w-full h-full object-contain hover:scale-105 transition duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600';
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#1a6b3c] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4" />
                Certifié
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 text-center border border-green-100 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center gap-2">
                <stat.icon className="w-5 h-5 text-[#1a6b3c]" />
                <p className="text-2xl font-black text-gray-800">{stat.value}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
              Nos formations
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mt-3">
              Filières <span className="text-[#1a6b3c]">disponibles</span>
            </h2>
            <p className="text-gray-500 mt-1">Des formations professionnelles pour tous les niveaux</p>
          </div>

          <div className="space-y-6">
            {formations.map((formation, index) => (
              <motion.div
                key={formation.id}
                id={formation.id}
                className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 scroll-mt-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 h-64 md:h-auto relative overflow-hidden">
                    <img
                      src={formation.image}
                      alt={formation.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-black/30 md:via-transparent md:to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-[#1a6b3c] flex items-center gap-1">
                      <FiClock className="w-3 h-3" />
                      {formation.duree}
                    </div>
                  </div>

                  <div className="md:col-span-2 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-2">
                      {formation.name}
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">{formation.description}</p>

                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs bg-[#1a6b3c]/10 text-[#1a6b3c] font-semibold px-3 py-1.5 rounded-full">
                        <FiUsers className="w-3 h-3" />
                        {formation.niveau}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs bg-blue-50 text-blue-600 font-semibold px-3 py-1.5 rounded-full">
                        <FiUsers className="w-3 h-3" />
                        {formation.places} places
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs bg-amber-50 text-amber-600 font-semibold px-3 py-1.5 rounded-full">
                        <FiCalendar className="w-3 h-3" />
                        {formation.date}
                      </span>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {formation.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#1a6b3c] font-bold mt-0.5">✦</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 mt-6 bg-[#1a6b3c] hover:bg-[#14532d] text-white font-semibold px-6 py-2.5 rounded-full transition-colors duration-300 text-sm"
                    >
                      S'inscrire
                      <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="p-8 md:p-12 rounded-3xl text-center bg-[#1a6b3c] relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Prêt à <span className="text-green-300">démarrer</span> votre formation ?
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto leading-relaxed mb-6">
              Rejoignez le CFP Dorcas et développez des compétences professionnelles 
              dans l'artisanat traditionnel béninois.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1a6b3c] font-bold px-8 py-3.5 rounded-full transition-colors duration-300"
              >
                Nous contacter
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/boutique"
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-8 py-3.5 rounded-full transition-colors duration-300"
              >
                Découvrir la boutique
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
