import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-[#1a6b3c] px-8 py-20 md:px-20 text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Cercles décoratifs discrets */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-white/8" />
          <div className="absolute top-8 left-8 w-3 h-3 rounded-full bg-white/20" />
          <div className="absolute bottom-8 right-12 w-2 h-2 rounded-full bg-white/20" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-green-200 text-xs font-bold tracking-widest uppercase border-l-2 border-green-200 pl-3 mb-6">
              Passez à l'action
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-5">
              Prêt à découvrir
              <br />
              nos collections ?
            </h2>
            <p className="text-green-100/80 text-lg leading-relaxed mb-10">
              Rejoignez des milliers de clients qui ont choisi l'élégance artisanale béninoise.
              Chaque achat soutient directement un artisan local.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/boutique"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1a6b3c] font-black px-8 py-4 rounded-full transition-colors duration-300 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a6b3c]"
              >
                Visiter la boutique
                <FiArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/formations"
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-full transition-colors duration-300 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a6b3c]"
              >
                Nos formations
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
