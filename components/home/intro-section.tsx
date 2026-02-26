'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IntroSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { value: "150+", label: "Successful\nDeployments" },
        { value: "50+", label: "Enterprise\nClients" },
        { value: "10+", label: "Years of\nExcellence" },
        { value: "24/7", label: "Dedicated\nSupport" },
    ];

    return (
        <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-[#18181b] text-white overflow-hidden relative">
            {/* Right Half Pattern Background */}
            <div className="absolute inset-y-0 right-0 w-full md:w-1/2 flex items-center justify-end pointer-events-none overflow-hidden z-0">
                <div className="w-[120%] max-w-[800px] aspect-square bg-[url('/images/logo-pattern.svg')] bg-right bg-no-repeat bg-contain opacity-[0.08] translate-x-1/4"></div>
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e4511d]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#e4511d]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Mission Statement */}
                    <div className="lg:col-span-5 flex flex-col justify-center h-full">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug"
                        >
                            <span className="text-[#e4511d]">Innovating Infrastructure,</span> Securing Your Future with Advanced Technology Systems.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="mt-8"
                        >
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-3 rounded-none border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/5 hover:border-white/40"
                            >
                                Learn More About Us
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Description & Stats */}
                    <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center h-full">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-white leading-snug">
                                Premier Integration Specialists in the UAE
                            </h3>
                            <p className="text-neutral-300 text-sm lg:text-base leading-relaxed mb-4 font-medium">
                                At ELV Technology Solutions, we design, supply, and integrate robust communication networks, state-of-the-art security systems, and immersive audio-visual environments.
                            </p>
                            <p className="text-neutral-400 text-xs lg:text-sm leading-relaxed mb-8">
                                Our commitment to engineering excellence ensures every implementation is scalable, secure, and intuitive. We empower organizations to operate efficiently in an increasingly connected infrastructure landscape.
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/10">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
                                        className="flex flex-col gap-1"
                                    >
                                        <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight">{stat.value}</div>
                                        <div className="text-xs font-medium text-neutral-400 whitespace-pre-wrap">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
