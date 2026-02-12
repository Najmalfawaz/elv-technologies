'use client';

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { heroSectionData } from "@/lib/data";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const goToSlide = useCallback((index: number) => {
      if (index < 0 || index >= heroSectionData.slides.length) return;
      setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === heroSectionData.slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
      const timer = setTimeout(() => setIsLoaded(true), 100);
      const slideInterval = setInterval(nextSlide, 6000);
      return () => {
          clearTimeout(timer);
          clearInterval(slideInterval);
      };
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
      {/* Background Slideshow */}
      {heroSectionData.slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-40" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="max-w-2xl">
            {/* Heading */}
            <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight transition-all duration-700 ease-out ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: '100ms' }}
            >
                {heroSectionData.heading.line1}
                <br />
                {heroSectionData.heading.line2}
            </h1>

            {/* Red accent line */}
            <div
                className={`mt-5 transition-all duration-700 ease-out ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: '200ms' }}
            >
                <div className="h-1 w-16 bg-accent rounded-full" />
            </div>

            {/* Description */}
            <p
                className={`mt-6 text-lg sm:text-xl max-w-lg transition-all duration-700 ease-out text-neutral-200 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: '300ms' }}
            >
                {heroSectionData.subheading}
            </p>

            {/* CTA Buttons */}
            <div
                className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 ease-out ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: '400ms' }}
            >
                <Link
                    href={heroSectionData.buttons.primary.link}
                    className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5 active:translate-y-0"
                >
                    {heroSectionData.buttons.primary.text}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                    href={heroSectionData.buttons.secondary.link}
                    className="group inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/5 backdrop-blur-md px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0"
                >
                    <Play className="h-4 w-4" />
                    {heroSectionData.buttons.secondary.text}
                </Link>
            </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
          {heroSectionData.slides.map((_, index) => (
              <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                      index === currentSlide
                          ? "h-2.5 w-8 bg-accent"
                          : "h-2.5 w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
              />
          ))}
      </div>

      {/* Slide Counter */}
      <div className={`absolute bottom-8 right-8 z-10 hidden lg:block transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
          <span className="text-sm font-medium text-white/50">
              {String(currentSlide + 1).padStart(2, "0")}{" "}
              <span className="text-white/25">/</span>{" "}
              {String(heroSectionData.slides.length).padStart(2, "0")}
          </span>
      </div>
    </section>
  );
}
