'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function QueueManagementSystemPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Queue Management System in UAE</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ELV Technology Solutions provides professional Queue Management Systems in Abu Dhabi, Dubai, and across the UAE, helping businesses and organizations improve customer flow, reduce waiting times, and enhance the service experience.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex items-center justify-center">
              <img src="/solutions/queue-management-system.jpg" alt="Queue Management System" className="rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600">We offer complete queue management system design, installation, and integration, including ticket dispensers, digital displays, audio announcements, and performance reporting software. Our solutions are tailored for banks, hospitals, government service centers, retail stores, and other high-traffic environments.</p>
              <p className="mt-4 text-gray-600">From basic ticketing systems to advanced virtual queuing solutions, ELV Technology Solutions ensures a seamless and efficient customer journey. Our queue management installations in Abu Dhabi and Dubai are designed to organize waiting areas, inform customers of their turn, and provide management with valuable data on service times and staff performance.</p>
              <p className="mt-4 text-gray-600">As a trusted ELV system integrator in the UAE, we focus on reliability, scalability, and ease of use. Our queue management systems are built for continuous operation, easy customization, and future expansion.</p>
              <p className="mt-4 text-gray-600">For organizations seeking dependable queue management system installation in the UAE, ELV Technology Solutions delivers solutions that improve customer satisfaction, streamline operations, and increase efficiency.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
