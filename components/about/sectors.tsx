'use client';

import { useState } from 'react';
import AnimateOnScroll from '@/components/ui/animate-on-scroll';
import Image from 'next/image';
import { sectors } from '@/lib/about-data';

export default function Sectors() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll animation="fade-in-up">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Sectors We are Covering
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
          </div>
        </AnimateOnScroll>

        {/* Slider for mobile */}
        <div className="sm:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {sectors.map((sector) => (
                <div key={sector.name} className="w-full flex-shrink-0 px-2">
                  <div className="group relative h-64 w-full overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={sector.image}
                      alt={sector.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                      <h3 className="text-lg font-semibold text-white">
                        {sector.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {sectors.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'h-2 w-6 bg-accent'
                    : 'h-2 w-2 bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Go to sector ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid for desktop */}
        <div className="hidden sm:grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, idx) => (
            <AnimateOnScroll
              key={sector.name}
              animation="fade-in-up"
              delay={idx * 80}
            >
              <div className="group relative h-64 w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={sector.image}
                  alt={sector.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {sector.name}
                  </h3>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
