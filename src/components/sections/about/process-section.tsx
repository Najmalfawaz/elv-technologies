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
      "Using the insights gathered, our engineers craft a tailored concept design for your AV and ELV systems. We prepare detailed layouts, drawings, and BOQs using advanced design software. Every element is planned carefully to ensure the system delivers seamless performance and reliability.",
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

export default function ProcessSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Process of Work</h2>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 md:p-8 hover:border-primary transition-colors"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="rounded-full bg-primary/10 p-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
