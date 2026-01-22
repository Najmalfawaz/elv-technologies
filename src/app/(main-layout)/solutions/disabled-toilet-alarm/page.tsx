'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function DisabledToiletAlarmSystemPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Disabled Toilet Alarm System in UAE</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ELV Technology Solutions supplies and installs compliant Disabled Toilet Alarm Systems in Abu Dhabi, Dubai, and across the UAE, ensuring emergency assistance for people with disabilities in public and commercial buildings.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="text-gray-600">A disabled toilet alarm system allows users to activate an emergency call using a pull cord or button, sending an audible and visual alert to designated staff locations. These systems are critical for accessibility compliance and occupant safety in accordance with local regulations and international standards.</p>
              <p className="mt-4 text-gray-600">We provide complete disabled toilet alarm system design and installation, including pull cords, reset buttons, indicator panels, sounders, and power supplies. Our installations ensure clear signalling, fast response, and reliable operation during emergencies.</p>
              <p className="mt-4 text-gray-600">As an experienced ELV system integrator in the UAE, ELV Technology Solutions ensures proper placement, labelling, testing, and commissioning of disabled toilet alarm systems in Abu Dhabi and Dubai. Our solutions are suitable for malls, offices, hospitals, schools, hotels, and public facilities.</p>
              <p className="mt-4 text-gray-600">For organizations seeking dependable disabled toilet alarm system installation in the UAE, ELV Technology Solutions delivers safety-focused solutions that meet accessibility requirements and operational needs.</p>
            </div>
            <div className="flex items-center justify-center">
              <img src="/solutions/disabled-toilet-alarm-system.jpg" alt="Disabled Toilet Alarm System" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
