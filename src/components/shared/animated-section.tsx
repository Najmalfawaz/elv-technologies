
"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';

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

export default function AnimatedSection({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out ${isIntersecting ? 'opacity-100' : 'opacity-0'} ${className || ''}`.trim()}
    >
      {children}
    </div>
  );
}
