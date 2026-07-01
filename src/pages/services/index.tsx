import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiClock, FiUsers, FiAward, FiGlobe } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { ServicesHero } from '../../components/sections/ServicesHero';

const services = [
  {
    id: 'macrame',
    name: 'Macramé et Tricotage',
    description: 'Nous réalisons des créations artisanales faites à la main avec finesse et originalité.',
    image: '/images/services/macrame.jpg',
    duree: '3-5 jours',
    niveau: 'Sur mesure',
    details: [
      'Fabrication d\'objets décoratifs en macramé',
      'Création de sacs en macramé',
      'Rideaux décoratifs',
      'Suspensions murales',
      'Accessoires de mode en fil tissé',
      'Articles tricotés sur mesure',
      'Personnalisation selon le goût du client'
    ]
  },
  {
    id: 'teinture',
    name: 'Teinture de Pagne',
    description: 'Nous transformons les tissus simples en véritables œuvres d\'art traditionnelles.',
    image: '/images/services/teinture.jpg',
    duree: '2-4 jours',
    niveau: 'Sur mesure',
    details: [
      'Teinture artisanale de pagnes',
      'Création de motifs traditionnels africains',
      'Personnalisation des couleurs',
      'Teinture pour cérémonies et événements',
      'Valorisation du textile local'
    ]
  },
  {
    id: 'decoration',
    name: 'Décoration Artisanale',
    description: 'Nous apportons une touche unique et authentique à vos espaces.',
    image: '/images/services/decoration.jpg',
    duree: '2-3 jours',
    niveau: 'Sur mesure',
    details: [
      'Décoration intérieure',
      'Décoration événementielle',
      'Objets décoratifs artisanaux',
      'Décoration pour mariages et cérémonies',
      'Personnalisation de cadres et accessoires déco'
    ]
  },
  {
    id: 'agroalimentaire',
    name: 'Agroalimentaire',
    description: 'Nous valorisons les produits naturels locaux à travers une transformation de qualité.',
    image: '/images/services/agroalimentaire.jpg',
    duree: '1-3 jours',
    niveau: 'Sur mesure',
    details: [
      'Produits à base de sésame (chips, épices, farine)',
      'Produits à base de soja (farine, épices, dérivés)',
      'Transformation responsable des produits locaux'
    ]
  }
];

const stats = [
  { value: '4', label: 'Domaines d\'expertise', icon: FiAward },
  { value: '100%', label: 'Fait main', icon: FiCheckCircle },
  { value: '50+', label: 'Artisans partenaires', icon: FiUsers },
  { value: '7j/7', label: 'Service client', icon: FiClock }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f5f8f5] min-h-screen">
      <ServicesHero />

      <div className="container mx-auto px-6 md:px-12 -mt-8 relative z-20">
        {/* Notre expertise */}
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
                Notre expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mt-3 mb-4">
                Des services <br />
                <span className="text-[#1a6b3c]">professionnels</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                AFI Collection vous propose des services artisanaux de qualité, réalisés avec passion 
                et savoir-faire par des artisans expérimentés.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Chaque prestation est adaptée à vos besoins et réalisée avec des matériaux nobles 
                et authentiques, dans le respect des traditions artisanales béninoises.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                  <FiCheckCircle className="w-4 h-4 text-[#1a6b3c]" />
                  <span className="text-sm text-gray-600">100% personnalisable</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
                  <FiGlobe className="w-4 h-4 text-[#1a6b3c]" />
                  <span className="text-sm text-gray-600">Livraison possible</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/services/expertise.jpg"
                  alt="Expertise AFI Collection"
                  className="w-full h-72 object-cover hover:scale-105 transition duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600';
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#1a6b3c] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4" />
                Savoir-faire local
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistiques */}
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

        {/* Liste des services */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
              Nos prestations
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mt-3">
              Services <span className="text-[#1a6b3c]">détaillés</span>
            </h2>
            <p className="text-gray-500 mt-1">Découvrez l'étendue de notre savoir-faire</p>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 scroll-mt-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="md:col-span-1 h-64 md:h-auto relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-black/30 md:via-transparent md:to-transparent" />
                    
                    {/* Badge durée */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-[#1a6b3c] flex items-center gap-1">
                      <FiClock className="w-3 h-3" />
                      {service.duree}
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="md:col-span-2 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-2">
                      {service.name}
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs bg-[#1a6b3c]/10 text-[#1a6b3c] font-semibold px-3 py-1.5 rounded-full">
                        <FiClock className="w-3 h-3" />
                        Délai : {service.duree}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs bg-blue-50 text-blue-600 font-semibold px-3 py-1.5 rounded-full">
                        <FiUsers className="w-3 h-3" />
                        {service.niveau}
                      </span>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.details.map((detail, idx) => (
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
                      Demander un devis
                      <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notre engagement */}
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
              Notre <span className="text-green-300">engagement</span>
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto leading-relaxed mb-6">
              AFI Collection ne fabrique pas seulement des produits, nous créons de la valeur, 
              nous préservons la culture locale et nous participons à la protection de l'environnement 
              à travers l'artisanat durable et la transformation responsable.
            </p>
            <p className="text-green-300 font-bold">
              L'élégance artisanale au service de la tradition et de l'innovation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
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
