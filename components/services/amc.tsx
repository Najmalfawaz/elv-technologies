'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { servicesData } from '@/lib/services-data';
import { CheckCircle, ShieldCheck, Wrench, Clock, Activity, Zap, ArrowRight } from 'lucide-react';

export default function Amc() {
  const { amc } = servicesData;

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle mesh gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-purple-600/10 blur-[100px]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            PEACE OF MIND
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
              {amc.title}
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-slate-400">
            {amc.description.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Systems Covered - Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Systems Glass Card */}
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl overflow-hidden group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 ring-1 ring-red-500/20">
                  <Activity className="w-5 h-5" />
                </div>
                {amc.systemsCovered.title}
              </h3>

              <div className="grid sm:grid-cols-2 gap-3 relative z-10">
                {amc.systemsCovered.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.06] transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-300">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image Card */}
            <div className="relative h-72 rounded-[2rem] overflow-hidden border border-white/10 group shrink-0">
              <Image
                src={amc.image}
                alt="AMC Services"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-white text-sm font-semibold backdrop-blur-md bg-white/10 w-fit px-5 py-2.5 rounded-full border border-white/20 shadow-xl">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  Professional Maintenance
                </div>
              </div>
            </div>
          </motion.div>

          {/* Includes & Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-8 h-full"
          >
            {/* What includes */}
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                {amc.includes.title}
              </h3>
              <p className="text-sm text-slate-400 mb-8 relative z-10">{amc.includes.description}</p>

              <div className="space-y-4 relative z-10">
                {amc.includes.visits.map((visit, idx) => (
                  <div key={visit.title} className="group/item flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/10 transition-all">
                    <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-black/50 text-slate-300 border border-white/10 group-hover/item:text-blue-400 group-hover/item:scale-110 group-hover/item:border-blue-500/30 transition-all shadow-lg">
                      {idx === 0 ? <Wrench className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 group-hover/item:text-blue-400 transition-colors">{visit.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{visit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 overflow-hidden flex-1">
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-[80px]" />

              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                <ShieldCheck className="text-purple-400 w-6 h-6" />
                Why Choose Us?
              </h3>
              <ul className="space-y-4 relative z-10">
                {amc.whyChooseUs.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-3 text-slate-300 bg-white/[0.02] p-3 rounded-xl border border-white/[0.05]"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/10 text-purple-400 shrink-0 ring-1 ring-purple-500/20">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
