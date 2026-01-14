'use client';

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See Our Solutions in Action
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Watch this short video to understand how our ELV solutions can transform your business.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
            <video
              src="/video/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
