import { Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiArrowRight, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    title: "Les tendances de l'artisanat africain en 2026",
    excerpt: "Découvrez les nouvelles tendances qui façonnent le monde de l'artisanat africain, entre tradition et modernité.",
    image: '/images/blog/tendances.jpg',
    author: 'Marie K.',
    date: '15 juin 2026',
    readTime: '5 min',
    category: 'Tendances'
  },
  {
    id: 2,
    title: 'Comment choisir son pagne traditionnel',
    excerpt: 'Guide pratique pour sélectionner le pagne parfait selon votre style et l\'occasion. Les secrets des tisserands.',
    image: '/images/blog/pagne-guide.jpg',
    author: 'Jean P.',
    date: '10 juin 2026',
    readTime: '4 min',
    category: 'Conseils'
  },
  {
    id: 3,
    title: "L'importance de la préservation des savoir-faire",
    excerpt: "Pourquoi il est crucial de soutenir les artisans et leurs techniques ancestrales pour les générations futures.",
    image: '/images/blog/savoir-faire.jpg',
    author: 'Sophie L.',
    date: '5 juin 2026',
    readTime: '6 min',
    category: 'Engagement'
  }
];

export function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
            Blog & Actualités
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight leading-[1.05] mt-3">
            Dernières <span className="text-[#1a6b3c]">actualités</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-2">
            Restez informé des tendances et de l'actualité de l'artisanat africain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-green-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 
                      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Badge catégorie */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-[#1a6b3c] shadow-lg">
                  {article.category}
                </div>

                {/* Badge temps de lecture */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white flex items-center gap-1.5">
                  <FiClock className="w-3 h-3" />
                  {article.readTime}
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <FiUser className="w-3 h-3" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>

                <h3 className="font-bold text-xl text-gray-800 group-hover:text-[#1a6b3c] transition-colors leading-tight">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <Link 
                  to={`/blog/${article.id}`} 
                  className="inline-flex items-center gap-2 text-[#1a6b3c] text-sm font-bold mt-4 group-hover:gap-3 transition-all duration-300"
                >
                  Lire plus <FiArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bouton voir tout */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-[#1a6b3c] hover:bg-[#14532d] text-white font-bold px-8 py-3.5 rounded-full transition-colors duration-300 text-sm"
          >
            Voir tous les articles
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
