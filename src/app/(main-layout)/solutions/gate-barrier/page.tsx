'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function GateBarrierPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gate Barrier in UAE</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ELV Technology Solutions provides reliable gate barrier systems in Abu Dhabi, Dubai, and across the UAE, designed to control vehicle access, improve site security, and manage traffic flow efficiently.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex items-center justify-center">
              <img src="/solutions/gate-barrier.jpg" alt="Gate Barrier System" className="rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600">We design and install automatic gate barrier systems suitable for residential compounds, commercial buildings, parking areas, industrial facilities, and government premises. Our solutions support RFID cards, access cards, ANPR (number plate recognition), remote controls, biometric access, and integration with access control systems.</p>
              <p className="mt-4 text-gray-600">Each gate barrier installation in Abu Dhabi and Dubai is engineered based on traffic volume, site layout, security requirements, and operating conditions. We supply durable barrier arms, high-duty motors, safety sensors, and control panels designed for continuous operation in UAE climate conditions.</p>
              <p className="mt-4 text-gray-600">As an experienced ELV system integrator in the UAE, ELV Technology Solutions ensures seamless integration of gate barrier systems with CCTV, access control, parking management, and building management systems (BMS).</p>
              <p className="mt-4 text-gray-600">For organizations seeking dependable gate barrier system installation in the UAE, ELV Technology Solutions delivers solutions focused on security, reliability, and long-term operational performance.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
