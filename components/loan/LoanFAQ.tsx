'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const LoanFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Can NRI doctors buy property in India?',
      answer: '✅ Yes. NRI doctors can buy residential and commercial property (except agricultural land).',
    },
    {
      question: 'Do NRI doctors need to be physically present?',
      answer: '❌ No. Purchase can be done via Power of Attorney.',
    },
    {
      question: 'How much down payment is needed?',
      answer: '💰 Usually 20–30% of property value.',
    },
    {
      question: 'Which banks give NRI loans?',
      answer: 'Popular banks include SBI NRI, HDFC NRI, ICICI NRI, Axis Bank NRI, and LIC Housing. WhiteCoat can partner with banks to help you get the best rates.',
    },
    {
      question: 'Can rent income be used to repay EMI?',
      answer: '✅ Yes. Many NRI doctors invest for rental income which can cover EMI payments.',
    },
    {
      question: 'What is the typical approval time?',
      answer: '⏱ 5–10 working days (if documents are clear and complete).',
    },
    {
      question: 'Is property management available?',
      answer: '👉 Yes. WhiteCoat can offer tenant finding & maintenance services for your investment property.',
    },
    {
      question: 'Can joint loan be taken with spouse?',
      answer: '✅ Yes. Spouse or family member can be co-applicant, which may increase loan eligibility.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg px-4">
            Everything you need to know about NRI home loans
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 text-base sm:text-lg pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gold-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gold-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5"
                >
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            Contact Our Loan Experts
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LoanFAQ;
