'use client';

import { motion } from 'framer-motion';
import { Shield, Heart, Target, Users } from 'lucide-react';

const OurValues = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Complete honesty in every transaction with verified documentation and clear communication.',
    },
    {
      icon: Heart,
      title: 'Doctor-First Approach',
      description: 'Understanding the unique needs and schedules of medical professionals worldwide.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Curating only the finest properties that meet our strict quality standards.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a trusted network of NRI doctors investing in their homeland.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Values</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-2xl text-center hover:shadow-xl transition-all"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl mb-4 sm:mb-6">
                <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
