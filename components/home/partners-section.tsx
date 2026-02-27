'use client';

import { useEffect, useRef, useState } from 'react';
import { partnerCategories } from '@/lib/partners-data';
import Image from 'next/image';

function MarqueeRow({
    items,
    direction = 'left',
    speed = 'slow',
    pauseOnHover = true
}: {
    items: { src: string; alt: string }[];
    direction?: 'left' | 'right';
    speed?: 'slow' | 'normal' | 'fast';
    pauseOnHover?: boolean;
}) {
    const duplicated = [...items, ...items, ...items];

    const getSpeed = () => {
        switch (speed) {
            case 'fast': return '70s';
            case 'normal': return '110s';
            case 'slow': return '160s';
            default: return '110s';
        }
    }

    return (
        <div className='relative w-full py-4 overflow-hidden'>
            <div
                className={`flex w-fit gap-8 sm:gap-16 animate-scroll-left ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
                style={{
                    animationDuration: getSpeed(),
                    animationDirection: direction === 'right' ? 'reverse' : 'normal'
                }}
            >
                {duplicated.map((item, index) => (
                    <div
                        key={`${item.alt}-${index}`}
                        className='flex-shrink-0 flex items-center justify-center w-32 sm:w-44 h-24 transition-all duration-300'
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 768px) 128px, 176px"
                                className='object-contain transition-all duration-300'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function PartnersSection() {
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

    // Flatten and distribute all partners into 3 rows
    const allPartners = partnerCategories.flatMap(c => c.logos);

    // Create 3 rows
    const row1 = allPartners.filter((_, i) => i % 3 === 0);
    const row2 = allPartners.filter((_, i) => i % 3 === 1);
    const row3 = allPartners.filter((_, i) => i % 3 === 2);

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

            <div className='relative flex flex-col gap-2'>
                <MarqueeRow items={row1} direction='left' speed='slow' />
                <MarqueeRow items={row2} direction='right' speed='slow' />
                <MarqueeRow items={row3} direction='left' speed='slow' />

                {/* Gradient fades for the edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
