'use client';

import * as React from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { clients } from '@/lib/clients-data';
import Autoplay from 'embla-carousel-autoplay';

export function ClientsCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

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

                <div className="relative px-12">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent className="-ml-4">
                            {clients.map((client, index) => (
                                <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                                    <div className="p-1">
                                        <Card className="border-none shadow-none bg-transparent">
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <div className="relative h-20 w-full filter hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
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
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
