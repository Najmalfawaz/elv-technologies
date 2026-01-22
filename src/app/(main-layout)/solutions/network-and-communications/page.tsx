
'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function NetworkAndCommunicationsPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Networking and Communications</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ELV Technology Solutions provides professional networking services in Abu Dhabi and across the UAE, specializing in structured cabling, wired networks, and enterprise-grade wireless (Wi-Fi) solutions. We design and implement standards-compliant network infrastructures using proven technologies from Cisco, Aruba Networks, and Ruckus, ensuring secure connectivity, high performance, and long-term scalability. Our solutions are tailored for corporate offices, commercial buildings, healthcare facilities, and educational institutions, delivering reliable network systems built for continuous operation.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Structured Cabling Solutions</h2>
                    <p className="mt-4 text-gray-600">ELV Technology Solutions provides comprehensive structured cabling solutions in Abu Dhabi and across the UAE, delivering high-performance copper and fibre cabling systems for commercial buildings, offices, and data centre environments. We offer end-to-end structured cabling services, from design and implementation to testing and commissioning, ensuring reliable and standards-compliant network infrastructure.</p>
                </div>
                <div className="flex items-center justify-center">
                    <img src="/solutions/structured-cabling.jpg" alt="Structured Cabling" className="rounded-lg shadow-lg" />
                </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
                <div className="flex items-center justify-center">
                    <img src="/solutions/wireless-network.jpg" alt="Wireless Network" className="rounded-lg shadow-lg" />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Wireless Network Solutions</h2>
                    <p className="mt-4 text-gray-600">A reliable wireless network is critical to business operations, user experience, and application performance. Poor Wi-Fi design leads to dropped connections, slow speeds, and security risks. ELV Technology Solutions delivers professional wireless network solutions in Abu Dhabi and across the UAE, ensuring stable, secure, and high-performance Wi-Fi environments for business-critical applications.</p>
                </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Audio Video Intercom</h2>
                    <p className="mt-4 text-gray-600">An audio and video intercom system allows occupants to identify visitors, communicate clearly, and control access before granting entry. It is a critical security and convenience solution for residential, commercial, and mixed-use buildings. ELV Technology Solutions provides professional audio and video intercom systems in Abu Dhabi and across the UAE, delivering reliable communication and secure access control for a wide range of properties.</p>
                </div>
                <div className="flex items-center justify-center">
                    <img src="/solutions/intercom.jpg" alt="Audio Video Intercom" className="rounded-lg shadow-lg" />
                </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
                <div className="flex items-center justify-center">
                    <img src="/solutions/two-way-radio.jpg" alt="Two Way Radio" className="rounded-lg shadow-lg" />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Two Way Radio Solutions</h2>
                    <p className="mt-4 text-gray-600">Two-way radio systems provide instant, reliable communication for organizations that require clear coordination across teams, sites, and operations. Unlike mobile networks, two-way radios ensure uninterrupted communication without dependence on public networks. ELV Technology Solutions delivers professional two-way radio solutions in Abu Dhabi and across the UAE, supporting mission-critical communication for industrial, commercial, and operational environments.</p>
                </div>
            </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
