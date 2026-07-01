import { Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

const articles = [
  {
    id: 1,
    title: 'Les tendances de l\'artisanat africain en 2026',
    excerpt: 'Découvrez les nouvelles tendances qui façonnent le monde de l\'artisanat africain.',
    image: '/images/blog/tendances.jpg',
    author: 'Marie K.',
    date: '15 juin 2026'
  },
  {
    id: 2,
    title: 'Comment choisir son pagne traditionnel',
    excerpt: 'Guide pratique pour sélectionner le pagne parfait selon votre style et l\'occasion.',
    image: '/images/blog/pagne-guide.jpg',
    author: 'Jean P.',
    date: '10 juin 2026'
  },
  {
    id: 3,
    title: 'L\'importance de la préservation des savoir-faire',
    excerpt: 'Pourquoi il est crucial de soutenir les artisans et leurs techniques ancestrales.',
    image: '/images/blog/savoir-faire.jpg',
    author: 'Sophie L.',
    date: '5 juin 2026'
  }
];

export function BlogSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[#1a6b3c] font-semibold text-sm uppercase tracking-wider">Blog & Actualités</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-3">
            Dernières actualités
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Restez informé des tendances et de l'actualité de l'artisanat africain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition group">
              <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x338/1a6b3c/ffffff?text=Article';
                  }}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <span className="flex items-center gap-1"><FiUser className="w-3 h-3" /> {article.author}</span>
                  <span className="flex items-center gap-1"><FiCalendar className="w-3 h-3" /> {article.date}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2 leading-tight">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{article.excerpt}</p>
                <Link to={`/blog/${article.id}`} className="text-[#1a6b3c] font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Lire plus <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
