'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { servicesData } from '@/lib/services-data';
import { CheckCircle, ShieldCheck, Wrench, Clock, Activity, Zap, ArrowRight } from 'lucide-react';

export default function Amc() {
  const { amc } = servicesData;

  return (
    <section className="py-24 relative overflow-hidden bg-elv-background-main">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle mesh gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-elv-primary-red/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-elv-accent-blue/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-elv-primary-dark/10 blur-[100px]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#0F1115_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-elv-border-divider bg-elv-background-surface px-4 py-1.5 text-xs font-medium text-elv-text-secondary mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-elv-primary-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-elv-primary-red"></span>
            </span>
            PEACE OF MIND
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-elv-text-primary mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
              {amc.title}
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-elv-text-muted">
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
            <div className="relative rounded-[2rem] border border-elv-border-divider bg-elv-background-surface p-8 backdrop-blur-xl overflow-hidden group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-elv-primary-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="text-2xl font-bold text-elv-text-primary mb-8 flex items-center gap-3 relative z-10">
                <div className="p-2.5 rounded-xl bg-elv-primary-red/10 text-elv-primary-red ring-1 ring-elv-primary-red/20">
                  <Activity className="w-5 h-5" />
                </div>
                {amc.systemsCovered.title}
              </h3>

              <div className="grid sm:grid-cols-2 gap-3 relative z-10">
                {amc.systemsCovered.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-elv-background-alt border border-elv-border-divider hover:border-elv-border-divider/50 hover:bg-elv-background-surface transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-elv-primary-red shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-elv-text-secondary">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image Card */}
            <div className="relative h-72 rounded-[2rem] overflow-hidden border border-elv-border-divider group shrink-0">
              <Image
                src={amc.image}
                alt="AMC Services"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-elv-background-main via-elv-background-main/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-elv-text-primary text-sm font-semibold backdrop-blur-md bg-elv-background-surface/50 w-fit px-5 py-2.5 rounded-full border border-elv-border-divider shadow-xl">
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
            <div className="relative rounded-[2rem] border border-elv-border-divider bg-elv-background-surface p-8 backdrop-blur-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-bl from-elv-accent-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="text-2xl font-bold text-elv-text-primary mb-3 relative z-10">
                {amc.includes.title}
              </h3>
              <p className="text-sm text-elv-text-muted mb-8 relative z-10">{amc.includes.description}</p>

              <div className="space-y-4 relative z-10">
                {amc.includes.visits.map((visit, idx) => (
                  <div key={visit.title} className="group/item flex gap-4 p-5 rounded-2xl bg-elv-background-alt border border-elv-border-divider hover:bg-elv-background-surface hover:border-elv-border-divider/50 transition-all">
                    <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-black/50 text-elv-text-secondary border border-elv-border-divider group-hover/item:text-elv-accent-blue group-hover/item:scale-110 group-hover/item:border-elv-accent-blue/30 transition-all shadow-lg">
                      {idx === 0 ? <Wrench className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-elv-text-primary mb-1 group-hover/item:text-elv-accent-blue transition-colors">{visit.title}</h4>
                      <p className="text-xs text-elv-text-secondary leading-relaxed">{visit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="relative rounded-[2rem] border border-elv-border-divider bg-gradient-to-br from-elv-background-surface/50 to-transparent p-8 overflow-hidden flex-1">
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-elv-primary-dark/20 rounded-full blur-[80px]" />

              <h3 className="text-2xl font-bold text-elv-text-primary mb-6 flex items-center gap-3 relative z-10">
                <ShieldCheck className="text-elv-primary-light w-6 h-6" />
                Why Choose Us?
              </h3>
              <ul className="space-y-4 relative z-10">
                {amc.whyChooseUs.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-3 text-elv-text-secondary bg-elv-background-alt p-3 rounded-xl border border-elv-border-divider"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-elv-primary-dark/10 text-elv-primary-light shrink-0 ring-1 ring-elv-primary-dark/20">
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
