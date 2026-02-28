'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { partnerCategories } from '@/lib/partners-data';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function PartnersSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Flatten all partners into a single array for the carousel
    const allPartners = partnerCategories.flatMap(c => c.logos);

    // Embla setup: show 5 logos (20%), move 1 at a time, loop infinitely
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'start', slidesToScroll: 1 },
        [Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: false })]
    );

    const onLogoClick = useCallback(() => {
        if (!emblaApi) return;
        const autoplay = emblaApi.plugins().autoplay;
        if (autoplay) {
            autoplay.stop(); // Stop completely on click
        }
    }, [emblaApi]);

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
        <section ref={sectionRef} className='py-24 bg-white overflow-hidden relative border-t border-neutral-100'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16'>
                <div
                    className={`text-center transition-all duration-1000 ease-out ${isVisible
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
            </div>

            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex touch-pan-y -ml-4 sm:-ml-8 items-center h-32 sm:h-48">
                            {allPartners.map((item, index) => (
                                <div
                                    key={`${item.alt}-${index}`}
                                    className="flex-[0_0_50%] sm:flex-[0_0_33.33%] lg:flex-[0_0_20%] min-w-0 pl-4 sm:pl-8 cursor-pointer group"
                                    onClick={onLogoClick}
                                >
                                    <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 hover:scale-110">
                                        <div className="relative w-full h-24 sm:h-36">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                                className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient fades for the edges */}
                    <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
