'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function LEDScreenPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">LED Screen in UAE</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ELV Technology Solutions provides professional LED screen solutions in Abu Dhabi, Dubai, and across the UAE, delivering high-impact visual displays for indoor and outdoor applications.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex items-center justify-center">
              <img src="/solutions/led-screen.jpg" alt="LED Screen" className="rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600">We offer complete LED screen design, supply, installation, and commissioning, including indoor LED screens, outdoor LED displays, video walls, and large-format digital screens. Each system is engineered based on viewing distance, brightness requirements, resolution, and environmental conditions.</p>
              <p className="mt-4 text-gray-600">From corporate offices and control rooms to retail spaces, malls, events, and public areas, ELV Technology Solutions delivers reliable LED screen installation in Abu Dhabi and Dubai using fine pixel-pitch panels, professional calibration, and robust mounting systems.</p>
              <p className="mt-4 text-gray-600">As an experienced AV and ELV system integrator in the UAE, we ensure seamless integration with digital signage platforms, media servers, conferencing systems, and centralized control. Our LED screen solutions are designed for continuous operation, easy maintenance, and long-term performance.</p>
              <p className="mt-4 text-gray-600">For businesses seeking dependable LED screen installation in the UAE, ELV Technology Solutions delivers scalable display solutions built on technical accuracy, not marketing claims.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
