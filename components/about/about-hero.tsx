'use client';

import AnimateOnScroll from '@/components/ui/animate-on-scroll';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <AnimateOnScroll animation="fade-in-up">
          <span className="mb-4 inline-block rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            About Us
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up" delay={100}>
          <h1 className="mt-4 font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            <span className='block'>ELV Technology Solutions!!</span>
            <span className="text-primary">
              The Best Audio-Visual Integrators in UAE
            </span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up" delay={200}>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            ETS is one of the top technology integrators and solution providers
            in the UAE, specializing in security and surveillance systems, Audio
            Visual (AV) solutions, Extra Low Voltage (ELV) systems, and Home
            Automation technologies.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
