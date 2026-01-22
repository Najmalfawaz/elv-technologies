'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function ConferenceRoomPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conference Room in UAE</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ELV Technology Solutions delivers professional conference room AV solutions in Abu Dhabi, Dubai, and across the UAE, designed to support clear communication, seamless collaboration, and efficient meetings.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="text-gray-600">We provide complete conference room audio-visual system design, installation, and integration, tailored to your room size, usage requirements, and IT infrastructure. Our solutions include video conferencing systems, interactive displays, presentation screens, microphones, speakers, wireless sharing, and centralized AV control.</p>
              <p className="mt-4 text-gray-600">From small meeting rooms to executive boardrooms, ELV Technology Solutions ensures reliable performance, clean installation, and intuitive operation. We integrate leading AV hardware with platforms such as Microsoft Teams, Zoom, and Google Meet, enabling smooth hybrid and remote meetings.</p>
              <p className="mt-4 text-gray-600">As an experienced AV and ELV system integrator in the UAE, we focus on functionality—not overcomplicated setups. Our conference room installations in Abu Dhabi and Dubai are built for long-term use, easy maintenance, and future scalability.</p>
              <p className="mt-4 text-gray-600">For businesses looking for dependable conference room AV installation in the UAE, ELV Technology Solutions delivers practical, high-quality solutions that simply work.</p>
            </div>
            <div className="flex items-center justify-center">
              <img src="/solutions/conference-room.jpg" alt="Conference Room" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
