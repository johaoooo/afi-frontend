import React from 'react';
import { 
  Heart, Award, Users, TrendingUp, Verified, Building2, Sparkles, 
  Target, Globe, Leaf, Clock, Shield, Star, Zap,
  Truck
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AboutSection = () => {
  const stats = [
    { icon: Heart, value: '500+', label: 'Clients satisfaits', color: 'text-pink-500', bg: 'bg-pink-100 dark:bg-pink-900/30', suffix: '+' },
    { icon: Award, value: '10+', label: "Années d'expérience", color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30', suffix: '+' },
    { icon: Users, value: '50+', label: 'Artisans partenaires', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30', suffix: '+' },
    { icon: TrendingUp, value: '98', label: 'Taux de satisfaction', color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30', suffix: '%' },
  ];

  const values = [
    { icon: Leaf, title: 'Authenticité', description: 'Des produits 100% artisanaux faits main', color: 'bg-green-100 dark:bg-green-900/30', iconColor: 'text-green-600 dark:text-green-400' },
    { icon: Globe, title: 'Made in Africa', description: 'Valorisation du savoir-faire local', color: 'bg-yellow-100 dark:bg-yellow-900/30', iconColor: 'text-yellow-600 dark:text-yellow-400' },
    { icon: Heart, title: 'Passion', description: 'Des artisans passionnés par leur métier', color: 'bg-red-100 dark:bg-red-900/30', iconColor: 'text-red-600 dark:text-red-400' },
    { icon: Target, title: 'Qualité', description: 'Sélection rigoureuse des matériaux', color: 'bg-green-100 dark:bg-green-900/30', iconColor: 'text-green-600 dark:text-green-400' },
  ];

  const milestones = [
    { year: '2014', title: 'Création d\'AFI Collection', description: 'Début de l\'aventure artisanale', icon: Zap },
    { year: '2016', title: 'Premier atelier', description: 'Ouverture de notre premier espace de création', icon: Building2 },
    { year: '2019', title: 'Expansion internationale', description: 'Premières livraisons à l\'international', icon: Globe },
    { year: '2024', title: '10 ans d\'excellence', description: 'Une décennie au service de l\'artisanat', icon: Award },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Notre histoire</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2">
              Qui <span className="text-green-600 dark:text-green-400">sommes-nous</span> ?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Découvrez l'histoire, les valeurs et l'engagement d'AFI Collection
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={200}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Image avec object-contain pour la voir en entier */}
                <div className="w-full h-[400px] md:h-[500px] bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/sli1.jpeg"
                    alt="AFI Collection - Artisanat africain"
                    className="w-full h-full object-contain group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-white">Notée 4.9/5</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">par 500+ clients</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-white">Livraison offerte</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">dès 50 000 FCFA</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={300}>
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-semibold">10 ans d'excellence</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                L'élégance artisanale au service de la tradition
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                AFI Collection est une entreprise artisanale spécialisée dans la valorisation du savoir-faire local, 
                alliant tradition, élégance et innovation. Depuis 2014, nous collaborons avec des artisans talentueux 
                à travers le Bénin et l'Afrique de l'Ouest.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Notre mission est de promouvoir l'artisanat africain authentique tout en créant des emplois durables 
                et en préservant les techniques traditionnelles.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-md transition group hover:-translate-y-1 duration-300">
                    <div className={`${stat.bg} p-2 rounded-full group-hover:scale-110 transition`}>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 dark:text-white text-lg">{stat.value}{stat.suffix}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-green-600 dark:text-green-400" />
                  Nos valeurs
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {values.map((value, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition hover:-translate-y-1 duration-300">
                      <div className={`${value.color} p-1.5 rounded-full`}>
                        <value.icon className={`w-3 h-3 ${value.iconColor}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white text-sm">{value.title}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-md transition duration-300">
                <Verified className="w-8 h-8 text-green-600 dark:text-green-400" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">100% produits artisanaux authentiques</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Chaque pièce est unique et faite avec passion</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={400}>
          <div className="mt-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Notre parcours</h3>
              <div className="w-16 h-0.5 bg-green-600 dark:bg-green-400 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="text-center group hover:-translate-y-2 transition duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-yellow-100 dark:from-green-800/50 dark:to-yellow-800/50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition duration-300 shadow-md">
                    <milestone.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-green-600 dark:text-green-400 font-bold text-lg">{milestone.year}</div>
                  <h4 className="font-semibold text-gray-800 dark:text-white text-sm mt-1">{milestone.title}</h4>
                  <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
