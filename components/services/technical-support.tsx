'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { servicesData } from '@/lib/services-data';
import { CheckCircle, Server, Shield, Monitor } from 'lucide-react';

export default function TechnicalSupport() {
  const { technicalSupport } = servicesData;

  // Icons mapping for capabilities (optional improvement for visual distinction)
  const capabilityIcons = [Shield, Monitor];

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#0A0A0A_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Intro Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              EXPERT SUPPORT
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                {technicalSupport.title}
              </span>
            </h2>
            <div className="space-y-4">
              {technicalSupport.description.map((text, idx) => (
                <p key={idx} className="text-lg leading-relaxed text-slate-400">
                  {text}
                </p>
              ))}
            </div>

            {/* Key Features / Highlights Box */}
            <div className="mt-8 p-6 bg-white/[0.03] backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                  <Server className="w-5 h-5 text-accent" />
                </div>
                Key Service Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['24/7 Monitoring', 'Rapid Response', 'Certified Engineers', 'Proactive Maintenance'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300 bg-white/[0.02] p-3 rounded-xl border border-white/[0.05]">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full overflow-hidden rounded-[2rem] shadow-2xl border border-white/10 group"
          >
            <Image
              src={technicalSupport.image}
              alt={technicalSupport.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Glass Overlay on Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white shadow-2xl">
              <p className="font-medium text-slate-200">Ensuring operational continuity for critical systems across the UAE.</p>
            </div>
          </motion.div>
        </div>

        {/* Capabilities Section - Cards */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-extrabold text-white tracking-tight">
              {technicalSupport.capabilities.title}
            </h3>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {technicalSupport.capabilities.sections.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative overflow-hidden rounded-[2rem] bg-white/[0.03] p-8 border border-white/10 backdrop-blur-xl transition-all hover:bg-white/[0.05] hover:border-white/20"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  {idx === 0 ? <Shield className="w-48 h-48 text-white" /> : <Monitor className="w-48 h-48 text-white" />}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/50 text-accent group-hover:text-white group-hover:bg-accent ring-1 ring-white/10 group-hover:ring-accent/50 transition-all shadow-lg">
                      {idx === 0 ? <Shield className="h-7 w-7" /> : <Monitor className="h-7 w-7" />}
                    </div>
                    <h4 className="text-2xl font-bold text-white tracking-tight">{section.title}</h4>
                  </div>

                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.03] group-hover:border-white/[0.08] transition-colors">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent opacity-80" />
                        <span className="text-slate-300 leading-relaxed text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - Bento Grid Style */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-extrabold text-white tracking-tight">
              {technicalSupport.whyChooseUs.title}
            </h3>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technicalSupport.whyChooseUs.items.map((item, idx) => {
              const Icon = technicalSupport.whyChooseUs.icon;
              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md group hover:bg-white/[0.06] hover:border-accent/30 transition-all"
                >
                  <div className="mb-6 h-16 w-16 flex items-center justify-center rounded-2xl bg-black/50 text-slate-400 border border-white/10 group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:text-accent transition-all transform group-hover:scale-110 shadow-lg">
                    <Icon className="h-8 w-8" />
                  </div>
                  <p className="font-semibold text-slate-300 group-hover:text-white transition-colors">{item}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
