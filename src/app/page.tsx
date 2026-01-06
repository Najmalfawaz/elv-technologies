
"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';
import dynamic from "next/dynamic";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/home/hero-section";
import ContactDialog from "@/components/sections/home/contact-dialog";

const VideoShowcase = dynamic(() => import("@/components/sections/home/video-showcase"), { ssr: false });
const IntroSection = dynamic(() => import("@/components/sections/home/intro-section"), { ssr: false });
const ServicesSlider = dynamic(() => import("@/components/sections/home/services-slider"), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/components/sections/home/testimonials-section"), { ssr: false });
const ClientsSection = dynamic(() => import("@/components/sections/home/clients-section"), { ssr: false });
const PartnersSection = dynamic(() => import("@/components/sections/home/partners-section"), { ssr: false });

function useIntersectionObserver(options: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isIntersecting };
}

function AnimatedSection({ children }: { children: ReactNode }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection onContactClick={() => setIsContactOpen(true)} />
        <AnimatedSection>
          <VideoShowcase />
        </AnimatedSection>
        <AnimatedSection>
          <IntroSection />
        </AnimatedSection>
        <AnimatedSection>
          <ServicesSlider />
        </AnimatedSection>
        <AnimatedSection>
          <TestimonialsSection />
        </AnimatedSection>
        <AnimatedSection>
          <ClientsSection />
        </AnimatedSection>
        <AnimatedSection>
          <PartnersSection />
        </AnimatedSection>
      </main>
      <Footer />
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>
  );
}
