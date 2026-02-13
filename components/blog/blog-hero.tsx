'use client';

import { motion } from 'framer-motion';

export default function BlogHero() {
    return (
        <section className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.red.900/10),theme(colors.slate.900))]" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-slate-900 shadow-xl shadow-red-500/10 ring-1 ring-slate-800 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Insights & <span className="text-accent">Innovation</span>
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Stay updated with the latest trends in Fiber-optic technology, ELV systems, and smart infrastructure solutions in Abu Dhabi and across the UAE.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
