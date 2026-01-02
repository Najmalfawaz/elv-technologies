"use client"

import { useState, useEffect } from "react"

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-br from-red-900 to-red-800 rounded-t-[3rem] md:rounded-t-[4rem] rounded-b-[3rem] md:rounded-b-[4rem] -mt-8 md:-mt-12">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
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

        <div className="relative min-h-[250px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
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

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
