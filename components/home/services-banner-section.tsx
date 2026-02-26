'use client';

import { motion } from "framer-motion";
import { Settings, Lightbulb, Code2, Wrench } from "lucide-react";
import { servicesData } from "@/lib/services-data";

export default function ServicesBannerSection() {
    const services = [
        {
            icon: Settings,
            title: "System Integration",
        },
        {
            icon: Lightbulb,
            title: servicesData.technicalSupport.title,
        },
        {
            icon: Code2,
            title: servicesData.programming.title,
        },
        {
            icon: Wrench,
            title: servicesData.amc.title,
        }
    ];

    return (
        <section className="py-20 sm:py-24 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] relative overflow-hidden text-white border-y border-white/5 group/banner">
            {/* Background Patterns */}
            <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-[0.03] pointer-events-none bg-repeat mix-blend-overlay z-0" />
            <div className="absolute inset-0 opacity-[0.04] z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-transform duration-1000 group-hover/banner:translate-y-10 z-0" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none transition-transform duration-1000 group-hover/banner:-translate-y-10 z-0" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left side text */}
                    <div className="lg:col-span-5 text-center lg:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-8 leading-[1.1]"
                        >
                            We integrate technologies that make for better
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-3xl font-bold mb-4 text-white">Our Services</h3>
                            <p className="text-lg text-white/90 mb-2 font-medium">We're here for the long haul.</p>
                            <p className="text-lg text-white/90">Get a customized solution that best fits your needs and budget.</p>
                        </motion.div>
                    </div>

                    {/* Right side services grid */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center group/card shadow-xl hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-neutral-300 group-hover/card:border-blue-500/30 group-hover/card:text-blue-400 group-hover/card:scale-110 transition-all duration-500 relative z-10">
                                        <service.icon className="w-8 h-8" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="font-bold text-white text-sm sm:text-base leading-snug group-hover/card:text-white transition-colors duration-300 whitespace-pre-line relative z-10">
                                        {service.title}
                                    </h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
