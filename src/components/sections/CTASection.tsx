import { Link } from 'react-router-dom';
import { FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-4xl mx-auto text-center p-12 rounded-3xl relative overflow-hidden bg-[#1a6b3c]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <Link 
              to="/boutique" 
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[#1a6b3c] px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-base group"
            >
              <FiShoppingBag className="w-5 h-5 group-hover:rotate-12 transition" />
              <span>{t('cta.button')}</span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
