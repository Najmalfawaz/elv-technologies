'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

export default function BlogList() {
    return (
        <section className="py-24 bg-white dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <Card className="flex flex-col h-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 group rounded-2xl overflow-hidden ring-1 ring-slate-200/50 dark:ring-slate-800/50">
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-accent hover:bg-red-700 text-white border-none py-1 px-3 shadow-lg shadow-red-500/20">
                                                {post.category}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardContent className="flex-grow p-6">
                                        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <User className="h-3 w-3" />
                                                {post.author}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                                            {post.description}
                                        </p>
                                    </CardContent>
                                    <CardFooter className="p-6 pt-0 mt-auto">
                                        <div className="flex items-center text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
