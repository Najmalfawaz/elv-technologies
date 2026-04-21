'use client';

import { useEffect, useRef, useState } from 'react';
import { clients } from '@/lib/clients-data';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
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
      className='py-12 sm:py-16 bg-background overflow-hidden relative border-y border-border'
    >
      <div className='w-full'>
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out px-4 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
            }`}>
          <h2 className='text-sm sm:text-base font-semibold text-muted-foreground tracking-widest uppercase'>
            Trusted Client Across The UAE.
          </h2>
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
            <CarouselContent className="-ml-3 md:-ml-4">
              {clients.map((item, index) => (
                <CarouselItem key={index} className="pl-3 md:pl-4 basis-[60%] sm:basis-1/3 md:basis-1/4 lg:basis-[20%]">
                  <div className="w-full h-28 sm:h-36 flex items-center justify-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-contain opacity-100 transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 150px, 200px"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Gradient fades for the edges to blend the carousel smoothly */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
