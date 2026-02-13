'use client';

import { blogPosts } from "@/lib/blog-data";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function BlogBannerSection() {
    // Get the latest blog post
    const latestPost = blogPosts[0];

    if (!latestPost) return null;

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col mb-12">
                    <Badge variant="outline" className="w-fit mb-4 text-red-600 border-red-200 bg-red-50/50">
                        Insights & Updates
                    </Badge>
                    <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Knowledge</span>
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group block rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 cursor-pointer"
                >
                    <Link href={`/blog/${latestPost.slug}`} className="block">
                        <div className="relative h-[28rem] lg:h-[32rem] w-full">
                            <Image
                                src={latestPost.image}
                                alt={latestPost.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Sophisticated Gradients */}
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent z-10" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent z-10" />

                            {/* Content Overlays */}
                            <div className="absolute inset-0 z-20 flex items-center">
                                <div className="max-w-3xl px-8 lg:px-16">
                                    <div className="flex flex-wrap items-center gap-4 mb-6 text-slate-200/90 text-sm font-medium">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="h-4 w-4 text-red-500" />
                                            {latestPost.date}
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-slate-500" />
                                        <div className="flex items-center gap-1.5">
                                            <Badge className="bg-red-600 hover:bg-red-700 text-white border-0">
                                                {latestPost.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                                        {latestPost.title}
                                    </h3>

                                    <p className="text-lg md:text-xl text-slate-300 mb-8 line-clamp-2 max-w-2xl font-light leading-relaxed">
                                        {latestPost.description}
                                    </p>

                                    <div className="flex items-center gap-6">
                                        <Button className="h-14 px-8 bg-red-600 hover:bg-red-700 text-white rounded-2xl shadow-lg shadow-red-600/30 transition-all group/btn">
                                            Read Full Article
                                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Author Badge Float */}
                            <div className="absolute top-8 right-8 z-20 flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-2xl">
                                <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold">
                                    ET
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold leading-none mb-0.5">Author</p>
                                    <p className="text-xs text-white font-medium">{latestPost.author}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* Grid Secondary (If we had more, we'd show them below, but for now we follow the banner request) */}
                <div className="mt-12 flex justify-center">
                    <Button asChild variant="outline" className="rounded-2xl h-12 border-slate-200 text-slate-600 hover:text-red-600 hover:border-red-200 transition-all">
                        <Link href="/blog">
                            Explore More Insights
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
