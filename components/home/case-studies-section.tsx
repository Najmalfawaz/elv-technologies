'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { caseStudiesData } from '@/lib/case-studies-data';

export default function CaseStudiesSection({ initialData }: { initialData?: any[] }) {
    // Only show the first 3 for a cleaner home page look
    const featuredStudies = caseStudiesData.slice(0, 3);

    return (
        <section className="py-24 relative overflow-hidden bg-white/40 backdrop-blur-3xl border-b border-neutral-200/60">
            {/* Background Accents - Subdued */}

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <Badge variant="outline" className="mb-6 rounded-full px-4 py-1.5 text-sm font-medium text-accent border-accent/20 bg-accent/5">
                            Our Success Stories
                        </Badge>
                        <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-5xl">
                            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">Results</span>, Global Expertise
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                            Explore how we've helped leading organizations across the UAE transform their infrastructure with cutting-edge technology.
                        </p>
                    </div>

                    <Button asChild variant="outline" className="hidden md:flex rounded-full px-6 h-12 text-sm font-semibold border-neutral-300 hover:bg-neutral-100 hover:text-foreground transition-all group">
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
                                <div className="relative h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-neutral-200/60 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2">
                                    {/* Image Header */}
                                    <div className="relative h-64 w-full overflow-hidden bg-neutral-100">
                                        <Image
                                            src={study.image}
                                            alt={study.project}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                        <div className="absolute bottom-5 left-5 right-5 text-white">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider border border-white/20 line-clamp-1">
                                                {study.project}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Badge variant="secondary" className="bg-accent/10 text-accent font-semibold hover:bg-accent/20 border-0">
                                                {study.category || 'Infrastructure'}
                                            </Badge>
                                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground ml-auto bg-neutral-100 px-2 py-1 rounded-md">
                                                <MapPin className="h-3 w-3" />
                                                <span className="truncate max-w-[100px]">{study.location}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-extrabold text-foreground mb-4 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                                            {study.client}
                                        </h3>

                                        {/* Highlighted Metric/Outcome */}
                                        <div className="bg-neutral-50 rounded-xl p-4 mb-6 border border-neutral-100 flex items-start gap-4 group-hover:bg-accent/5 group-hover:border-accent/10 transition-colors">
                                            <div className="bg-white p-2 rounded-lg shadow-sm">
                                                <div className="text-2xl font-bold text-accent leading-none">
                                                    {index === 0 ? '99%' : index === 1 ? '40%' : '24/7'}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">Key Result</div>
                                                <div className="text-sm text-muted-foreground leading-snug">
                                                    {index === 0 ? 'Increase in network uptime and security' : index === 1 ? 'Reduction in operational overhead costs' : 'Continuous monitoring deployed'}
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-8 flex-grow">
                                            {study.overview}
                                        </p>

                                        <div className="pt-5 border-t border-neutral-100 mt-auto flex items-center justify-between">
                                            <span className="text-sm font-semibold text-accent flex items-center group/btn relative overflow-hidden">
                                                <span className="relative z-10">Read full study</span>
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
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
                    <Button asChild className="w-full rounded-full h-12 bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg shadow-accent/20">
                        <Link href="/case-studies">
                            View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
