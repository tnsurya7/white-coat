'use client';

import { motion } from 'framer-motion';
import { DollarSign, Calendar, TrendingDown } from 'lucide-react';

const LoanDetails = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Loan <span className="text-gradient">Details</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Loan Amount */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 sm:p-8 rounded-2xl"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mb-6">
              <DollarSign className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Loan Amount</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• Up to 80% of property value</li>
              <li>• Balance → Down payment (20–30%)</li>
            </ul>
            <div className="p-4 bg-blue-50 rounded-xl">
              <p className="text-sm font-semibold text-gray-800 mb-2">Example:</p>
              <p className="text-gray-700 text-sm">Property = ₹1 Cr</p>
              <p className="text-gray-700 text-sm">Loan = ₹75–80 Lakhs</p>
            </div>
          </motion.div>

          {/* Loan Tenure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 sm:p-8 rounded-2xl"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Loan Tenure</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="text-3xl font-bold text-blue-600">10 to 25 years</li>
              <li className="text-gray-600">Depends on age & retirement</li>
            </ul>
          </motion.div>

          {/* Interest Rate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 sm:p-8 rounded-2xl"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingDown className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Interest Rate</h3>
            <div className="text-3xl font-bold text-green-600 mb-3">8.5% – 10%</div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Varies by bank & profile</li>
              <li>• Floating rate common</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoanDetails;
