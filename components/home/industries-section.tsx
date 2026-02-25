'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { sectors } from '@/lib/about-data';
import { ArrowUpRight } from 'lucide-react';

export default function IndustriesSection() {
    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden text-white">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-[0.03] pointer-events-none bg-repeat mix-blend-overlay" />
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
                    <div className="max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 leading-[1.1] text-white"
                        >
                            Industries We <span className="opacity-90">Transform</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-white/80 leading-relaxed max-w-2xl"
                        >
                            Delivering tailored technology systems across diverse sectors. From robust corporate infrastructure to seamless hospitality experiences.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hidden md:flex items-center gap-4 text-white font-medium mt-auto mb-2 opacity-90 hover:opacity-100 transition-opacity cursor-pointer group"
                    >
                        <span>Explore Sectors</span>
                        <div className="w-12 h-[2px] bg-white group-hover:w-16 transition-all duration-300" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[250px]"
                >
                    {sectors.map((sector, index) => {
                        // Dynamic sizing logic for a bento grid effect
                        let colSpan = "col-span-1";
                        let rowSpan = "row-span-1";

                        // Example pattern: Make a few specific indices larger
                        if (index === 0) {
                            colSpan = "sm:col-span-2 lg:col-span-2";
                            rowSpan = "sm:row-span-2";
                        } else if (index === 3) {
                            colSpan = "sm:col-span-2 lg:col-span-2";
                            rowSpan = "sm:row-span-1";
                        } else if (index === 4) {
                            colSpan = "sm:col-span-1 lg:col-span-1";
                            rowSpan = "sm:row-span-2";
                        } else if (index === 8) {
                            colSpan = "sm:col-span-2 lg:col-span-2";
                        }

                        return (
                            <div
                                key={index}
                                className={`group relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-white/10 hover:border-white/30 transition-all duration-500 ${colSpan} ${rowSpan}`}
                            >
                                <Image
                                    src={sector.image}
                                    alt={sector.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="absolute inset-0 p-6 md:p-8 z-20 flex flex-col justify-end">
                                    <h3 className="font-bold text-white text-xl md:text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                        {sector.name}
                                    </h3>

                                    <div className="flex items-center gap-2 text-white/90 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 ease-out">
                                        <span className="font-medium text-sm tracking-wide uppercase">Discover More</span>
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}
