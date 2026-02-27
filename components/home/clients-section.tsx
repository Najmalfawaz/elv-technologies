'use client';

import { useEffect, useRef, useState } from 'react';
import { clients } from '@/lib/clients-data';
import Image from 'next/image';

function MarqueeRow({
  items,
  direction = 'left',
  speed = 'slow',
}: {
  items: { src: string; alt: string }[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
}) {
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className='relative w-full py-4 overflow-hidden'>
      <div
        className="flex w-fit gap-6 sm:gap-10 animate-scroll-left hover:[animation-play-state:paused]"
        style={{
          animationDuration: speed === 'slow' ? '160s' : '80s',
          animationDirection: direction === 'right' ? 'reverse' : 'normal'
        }}
      >
        {duplicated.map((item, index) => (
          <div
            key={index}
            className='flex-shrink-0 flex items-center justify-center w-40 sm:w-48 h-20 transition-all duration-500'
          >
            <div className="relative w-full h-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 160px, 192px"
                className='object-contain transition-all duration-500'
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
    </div>
  );
}

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
    <section ref={sectionRef} className='py-16 sm:py-24 bg-background overflow-hidden relative border-y border-border'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div
          className={`text-center mb-10 transition-all duration-1000 ease-out ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
            }`}>
          <h2 className='text-sm sm:text-base font-semibold text-muted-foreground tracking-widest uppercase'>
            Trusted by organizations worldwide
          </h2>
        </div>
      </div>

      <div className='mb-4'>
        <MarqueeRow items={clients} direction='left' speed='slow' />
      </div>
    </section>
  );
}
