'use client';

import { useEffect, useRef, useState } from 'react';
import { partnerCategories } from '@/lib/partners-data';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function PartnersSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Flatten all partners into a single array
    const allPartners = partnerCategories.flatMap(c => c.logos);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section 
            ref={sectionRef} 
            className='py-24 bg-white overflow-hidden relative border-t border-neutral-100'
        >
            <div className='w-full'>
                <div
                    className={`text-center mb-16 transition-all duration-1000 ease-out px-4 ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                        }`}>
                    <h2 className='text-4xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-6'>
                        Our Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">Partners</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        We collaborate with industry-leading technology providers to deliver unparalleled solutions and drive innovation.
                    </p>
                </div>

                <div className="relative w-full">
                    <Carousel
                        opts={{
                            align: 'start',
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 2500,
                                stopOnInteraction: false,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 md:-ml-8">
                            {allPartners.map((item, index) => (
                                <CarouselItem key={index} className="pl-4 md:pl-8 basis-[60%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                                    <div className="w-[180px] sm:w-[220px] mx-auto aspect-[4/3] flex items-center justify-center p-4 hover:scale-105 transition-all duration-300">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                className="object-contain opacity-100 transition-all duration-300"
                                                sizes="(max-width: 768px) 150px, 200px"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    {/* Gradient fades for the edges to blend the carousel smoothly */}
                    <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
