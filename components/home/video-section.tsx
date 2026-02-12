"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, CheckCircle } from "lucide-react";

const highlights = [
  "End-to-end ELV & AV system integration",
  "AI-powered security & surveillance solutions",
  "Professional conference room & boardroom AV",
  "Enterprise-grade networking infrastructure",
  "Smart home automation & lighting control",
  "24/7 support & maintenance services",
];

export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#0f0f0f] group shadow-2xl shadow-foreground/5">
              {/* Video element - uses a placeholder video embed */}
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                poster="/placeholder.svg?height=600&width=800"
                preload="metadata"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/videos/company-intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay gradient */}
              <div
                className={`absolute inset-0 bg-[#0a0a0a]/40 transition-opacity duration-500 ${
                  isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              />

              {/* Play/Pause button */}
              <button
                type="button"
                onClick={togglePlay}
                className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${
                  isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-[#ffffff] shadow-xl shadow-accent/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-accent/40">
                  {isPlaying ? (
                    <Pause className="h-7 w-7" />
                  ) : (
                    <Play className="h-7 w-7 ml-1" />
                  )}
                </div>
              </button>

              {/* Corner accent */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center rounded-full bg-[#0a0a0a]/60 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-[#ffffff]/80 border border-[#ffffff]/10">
                  Company Overview
                </span>
              </div>
            </div>

            {/* Decorative offset */}
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl bg-accent/10" />
          </div>

          {/* Content side */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              <span className="h-px w-6 bg-accent" />
              Watch Our Story
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground tracking-tight leading-[1.1] text-balance">
              ELV Technology Solutions - The Best Audio-Visual Integrators in UAE
            </h2>

            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              ETS is one of the top technology integrators and solution providers
              in the UAE, specializing in security and surveillance systems,
              Audio Visual (AV) solutions, Extra Low Voltage (ELV) systems, and
              Home Automation technologies. We represent reputed global
              manufacturers and serve a wide customer base across multiple market
              sectors throughout the UAE.
            </p>

            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Our highly skilled professional team is equipped to manage the
              complex requirements of large-scale projects with precision and
              efficiency. The high standards we maintain have earned us lasting
              trust from business owners, architects, consultants, and
              contractors alike.
            </p>

            {/* Highlights */}
            <div className="mt-8 flex flex-col gap-3">
              {highlights.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${400 + i * 80}ms` }}
                >
                  <CheckCircle className="h-4.5 w-4.5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
