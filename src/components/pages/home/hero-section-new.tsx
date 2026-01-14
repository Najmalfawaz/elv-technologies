'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img 
          src="/images/hero-background.jpg" 
          alt="Modern building with network overlay" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <motion.div 
          className="max-w-2xl text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight sm:text-6xl"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 7,
              ease: "easeInOut",
              times: [0, 0.15, 0.85, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            Empowering Your World with Smart Technology
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            We deliver innovative and reliable ELV, ICT, and home automation solutions tailored to your needs, ensuring seamless integration and exceptional performance.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-y-0 sm:gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <Button size="lg" onClick={onContactClick}>
              Get a Free Consultation
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#solutions">Explore Our Solutions</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
