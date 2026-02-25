'use client';

import { motion } from "framer-motion";
import { sectors } from "@/lib/about-data";

export default function Sectors() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#020617_70%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-300 mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            INDUSTRIES WE SERVE
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Empowering Sectors
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            We deliver tailored technology solutions across a diverse range of industries, driving innovation and efficiency where it matters most.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group relative flex flex-col items-center justify-center p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col items-center gap-6">
                {/* Empty circle for icon (since original didn't have lucide icons for sectors) */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black/50 border border-white/10 text-slate-400 shadow-lg group-hover:scale-110 border-red-500/30 group-hover:bg-red-500/10 transition-all duration-500">
                  <div className="w-8 h-8 rounded-full border-2 border-slate-500 group-hover:border-red-400 border-dashed" />
                </div>

                <h3 className="text-center font-bold text-slate-300 group-hover:text-white transition-colors">
                  {sector.name}
                </h3>
              </div>

              {/* Corner accent line visible on hover */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
