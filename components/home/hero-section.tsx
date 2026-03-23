'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { heroSectionData } from "@/lib/data";

export default function HeroSection() {
    return (
        <section className="relative pt-10 pb-6 lg:pt-12 lg:pb-8 overflow-hidden flex items-center min-h-[50vh]">
            {/* Background Image & Overlay Removed */}

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-[1.4fr,1fr] gap-12 lg:gap-20 items-center">

                    {/* Left Column: Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
                            <span className="block pb-2">
                                {heroSectionData.heading.line1}
                            </span>
                            <span className="block lg:whitespace-nowrap">
                                {heroSectionData.heading.line2.split(' ').map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                        className="inline-block mr-[0.25em] last:mr-0"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>
                    </motion.div>

                    {/* Right Column: Content + Buttons */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col gap-8"
                    >
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                            {heroSectionData.subheading}
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <Link
                                href={heroSectionData.buttons.primary.link}
                                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 text-base font-semibold transition-all hover:scale-105 active:scale-95 shadow-md"
                            >
                                {heroSectionData.buttons.primary.text} <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href={heroSectionData.buttons.secondary.link}
                                className="group inline-flex items-center gap-2 text-slate-700 font-semibold text-base hover:text-blue-600 transition-colors"
                            >
                                {heroSectionData.buttons.secondary.text} <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
