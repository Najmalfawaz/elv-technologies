"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MonitorPlay, Shield, Network, Home } from "lucide-react";
import { solutionsData } from "@/lib/solutions-data";

// Dynamically mapped categories from solutionsData
const serviceCategories = [
  {
    title: solutionsData.audioVisual.title.replace(/^\d+\.\s*/, ''),
    description: solutionsData.audioVisual.description,
    href: `/solutions/${solutionsData.audioVisual.id}`,
    icon: MonitorPlay,
  },
  {
    title: solutionsData.securityAndSurveillance.title.replace(/^\d+\.\s*/, ''),
    description: solutionsData.securityAndSurveillance.description,
    href: `/solutions/${solutionsData.securityAndSurveillance.id}`,
    icon: Shield,
  },
  {
    title: solutionsData.networkAndCommunications.title.replace(/^\d+\.\s*/, ''),
    description: solutionsData.networkAndCommunications.description,
    href: `/solutions/${solutionsData.networkAndCommunications.id}`,
    icon: Network,
  },
  {
    title: solutionsData.homeAutomation.title.replace(/^\d+\.\s*/, ''),
    description: solutionsData.homeAutomation.description,
    href: `/solutions/${solutionsData.homeAutomation.id}`,
    icon: Home,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#fffaf5] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-100/40 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5 pointer-events-none bg-repeat mix-blend-multiply" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20" data-animate>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-6">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Solutions</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Whether staying ahead or scaling up, our solutions are designed to grow with you.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, i) => (
            <div
              key={category.title}
              data-animate
              className="opacity-0 group"
              style={{ animationDelay: `${(i + 1) * 0.15}s` }}
            >
              <Link href={category.href} className="block h-full">
                <div className="h-full bg-white p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 relative overflow-hidden group/card shadow-sm border border-slate-100">

                  {/* Icon */}
                  <div className="mb-8 mt-4 relative">
                    <category.icon className="h-16 w-16 text-accent transition-transform duration-500 group-hover/card:scale-110" strokeWidth={1} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 transition-colors duration-300">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
