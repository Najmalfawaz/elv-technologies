'use client'

import AnimatedSection from "@/components/shared/animated-section";
import { CheckCircle } from 'lucide-react';

const features = [
  "Bedside call buttons and pull cords",
  "Visual and audible alerts at nurse stations",
  "Mobile device notifications",
  "Call prioritization and emergency alerts",
  "Integration with hospital workflows",
];

export default function NurseCallSystemPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nurse Call System</h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Fast communication between patients and nursing staff
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Key Features</h2>
              <p className="mt-4 text-gray-600">
                Our nurse call systems are designed for reliability and ease of use, ensuring patient safety and improving staff efficiency.
              </p>
              <ul className="mt-6 space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-blue-600" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img src="/solutions/nurse-call-system.jpg" alt="Nurse Call System" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
