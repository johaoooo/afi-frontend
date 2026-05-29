import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Users, Sparkles, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marie Kouamé',
    role: 'Cliente fidèle',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://randomuser.me/api/portraits/women/1.jpg',
    product: 'Pagne teint main',
    duration: '0:45',
    rating: 5
  },
  {
    id: 2,
    name: 'Jean Thomas',
    role: 'Étudiant',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://randomuser.me/api/portraits/men/2.jpg',
    product: 'Formation Macramé',
    duration: '1:12',
    rating: 5
  },
  {
    id: 3,
    name: 'Aïssa Diallo',
    role: 'Collectionneuse',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://randomuser.me/api/portraits/women/3.jpg',
    product: 'Sculpture bois',
    duration: '0:32',
    rating: 5
  },
  {
    id: 4,
    name: 'Amadou Traoré',
    role: 'Artisan partenaire',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://randomuser.me/api/portraits/men/4.jpg',
    product: 'Partenariat',
    duration: '0:58',
    rating: 5
  },
  {
    id: 5,
    name: 'Fatou Diop',
    role: 'Influenceuse mode',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://randomuser.me/api/portraits/women/5.jpg',
    product: 'Sac Macramé',
    duration: '0:28',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

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
      const newPosition = carouselRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      carouselRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4" />
            <span className="text-sm font-semibold">Ils nous font confiance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Témoignages <span className="text-green-600">vidéo</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Découvrez les retours authentiques de nos clients en vidéo
          </p>
        </div>

        {/* Vidéo principale - taille réduite */}
        <div className="max-w-3xl mx-auto mb-8">
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
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 text-white" />
                ) : (
                  <Play className="w-7 h-7 text-white ml-1" />
                )}
              </button>
              
              <button
                onClick={toggleMute}
                className="absolute bottom-3 right-3 w-7 h-7 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition"
              >
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5 text-white" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-white" />
                )}
              </button>
            </div>

            <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-0.5">
              <span className="text-white text-[10px] flex items-center gap-1">
                <Play className="w-2.5 h-2.5" />
                Témoignage vidéo
              </span>
            </div>

            <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-1.5 py-0.5">
              <span className="text-white text-[10px]">{selectedTestimonial.duration}</span>
            </div>
          </div>

          {/* Infos du témoin - plus compactes */}
          <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-3 mt-3 shadow-md border border-green-200">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-600 to-yellow-500 flex items-center justify-center text-white font-bold text-sm">
                  {selectedTestimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">{selectedTestimonial.name}</h3>
                  <p className="text-[10px] text-gray-500">{selectedTestimonial.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(selectedTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carrousel horizontal des miniatures vidéo */}
        <div className="relative max-w-5xl mx-auto mt-8">
          <button
            onClick={() => scrollCarousel('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-500 hover:text-white transition-all duration-300 -translate-x-4"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 px-2"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => selectTestimonial(testimonial)}
                className={`flex-shrink-0 w-56 transition-all duration-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 ${
                  selectedTestimonial.id === testimonial.id ? 'ring-2 ring-green-600 shadow-lg' : ''
                }`}
              >
                <div className="relative">
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-full h-28 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4 text-green-600 ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-1 right-1 bg-black/60 rounded px-1 py-0.5">
                    <span className="text-white text-[9px]">{testimonial.duration}</span>
                  </div>
                </div>
                <div className="p-2 bg-white">
                  <div className="flex items-center gap-0.5 mb-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="font-semibold text-gray-800 text-xs truncate">{testimonial.name}</p>
                  <p className="text-gray-500 text-[10px] truncate">{testimonial.product}</p>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollCarousel('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-500 hover:text-white transition-all duration-300 translate-x-4"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicateurs de progression */}
        <div className="flex justify-center gap-1 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => selectTestimonial(testimonials[idx])}
              className={`h-1 rounded-full transition-all duration-300 ${
                selectedTestimonial.id === testimonials[idx].id ? 'w-6 bg-green-600' : 'w-3 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Statistiques de satisfaction */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-xl font-bold text-green-600">500+</div>
            <div className="text-[10px] text-gray-500">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-green-600">98%</div>
            <div className="text-[10px] text-gray-500">Taux de satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-green-600">4.9/5</div>
            <div className="text-[10px] text-gray-500">Note moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-green-600">50+</div>
            <div className="text-[10px] text-gray-500">Témoignages</div>
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
