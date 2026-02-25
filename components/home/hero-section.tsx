'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { heroSectionData } from "@/lib/data";

export default function HeroSection() {
    return (
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden flex items-center min-h-[85vh]">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroSectionData.slides[0].src}
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-15"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white/95" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Heading */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight leading-[1.05] text-[#2c2a29]">
                            {heroSectionData.heading.line1}
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e4511d] via-[#a8334c] to-[#6d2753]">
                                {heroSectionData.heading.line2}
                            </span>
                        </h1>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="lg:pl-4 lg:mt-6"
                    >
                        <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed mb-10 max-w-xl whitespace-pre-line">
                            {heroSectionData.subheading}
                        </p>

                        <div className="flex flex-wrap items-center gap-10">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 text-base font-medium transition-colors"
                            >
                                Contact Us <ArrowRight className="h-5 w-5 font-light" />
                            </Link>
                            <Link
                                href="/case-studies"
                                className="group inline-flex items-center gap-2 text-slate-900 font-medium text-base hover:text-[#ea580c] transition-colors"
                            >
                                Case Studies <ArrowRight className="h-5 w-5 font-light transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
