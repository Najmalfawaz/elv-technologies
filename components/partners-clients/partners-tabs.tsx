'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { partnerCategories } from '@/lib/partners-data';

export function PartnersTabs() {
    const [activeTab, setActiveTab] = useState(partnerCategories[0].title);

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Our Trusted Partners
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Collaborating with industry leaders to deliver world-class solutions.
                    </p>
                </div>

                <Tabs defaultValue={partnerCategories[0].title} className="w-full" onValueChange={setActiveTab}>
                    <div className="flex justify-center mb-8 overflow-x-auto pb-4">
                        <TabsList className="h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
                            {partnerCategories.map((category) => (
                                <TabsTrigger
                                    key={category.title}
                                    value={category.title}
                                    className="rounded-full px-6 py-3 text-sm font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                                >
                                    {category.title}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    <div className="min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {partnerCategories.map((category) => (
                                <TabsContent key={category.title} value={category.title} className="mt-0 focus-visible:outline-none">
                                    {activeTab === category.title && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                                        >
                                            {category.logos.map((logo, index) => (
                                                <Card
                                                    key={`${category.title}-${index}`}
                                                    className="flex items-center justify-center p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow duration-300 group"
                                                >
                                                    <div className="relative h-16 w-full filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100 transform group-hover:scale-110">
                                                        <Image
                                                            src={logo.src}
                                                            alt={logo.alt}
                                                            fill
                                                            className="object-contain"
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        />
                                                    </div>
                                                </Card>
                                            ))}
                                        </motion.div>
                                    )}
                                </TabsContent>
                            ))}
                        </AnimatePresence>
                    </div>
                </Tabs>
            </div>
        </section>
    );
}
