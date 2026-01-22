
'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function IPTVPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">IPTV & SMATV Solutions in UAE</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ELV Technology Solutions provides professional IPTV and SMATV solutions in Abu Dhabi and across the UAE, delivering centralized television and content distribution systems for hotels, residential developments, campuses, and commercial buildings. Our IPTV and SMATV systems are designed to distribute international satellite channels, local broadcasts, and customized content through a unified, high-quality network infrastructure using IF, RF, and IP technologies.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">What is SMATV?</h2>
                    <p className="mt-4 text-gray-600">SMATV (Satellite Master Antenna Television) combines multiple satellite and terrestrial TV signals into a single integrated cable feed for distribution throughout a building. This approach eliminates the need for individual satellite dishes, simplifies maintenance, and ensures consistent signal quality across all rooms and common areas.</p>
                    <p className="mt-4 font-bold text-gray-900">SMATV systems are ideal for:</p>
                    <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                        <li>Hotels and resorts</li>
                        <li>Residential towers and compounds</li>
                        <li>Campuses and educational institutions</li>
                        <li>Corporate and commercial buildings</li>
                    </ul>
                </div>
                <div className="flex items-center justify-center">
                    <img src="/solutions/smatv.jpg" alt="SMATV" className="rounded-lg shadow-lg" />
                </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
                <div className="flex items-center justify-center">
                    <img src="/solutions/hotel-iptv.jpg" alt="Hotel IPTV" className="rounded-lg shadow-lg" />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Hotel IPTV & Hospitality TV Solutions</h2>
                    <p className="mt-4 text-gray-600">ELV Technology Solutions specializes in hotel IPTV and SMATV systems designed to enhance the guest experience while providing centralized control for hotel operations.</p>
                    <p className="mt-4 font-bold text-gray-900">Our hotel TV solutions support:</p>
                    <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                        <li>Live TV, local channels, and international satellite programming</li>
                        <li>Branded welcome screens and guest information</li>
                        <li>Video on Demand (VOD)</li>
                        <li>Integration with PMS and hotel billing systems</li>
                        <li>In-room services, advertising, and promotions</li>
                        <li>Centralized monitoring and content management</li>
                    </ul>
                    <p className="mt-4 text-gray-600">We deliver scalable IPTV and SMATV systems suitable for luxury hotels, business hotels, resorts, and serviced apartments.</p>
                </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">IF & RF TV Distribution Systems</h2>
                    <p className="mt-4 text-gray-600">We install satellite dishes and TV antennas to receive programming from selected satellite providers and local broadcasters. These signals are processed through professional IF/RF headend equipment, which tunes and combines channels into a single, stable cable feed.</p>
                    <p className="mt-4 font-bold text-gray-900">Our systems can also include custom internal channels, such as:</p>
                    <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                        <li>Hotel information and promotional channels</li>
                        <li>Campus or building TV stations</li>
                        <li>Event broadcasting and announcement screens</li>
                    </ul>
                    <p className="mt-4 text-gray-600">Each system is designed for reliability, ease of maintenance, and future upgrades.</p>
                </div>
                <div className="flex items-center justify-center">
                    <img src="/solutions/rf-tv-distribution.jpg" alt="IF & RF TV Distribution" className="rounded-lg shadow-lg" />
                </div>
            </div>
            <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our IPTV & SMATV Services</h2>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                    <li>IPTV & SMATV system integration</li>
                    <li>IPTV system design in Abu Dhabi & UAE</li>
                    <li>Deployment of IF, RF, IP, and hybrid TV systems</li>
                    <li>Satellite dish and antenna installation</li>
                    <li>Headend configuration and commissioning</li>
                    <li>Testing, documentation, and system handover</li>
                </ul>
            </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
