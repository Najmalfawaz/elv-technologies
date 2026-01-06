'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function HeroSection({ onContactClick }: { onContactClick: () => void }) {
  const [textIndex, setTextIndex] = useState(0)
  const texts = [
    "Leading Audio-Visual Integration",
    "Smart ELV Solutions Provider",
    "Trusted by 350+ Brands",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section 
      className="relative bg-white pt-8 sm:pt-12 md:pt-16 pb-24 sm:pb-32 md:pb-40 rounded-b-[3rem] sm:rounded-b-[4rem] md:rounded-b-[5rem]"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
        <div className="space-y-8 md:space-y-10">
        
          <div className="py-8">
            <h1 className="font-extrabold tracking-tight">
              <span
                className="block bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Pioneering Your Digital Transformation
              </span>
              <span
                key={textIndex}
                className="mt-2 block text-3xl sm:text-4xl md:text-5xl text-gray-700 opacity-0 animate-[fadeInRight_0.8s_ease-out_forwards] text-pretty"
              >
                {texts[textIndex]}
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            A Leading Audio-Visual & ELV Company in Abu Dhabi, UAE. We deliver complete ELV, AV, security, and smart integration services across the UAE.
          </p>

          <div className="flex justify-start gap-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full" onClick={onContactClick}>
              Get a Free Quote
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
