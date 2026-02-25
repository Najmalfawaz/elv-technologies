'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-slate-50 px-6 py-24">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aboutUS/About us.png"
          alt="ELV Technologies Background"
          fill
          className="object-cover opacity-10 mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-slate-50/80 to-slate-50" />
      </div>

      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-red-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-800 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            ABOUT US
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl drop-shadow-sm"
        >
          <span className="block text-slate-900">ELV Technology Solutions</span>
          <span className="mt-2 block bg-gradient-to-r from-red-600 via-amber-600 to-red-600 bg-clip-text text-transparent">
            The Best Audio-Visual Integrators in UAE
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 font-medium"
        >
          ETS is one of the top technology integrators and solution providers
          in the UAE, specializing in security and surveillance systems, Audio
          Visual (AV) solutions, Extra Low Voltage (ELV) systems, and Home
          Automation technologies.
        </motion.p>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-10" />
    </section>
  );
}
