import { Link } from 'react-router-dom';
import { FiArrowRight, FiShoppingBag, FiAward, FiTruck, FiShield } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { ShopHero } from '../../components/sections/ShopHero';

const categories = [
  {
    id: 'mode',
    name: 'Mode & Accessoires',
    description: 'Sacs, chaussures et accessoires artisanaux façonnés à la main.',
    count: 7,
    image: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1780563924/sand_gzb8ki.jpg',
    icon: FiShoppingBag
  },
  {
    id: 'macrame',
    name: 'Macramé & Tricotage',
    description: 'Sacs, rideaux et décorations en macramé, tricotés avec soin.',
    count: 6,
    image: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782907386/tiss_msfbhc.jpg',
    icon: FiShoppingBag
  },
  {
    id: 'decoration',
    name: 'Décoration Artisanale',
    description: 'Objets uniques pour embellir et personnaliser vos espaces.',
    count: 5,
    image: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782907157/meuble_gopyp6.jpg',
    icon: FiShoppingBag
  },
  {
    id: 'agroalimentaire',
    name: 'Agroalimentaire',
    description: 'Produits naturels transformés à base de sésame et de soja.',
    count: 8,
    image: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782907636/soj_rys07t.jpg',
    icon: FiShoppingBag
  },
];

const features = [
  { icon: FiAward, label: '100% Artisanal' },
  { icon: FiTruck, label: 'Livraison rapide' },
  { icon: FiShield, label: 'Paiement sécurisé' }
];

export default function BoutiquePage() {
  return (
    <div className="bg-[#f5f8f5] min-h-screen">
      <ShopHero />

      <div className="container mx-auto px-6 md:px-12 -mt-8 relative z-20">
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-green-100 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
                Catégories
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mt-3">
                Explorez nos <span className="text-[#1a6b3c]">collections.</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                  <feature.icon className="w-4 h-4 text-[#1a6b3c]" />
                  <span className="text-sm text-gray-600">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/boutique/${cat.id}`}
                className="group relative flex overflow-hidden rounded-3xl bg-gray-100 aspect-[16/9] shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3c]"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1a6b3c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="relative z-10 flex flex-col justify-end p-6 md:p-8 w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-white/50">
                      {cat.count} produits
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="text-xs font-medium text-[#4ade80]">Nouveauté</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
                    {cat.name}
                  </h3>

                  <p className="text-white/70 text-sm mt-2 leading-relaxed max-w-md">
                    {cat.description}
                  </p>

                  <div className="flex items-center gap-2 text-white text-sm font-bold mt-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    Voir la collection
                    <FiArrowRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
