"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  {
    title: "AI Features & Technology",
    image: "/artificial-intelligence-technology-abstract-visual.jpg",
  },
  {
    title: "CCTV Systems",
    image: "/modern-security-camera-surveillance-system.jpg",
  },
  {
    title: "LED Solutions",
    image: "/led-display-screen-technology.jpg",
  },
  {
    title: "Outdoor LED",
    image: "/outdoor-led-billboard-display.jpg",
  },
  {
    title: "Conference Room",
    image: "/modern-conference-room-with-av-equipment.jpg",
  },
  {
    title: "Professional Sound Systems",
    image: "/professional-audio-sound-system-equipment.jpg",
  },
  {
    title: "Stage Lights",
    image: "/stage-lighting-equipment-concert.jpg",
  },
  {
    title: "Biometric Access Control",
    image: "/biometric-face-recognition-access-control.jpg",
  },
  {
    title: "Data Centre & Structured Cabling",
    image: "/data-center-server-room-structured-cabling.jpg",
  },
]

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
  }, [services.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
  }

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, 4000)
      return () => clearInterval(timer)
    }
  }, [isHovered, nextSlide])

  return (
    <section className="py-16 bg-white rounded-t-[3rem] md:rounded-t-[4rem] rounded-b-[3rem] md:rounded-b-[4rem] -mt-8 md:-mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Services</h2>
        <div 
          className="relative h-[450px] w-full rounded-2xl overflow-hidden group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image src={service.image || "/placeholder.svg"} alt={service.title} layout="fill" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white text-balance">{service.title}</h3>
              </div>
            </div>
          ))}

          {/* Arrow Controls */}
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/40"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/40"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
