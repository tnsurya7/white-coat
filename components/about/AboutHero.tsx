'use client';

import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 sm:pt-28 md:pt-32 lg:pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4 sm:mb-6">
            About <span className="text-gradient">WhiteCoat</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed px-4">
            Bridging the gap between NRI doctors and premium Indian real estate with trust, transparency, and expertise
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
