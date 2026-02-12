'use client';

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "AI Features & Technology",
    description: "Next-generation artificial intelligence solutions",
  },
  {
    title: "Security & Surveillance",
    description: "Advanced CCTV and security camera systems",
  },
  {
    title: "LED Video Walls",
    description: "Stunning indoor LED display solutions",
  },
  {
    title: "Outdoor LED Screens",
    description: "High-brightness outdoor LED displays",
  },
  {
    title: "Conference Rooms",
    description: "Complete conference room AV integration",
  },
  {
    title: "Professional Sound Systems",
    description: "High-fidelity audio and sound installations",
  },
  {
    title: "Stage Lighting",
    description: "Professional stage and event lighting",
  },
  {
    title: "Access Control Systems",
    description: "Biometric and face recognition solutions",
  },
  {
    title: "Data Centre & Cabling",
    description: "Structured cabling and network infrastructure",
  },
];

export default function SlideshowSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section ref={sectionRef} className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            <span className="h-px w-6 bg-accent" />
            Our Expertise
            <span className="h-px w-6 bg-accent" />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Comprehensive Solutions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            From AI-powered systems to professional AV installations, we cover
            every aspect of modern technology integration.
          </p>
        </div>

        {/* Slideshow */}
        <div
          className={`relative rounded-2xl overflow-hidden bg-foreground aspect-[16/7] group transition-all duration-1000 flex items-center justify-center ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center p-6 sm:p-10 ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              {/* Slide content */}
              <div className="text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-[#e5e5e5]/10 backdrop-blur-md text-xs font-medium text-[#e5e5e5] mb-3 border border-[#e5e5e5]/10">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </span>
                <h3
                  className={`text-2xl sm:text-3xl font-bold text-[#e5e5e5] transition-all duration-500 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  {slide.title}
                </h3>
                <p
                  className={`mt-2 text-sm sm:text-base text-[#a3a3a3] max-w-md mx-auto transition-all duration-500 delay-100 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  {slide.description}
                </p>
              </div>
            </div>
          ))}

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e5e5e5]/10">
            <div
              ref={progressRef}
              className="h-full bg-[#e5e5e5]/60 transition-all duration-500"
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
              }}
            />
          </div>

          {/* Navigation arrows */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-[#0a0a0a]/40 backdrop-blur-md text-[#e5e5e5] transition-all duration-300 hover:bg-[#0a0a0a]/60 opacity-0 group-hover:opacity-100 border border-[#e5e5e5]/10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-[#0a0a0a]/40 backdrop-blur-md text-[#e5e5e5] transition-all duration-300 hover:bg-[#0a0a0a]/60 opacity-0 group-hover:opacity-100 border border-[#e5e5e5]/10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "h-2 w-8 bg-foreground"
                  : "h-2 w-2 bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
