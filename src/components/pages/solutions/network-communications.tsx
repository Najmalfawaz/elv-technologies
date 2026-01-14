import { Network, Cable, Wifi, Phone } from "lucide-react"

export function NetworkCommunications() {
  const solutions = [
    {
      icon: Cable,
      title: "Structured Cabling Solutions",
      description: "Comprehensive copper and fiber cabling systems for enterprise networks",
      services: [
        "Cat 6, Cat 6A, Cat 5e cabling",
        "Fiber optic backbone cabling",
        "Data centre build-out",
        "MDF / IDF communication rooms",
        "Testing and commissioning",
        "Maintenance and MAC services",
      ],
    },
    {
      icon: Wifi,
      title: "Wireless Network Solutions",
      description: "Enterprise-grade Wi-Fi for high-density environments",
      services: [
        "RF planning and site surveys",
        "Coverage and capacity analysis",
        "Secure authentication",
        "Scalable architecture",
        "High-density Wi-Fi deployment",
        "Centralized management",
      ],
    },
    {
      icon: Phone,
      title: "Audio Video Intercom",
      description: "Secure communication and access control systems",
      services: [
        "Video monitoring",
        "Two-way communication",
        "Door lock integration",
        "Mobile connectivity",
        "Visitor management",
        "Security features",
      ],
    },
    {
      icon: Network,
      title: "Two Way Radio Solutions",
      description: "Reliable instant communication for operations",
      services: [
        "Handheld and mobile radios",
        "On-site communication systems",
        "Licensed and license-free options",
        "Wide-area coverage",
        "Mission-critical reliability",
        "Staff coordination",
      ],
    },
  ]

  return (
    <section id="network-communications" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Network and Communications</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Professional networking services in Abu Dhabi and across the UAE, specializing in structured cabling,
              wired networks, and enterprise-grade wireless solutions. We design and implement standards-compliant
              network infrastructures using proven technologies.
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
            <p className="text-gray-200 leading-relaxed mb-6">
              A network is a structured system of interconnected devices that communicate through wired or wireless
              paths to securely transmit data, voice, and video across an organization. Modern enterprise networks
              support sub-networks, remote access, centralized monitoring, and policy-based security.
            </p>
            <p className="text-gray-200 leading-relaxed">
              ELV Technology Solutions engineers networks based on proper architecture design, traffic management,
              redundancy, and security best practices. Network performance depends on hardware selection, RF design,
              security configuration, cabling quality, and compliance with international standards.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 md:p-10 text-gray-900 hover:shadow-2xl transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
