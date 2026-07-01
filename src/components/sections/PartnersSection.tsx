import { motion } from 'framer-motion';

const partners = [
  { id: 1, name: 'Partner 1', logo: '/images/partners/partner1.png' },
  { id: 2, name: 'Partner 2', logo: '/images/partners/partner2.png' },
  { id: 3, name: 'Partner 3', logo: '/images/partners/partner3.png' },
  { id: 4, name: 'Partner 4', logo: '/images/partners/partner4.png' },
  { id: 5, name: 'Partner 5', logo: '/images/partners/partner5.png' },
  { id: 6, name: 'Partner 6', logo: '/images/partners/partner6.png' },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-white border-t border-green-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#1a6b3c] text-xs font-bold tracking-widest uppercase">
            Nos partenaires
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mt-2 mb-3">
            Ils nous <span className="text-[#1a6b3c]">font confiance</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Des partenaires engagés qui soutiennent notre mission de valorisation de l'artisanat béninois
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="bg-gray-50 rounded-2xl p-6 flex items-center justify-center border border-gray-100 hover:border-[#1a6b3c]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="w-full h-16 flex items-center justify-center">
                <div className="w-full h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs font-medium">
                  {partner.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
