"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Shield,
  Monitor,
  Wifi,
  Home,
  ArrowRight,
  Camera,
  DoorOpen,
  Siren,
  Bell,
  Users,
  Accessibility,
  Music,
  ScreenShare,
  Presentation,
  LayoutGrid,
  Tv,
  Gauge,
  Cable,
  Radio,
  Video,
  Phone,
  Satellite,
  Laptop,
} from "lucide-react";

const serviceCategories = [
  {
    icon: Shield,
    title: "ELV Systems",
    description:
      "Complete Extra Low Voltage systems including security, surveillance, access control, and building management solutions.",
    services: [
      { name: "Security and Surveillance (CCTV)", icon: Camera },
      { name: "Access Control & Time Attendance", icon: DoorOpen },
      { name: "Gate Barrier System", icon: Siren },
      { name: "Nurse Call System", icon: Bell },
      { name: "Queue Management System", icon: Users },
      { name: "Disabled Toilet Alarm System", icon: Accessibility },
    ],
    href: "/solutions/security-surveillance",
  },
  {
    icon: Monitor,
    title: "AV Solutions",
    description:
      "Professional audio-visual integration for conference rooms, digital signage, LED displays, and immersive sound systems.",
    services: [
      { name: "Music and BGM System", icon: Music },
      { name: "Indoor Video Wall", icon: ScreenShare },
      { name: "Conference Room Solutions", icon: Presentation },
      { name: "Meeting Room & Board Room", icon: LayoutGrid },
      { name: "Digital Signage", icon: Tv },
      { name: "LED Screen", icon: Monitor },
      { name: "Control Systems", icon: Gauge },
    ],
    href: "/solutions/audio-visual",
  },
  {
    icon: Wifi,
    title: "Network & Communications",
    description:
      "Enterprise-grade networking infrastructure, structured cabling, wireless solutions, and unified communications.",
    services: [
      { name: "Structured Cabling Solutions", icon: Cable },
      { name: "Wireless Network Solutions", icon: Wifi },
      { name: "Audio Video Intercom", icon: Video },
      { name: "2-Way Radio Solutions", icon: Radio },
      { name: "IP Phone", icon: Phone },
      { name: "IPTV / SMATV", icon: Satellite },
      { name: "IT Equipment's", icon: Laptop },
    ],
    href: "/solutions/network-communications",
  },
  {
    icon: Home,
    title: "Home Automation",
    description:
      "Smart home integration with automated lighting control, climate management, and seamless IoT connectivity.",
    services: [
      { name: "Home Automation & Lighting Control System", icon: Home },
    ],
    href: "/solutions/home-automation",
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16" data-animate>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            <span className="h-px w-6 bg-accent" />
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] text-balance">
            Our collection of tech services spans various needs at every stage
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Explore how we help businesses transform with comprehensive ELV and
            audio-visual solutions.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCategories.map((category, i) => (
            <div
              key={category.title}
              data-animate
              className="opacity-0 group"
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              <Link href={category.href} className="block h-full">
                <div className="h-full rounded-2xl border border-border bg-card p-8 lg:p-10 transition-all duration-500 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/[0.04] hover:-translate-y-1">
                  {/* Icon + Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent transition-transform duration-300 group-hover:scale-110">
                        <category.icon className="h-5 w-5 text-[#ffffff]" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:translate-x-1" />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Services list */}
                  <div className="flex flex-col gap-2.5 pt-6 border-t border-border">
                    {category.services.map((service) => (
                      <div
                        key={service.name}
                        className="flex items-center gap-3 text-sm text-foreground/80 transition-colors group-hover:text-foreground"
                      >
                        <service.icon className="h-4 w-4 shrink-0 text-accent/60" />
                        <span>{service.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
