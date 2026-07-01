import { Link } from 'react-router-dom';
import { FiShield, FiShoppingBag, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

export function FeaturesBlocks() {
  return (
    <section className="py-12 bg-[#f5f8f5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bloc 1 - Vendeurs vérifiés */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-md border border-green-100 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#1a6b3c]/10 flex items-center justify-center">
                <FiShield className="w-6 h-6 text-[#1a6b3c]" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#1a6b3c]">
                Artisans vérifiés
              </span>
            </div>
            <h3 className="text-2xl font-black text-gray-800 mb-2">
              Qualité & Authenticité
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Chaque artisan est vérifié. Origine, savoir-faire et qualité contrôlés 
              pour vous garantir des produits authentiques.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <FiCheckCircle className="w-4 h-4 text-[#1a6b3c]" />
                <span>Origine traçable</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <FiCheckCircle className="w-4 h-4 text-[#1a6b3c]" />
                <span>Qualité contrôlée</span>
              </div>
            </div>
            <Link
              to="/a-propos"
              className="inline-flex items-center gap-2 text-[#1a6b3c] font-semibold text-sm mt-4 hover:gap-3 transition-all duration-300"
            >
              En savoir plus <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Bloc 2 - Ouvrir une boutique */}
          <motion.div
            className="bg-[#1a6b3c] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <FiShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-green-300">
                Devenir vendeur
              </span>
            </div>
            <h3 className="text-2xl font-black text-white mb-2">
              Ouvrir une boutique
            </h3>
            <p className="text-green-100 text-sm leading-relaxed">
              Gérez vos produits, votre stock, vos commandes et vos paiements 
              depuis votre dashboard vendeur.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-1.5 text-xs text-green-200">
                <FiCheckCircle className="w-4 h-4 text-green-300" />
                <span>Gestion simplifiée</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-green-200">
                <FiCheckCircle className="w-4 h-4 text-green-300" />
                <span>Paiements sécurisés</span>
              </div>
            </div>
            <Link
              to="/inscription"
              className="inline-flex items-center gap-2 bg-white text-[#1a6b3c] font-semibold text-sm px-6 py-2.5 rounded-full mt-4 hover:bg-gray-50 transition-all duration-300 hover:gap-3"
            >
              Commencer <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
