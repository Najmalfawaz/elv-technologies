'use client';

import { motion } from 'framer-motion';

import Image from "next/image";

export default function SolutionsHero() {
    return (
        <div className="relative">
            {/* Hero Image Banner - this merges with transparent header */}
            <div className="relative h-[50vh] lg:h-[60vh] w-full overflow-hidden bg-slate-900">
                <Image
                    src="/images/solutions/network-communications/hero.png"
                    alt="ELV Solutions Engineering"
                    fill
                    priority
                    className="object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/20 z-10" />
            </div>

            {/* Content Section - Title Below Image */}
            <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="max-w-4xl"
                        >
                            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium leading-6 text-red-600 ring-1 ring-inset ring-red-600/10 mb-8 bg-red-50/50">
                                Solutions
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-8">
                                Transforming Ideas into<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Technology Solutions</span>
                            </h1>
                            <p className="text-xl leading-9 text-slate-600 max-w-2xl mx-auto">
                                End-to-end AV, Security, IT, Networking, and Automation solutions engineered for the UAE’s next-generation spaces.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
