'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function DigitalSignagePage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Digital Signage in UAE</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ELV Technology Solutions provides professional digital signage solutions in Abu Dhabi, Dubai, and across the UAE, helping businesses communicate effectively through dynamic visual content.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="text-gray-600">We deliver complete digital signage system design, installation, and integration, including commercial displays, LED screens, media players, content management systems, and centralized control. Our digital signage solutions are tailored for retail stores, corporate offices, hotels, malls, hospitals, educational institutions, and public spaces.</p>
              <p className="mt-4 text-gray-600">From single display units to large-scale digital signage networks, ELV Technology Solutions ensures reliable performance, high visibility, and easy content updates. Our digital signage installations in Abu Dhabi and Dubai support real-time information, advertising, promotions, wayfinding, and corporate messaging.</p>
              <p className="mt-4 text-gray-600">As a trusted AV and ELV system integrator in the UAE, we focus on system stability, clean installation, and long-term usability. All digital signage systems are designed for continuous operation, remote management, and future expansion.</p>
              <p className="mt-4 text-gray-600">For businesses seeking dependable digital signage installation in the UAE, ELV Technology Solutions delivers scalable solutions that combine visual impact with operational efficiency.</p>
            </div>
            <div className="flex items-center justify-center">
              <img src="/solutions/digital-signage.jpg" alt="Digital Signage" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
