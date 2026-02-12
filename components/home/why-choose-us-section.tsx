"use client";

import { useEffect, useRef } from "react";
import {
  Award,
  Clock,
  Settings,
  HeadphonesIcon,
  CheckCircle,
  Zap,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expert Team",
    description:
      "Our certified professionals bring years of experience in designing and implementing ELV and AV systems for projects of every scale.",
  },
  {
    icon: Settings,
    title: "Customized Solutions",
    description:
      "We tailor every system to your specific requirements, ensuring seamless integration with your existing infrastructure and workflows.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description:
      "We use only premium products from globally recognized brands, ensuring reliability, performance, and long-term value.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We commit to project timelines with precision planning and execution, delivering on-time results without compromising quality.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist with maintenance, troubleshooting, and system upgrades.",
  },
  {
    icon: Zap,
    title: "End-to-End Service",
    description:
      "From consultation and design to supply, installation, programming, and commissioning, we handle every aspect of your project.",
  },
];

export default function WhyChooseUsSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-animate>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            <span className="h-px w-6 bg-accent" />
            Why Us
            <span className="h-px w-6 bg-accent" />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Why Choose ELV Technology Solutions
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We combine technical expertise with a commitment to excellence,
            delivering solutions that exceed expectations.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              data-animate
              className="opacity-0 group"
              style={{ animationDelay: `${(i + 1) * 0.08}s` }}
            >
              <div className="h-full rounded-2xl border border-border bg-background p-8 transition-all duration-500 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/[0.04] hover:-translate-y-1">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-all duration-300 group-hover:bg-accent group-hover:scale-105 mb-6">
                  <reason.icon className="h-5 w-5 text-accent transition-colors duration-300 group-hover:text-[#ffffff]" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
