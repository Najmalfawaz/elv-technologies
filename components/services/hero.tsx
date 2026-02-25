'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { servicesData } from '@/lib/services-data';

export default function Hero() {
  const { hero } = servicesData;

  return (
    <section className="relative flex min-h-[60vh] md:min-h-[70vh] items-center justify-center overflow-hidden bg-[#0A0A0A] px-6 py-24">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-[#0A0A0A]" />
      </div>

      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#0A0A0A_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            {hero.title}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-5xl font-extrabold tracking-tight text-white sm:text-7xl drop-shadow-lg"
        >
          <span className="block text-slate-100">Comprehensive</span>
          <span className="mt-2 block bg-gradient-to-r from-accent via-red-400 to-accent bg-clip-text text-transparent">
            Technology Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-400 drop-shadow-md"
        >
          {hero.description}
        </motion.p>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
    </section>
  );
}
