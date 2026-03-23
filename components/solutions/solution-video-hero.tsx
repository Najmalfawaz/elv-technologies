'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
    videoSrc: string;
    tag: string;
    title: ReactNode;
    description: string;
}

export default function SolutionVideoHero({ videoSrc, tag, title, description }: Props) {
    return (
        <section className="relative h-[60vh] lg:h-[80vh] w-full overflow-hidden bg-slate-900">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover opacity-60"
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Sophisticated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60 z-10" />
                <div className="absolute inset-0 backdrop-blur-[2px] z-0" />
            </div>

            <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
                        {tag}
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
                        {description}
                    </p>
                </motion.div>

                {/* Animated Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-red-600 to-transparent animate-pulse" />
                </motion.div>
            </div>
        </section>
    );
}
