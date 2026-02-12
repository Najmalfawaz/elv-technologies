'use client';

import { BadgeCheck } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/animate-on-scroll';
import Image from 'next/image';
import { certGroups } from '@/lib/about-data';
  
export default function Certifications() {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll animation="fade-in-up">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Our Certifications
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
              We are certified to the highest standards, reflecting our commitment to quality, safety, environmental responsibility, and regulatory compliance.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {certGroups.map((group, idx) => (
            <AnimateOnScroll
              key={group.title}
              animation="fade-in-up"
              delay={idx * 150}
            >
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <group.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {group.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
                <div className="flex flex-grow flex-col items-center justify-center text-center">
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {group.items.map((item) => (
                            <div key={item.text} className="flex flex-col items-center gap-2" title={item.text}>
                            {item.image ? (
                                <Image src={item.image} alt={item.text} width={120} height={80} className="object-contain" />
                            ) : (
                                <div className="flex items-center gap-3 p-2">
                                    <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />
                                    <span className="text-sm text-muted-foreground text-center">
                                        {item.text}
                                    </span>
                                </div>
                            )}
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
