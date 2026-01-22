'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function IndoorVideoWallPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Indoor Video Wall in UAE</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ELV Technology Solutions provides professional Indoor video wall solutions in Abu Dhabi, Dubai, and across the UAE, delivering high-resolution visual systems for corporate, education, and mission-critical environments.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex items-center justify-center">
              <img src="/solutions/indoor-video-wall.jpg" alt="Indoor Video Wall" className="rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600">Our indoor LED video wall solutions are designed for clear visibility, consistent colour performance, and seamless system integration. From design and engineering to installation and commissioning, ETS delivers complete AV and ELV system integration tailored to the operational needs of each project.</p>
              <p className="mt-4 text-gray-600">We specialize in indoor video wall installation in Abu Dhabi and Dubai for boardrooms, control rooms, classrooms, auditoriums, experience centres, and corporate lobbies. Using fine pixel-pitch LED panels, professional calibration, and industry-proven hardware, we ensure reliable performance and long-term usability.</p>
              <p className="mt-4 text-gray-600">For organizations seeking dependable indoor LED wall solutions in the UAE, ELV Technology Solutions delivers scalable systems built on technical precision, not generic marketing claims.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
