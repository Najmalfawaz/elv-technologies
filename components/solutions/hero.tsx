'use client';

import { motion } from 'framer-motion';

import Image from "next/image";

export default function SolutionsHero() {
    return (
        <div className="relative">
            {/* Hero Image Banner - this merges with transparent header */}
            <div className="relative h-[85vh] lg:h-[90vh] w-full overflow-hidden bg-slate-900">
                <Image
                    src="/images/solutions/network-communications/hero.png"
                    alt="ELV Solutions Engineering"
                    fill
                    priority
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80 z-10" />
                
                {/* Content Section - Title OVER Image */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pt-20 px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="max-w-4xl text-center"
                    >
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold font-montserrat uppercase tracking-widest text-white ring-1 ring-inset ring-white/20 mb-8 bg-white/10 backdrop-blur-sm">
                            Solutions
                        </div>
                        <h1 className="text-4xl font-extrabold font-montserrat tracking-[0.1em] uppercase text-white sm:text-5xl lg:text-6xl mb-8 drop-shadow-lg">
                            Transforming Ideas into<br />
                            <span className="text-red-500 drop-shadow-md">Technology Solutions</span>
                        </h1>
                        <p className="text-xl leading-9 text-slate-200 max-w-2xl mx-auto drop-shadow">
                            End-to-end AV, Security, IT, Networking, and Automation solutions engineered for the UAE’s next-generation spaces.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
