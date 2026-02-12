"use client";

import { Target, Eye, Heart } from "lucide-react";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";

const values = [
  "Treat everyone with respect and dignity",
  "Commit to continuous improvement through training and knowledge sharing.",
  "Demonstrate teamwork, honesty, and integrity in all engagements.",
  "Maintain a friendly approach and honour every commitment made.",
  "Ensure Quality Assurance across all tasks and project stages.",
];

export default function MissionVisionValues() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Mission */}
          <AnimateOnScroll animation="fade-in-up" delay={0}>
            <div className="group relative h-full rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To deliver end-to-end technology solutions that exceed client
                expectations through innovative design, reliable implementation,
                and future-ready support infrastructure.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Vision */}
          <AnimateOnScroll animation="fade-in-up" delay={150}>
            <div className="group relative h-full rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-foreground">
                Our Vision
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To continue as a leading provider of Audio Visual Solutions, ELV
                Systems, Security & Surveillance, and Home Automation
                technologies in the Abu Dhabi and all-over UAE by consistently
                delivering excellence and maximizing value for our clients.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Values */}
          <AnimateOnScroll animation="fade-in-up" delay={300}>
            <div className="group relative h-full rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <Heart className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-foreground">
                Our Values
              </h3>
              <ul className="space-y-3">
                {values.map((value) => (
                  <li
                    key={value}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
