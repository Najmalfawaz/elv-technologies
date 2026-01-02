"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/sections/hero-section"

const VideoShowcase = dynamic(() => import("@/components/sections/video-showcase"), { ssr: false })
const IntroSection = dynamic(() => import("@/components/sections/intro-section"), { ssr: false })
const ServicesSlider = dynamic(() => import("@/components/sections/services-slider"), { ssr: false })
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section"), { ssr: false })
const ClientsSection = dynamic(() => import("@/components/sections/clients-section"), { ssr: false })
const PartnersSection = dynamic(() => import("@/components/sections/partners-section"), { ssr: false })
const ContactSection = dynamic(() => import("@/components/sections/contact-section"), { ssr: false })

export default function HomePage() {
  const [sectionsVisible, setSectionsVisible] = useState({
    video: false,
    intro: false,
    services: false,
    testimonials: false,
    clients: false,
    partners: false,
    contact: false,
  })

  useEffect(() => {
    const timers = [
      setTimeout(() => setSectionsVisible((prev) => ({ ...prev, video: true })), 300),
      setTimeout(() => setSectionsVisible((prev) => ({ ...prev, intro: true })), 600),
      setTimeout(() => setSectionsVisible((prev) => ({ ...prev, services: true })), 900),
      setTimeout(() => setSectionsVisible((prev) => ({ ...prev, testimonials: true })), 1200),
      setTimeout(() => setSectionsVisible((prev) => ({ ...prev, clients: true })), 1500),
      setTimeout(() => setSectionsVisible((prev) => ({ ...prev, partners: true })), 1800),
      setTimeout(() => setSectionsVisible((prev) => ({ ...prev, contact: true })), 2100),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />

        {sectionsVisible.video && (
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] my-12 md:my-16 lg:my-20">
            <VideoShowcase />
          </div>
        )}

        {sectionsVisible.intro && (
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
            <IntroSection />
          </div>
        )}

        {sectionsVisible.services && (
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] my-12 md:my-16 lg:my-20">
            <ServicesSlider />
          </div>
        )}

        {sectionsVisible.testimonials && (
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] my-12 md:my-16 lg:my-20">
            <TestimonialsSection />
          </div>
        )}

        {sectionsVisible.clients && (
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] my-12 md:my-16 lg:my-20">
            <ClientsSection />
          </div>
        )}

        {sectionsVisible.partners && (
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] my-12 md:my-16 lg:my-20">
            <PartnersSection />
          </div>
        )}

        {sectionsVisible.contact && (
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] my-12 md:my-16 lg:my-20">
            <ContactSection />
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
