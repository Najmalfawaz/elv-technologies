'use client';

import { caseStudiesData } from "@/lib/case-studies-data";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function CaseStudiesSection() {
    // Only show the first 3 for a cleaner home page look
    const featuredStudies = caseStudiesData.slice(0, 3);

    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-50/50 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px]" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <Badge variant="outline" className="mb-4 text-red-600 border-red-200 bg-red-50/50">
                            Our Success Stories
                        </Badge>
                        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Results</span>,
                            Global Expertise
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Explore how we've helped leading organizations across the UAE transform their infrastructure with cutting-edge technology.
                        </p>
                    </div>

                    <Button asChild variant="ghost" className="hidden md:flex text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors group">
                        <Link href="/case-studies" className="flex items-center">
                            View All Case Studies <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>

                {/* Case Studies Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {featuredStudies.map((study, index) => (
                        <div key={study.slug}>
                            <Link href={`/case-studies/${study.slug}`} className="group block h-full">
                                <div className="relative h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2">
                                    {/* Image Header */}
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <Image
                                            src={study.image}
                                            alt={study.project}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                        <div className="absolute bottom-4 left-4 right-4 text-white">
                                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-90 mb-1">
                                                <Building2 className="h-3 w-3" />
                                                {study.client}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                                            {study.project}
                                        </h3>

                                        <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                                            <MapPin className="h-4 w-4 text-red-500 shrink-0" />
                                            <span className="truncate">{study.location}</span>
                                        </div>

                                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                                            {study.overview}
                                        </p>

                                        <div className="pt-4 border-t border-slate-50 mt-auto flex items-center justify-between">
                                            <span className="text-sm font-bold text-red-600 flex items-center group/btn">
                                                View details
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </motion.div>

                {/* Mobile View All Button */}
                <div className="mt-12 flex justify-center md:hidden">
                    <Button asChild className="w-full h-14 bg-red-600 hover:bg-red-700 rounded-2xl shadow-lg shadow-red-600/20">
                        <Link href="/case-studies">
                            View All Case Studies <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
