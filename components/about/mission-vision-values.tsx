"use client";

import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  "Treat everyone with respect and dignity",
  "Commit to continuous improvement through training and knowledge sharing.",
  "Demonstrate teamwork, honesty, and integrity in all engagements.",
  "Maintain a friendly approach and honour every commitment made.",
  "Ensure Quality Assurance across all tasks and project stages.",
];

export default function MissionVisionValues() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Background abstract elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-red-100/50 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-amber-100/50 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative h-full rounded-[2rem] border border-slate-100 bg-white p-10 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:border-red-200 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

            <div className="relative z-10">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-100 text-red-500 shadow-md shadow-red-500/10 group-hover:scale-110 group-hover:bg-red-50 group-hover:border-red-200 transition-all duration-500">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900 tracking-tight">
                Our Mission
              </h3>
              <p className="leading-relaxed text-slate-600">
                To deliver end-to-end technology solutions that exceed client
                expectations through innovative design, reliable implementation,
                and future-ready support infrastructure.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative h-full rounded-[2rem] border border-slate-100 bg-white p-10 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:border-amber-200 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

            <div className="relative z-10">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-100 text-amber-500 shadow-md shadow-amber-500/10 group-hover:scale-110 group-hover:bg-amber-50 group-hover:border-amber-200 transition-all duration-500">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900 tracking-tight">
                Our Vision
              </h3>
              <p className="leading-relaxed text-slate-600">
                To continue as a leading provider of Audio Visual Solutions, ELV
                Systems, Security & Surveillance, and Home Automation
                technologies in the Abu Dhabi and all-over UAE by consistently
                delivering excellence and maximizing value for our clients.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative h-full rounded-[2rem] border border-slate-100 bg-white p-10 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

            <div className="relative z-10">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-100 text-blue-500 shadow-md shadow-blue-500/10 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-500">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="mb-6 text-2xl font-bold text-slate-900 tracking-tight">
                Our Values
              </h3>
              <ul className="space-y-4">
                {values.map((value, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 font-medium"
                  >
                    <div className="mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-blue-100 text-blue-600 shrink-0">
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                    {value}
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
