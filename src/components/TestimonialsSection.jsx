import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Users, Sparkles, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marie Kouamé',
    role: 'Cliente fidèle',
    text: 'Des produits d\'une qualité exceptionnelle. Les tissus teints à la main sont magnifiques. Je recommande vivement AFI Collection !',
    rating: 5,
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    product: 'Pagne teint main',
    duration: '0:45'
  },
  {
    id: 2,
    name: 'Jean Thomas',
    role: 'Étudiant',
    text: 'J\'ai suivi la formation macramé, c\'était génial ! Les formateurs sont passionnés et très professionnels. Je repars avec mes créations.',
    rating: 5,
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    product: 'Formation Macramé',
    duration: '1:12'
  },
  {
    id: 3,
    name: 'Aïssa Diallo',
    role: 'Collectionneuse',
    text: 'Les sculptures en bois sont d\'une finesse incroyable. Livraison rapide et soignée. Un vrai savoir-faire africain.',
    rating: 5,
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    product: 'Sculpture bois',
    duration: '0:32'
  },
  {
    id: 4,
    name: 'Amadou Traoré',
    role: 'Artisan partenaire',
    text: 'AFI Collection valorise vraiment le travail des artisans. Une belle aventure humaine et professionnelle.',
    rating: 5,
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    product: 'Partenariat',
    duration: '0:58'
  },
  {
    id: 5,
    name: 'Fatou Diop',
    role: 'Influenceuse mode',
    text: 'Les sacs en macramé sont juste magnifiques ! Je les porte partout, tout le monde m\'en demande.',
    rating: 5,
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    product: 'Sac Macramé',
    duration: '0:28'
  },
  {
    id: 6,
    name: 'Koffi Mensah',
    role: 'Designer',
    text: 'Les motifs et les couleurs sont exceptionnels. Une belle découverte que je recommande à tous.',
    rating: 5,
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    product: 'Collection déco',
    duration: '0:55'
  }
];

const TestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  const next = () => {
    const currentIndex = testimonials.findIndex(t => t.id === selectedTestimonial.id);
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setSelectedTestimonial(testimonials[nextIndex]);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const prev = () => {
    const currentIndex = testimonials.findIndex(t => t.id === selectedTestimonial.id);
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setSelectedTestimonial(testimonials[prevIndex]);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const selectTestimonial = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 280;
      const newPosition = scrollPosition + (direction === 'left' ? -scrollAmount : scrollAmount);
      carouselRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4" />
            <span className="text-sm font-semibold">Ils nous font confiance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Ce qu'ils <span className="text-green-600">disent de nous</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Découvrez les témoignages vidéo de nos clients et partenaires
          </p>
        </div>

        {/* Vidéo principale */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              src={selectedTestimonial.videoUrl}
              poster={selectedTestimonial.thumbnail}
              className="w-full aspect-video object-cover"
              onEnded={handleVideoEnd}
              playsInline
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30">
              <button
                onClick={togglePlay}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white ml-1" />
                )}
              </button>
              
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-white" />
                ) : (
                  <Volume2 className="w-4 h-4 text-white" />
                )}
              </button>
            </div>

            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-white text-xs flex items-center gap-1">
                <Play className="w-3 h-3" />
                Témoignage vidéo
              </span>
            </div>

            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
              <span className="text-white text-xs">{selectedTestimonial.duration}</span>
            </div>
          </div>

          {/* Informations du témoignage */}
          <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-6 mt-4 shadow-xl border border-green-200">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-yellow-500 flex items-center justify-center text-white font-bold text-lg">
                  {selectedTestimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{selectedTestimonial.name}</h3>
                  <p className="text-sm text-gray-500">{selectedTestimonial.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(selectedTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-3">
              <Quote className="w-5 h-5 text-green-600 opacity-50" />
              <p className="text-gray-700 italic leading-relaxed">
                "{selectedTestimonial.text}"
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-green-200">
              <p className="text-sm text-gray-500">
                Produit : <span className="font-semibold text-green-600">{selectedTestimonial.product}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Carrousel horizontal de miniatures vidéo */}
        <div className="relative max-w-5xl mx-auto mt-8">
          {/* Flèche gauche */}
          <button
            onClick={() => scrollCarousel('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-500 hover:text-white transition-all duration-300 -translate-x-4"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Conteneur du carrousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 px-2"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => selectTestimonial(testimonial)}
                className={`flex-shrink-0 w-64 transition-all duration-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 ${
                  selectedTestimonial.id === testimonial.id ? 'ring-2 ring-green-600 shadow-lg' : ''
                }`}
              >
                <div className="relative">
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-green-600 ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 rounded px-1.5 py-0.5">
                    <span className="text-white text-xs">{testimonial.duration}</span>
                  </div>
                </div>
                <div className="p-3 bg-white">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="font-semibold text-gray-800 text-sm truncate">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs truncate">{testimonial.product}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Flèche droite */}
          <button
            onClick={() => scrollCarousel('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-500 hover:text-white transition-all duration-300 translate-x-4"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicateurs de progression */}
        <div className="flex justify-center gap-1 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => selectTestimonial(testimonials[idx])}
              className={`h-1 rounded-full transition-all duration-300 ${
                selectedTestimonial.id === testimonials[idx].id ? 'w-8 bg-green-600' : 'w-4 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Statistiques de satisfaction */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">500+</div>
            <div className="text-xs text-gray-500">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">98%</div>
            <div className="text-xs text-gray-500">Taux de satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">4.9/5</div>
            <div className="text-xs text-gray-500">Note moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">50+</div>
            <div className="text-xs text-gray-500">Témoignages</div>
          </div>
        </div>
      </div>

      {/* CSS pour cacher la scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
