'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function StructuredCablingPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Structured Cabling in UAE</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ELV Technology Solutions provides professional structured cabling solutions in Abu Dhabi, Dubai, and across the UAE, delivering reliable and scalable infrastructure for data, voice, and ELV systems.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex items-center justify-center">
              <img src="/solutions/structured-cabling.jpg" alt="Structured Cabling" className="rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600">We specialize in the design, installation, testing, and certification of structured cabling systems for offices, data centres, commercial buildings, hotels, schools, and industrial facilities. Our solutions are compliant with industry standards and include copper cabling (Cat6, Cat6A, Cat7) and fiber optic cabling (single-mode, multi-mode).</p>
              <p className="mt-4 text-gray-600">Our structured cabling installations in Abu Dhabi and Dubai are engineered for optimal performance and future expansion, ensuring your network infrastructure can support current and emerging technologies.</p>
              <p className="mt-4 text-gray-600">As a trusted IT and ELV system integrator in the UAE, ELV Technology Solutions delivers structured cabling that forms the backbone of your business operations—built on precision, reliability, and long-term value.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
