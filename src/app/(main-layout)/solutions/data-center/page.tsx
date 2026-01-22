'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function DataCenterPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Data Center in UAE</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ELV Technology Solutions delivers professional data centre solutions in Abu Dhabi, Dubai, and across the UAE, providing secure, scalable, and resilient environments for mission-critical IT infrastructure.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="text-gray-600">We provide complete data centre design, build, and maintenance services, including structured cabling, server racks, cooling systems, power distribution, UPS systems, fire suppression, and environmental monitoring. Our data centre solutions are engineered for high availability and operational efficiency.</p>
              <p className="mt-4 text-gray-600">As an experienced IT and ELV system integrator in the UAE, ELV Technology Solutions ensures that your data centre facility meets industry standards for reliability and security. Our data centre installations in Abu Dhabi and Dubai are designed to support your current and future business needs, with a focus on modularity and scalability.</p>
              <p className="mt-4 text-gray-600">For organizations seeking dependable data centre solutions in the UAE, ELV Technology Solutions delivers infrastructure built on technical expertise, precision, and long-term performance.</p>
            </div>
            <div className="flex items-center justify-center">
              <img src="/solutions/data-center.jpg" alt="Data Center" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
