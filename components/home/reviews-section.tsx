'use client';

import { useState, useEffect, useCallback, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { reviews, Review } from "@/lib/reviews"; // Import reviews and Review interface

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const goToReview = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentReview(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const nextReview = useCallback(() => {
    goToReview((currentReview + 1) % reviews.length);
  }, [currentReview, goToReview]);

  const prevReview = useCallback(() => {
    goToReview((currentReview - 1 + reviews.length) % reviews.length);
  }, [currentReview, goToReview]);

  useEffect(() => {
    const timer = setInterval(nextReview, 6000);
    return () => clearInterval(timer);
  }, [nextReview]);

  return (
    <section
      ref={sectionRef}
      className='relative py-16 lg:py-24 bg-accent text-accent-foreground overflow-hidden'
    >
      {/* Background pattern */}
      <div className='absolute inset-0 opacity-[0.03]'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, hsl(var(--background)) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Sub-headline */}
          <div className='flex items-center justify-center gap-3 mb-4'>
            <span className='text-sm font-medium text-accent-foreground/60 tracking-widest uppercase'>
              Trusted by Customers
            </span>
            <span className='text-sm font-bold text-accent-foreground'>5.0</span>
            <div className='flex items-center gap-0.5'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={`header-star-${i}`}
                  className='h-4 w-4 fill-yellow-400 text-yellow-400'
                />
              ))}
            </div>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance'>
            What Our Customers Say
          </h2>
        </div>

        {/* Review carousel */}
        <div
          className={`relative max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className='relative overflow-hidden rounded-2xl bg-background/[0.06] p-8 sm:p-12 min-h-[300px] flex items-center border border-background/10'>
            {/* Quote icon */}
            <Quote className='absolute top-6 right-6 h-12 w-12 text-accent-foreground/10' />
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`w-full transition-all duration-600 absolute inset-0 p-8 sm:p-12 flex flex-col justify-center ${
                  index === currentReview
                    ? 'opacity-100 translate-x-0'
                    : index < currentReview
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                }`}
              >
                {/* Top section with stars and date */}
                <div className='flex items-center gap-4 mb-6'>
                  <div className='flex items-center gap-1'>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={`star-${index}-${i}`}
                        className='h-5 w-5 fill-yellow-400 text-yellow-400'
                      />
                    ))}
                  </div>
                  <span className='text-sm text-accent-foreground/60'>{review.date}</span>
                  {review.isNew && (
                    <span className='px-2 py-0.5 text-xs font-semibold text-accent bg-accent-foreground rounded-md'>
                      NEW
                    </span>
                  )}
                </div>

                {/* Quote */}
                <blockquote className='text-lg sm:text-xl leading-relaxed text-accent-foreground'>
                  {review.content}
                </blockquote>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className='mt-8 flex items-center justify-center gap-5'>
            <button
              type='button'
              onClick={prevReview}
              className='flex h-11 w-11 items-center justify-center rounded-full border border-accent-foreground/15 text-accent-foreground/60 transition-all duration-300 hover:bg-background/10 hover:text-accent-foreground'
              aria-label='Previous review'
            >
              <ChevronLeft className='h-4 w-4' />
            </button>

            <div className='flex items-center gap-2'>
              {reviews.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type='button'
                  onClick={() => goToReview(index)}
                  className={`rounded-full transition-all duration-500 ${
                    index === currentReview
                      ? 'h-2 w-8 bg-accent-foreground'
                      : 'h-2 w-2 bg-accent-foreground/20 hover:bg-accent-foreground/40'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              type='button'
              onClick={nextReview}
              className='flex h-11 w-11 items-center justify-center rounded-full border border-accent-foreground/15 text-accent-foreground/60 transition-all duration-300 hover:bg-background/10 hover:text-accent-foreground'
              aria-label='Next review'
            >
              <ChevronRight className='h-4 w-4' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
