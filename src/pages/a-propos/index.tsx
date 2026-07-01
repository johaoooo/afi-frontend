import { Link } from 'react-router-dom';
import { FiAward, FiUsers, FiHeart, FiGlobe, FiArrowRight, FiShield, FiClock, FiCheckCircle, FiTruck, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { AboutHero } from '../../components/sections/AboutHero';

const valeurs = [
  {
    icon: FiHeart,
    title: 'Authenticité',
    description: 'Chaque pièce est unique, créée avec passion par des artisans locaux.',
    color: 'bg-rose-50',
    iconColor: 'text-rose-600'
  },
  {
    icon: FiAward,
    title: 'Qualité',
    description: 'Des matériaux nobles et un savoir-faire d\'exception pour des produits durables.',
    color: 'bg-amber-50',
    iconColor: 'text-amber-600'
  },
  {
    icon: FiUsers,
    title: 'Partage',
    description: 'Nous collaborons avec plus de 50 artisans à travers toute l\'Afrique.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: FiGlobe,
    title: 'Durabilité',
    description: 'Une production responsable qui respecte l\'environnement et les traditions.',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  }
];

const chiffres = [
  { valeur: '50+', label: 'Artisans partenaires', icon: FiUsers },
  { valeur: '500+', label: 'Clients satisfaits', icon: FiStar },
  { valeur: '150+', label: 'Produits uniques', icon: FiCheckCircle },
  { valeur: '98%', label: 'Taux de satisfaction', icon: FiHeart }
];

const engagements = [
  {
    icon: FiShield,
    title: 'Préserver les savoir-faire',
    description: 'Transmettre et valoriser les techniques artisanales traditionnelles'
  },
  {
    icon: FiHeart,
    title: 'Soutenir l\'économie locale',
    description: 'Créer des emplois et des opportunités pour les artisans locaux'
  },
  {
    icon: FiUsers,
    title: 'Former la nouvelle génération',
    description: 'Transmettre les compétences aux jeunes artisans'
  },
  {
    icon: FiGlobe,
    title: 'Production responsable',
    description: 'Utiliser des matériaux durables et respectueux de l\'environnement'
  },
  {
    icon: FiTruck,
    title: 'Commerce équitable',
    description: 'Une rémunération juste pour chaque artisan partenaire'
  }
];

export default function AboutPage() {
  return (
    <div className="bg-[#f5f8f5] min-h-screen">
      <AboutHero />

      <div className="container mx-auto px-6 md:px-12 -mt-8 relative z-20">
        {/* Notre histoire - Carte principale */}
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
                Notre histoire
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mt-3 mb-4">
                AFI Collection
                <br />
                <span className="text-[#1a6b3c]">Une histoire de passion</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                AFI Collection est née d'une passion profonde pour l'artisanat africain et le désir de 
                valoriser les savoir-faire traditionnels du Bénin. Notre aventure a commencé en 2020 
                avec une vision simple : créer un pont entre les artisans locaux et les amoureux 
                de l'authenticité à travers le monde.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Aujourd'hui, AFI Collection est bien plus qu'une marque — c'est une communauté 
                de créateurs passionnés qui perpétuent des techniques ancestrales tout en 
                apportant une touche de modernité à leurs créations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/boutique"
                  className="inline-flex items-center gap-2 bg-[#1a6b3c] hover:bg-[#14532d] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300 text-sm"
                >
                  Découvrir nos produits
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-[#1a6b3c] text-[#1a6b3c] hover:bg-[#1a6b3c] hover:text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300 text-sm"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/about/histoire.jpg"
                  alt="Histoire de AFI Collection"
                  className="w-full h-80 object-cover hover:scale-105 transition duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600';
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 border border-green-100">
                <p className="text-sm font-bold text-[#1a6b3c]">✨ Depuis 2020</p>
                <p className="text-xs text-gray-500">Création de AFI Collection</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Notre mission - Carte verte */}
        <motion.div
          className="mb-16 bg-[#1a6b3c] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <span className="text-green-300 text-xs font-bold tracking-widest uppercase">
              Notre mission
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">
              Valoriser l'artisanat <span className="text-green-300">africain</span>
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto leading-relaxed">
              AFI Collection s'engage à promouvoir l'excellence artisanale africaine en créant 
              des opportunités économiques pour les artisans locaux, tout en offrant à nos clients 
              des produits authentiques, durables et chargés d'histoire.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {chiffres.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition">
                  <div className="flex items-center justify-center gap-2">
                    <item.icon className="w-5 h-5 text-green-300" />
                    <p className="text-2xl md:text-3xl font-black text-white">{item.valeur}</p>
                  </div>
                  <p className="text-green-200 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Nos valeurs */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
              Nos valeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mt-3">
              Ce qui nous <span className="text-[#1a6b3c]">anime</span>
            </h2>
            <p className="text-gray-500 mt-1">Des principes forts qui guident nos actions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {valeurs.map((valeur, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={`w-14 h-14 ${valeur.color} rounded-xl flex items-center justify-center mb-4`}>
                  <valeur.icon className={`w-7 h-7 ${valeur.iconColor}`} />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{valeur.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{valeur.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notre engagement */}
        <motion.div
          className="mb-16 bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-green-100 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
                Notre engagement
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mt-3 mb-4">
                L'élégance artisanale <br />
                <span className="text-[#1a6b3c]">pour un avenir durable</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                AFI Collection s'engage à agir pour un artisanat responsable et durable.
              </p>
              <div className="space-y-4">
                {engagements.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-[#1a6b3c]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1a6b3c]/20 transition">
                      <item.icon className="w-4 h-4 text-[#1a6b3c]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/about/engagement.jpg"
                  alt="Engagement AFI Collection"
                  className="w-full h-80 object-cover hover:scale-105 transition duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600';
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#1a6b3c] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4" />
                Artisanat responsable
              </div>
            </div>
          </div>
        </motion.div>

        {/* Appel à l'action */}
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
              Rejoignez <span className="text-green-300">l'aventure</span> AFI Collection
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto leading-relaxed mb-6">
              Découvrez nos collections et soutenez l'artisanat local en faisant l'acquisition
              de pièces uniques, authentiques et chargées d'histoire.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/boutique"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1a6b3c] font-bold px-8 py-3.5 rounded-full transition-colors duration-300"
              >
                Explorer la boutique
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-8 py-3.5 rounded-full transition-colors duration-300"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
