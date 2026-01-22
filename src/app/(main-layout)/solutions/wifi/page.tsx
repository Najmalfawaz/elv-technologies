'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function WiFiPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Wi-Fi in UAE</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ELV Technology Solutions provides professional Wi-Fi solutions in Abu Dhabi, Dubai, and across the UAE, delivering reliable and high-performance wireless connectivity for businesses, hotels, schools, and public venues.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex items-center justify-center">
              <img src="/solutions/wifi.jpg" alt="Wi-Fi" className="rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600">We offer complete Wi-Fi network design, installation, and management, including site surveys, access point placement, network configuration, and security implementation. Our Wi-Fi solutions are designed to provide seamless coverage, high capacity, and a consistent user experience.</p>
              <p className="mt-4 text-gray-600">As a trusted IT and ELV system integrator in the UAE, ELV Technology Solutions ensures your Wi-Fi network is secure, scalable, and easy to manage. Our Wi-Fi installations in Abu Dhabi and Dubai are tailored to meet the specific demands of your environment, from high-density public areas to secure corporate offices.</p>
              <p className="mt-4 text-gray-600">For organizations seeking dependable Wi-Fi solutions in the UAE, ELV Technology Solutions delivers wireless networks built on performance, reliability, and security.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
