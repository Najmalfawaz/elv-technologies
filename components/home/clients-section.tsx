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
  // Use 4x duplicates to ensure no gaps on very wide screens
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className='relative w-full py-4 overflow-hidden'>
      {/* Modern Fade effect using Mask Image */}
      <div
        className="flex w-fit gap-8 animate-scroll-left hover:[animation-play-state:paused]"
        style={{
          animationDuration: speed === 'slow' ? '120s' : speed === 'normal' ? '80s' : '40s',
          animationDirection: direction === 'right' ? 'reverse' : 'normal'
        }}
      >
        {duplicated.map((item, index) => (
          <div
            key={index}
            className='flex-shrink-0 flex items-center justify-center rounded-2xl border border-slate-200/60 bg-white/40 backdrop-blur-sm px-10 py-6 min-w-[220px] h-32 transition-all duration-500 hover:border-red-200 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 group/item'
          >
            {renderAs === 'image' ? (
              <div className="relative w-32 h-16 filter transition-all duration-500 group-hover/item:scale-110">
                <Image
                  src={(item as { src: string }).src}
                  alt={(item as { alt: string }).alt}
                  fill
                  className='object-contain'
                />
              </div>
            ) : (
              <span className='text-base font-semibold text-slate-700 whitespace-nowrap group-hover/item:text-red-600 transition-colors'>
                {item as string}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Gradient Overlays for smooth edge fading */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />
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
    <section ref={sectionRef} className='py-24 lg:py-32 bg-white overflow-hidden relative'>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px]" />
      </div>

      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Clients Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
            }`}>
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium leading-6 text-red-600 ring-1 ring-inset ring-red-600/10 mb-6 bg-red-50/50">
            Trusted By Global Leaders
          </div>
          <h2 className='text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight lg:text-6xl'>
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Esteemed Clients</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
            We take pride in collaborating with visionary organizations across the UAE to deliver world-class technology solutions.
          </p>
        </div>
      </div>

      {/* Clients Marquee */}
      <div className='mb-28'>
        <MarqueeRow
          items={clients}
          direction='left'
          speed='slow'
          renderAs='image'
        />
      </div>

      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Partners Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out delay-300 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
            }`}>
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10 mb-6 bg-blue-50/50">
            Technology Ecosystem
          </div>
          <h2 className='text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight lg:text-6xl'>
            Our Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Partners</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
            Strategic alliances with world-leading technology vendors to bring the latest innovations to our clients.
          </p>
        </div>
      </div>

      {/* Partners Marquee */}
      <MarqueeRow
        items={allPartnerLogos}
        direction='right'
        speed='slow'
        renderAs='image'
      />
    </section>
  );
}
