'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[400px] flex items-center justify-center bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Contact Us
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
          We'd love to hear from you. Reach out to us for any inquiries or to discuss your next project.
        </p>
      </motion.div>
    </section>
  );
}
