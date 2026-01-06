"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

function useCountUp(end: number, duration: number, isVisible: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isVisible) {
      let start = 0
      const stepTime = Math.max(Math.floor(duration / end), 1)

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) {
          clearInterval(timer)
        }
      }, stepTime)

      return () => clearInterval(timer)
    } else {
      setCount(0)
    }
  }, [end, duration, isVisible])

  return count
}

function useIntersectionObserver(options: IntersectionObserverInit) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options])

  return { ref, isVisible }
}

interface StatProps {
  value: number
  label: string
  description: string
  isVisible: boolean
}

const StatItem: React.FC<StatProps> = ({ value, label, description, isVisible }) => {
  const count = useCountUp(value, 2000, isVisible)
  const formattedCount = value >= 1000 ? `${Math.floor(count / 1000)}K+` : count.toString()

  return (
    <div className="bg-white/10 p-6 rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
      <div className="text-5xl md:text-6xl font-bold text-white">{formattedCount}</div>
      <div className="text-lg font-semibold text-white mt-2">{label}</div>
      <p className="text-gray-300 text-sm mt-2">{description}</p>
    </div>
  )
}

export default function IntroSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  const stats: Omit<StatProps, 'isVisible'>[] = [
    { value: 8000, label: "Projects Completed", description: "Successfully delivered over 8,000 projects to satisfied clients."}, 
    { value: 350, label: "Trusted Brands", description: "Partnered with over 350 leading brands across various industries." },
    { value: 17, label: "Years of Experience", description: "Bringing over 17 years of expertise and innovation to the table." },
    { value: 4, label: "Global Offices", description: "Operating from 4 offices across the UAE, KSA, and India." },
  ]

  return (
    <section 
      id="about-us" 
      ref={ref} 
      className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 md:py-28 lg:py-32 rounded-t-[3rem] md:rounded-t-[4rem] rounded-b-[3rem] md:rounded-b-[4rem] mt-16 md:mt-20 lg:mt-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            A Legacy of Excellence and Trust
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading audio-visual and ELV company in the UAE, committed to delivering high-quality, integrated solutions that empower businesses and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} isVisible={isVisible} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border-2 border-white px-8 py-3 text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Us
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
