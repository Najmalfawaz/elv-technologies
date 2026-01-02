"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function IntroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 md:py-24 lg:py-28 rounded-t-[3rem] md:rounded-t-[4rem] rounded-b-[3rem] md:rounded-b-[4rem] mt-12 md:mt-16 lg:mt-20">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              We{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Believe
              </span>{" "}
              in Tailored Solutions to Meet Client Needs, Seamless System Integration, High-quality Service Support
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-white px-8 py-3 text-white font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Right Content - Statistics */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Leading Audio Visual Integration Company in Dubai, Abu Dhabi & the UAE
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                ELV Technology Solutions has <span className="font-semibold text-white">17 years of expertise</span>,
                growing offices from Abu Dhabi and Dubai to Saudi Arabia and India. We handle various Integration
                services across the UAE and KSA with certified in-house engineers and technicians.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                <span className="font-semibold text-white">Trusted by 350+ top brands</span>, we follow ISO standards to
                deliver the highest level of quality and service.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">8K+</div>
                <div className="text-gray-300 text-sm md:text-base">
                  Projects
                  <br />
                  Completed
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">350+</div>
                <div className="text-gray-300 text-sm md:text-base">
                  Trusted
                  <br />
                  Brands
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">17</div>
                <div className="text-gray-300 text-sm md:text-base">
                  Years
                  <br />
                  of experience
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">4</div>
                <div className="text-gray-300 text-sm md:text-base">
                  Offices Across
                  <br />
                  UAE, KSA and India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
