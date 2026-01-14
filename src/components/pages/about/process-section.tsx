'use client';
import { motion, Variants } from 'framer-motion';
import { Search, Pencil, ShoppingCart, Settings, Handshake } from "lucide-react"

const processSteps = [
    {
      icon: Search,
      title: "Needs Analysis",
      description:
        "We start by understanding your goals, space requirements, and overall technology vision. Our team performs an on-site assessment to evaluate the environment and identify any technical considerations. Based on our findings, we propose the most effective solution that aligns with your timeline and budget.",
    },
    {
      icon: Pencil,
      title: "Design",
      description:
        "Using the insights gathered, our engineers craft a tailored concept design for your AV, and ELV systems. We prepare detailed layouts, drawings, and BOQs using advanced design software. Every element is planned carefully to ensure the system delivers seamless performance and reliability.",
    },
    {
      icon: ShoppingCart,
      title: "Procurement & Integration",
      description:
        "We procure premium equipment from trusted global manufacturers to ensure long-term quality. Our technical team handles the full installation process, maintaining strict adherence to safety and industry standards. All components are verified and tested during installation to guarantee proper integration.",
    },
    {
      icon: Settings,
      title: "System Configuration & Validation",
      description:
        "We configure the system to match your operational requirements and ensure it functions intuitively for the end user. Each feature undergoes rigorous validation and performance testing to confirm flawless operation. Any adjustments needed are made during this stage to achieve optimal results.",
    },
    {
      icon: Handshake,
      title: "Handover, Training & Ongoing Care",
      description:
        "We deliver hands-on training sessions so your team can confidently operate every part of the system. Our ongoing technical support ensures smooth day-to-day operation. We also offer annual maintenance plans to keep your systems updated, secure, and performing at their peak.",
    },
  ]

const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

export default function ProcessSection() {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Our Process of Work</h2>
          <p className="mt-4 text-lg text-gray-600">From concept to completion, our streamlined process ensures exceptional results every time.</p>
        </motion.div>

        <div className="mt-16">
          <motion.div 
            className="relative max-w-3xl mx-auto"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
             <div className="absolute left-8 top-8 bottom-8 w-1 bg-gray-200 rounded-full md:left-1/2 md:-translate-x-1/2"></div>
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isOdd = index % 2 !== 0;
              return (
                <motion.div
                  key={index}
                  className="relative mb-12 flex items-start md:items-center gap-6 md:gap-12"
                  variants={itemVariants}
                >
                  <div className={`flex-shrink-0 z-10 p-4 bg-white border-2 border-gray-200 rounded-full shadow-md md:order-2 ${isOdd ? 'md:ml-auto' : 'md:mr-auto'} `}>
                    <Icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className={`w-full p-6 bg-white border border-gray-200 rounded-2xl shadow-sm md:w-5/12 ${isOdd ? 'md:order-1' : 'md:order-3'}`}>
                    <h3 className="text-xl font-bold text-slate-800">
                      <span className="font-light text-gray-500 mr-2">{`0${index + 1}`}.</span>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
