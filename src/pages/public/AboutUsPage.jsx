import React from 'react';
import PageHero from '../../components/PageHero';
import ScrollReveal from '../../components/ScrollReveal';
import { 
  Award, Heart, Users, TrendingUp, Verified, Building2, Sparkles, 
  Target, Globe, Leaf, Clock, Shield, Star, Zap, Crown, Medal, Trophy, Quote,
  GraduationCap, Briefcase, MapPin, Phone, Mail, Calendar, BookOpen,
  Handshake, Lightbulb, TreePine, ShoppingBag
} from 'lucide-react';

const AboutUsPage = () => {
  const stats = [
    { icon: Heart, value: '500+', label: 'Clients satisfaits', color: 'text-pink-500', bg: 'bg-pink-100 dark:bg-pink-900/30' },
    { icon: Award, value: '10+', label: "Années d'expérience", color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { icon: Users, value: '50+', label: 'Artisans formés', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { icon: TrendingUp, value: '98%', label: 'Taux de satisfaction', color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
  ];

  const presidentInfo = {
    name: 'Afiavi G. Honorine TOSSA',
    title: 'Fondatrice & Présidente Directrice Générale',
    quote: 'L\'artisanat est l\'âme d\'un peuple. Chez AFI Collection, nous tissons l\'avenir tout en valorisant le local.',
    location: 'Cotonou, Bénin',
    phone: '+229 01 96 06 22 87',
    email: 'afiavitossa@gmail.com',
  };

  const valeurs = [
    { icon: Handshake, title: 'Authenticité', description: 'Des produits 100% faits main, authentiques et uniques' },
    { icon: Lightbulb, title: 'Innovation', description: 'Allier tradition et modernité pour des créations originales' },
    { icon: TreePine, title: 'Durabilité', description: 'Respect de l\'environnement et des matières naturelles' },
    { icon: Globe, title: 'Rayonnement', description: 'Promouvoir l\'artisanat africain à l\'international' }
  ];

  const engagements = [
    { icon: ShoppingBag, title: 'Qualité', desc: 'Sélection rigoureuse des artisans et des matériaux' },
    { icon: Users, title: 'Équité', desc: 'Rémunération juste des artisans partenaires' },
    { icon: Shield, title: 'Traçabilité', desc: 'Transparence sur l\'origine des produits' },
    { icon: GraduationCap, title: 'Formation', desc: 'Transmission des savoir-faire aux jeunes générations' }
  ];

  return (
    <div>
      <PageHero 
        title="À propos de nous" 
        subtitle="Découvrez l'histoire, les valeurs et l'engagement d'AFI Collection"
        backgroundImage="https://res.cloudinary.com/dzxesa3wi/image/upload/v1779441624/WhatsApp_Image_2026-05-03_at_13.13.52_r2z1sf.jpg"
      />

      <div className="container-custom py-12">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal direction="left" delay={200}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://res.cloudinary.com/dzxesa3wi/image/upload/v1781005605/WhatsApp_Image_2026-06-04_at_09.55.33_1_e5jtjs.jpg" alt="Artisanat africain" className="w-full object-contain h-auto max-h-[500px] group-hover:scale-105 transition duration-700" />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={300}>
            <div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                AFI Collection est née d'une passion profonde pour l'artisanat africain. Fondée par Afiavi G. Honorine TOSSA, notre entreprise perpétue un héritage artisanal débuté dès 1986.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Notre mission est de promouvoir l'artisanat africain authentique tout en créant des emplois durables et en préservant les techniques traditionnelles.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Aujourd'hui, AFI Collection collabore avec plus de 50 artisans à travers le Bénin et exporte ses créations vers l'Europe, l'Afrique et l'Amérique.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><MapPin className="w-4 h-4" /><span>{presidentInfo.location}</span></div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><Phone className="w-4 h-4" /><span>{presidentInfo.phone}</span></div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><Mail className="w-4 h-4" /><span>{presidentInfo.email}</span></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={350}>
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Nos valeurs</h2>
              <div className="w-24 h-0.5 bg-green-500 mx-auto mt-2"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valeurs.map((v, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition">
                <div className={`${stat.bg} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={450}>
          <div className="bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-3xl p-8 mb-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Nos engagements</h2>
              <div className="w-24 h-0.5 bg-green-500 mx-auto mt-2"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {engagements.map((e, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <e.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">{e.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={500}>
          <div className="bg-gradient-to-r from-green-600 to-yellow-500 rounded-3xl p-8 text-center text-white">
            <Quote className="w-12 h-12 text-white/50 mx-auto mb-4" />
            <p className="text-xl italic max-w-2xl mx-auto">{presidentInfo.quote}</p>
            <p className="font-semibold mt-4">{presidentInfo.name}</p>
            <p className="text-sm text-white/80">{presidentInfo.title}</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default AboutUsPage;
