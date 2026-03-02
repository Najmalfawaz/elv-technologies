'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
    title: string;
    description: string;
    bgImage?: string; // Optional real image path
}

export default function SolutionVerticalHero({ title, description, bgImage }: Props) {
    return (
        <div className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
            {/* Background Image Layer */}
            <div className="absolute inset-0 -z-20 bg-slate-950">
                {bgImage ? (
                    <Image
                        src={bgImage}
                        alt={`${title} background`}
                        fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
priority
                        className="object-cover object-center"
                    />
                ) : (
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:20px_20px]" />
                )}
            </div>

            {/* Gradient Overlays for Readability (MUST be above image, below text) */}
            <div className="absolute inset-0 -z-10 bg-slate-900/40">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-transparent" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-20">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                            {title}
                        </h1>
                        <p className="text-lg leading-8 text-gray-300 max-w-xl">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
