'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { clients } from '@/lib/clients-data';
import { partnerCategories } from '@/lib/partners-data';
import Image from 'next/image';

function MarqueeRow({
  items,
  direction = 'left',
  speed = 'slow',
  renderAs = 'text',
}: {
  items: (string | { src: string; alt: string })[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  renderAs?: 'text' | 'image';
}) {
  const duplicated = [...items, ...items];
  const speedClass =
    speed === 'slow'
      ? '[animation-duration:45s]'
      : speed === 'normal'
      ? '[animation-duration:35s]'
      : '[animation-duration:25s]';

  return (
    <div className='relative overflow-hidden group'>
      {/* Fade edges */}
      <div className='absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10' />
      <div className='absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10' />

      <div
        className={`flex gap-5 animate-scroll-left ${speedClass} ${
          direction === 'right' ? '[animation-direction:reverse]' : ''
        } hover:[animation-play-state:paused]`}>
        {duplicated.map((item, index) => (
          <div
            key={
              renderAs === 'image'
                ? `${(item as { alt: string }).alt}-${index}`
                : `${item as string}-${index}`
            }
            className='flex-shrink-0 flex items-center justify-center rounded-xl border border-border bg-card px-8 py-5 min-w-[200px] transition-all duration-300 hover:border-foreground/15 hover:shadow-md hover:shadow-foreground/[0.02] hover:-translate-y-0.5'>
            {renderAs === 'image' ? (
              <Image
                src={(item as { src: string }).src}
                alt={(item as { alt: string }).alt}
                width={150}
                height={50}
                className='object-contain'
              />
            ) : (
              <span className='text-sm font-medium text-foreground whitespace-nowrap'>
                {item as string}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const allPartnerLogos = useMemo(
    () => partnerCategories.flatMap(category => category.logos),
    []
  );

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
    <section ref={sectionRef} className='py-24 lg:py-32 bg-background'>
      {/* Clients */}
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}>
          <span className='inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4'>
            <span className='h-px w-6 bg-accent' />
            Trusted By
            <span className='h-px w-6 bg-accent' />
          </span>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight'>
            Our Clients
          </h2>
        </div>
      </div>

      <div className='mb-24'>
        <MarqueeRow
          items={clients}
          direction='left'
          speed='slow'
          renderAs='image'
        />
      </div>

      {/* Partners */}
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div
          className={`text-center mb-12 transition-all duration-700 delay-200 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}>
          <span className='inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4'>
            <span className='h-px w-6 bg-accent' />
            Working Together
            <span className='h-px w-6 bg-accent' />
          </span>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight'>
            Our Partners
          </h2>
        </div>
      </div>

      <MarqueeRow
        items={allPartnerLogos}
        direction='right'
        speed='normal'
        renderAs='image'
      />
    </section>
  );
}
