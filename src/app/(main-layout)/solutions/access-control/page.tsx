'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function AccessControlPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Access Control & Time Attendance System in UAE</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ELV Technology Solutions provides secure and scalable access control and time attendance systems in Abu Dhabi, Dubai, and across the UAE, helping organizations manage entry permissions, workforce attendance, and site security effectively.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="text-gray-600">We design and install electronic access control systems using card readers, biometric devices, PIN keypads, and mobile credentials. Our solutions support doors, turnstiles, barriers, and restricted areas, with centralized monitoring and reporting.</p>
              <p className="mt-4 text-gray-600">For workforce management, we deliver time attendance systems that accurately track employee working hours, shifts, overtime, and absenteeism. These systems integrate with HR and payroll software, reducing manual errors and administrative overhead.</p>
              <p className="mt-4 text-gray-600">As an experienced ELV system integrator in the UAE, ELV Technology Solutions ensures secure installation, proper system configuration, and compliance with organizational security policies. Our access control and attendance installations in Abu Dhabi and Dubai are scalable and suitable for offices, commercial buildings, industrial facilities, schools, and healthcare environments.</p>
              <p className="mt-4 text-gray-600">For businesses seeking reliable access control and time attendance installation in the UAE, ELV Technology Solutions delivers systems focused on security, accuracy, and long-term reliability.</p>
            </div>
            <div className="flex items-center justify-center">
              <img src="/solutions/access-control.jpg" alt="Access Control & Time Attendance System" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
