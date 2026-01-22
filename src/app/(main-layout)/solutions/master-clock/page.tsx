'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function MasterClockPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Master Clock in UAE</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ELV Technology Solutions provides professional master clock solutions in Abu Dhabi, Dubai, and across the UAE, ensuring synchronized and accurate time across all your facility's systems.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="text-gray-600">We offer complete master clock system design, installation, and integration for hospitals, airports, schools, and other large facilities. Our master clock systems provide a reliable time reference for all your clocks, computer networks, and other time-sensitive equipment.</p>
              <p className="mt-4 text-gray-600">As an experienced IT and ELV system integrator in the UAE, ELV Technology Solutions ensures your master clock system is accurate, reliable, and easy to maintain. Our master clock installations in Abu Dhabi and Dubai are designed to provide a synchronized and stable time source for your entire organization.</p>
              <p className="mt-4 text-gray-600">For organizations seeking dependable master clock solutions in the UAE, ELV Technology Solutions delivers time synchronization systems built on precision, reliability, and performance.</p>
            </div>
            <div className="flex items-center justify-center">
              <img src="/solutions/master-clock.jpg" alt="Master Clock" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
