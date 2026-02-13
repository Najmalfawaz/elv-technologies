'use client';

import { motion } from 'framer-motion';

export default function CareersHero() {
    return (
        <section className="relative isolate overflow-hidden bg-slate-950 py-24 sm:py-32">
            {/* Background patterns */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.red.900/15),theme(colors.slate.950))]" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-slate-950 shadow-xl shadow-red-500/5 ring-1 ring-slate-800 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Join the <span className="text-accent">Future</span> of ELV
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Build your career with Abu Dhabi's leading ELV and IT integrators. We're looking for passionate individuals to join our mission of delivering technological excellence.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
