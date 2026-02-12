'use client';

import Image from 'next/image';
import AnimateOnScroll from '@/components/ui/animate-on-scroll';
import { servicesData } from '@/lib/services-data';

export default function Programming() {
  const { programming } = servicesData;

  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll animation="slide-in-left">
            <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={programming.image}
                alt={programming.title}
                fill
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-in-right">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {programming.title}
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-accent" />
              {programming.description.map((text, idx) => (
                <p key={idx} className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {text}
                </p>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
