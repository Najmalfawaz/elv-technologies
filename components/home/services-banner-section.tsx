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
        <section className="py-20 sm:py-24 bg-gradient-to-r from-[#e4511d] via-[#a8334c] to-[#6d2753] relative overflow-hidden text-white">
            {/* Background Patterns */}
            <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-[0.05] pointer-events-none bg-repeat mix-blend-overlay" />
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

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
                                    className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center group shadow-2xl hover:-translate-y-2 transition-transform duration-300"
                                >
                                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-5 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                        <service.icon className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-snug group-hover:text-accent transition-colors duration-300 whitespace-pre-line">
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
