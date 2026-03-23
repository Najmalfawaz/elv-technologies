'use client';

import { useEffect, useRef, useState } from 'react';
import { clients } from '@/lib/clients-data';
import Image from 'next/image';

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
      className='py-20 sm:py-32 bg-background overflow-hidden relative border-y border-border'
    >
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-content {
          display: flex;
          width: max-content;
          animation: marquee 120s linear infinite;
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>

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

        <div className="relative w-full overflow-hidden marquee-container group">
          <div className="marquee-content flex items-center space-x-8 sm:space-x-12 px-4">
            {/* First set of logos */}
            {clients.map((item, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex-shrink-0 w-[180px] sm:w-[220px] aspect-[4/3] bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center p-8 mx-3 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300 group"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    sizes="(max-width: 768px) 150px, 200px"
                  />
                </div>
              </div>
            ))}
            
            {/* Second set of logos for seamless loop */}
            {clients.map((item, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex-shrink-0 w-[180px] sm:w-[220px] aspect-[4/3] bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center p-8 mx-3 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300 group"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    sizes="(max-width: 768px) 150px, 200px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gradient fades for the edges */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-background via-background/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
