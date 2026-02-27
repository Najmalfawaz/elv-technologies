'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { servicesData } from '@/lib/services-data';
import { Cpu, Terminal, Settings, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Programming() {
  const { programming } = servicesData;

  const features = [
    { title: 'System Commissioning', icon: Settings, desc: 'Ensuring correct functionality & optimal performance.' },
    { title: 'Custom Programming', icon: Terminal, desc: 'Tailored solutions for complex ELV & AV requirements.' },
    { title: 'Major Brands Expertise', icon: Cpu, desc: 'Certified integration for leading global technology systems.' },
  ];

  return (
    <section className="bg-elv-background-main py-24 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-elv-accent-blue/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[30%] h-[30%] rounded-full bg-elv-primary-red/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#0F1115_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full overflow-hidden rounded-[2rem] shadow-2xl border border-elv-border-divider group"
          >
            <Image
              src={programming.image}
              alt={programming.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-elv-background-main/80 via-elv-background-main/20 to-transparent" />

            {/* Glass overlay detail */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="backdrop-blur-md bg-elv-background-surface/50 border border-elv-border-divider p-6 rounded-2xl">
                <div className="flex items-center gap-3 text-elv-text-primary font-semibold mb-2">
                  <Terminal className="w-5 h-5 text-elv-primary-red" />
                  Advanced Integration
                </div>
                <p className="text-elv-text-secondary text-sm leading-relaxed">Delivering bespoke control systems that seamlessly unify your technological infrastructure.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-elv-border-divider bg-elv-background-surface px-4 py-1.5 text-xs font-medium text-elv-text-secondary mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-elv-primary-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-elv-primary-red"></span>
              </span>
              TECHNICAL EXCELLENCE
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-elv-text-primary mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                {programming.title}
              </span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-elv-text-muted">
              {programming.description.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ scale: 1.02 }}
                  className="group/feature flex items-start gap-4 p-5 rounded-2xl bg-elv-background-alt border border-elv-border-divider hover:border-elv-border-divider/50 hover:bg-elv-background-surface transition-all"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black/50 text-elv-text-secondary border border-elv-border-divider shadow-lg group-hover/feature:text-elv-primary-red group-hover/feature:border-elv-primary-red/30 transition-colors">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-elv-text-primary text-base mb-1 group-hover/feature:text-elv-primary-red transition-colors">{feature.title}</h4>
                    <p className="text-sm text-elv-text-muted leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <button className="group flex items-center gap-2 rounded-full bg-elv-text-primary text-elv-background-main px-8 py-4 text-sm font-bold transition-all hover:bg-slate-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <CheckCircle2 className="w-5 h-5 text-elv-primary-red" />
                Request Commissioning
                <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
