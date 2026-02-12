"use client";

import {
  Search,
  PenTool,
  Package,
  Settings,
  GraduationCap,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";

const steps = [
  {
    num: "1",
    title: "Needs Analysis",
    icon: Search,
    paragraphs: [
      "We start by understanding your goals, space requirements, and overall technology vision.",
      "Our team performs an on-site assessment to evaluate the environment and identify any technical considerations.",
      "Based on our findings, we propose the most effective solution that aligns with your timeline and budget.",
    ],
  },
  {
    num: "2",
    title: "Design",
    icon: PenTool,
    paragraphs: [
      "Using the insights gathered, our engineers craft a tailored concept design for your AV, and ELV systems.",
      "We prepare detailed layouts, drawings, and BOQs using advanced design software.",
      "Every element is planned carefully to ensure the system delivers seamless performance and reliability.",
    ],
  },
  {
    num: "3",
    title: "Procurement & Integration",
    icon: Package,
    paragraphs: [
      "We procure premium equipment from trusted global manufacturers to ensure long-term quality.",
      "Our technical team handles the full installation process, maintaining strict adherence to safety and industry standards.",
      "All components are verified and tested during installation to guarantee proper integration.",
    ],
  },
  {
    num: "4",
    title: "System Configuration & Validation",
    icon: Settings,
    paragraphs: [
      "We configure the system to match your operational requirements and ensure it functions intuitively for the end user.",
      "Each feature undergoes rigorous validation and performance testing to confirm flawless operation.",
      "Any adjustments needed are made during this stage to achieve optimal results.",
    ],
  },
  {
    num: "5",
    title: "Handover, Training & Ongoing Care",
    icon: GraduationCap,
    paragraphs: [
      "We deliver hands-on training sessions so your team can confidently operate every part of the system.",
      "Our ongoing technical support ensures smooth day-to-day operation.",
      "We also offer annual maintenance plans to keep your systems updated, secure, and performing at their peak.",
    ],
  },
];

export default function ProcessOfWork() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateOnScroll animation="fade-in-up">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Our Process of Work
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
          </div>
        </AnimateOnScroll>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-border md:left-1/2 md:block" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <AnimateOnScroll
                key={step.num}
                animation={idx % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                delay={idx * 100}
              >
                <div
                  className={`relative flex flex-col gap-6 md:flex-row ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Content */}
                  <div className="md:w-1/2">
                    <div
                      className={`rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg ${idx % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                          <step.icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">
                          {step.num}. {step.title}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {step.paragraphs.map((p) => (
                          <p
                            key={p}
                            className="text-sm leading-relaxed text-muted-foreground"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent bg-card md:left-1/2 md:block" style={{ top: "1.5rem" }} />

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
