"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import { CheckCircle } from "lucide-react";

const features = [
  "Representing reputed global manufacturers.",
  "Serving a wide customer base across multiple market sectors.",
  "Highly skilled professional team for large-scale projects.",
  "Trusted by business owners, architects, consultants, and contractors.",
  "Best-in-class design, delivery, installation, and integration.",
  "Reliable and innovative maintenance services.",
];

export default function TrustedPartner() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <AnimateOnScroll animation="fade-in-up">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Your Trusted Partner in Technology
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <p className="mt-4 text-lg text-muted-foreground">
                Our commitment to excellence and innovation has made us a leader in the technology solutions industry. We provide end-to-end services that you can rely on.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <ul className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                    </div>
                    <span className="ml-3 text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
          <div className="relative h-96 overflow-hidden rounded-2xl">
            <AnimateOnScroll animation="zoom-in" delay={300} className="h-full">
              <Image
                src="/images/aboutUS/About us.png"
                alt="Trusted Partner"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}