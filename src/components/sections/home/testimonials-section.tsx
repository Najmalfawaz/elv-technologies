"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    text: "ELV Technology Solutions provided exceptional service. Their team was professional, knowledgeable, and delivered our AV system on time and within budget. Highly recommended!",
    author: "Ahmed Al Mansouri",
    company: "Emirates Group",
  },
  {
    text: "Outstanding work on our security camera installation. The quality of equipment and installation expertise exceeded our expectations. Very satisfied with their service.",
    author: "Sarah Johnson",
    company: "Dubai Properties",
  },
  {
    text: "Their smart home integration transformed our villa. The system is intuitive, reliable, and the support has been excellent. Thank you ELV Technology Solutions!",
    author: "Mohammed Al Dhaheri",
    company: "Private Client",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [testimonials.length])

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextTestimonial, 5000)
      return () => clearInterval(timer)
    }
  }, [isHovered, nextTestimonial])

  return (
    <section className="py-16 bg-gradient-to-br from-red-900 to-red-800 rounded-t-[3rem] md:rounded-t-[4rem] rounded-b-[3rem] md:rounded-b-[4rem] -mt-8 md:-mt-12">
      <div 
        className="mx-auto max-w-4xl px-6 lg:px-8 relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Trusted by Customers</h2>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-6 w-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="ml-2 text-white font-semibold">5.0 Rating</span>
          </div>
        </div>

        <div className="relative min-h-[300px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">What Our Customers Say</h3>
                <p className="text-white text-lg leading-relaxed mb-6 text-balance">"{testimonial.text}"</p>
                <div className="text-white">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-white/80 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Controls */}
        <button 
          onClick={prevTestimonial} 
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/40"
          aria-label="Previous Testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextTestimonial} 
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/40"
          aria-label="Next Testimonial"
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
