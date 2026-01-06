"use client"

import { useRef, useEffect } from "react"

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch((error) => {
            console.log("[v0] Video autoplay prevented:", error)
          })
        } else {
          videoRef.current?.pause()
        }
      },
      {
        threshold: 0.5, // Start playing when 50% of the video is visible
      }
    )

    const currentSectionRef = sectionRef.current
    if (currentSectionRef) {
      observer.observe(currentSectionRef)
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-black py-0 rounded-t-[2rem] sm:rounded-t-[3rem] md:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] md:rounded-b-[4rem] -mt-6 sm:-mt-8 md:-mt-12 overflow-hidden"
    >
      <div className="relative w-full aspect-video">
        <video
          ref={videoRef}
          controls
          loop
          muted
          playsInline
          tabIndex="-1"
          className="h-full w-full object-cover"
          poster="/images/image.png"
        >
          <source src="/video/showcase.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}
