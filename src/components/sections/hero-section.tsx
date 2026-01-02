"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0)
  const texts = [
    "Welcome to ELV Technology Solutions",
    "Leading Audio-Visual Integration",
    "Smart ELV Solutions Provider",
    "Trusted by 350+ Brands",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden rounded-b-[2rem] sm:rounded-b-[3rem] md:rounded-b-[4rem]">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 opacity-0 animate-[fadeInLeft_0.7s_ease-out_forwards]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span className="ml-2 font-medium">(5.0)</span>
            </div>

            <div className="min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span
                  key={textIndex}
                  className="block bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent opacity-0 animate-[fadeInLeft_0.8s_ease-out_forwards] text-pretty"
                >
                  {texts[textIndex]}
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground mt-4 opacity-0 animate-[fadeInLeft_0.8s_ease-out_0.2s_forwards]">
                A Leading Audio-Visual & ELV Company in Abu Dhabi, UAE
              </p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 opacity-0 animate-[fadeInRight_0.8s_ease-out_0.3s_forwards]">
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-balance">
                ELV Technology Solutions is a leading ELV and Audio-Visual solutions integrator based in Abu Dhabi. We
                deliver complete ELV, AV, security, and smart integration services across the UAE.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-balance">
                Our team designs, supplies, installs, programs, and commissions fully customized systems that are
                reliable, user-friendly, and easy to manage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
