"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from 'framer-motion';

const features = [
  "Representing reputed global manufacturers.",
  "Serving a wide customer base across multiple market sectors.",
  "Highly skilled professional team for large-scale projects.",
  "Trusted by business owners, architects, consultants, and contractors.",
  "Best-in-class design, delivery, installation, and integration.",
  "Reliable and innovative maintenance services.",
];

export default function TrustedPartner() {
  return (
    <section className="relative bg-slate-50 py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-red-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start relative">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-800 mb-6 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              RELIABILITY & TRUST
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-6">
              Your Trusted Partner <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">
                in Technology
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
              Our commitment to excellence and innovation has made us a leader in the technology solutions industry. We provide end-to-end services that you can rely on.
            </p>

            <ul className="mt-10 grid gap-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white/50 p-4 transition-all hover:bg-white hover:border-red-200 hover:shadow-md"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-red-50 border border-red-100 group-hover:bg-red-100 group-hover:border-red-200 transition-colors">
                    <CheckCircle className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm transition-colors">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <div className="relative lg:sticky lg:top-32 h-fit">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-red-500/20 to-amber-500/20 blur-2xl opacity-50" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl group"
            >
              <Image
                src="/images/aboutUS/About us.png"
                alt="Trusted Partner"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="rounded-2xl border border-white/20 bg-white/90 p-6 backdrop-blur-xl shadow-xl transform transition-transform group-hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold tracking-widest text-slate-800 uppercase">Our Promise</span>
                  </div>
                  <p className="font-bold text-slate-900 text-lg">
                    "Delivering Excellence & Innovation <br /> in Every Project"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}