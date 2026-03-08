'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { servicesData } from '@/lib/services-data';

export default function Hero() {
  const { hero } = servicesData;

  return (
    <section className="relative flex min-h-[60vh] md:min-h-[70vh] items-center justify-center overflow-hidden bg-slate-50 px-6 py-24">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/40 to-slate-50/80" />
      </div>

      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-red-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-600 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-elv-primary-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-elv-primary-red"></span>
            </span>
            {hero.title}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl drop-shadow-sm"
        >
          <span className="block text-slate-900">Comprehensive</span>
          <span className="mt-2 block bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">
            Technology Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600"
        >
          {hero.description}
        </motion.p>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-10" />
    </section>
  );
}
