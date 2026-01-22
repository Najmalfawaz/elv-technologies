'use client';

import { motion } from "framer-motion";
import { partners } from "@/data/images";

export default function PartnersPage() {
  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Trusted Partners
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
                We collaborate with industry leaders to deliver the best possible solutions.
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">
          {partners.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-2"
            >
              <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-32 hover:shadow-lg hover:shadow-red-500/50 transition-shadow duration-300 ease-in-out">
                <img
                  className="max-h-full max-w-full object-contain"
                  src={logo.src}
                  alt={logo.alt}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
