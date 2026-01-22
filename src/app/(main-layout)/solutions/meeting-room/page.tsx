'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function MeetingBoardroomPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meeting Room & Boardroom AV Solutions in UAE</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ELV Technology Solutions provides professional meeting room and boardroom AV solutions in the UAE, serving businesses across Abu Dhabi, Dubai, and other Emirates. We help organizations run efficient, distraction-free meetings with reliable audio-visual systems designed for everyday business use.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex items-center justify-center">
              <img src="/solutions/meeting-boardroom.jpg" alt="Meeting Room & Boardroom" className="rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600">We specialize in meeting room AV system design and installation for huddle rooms, conference rooms, and executive boardrooms. Our solutions support presentations, video conferencing, and wireless content sharing, using high-quality displays, projectors, microphones, speakers, cameras, and user-friendly AV control systems—configured to match real workplace requirements.</p>
              <p className="mt-4 text-gray-600">Our meeting room AV installations in Abu Dhabi and Dubai focus on clarity, ease of operation, and system stability, ensuring fast startup, minimal training, and consistent performance. For executive spaces, our boardroom AV solutions in the UAE include large-format displays or video walls, ceiling microphones, high-fidelity audio systems, secure video conferencing, and centralized control for professional and confidential meetings.</p>
              <p className="mt-4 text-gray-600">As an experienced AV and ELV system integrator in the UAE, ELV Technology Solutions ensures seamless integration with leading platforms such as Microsoft Teams and Zoom, along with clean cabling, professional installation, and scalable system design for future expansion.</p>
              <p className="mt-4 text-gray-600">For businesses seeking dependable meeting room and boardroom AV installation in the UAE, ELV Technology Solutions delivers practical, future-ready solutions engineered for long-term performance—supporting collaboration, decision-making, and leadership environments.</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Meeting Room Platforms</h2>
            <div className="mt-8 flex justify-center gap-8">
                <img src="/solutions/teams-logo.png" alt="Microsoft Teams" className="h-12" />
                <img src="/solutions/zoom-logo.png" alt="Zoom" className="h-12" />
                <img src="/solutions/google-meet-logo.png" alt="Google Meet" className="h-12" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
