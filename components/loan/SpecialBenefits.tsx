'use client';

import { motion } from 'framer-motion';
import { Star, TrendingUp, Zap, Users, CreditCard } from 'lucide-react';

const SpecialBenefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Higher Loan Eligibility',
      description: 'Get approved for larger loan amounts based on your stable medical profession',
    },
    {
      icon: Zap,
      title: 'Faster Approval',
      description: 'Quick processing and approval within 5-10 working days',
    },
    {
      icon: Users,
      title: 'Dedicated Relationship Manager',
      description: 'Personal support throughout your loan journey',
    },
    {
      icon: CreditCard,
      title: 'Flexible Repayment',
      description: 'Customized EMI plans that suit your income schedule',
    },
  ];

  const banks = ['SBI NRI', 'HDFC NRI', 'ICICI NRI', 'Axis Bank NRI', 'LIC Housing'];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 mb-4 px-6 py-2 glass rounded-full text-gold-400 font-medium">
            <Star className="w-5 h-5" />
            <span>Exclusive for Doctors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Special <span className="text-gradient">Benefits</span> for Doctors
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Banks recognize the stability of medical professionals and offer preferential terms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all bg-white/90"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-700 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner Banks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8 rounded-2xl bg-white/90"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Partner Banks for NRI Loans</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {banks.map((bank, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/10 rounded-full text-gray-900 font-semibold hover:bg-white/20 transition-all"
              >
                {bank}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-800 mt-6 text-sm">
            👉 WhiteCoat can help you connect with the right bank for your needs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialBenefits;
