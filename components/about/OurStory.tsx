'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const OurStory = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4 sm:mb-6">
              Our <span className="text-gradient">Story</span>
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                WhiteCoat was founded by WhiteCoat for NRI doctors who experienced firsthand the challenges of investing in Indian real estate from abroad. The lack of transparency, reliable information, and trustworthy partners made the process overwhelming.
              </p>
              <p>
                We created WhiteCoat to solve these problems. Our platform exclusively serves medical professionals, understanding their unique needs - limited time, need for remote management, and desire for premium quality investments.
              </p>
              <p>
                Today, we&apos;ve helped over 500 NRI doctors successfully invest in premium Indian properties, managing over ₹200 crores in real estate transactions with complete transparency and professionalism.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
