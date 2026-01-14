'use client';

import { useRef } from 'react';
import { SolutionsTabs } from '@/components/pages/home/solutions-tabs';
import TestimonialsSection from "@/components/pages/home/testimonials-section";
import { FaqSection } from "@/components/pages/home/faq-section";
import HeroSection from "@/components/pages/home/hero-section-new"; 
import CoreServices from "@/components/pages/home/core-services";
import WhyChooseUs from "@/components/pages/home/why-choose-us";
import PartnersAndClients from "@/components/pages/home/partners-and-clients";
import ContactForm from "@/components/pages/home/contact-form";
import VideoSection from "@/components/pages/home/video-section";

export default function HomePage() {
  const contactFormRef = useRef<HTMLDivElement>(null);

  const handleContactClick = () => {
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        <HeroSection onContactClick={handleContactClick} />
        <VideoSection />
        <CoreServices />
        <WhyChooseUs />
        <SolutionsTabs />
        <TestimonialsSection />
        <PartnersAndClients />
        <FaqSection />
        <div ref={contactFormRef}>
          <ContactForm />
        </div>
      </main>
    </>
  );
}
