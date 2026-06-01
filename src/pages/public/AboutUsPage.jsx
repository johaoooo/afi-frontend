import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import { 
  Award, Heart, Users, TrendingUp, Verified, 
  Sparkles, Target, Globe, Leaf, Clock, 
  Shield, Star, Zap, Building2, Crown, 
  Medal, Trophy, ChevronRight, Calendar,
  Quote, BookOpen, Briefcase, Coffee, GraduationCap,
  MapPin, Phone, Mail
} from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

const AboutUsPage = () => {
  const stats = [
    { icon: Heart, value: '500+', label: 'Clients satisfaits', color: 'text-pink-500', bg: 'bg-pink-100 dark:bg-pink-900/30' },
    { icon: Award, value: '10+', label: "Années d'expérience", color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { icon: Users, value: '50+', label: 'Artisans formés', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { icon: TrendingUp, value: '98%', label: 'Taux de satisfaction', color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
  ];

  const distinctions = [
    { icon: Trophy, title: 'Prix Africain de l\'Artisan', year: '2026', description: 'Artisan le plus populaire aux Awards des Métiers de l\'Artisanat d\'Afrique (Togo)', color: 'from-yellow-500 to-amber-500' },
    { icon: Medal, title: 'PEC d\'Or', year: '2025', description: 'Programme d\'Éveil de Conscience et d\'Insertion professionnelle', color: 'from-green-600 to-green-500' },
    { icon: Crown, title: 'Meilleure Innovation', year: '2023', description: 'Salon National de l\'Artisanat du Bénin (SNAB)', color: 'from-purple-500 to-pink-500' },
    { icon: Star, title: '2e Prix TIB', year: '2017', description: 'Trophée de l\'Innovation au Bénin - Sac d\'ordinateur tissé main', color: 'from-red-500 to-orange-500' },
  ];

  const presidentInfo = {
    name: 'Afiavi G. Honorine TOSSA',
    title: 'Fondatrice & Présidente Directrice Générale',
    quote: 'L\'artisanat est l\'âme d\'un peuple. Chez AFI Collection, nous tissons l\'avenir tout en valorisant le local.',
    bio: 'Née le 16 mai 1969 à Savè, Afiavi G. Honorine TOSSA est une entrepreneure sociale et culturelle béninoise, passionnée par le travail manuel et l\'artisanat depuis son enfance. Très tôt, elle s\'initie au macramé, à la vannerie et au tissage de pagne à travers les activités coopératives scolaires, développant un savoir-faire qui deviendra le fondement de sa carrière.',
    fullBio: `Après une interruption scolaire en terminale, elle reprend ses études grâce au soutien de son mari et obtient le baccalauréat, poursuivant ses formations tout en continuant à tresser. Elle exerce ensuite pendant treize ans comme secrétaire, tout en formant bénévolement des jeunes filles déscolarisées, des femmes et des groupements.

En 2015, face à la demande croissante pour ses compétences, elle décide de se consacrer pleinement à la formation artisanale. Elle fonde le Centre de Formation et de Perfectionnement Dorcas, et plus tard l'établissement Maison AFI Collection du Bénin (MAC BÉNIN), afin de valoriser et transmettre le savoir-faire artisanal béninois.

Parallèlement à son activité de formation, elle est promotrice de la marque AFISAC et œuvre activement pour la valorisation du patrimoine culturel et artisanal béninois. Elle préside l'Association des Artisans en Macramé de l'Ouémé (AA-Macramé Ouémé) et l'Organisation pour le Développement de l'Artisanat Africain au Bénin (ODEVAA Bénin), et assure la coordination de la Foire Internationale Madinigokayes Pointe-Noire (FIMA-PN) 2022-2025.`,
    achievements: [
      'Ambassadrice GRAAD Global Londres 2025',
      'Présidente Women Up Africa Bénin',
      'Présidente CAFA Afrique de l\'Ouest',
      'Lauréate d\'un Award à Londres 2025',
      'Femmes Étincelles d\'Afrique 2025',
    ],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    email: 'afiavitossa@gmail.com',
    phone: '+229 01 96 06 22 87',
    location: 'Cotonou, Bénin',
    birthDate: '16 mai 1969',
    birthPlace: 'Savè, Bénin',
  };

  const milestones = [
    { year: '1969', title: 'Naissance à Savè', description: 'Naissance d\'Afiavi G. Honorine TOSSA', icon: Star },
    { year: '1986', title: 'Premières formations', description: 'Initiation au macramé lors des activités coopératives au CEG de Savalou', icon: Zap },
    { year: '1995', title: 'Perfectionnement', description: 'Perfectionnement en accessoires de sac macramé', icon: Award },
    { year: '2008', title: 'Baccalauréat', description: 'Obtention du baccalauréat série D', icon: GraduationCap },
    { year: '2009', title: 'Création du CFP Dorcas', description: 'Fondation du Centre de Formation et de Perfectionnement Dorcas', icon: Building2 },
    { year: '2015', title: 'Dédicace totale', description: 'Consécration pleine à la formation artisanale', icon: Heart },
    { year: '2017', title: 'Prix TIB', description: '2e prix du concours Trophées de l\'Innovation au Bénin', icon: Trophy },
    { year: '2025', title: 'Ambassadrice GRAAD', description: 'Nomination comme Ambassadrice GRAAD Global à Londres', icon: Crown },
  ];

  const formations = [
    { title: 'Certificat d\'Aptitude Professionnelle (CAP)', year: '2015', desc: 'Option Employé de Bureau' },
    { title: 'Baccalauréat', year: '2008', desc: 'Série D' },
    { title: 'Diplôme d\'Aptitude Professionnelle (DAP II)', year: '2008', desc: '' },
    { title: 'Tissage de pagne kanvô', year: '2021', desc: 'Perfectionnement' },
    { title: 'Transformation agroalimentaire', year: '2011', desc: 'Production et conservation de jus' },
    { title: 'Secrétariat bureautique', year: '2002', desc: 'Formation de 9 mois' },
  ];

  const experiences = [
    { title: 'Ambassadrice GRAAD Global', year: '2025-présent', org: 'Londres' },
    { title: 'Présidente Women Up Africa', year: '2025-présent', org: 'Bénin' },
    { title: 'Présidente ODEVAA Bénin', year: '2022-présent', org: 'Organisation pour le Développement de l\'Artisanat Africain' },
    { title: 'Coordinatrice internationale FIMA-PN', year: '2022-2025', org: 'Pointe-Noire, Congo' },
    { title: 'Présidente DG CFP Dorcas', year: '2009-présent', org: 'Centre de Formation et de Perfectionnement Dorcas' },
  ];

  return (
    <div>
      <PageHero 
        title="À propos de nous" 
        subtitle="Découvrez l'histoire, les valeurs et l'engagement d'AFI Collection"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
      />

      <div className="container-custom py-12">
        {/* Histoire d'AFI Collection */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Notre histoire</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2">
              L'histoire d'<span className="text-green-600 dark:text-green-400">AFI Collection</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-4 rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal direction="left" delay={200}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1564229504985-403fb448ae0f?w=800" 
                  alt="Artisanat africain"
                  className="w-full object-cover h-[400px] md:h-[500px] group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={300}>
            <div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                AFI Collection est née d'une passion profonde pour l'artisanat africain et d'une vision : faire rayonner le savoir-faire local à travers le monde. 
                Fondée par Afiavi G. Honorine TOSSA, notre entreprise perpétue un héritage artisanal débuté dès 1986.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Notre mission est de promouvoir l'artisanat africain authentique tout en créant des emplois durables 
                et en préservant les techniques traditionnelles transmises de génération en génération.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Aujourd'hui, AFI Collection est devenue une référence dans le secteur, reconnue pour la qualité de ses créations 
                et son engagement en faveur du développement local et de l'autonomisation des femmes.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Timeline des jalons */}
        <ScrollReveal direction="up" delay={400}>
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Notre parcours</h2>
              <div className="w-16 h-0.5 bg-green-600 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-green-600">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-yellow-100 dark:from-green-800/50 dark:to-yellow-800/50 rounded-xl flex items-center justify-center">
                      <milestone.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <span className="text-green-600 dark:text-green-400 font-bold text-lg">{milestone.year}</span>
                      <h3 className="font-semibold text-gray-800 dark:text-white">{milestone.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm ml-16">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Fondatrice */}
        <ScrollReveal direction="up" delay={500}>
          <div className="mb-20 bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-4">
                <Crown className="w-4 h-4" />
                <span className="text-sm font-semibold">Notre fondatrice</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                Afiavi G. <span className="text-green-600 dark:text-green-400">Honorine TOSSA</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400">Fondatrice & Présidente Directrice Générale d'AFI Collection</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={presidentInfo.image} 
                    alt={presidentInfo.name}
                    className="w-full object-cover h-96"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                  <Quote className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-4 text-lg">
                  "{presidentInfo.quote}"
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {presidentInfo.bio}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {presidentInfo.fullBio}
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Distinctions récentes :</h4>
                  <ul className="space-y-2">
                    {presidentInfo.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                        <Verified className="w-4 h-4 text-green-600" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{presidentInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Phone className="w-4 h-4" />
                      <span>{presidentInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Mail className="w-4 h-4" />
                      <span>{presidentInfo.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Formations et Expériences */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <ScrollReveal direction="left" delay={600}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Formations</h3>
              </div>
              <div className="space-y-3">
                {formations.map((formation, idx) => (
                  <div key={idx} className="border-b border-gray-100 dark:border-gray-700 pb-3 last:border-0">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-gray-800 dark:text-white">{formation.title}</span>
                      <span className="text-sm text-green-600 dark:text-green-400">{formation.year}</span>
                    </div>
                    {formation.desc && <p className="text-sm text-gray-500 dark:text-gray-400">{formation.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={700}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Expériences clés</h3>
              </div>
              <div className="space-y-3">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="border-b border-gray-100 dark:border-gray-700 pb-3 last:border-0">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-gray-800 dark:text-white">{exp.title}</span>
                      <span className="text-sm text-green-600 dark:text-green-400">{exp.year}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.org}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Distinctions */}
        <ScrollReveal direction="up" delay={800}>
          <div className="mb-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-4">
                <Trophy className="w-4 h-4" />
                <span className="text-sm font-semibold">Reconnaissances</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Nos distinctions</h2>
              <div className="w-16 h-0.5 bg-green-600 mx-auto mt-2 rounded-full"></div>
              <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
                Des prix et reconnaissances qui attestent de notre engagement pour l'excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {distinctions.map((dist, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${dist.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <dist.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 dark:text-white text-lg mb-1">{dist.title}</h3>
                  <p className="text-green-600 dark:text-green-400 font-semibold text-sm mb-2">{dist.year}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{dist.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Valeurs */}
        <ScrollReveal direction="up" delay={900}>
          <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Nos valeurs</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-gray-600 dark:text-gray-300">Passion</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                <span className="text-gray-600 dark:text-gray-300">Authenticité</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-500" />
                <span className="text-gray-600 dark:text-gray-300">Made in Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-500" />
                <span className="text-gray-600 dark:text-gray-300">Qualité</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-600 dark:text-gray-300">Autonomisation</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default AboutUsPage;
