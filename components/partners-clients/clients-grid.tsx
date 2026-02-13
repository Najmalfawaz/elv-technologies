'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { clients } from '@/lib/clients-data';

export function ClientsGrid() {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Our Esteemed Clients
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Powering ambitions for the industry's best across the globe.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <Card className="group h-32 flex items-center justify-center p-6 bg-slate-50/50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300 rounded-2xl">
                                <CardContent className="p-0 flex items-center justify-center w-full h-full">
                                    <div className="relative h-16 w-full transition-all duration-300 transform group-hover:scale-110">
                                        <Image
                                            src={client.src}
                                            alt={client.alt}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
