import { motion } from 'framer-motion';

const partners = [
  {
    id: 1,
    name: 'GRAAD',
    logo: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782579417/WhatsApp_Image_2026-06-27_at_17.56.06_wnsfvn.jpg',
    description: 'Grande Rencontre des Artisans d\'Afrique et de la Diaspora'
  },
  {
    id: 2,
    name: 'ODEVOD',
    logo: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782577860/WhatsApp_Image_2026-06-27_at_17.21.27_ecgftx.jpg',
    description: 'Organisation pour le Développement de l\'Artisanat Africain'
  },
  {
    id: 3,
    name: 'AMAF',
    logo: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782577834/AMAF_mcq0dz.jpg',
    description: 'Artisanat et Métiers d\'Afrique'
  },
  {
    id: 4,
    name: 'FIMA/PN',
    logo: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782573391/fm_kvfpmv.jpg',
    description: 'Foire Internationale de Madingo-Kayes/Pointe-Noire'
  },
  {
    id: 5,
    name: 'Partenaire 5',
    logo: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782577850/WhatsApp_Image_2026-06-02_at_18.05.42_1_dbgi7t.jpg',
    description: 'Partenaire'
  },
  {
    id: 6,
    name: 'Partenaire 6',
    logo: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1782577624/images_geckie.png',
    description: 'Partenaire'
  },
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
              <div className="w-full h-20 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=1a6b3c&color=fff&size=100`;
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
