import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Users, Sparkles, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marie Kouamé',
    role: 'Cliente fidèle',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    product: 'Sac Macramé',
    rating: 5,
    text: 'Je suis absolument ravie de mon achat ! Le sac en macramé est magnifique, la qualité est exceptionnelle. Je reçois beaucoup de compliments. Merci AFI Collection pour ce travail artisanal d\'exception.'
  },
  {
    id: 2,
    name: 'Jean Thomas',
    role: 'Étudiant',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    product: 'Formation Macramé',
    rating: 5,
    text: 'La formation était très enrichissante. Les formateurs sont passionnés et pédagogues. J\'ai appris les bases du macramé et je peux déjà créer mes propres pièces. Je recommande vivement !'
  },
  {
    id: 3,
    name: 'Aïssa Diallo',
    role: 'Collectionneuse',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    product: 'Pagne Teint Main',
    rating: 5,
    text: 'Les tissus sont d\'une qualité rare. Les motifs traditionnels sont magnifiquement réalisés. AFI Collection valorise réellement le savoir-faire africain. Un grand bravo à toute l\'équipe !'
  },
  {
    id: 4,
    name: 'Amadou Traoré',
    role: 'Artisan partenaire',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    product: 'Partenariat',
    rating: 5,
    text: 'Collaborer avec AFI Collection a été une excellente décision. Ils valorisent notre travail et nous permettent de toucher une clientèle plus large. Une équipe professionnelle et humaine.'
  },
  {
    id: 5,
    name: 'Fatou Diop',
    role: 'Influenceuse mode',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    product: 'Valise Macramé',
    rating: 5,
    text: 'La valise en macramé est un véritable chef-d\'œuvre ! Alliant tradition et modernité, elle attire tous les regards. AFI Collection, c\'est la garantie d\'un artisanat de qualité. Je suis fan !'
  },
  {
    id: 6,
    name: 'Koffi Mensah',
    role: 'Client régulier',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    product: 'Sandales Artisanales',
    rating: 4,
    text: 'Des sandales très confortables et élégantes. Le cuir est de bonne qualité et le design est unique. Livraison rapide et soignée. Je reviendrai pour d\'autres achats.'
  },
  {
    id: 7,
    name: 'Clarisse Houndji',
    role: 'Décoratrice d\'intérieur',
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
    product: 'Lampe en Raphia',
    rating: 5,
    text: 'La lampe en raphia apporte une touche chaleureuse et authentique à mon salon. Un travail artisanal remarquable. AFI Collection est une belle découverte pour la décoration.'
  }
];

const TestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);
  const carouselRef = useRef(null);

  const selectTestimonial = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      const newPosition = carouselRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      carouselRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Ils nous font confiance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2">
            Ce que disent nos <span className="text-green-600 dark:text-green-400">clients</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Des centaines de clients satisfaits partagent leur expérience avec AFI Collection
          </p>
        </div>

        {/* Témoignage principal */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-2xl p-6 md:p-8 shadow-xl border border-green-200 dark:border-green-800">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar et infos */}
              <div className="text-center md:text-left">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0 border-4 border-green-600 shadow-lg">
                  <img 
                    src={selectedTestimonial.avatar} 
                    alt={selectedTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-800 dark:text-white mt-3">{selectedTestimonial.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{selectedTestimonial.role}</p>
                <div className="flex justify-center md:justify-start gap-0.5 mt-2">
                  {[...Array(selectedTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                  {selectedTestimonial.rating < 5 && [...Array(5 - selectedTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                  ))}
                </div>
                <div className="mt-2 inline-block bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 text-xs px-2 py-1 rounded-full">
                  {selectedTestimonial.product}
                </div>
              </div>

              {/* Texte du témoignage */}
              <div className="flex-1 relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-green-600/30 dark:text-green-400/30" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic pl-4">
                  "{selectedTestimonial.text}"
                </p>
                <div className="mt-4 flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  ))}
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">Recommandé</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carrousel des avatars */}
        <div className="relative max-w-5xl mx-auto">
          <button
            onClick={() => scrollCarousel('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-500 hover:text-white transition-all duration-300 -translate-x-4"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 px-2 justify-start"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => selectTestimonial(testimonial)}
                className={`flex-shrink-0 w-24 transition-all duration-300 rounded-xl overflow-hidden ${
                  selectedTestimonial.id === testimonial.id 
                    ? 'ring-2 ring-green-600 shadow-lg transform scale-105' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-24 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1">
                    <div className="flex justify-center gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-2 text-center bg-white dark:bg-gray-800">
                  <p className="font-semibold text-gray-800 dark:text-white text-xs truncate">{testimonial.name}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-[10px] truncate">{testimonial.product}</p>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollCarousel('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-500 hover:text-white transition-all duration-300 translate-x-4"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicateurs */}
        <div className="flex justify-center gap-1 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => selectTestimonial(testimonials[idx])}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                selectedTestimonial.id === testimonials[idx].id ? 'w-6 bg-green-600' : 'w-1.5 bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Statistiques */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">500+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">98%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Taux de satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">4.9/5</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Note moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">50+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Témoignages</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
