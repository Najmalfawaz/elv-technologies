'use client';

import Image from 'next/image';
import AnimateOnScroll from '@/components/ui/animate-on-scroll';
import { servicesData } from '@/lib/services-data';
import { CheckCircle } from 'lucide-react';

export default function TechnicalSupport() {
  const { technicalSupport } = servicesData;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll animation="slide-in-right" className="lg:order-last">
            <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={technicalSupport.image}
                alt={technicalSupport.title}
                fill
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-in-left">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {technicalSupport.title}
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-accent" />
              {technicalSupport.description.map((text, idx) => (
                <p key={idx} className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {text}
                </p>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        <div className="mt-20">
            <AnimateOnScroll animation="fade-in-up">
                <h3 className="mb-12 text-center text-2xl font-bold text-foreground sm:text-3xl">
                    {technicalSupport.capabilities.title}
                </h3>
            </AnimateOnScroll>
          <div className="grid gap-8 sm:grid-cols-2">
            {technicalSupport.capabilities.sections.map((section, idx) => (
              <AnimateOnScroll key={section.title} animation="fade-in-up" delay={idx * 100}>
                <div className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg h-full">
                  <h4 className="mb-4 text-xl font-bold text-foreground">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <div className="mt-20">
            <AnimateOnScroll animation="fade-in-up">
                <h3 className="mb-12 text-center text-2xl font-bold text-foreground sm:text-3xl">
                    {technicalSupport.whyChooseUs.title}
                </h3>
            </AnimateOnScroll>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {technicalSupport.whyChooseUs.items.map((item, idx) => (
                <AnimateOnScroll key={item} animation="fade-in-up" delay={idx * 80}>
                    <div className="text-center rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                        <technicalSupport.whyChooseUs.icon className="mx-auto h-10 w-10 text-accent mb-4" />
                        <p className="text-base text-muted-foreground">{item}</p>
                    </div>
                </AnimateOnScroll>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
