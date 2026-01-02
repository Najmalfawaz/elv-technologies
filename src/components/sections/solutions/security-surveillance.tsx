import { Camera, Shield, Users, AlertTriangle, Clock, Building2 } from "lucide-react"

export function SecuritySurveillance() {
  const subsections = [
    {
      title: "AI-Powered Video Surveillance",
      description: "Advanced AI-driven security with real-time threat detection and analytics",
      features: [
        "Intrusion and perimeter detection",
        "Facial recognition & people identification",
        "People counting and crowd density analysis",
        "Behaviour analysis and anomaly detection",
        "Object detection (fire, smoke, vehicles)",
      ],
    },
    {
      title: "Access Control & Time Attendance",
      description: "Secure and scalable access control systems for UAE businesses",
      features: [
        "Card readers, biometric devices, PIN keypads",
        "Mobile credentials and cloud-based access",
        "Time attendance tracking with HR integration",
        "Centralized monitoring and reporting",
        "Compliance with security policies",
      ],
    },
    {
      title: "Gate Barrier Systems",
      description: "Automated gate barriers for vehicle access control",
      features: [
        "RFID and ANPR (number plate recognition)",
        "Remote control and mobile access",
        "Integration with access control systems",
        "Durable motors for UAE climate conditions",
        "Safety sensors and emergency protocols",
      ],
    },
    {
      title: "Nurse Call System",
      description: "Fast communication between patients and nursing staff",
      features: [
        "Bedside call buttons and pull cords",
        "Visual and audible alerts at nurse stations",
        "Mobile device notifications",
        "Call prioritization and emergency alerts",
        "Integration with hospital workflows",
      ],
    },
    {
      title: "Queue Management System",
      description: "Efficient customer flow management for service areas",
      features: [
        "Digital ticketing and token systems",
        "Real-time queue monitoring",
        "Multiple service counter management",
        "Customer waiting time analytics",
        "Integration with display screens",
      ],
    },
    {
      title: "Disabled Toilet Alarm System",
      description: "Emergency assistance systems for accessibility compliance",
      features: [
        "Pull cord and button activation",
        "Audible and visual alert indicators",
        "Reset buttons and power supplies",
        "Compliance with accessibility standards",
        "Fast response emergency signalling",
      ],
    },
  ]

  const applications = [
    { icon: Building2, name: "Corporate Offices" },
    { icon: Shield, name: "Retail & Malls" },
    { icon: Users, name: "Hotels & Hospitality" },
    { icon: AlertTriangle, name: "Industrial Facilities" },
    { icon: Clock, name: "Healthcare Institutions" },
    { icon: Camera, name: "Educational Campuses" },
  ]

  return (
    <section id="security-surveillance" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Security and Surveillance</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
              AI-Powered Security & Surveillance Solutions in UAE
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-5xl mx-auto">
              Modern security is no longer about passive monitoring—it's about intelligent systems that think, analyse,
              and act in real time. ETS delivers next-generation, AI-driven Security & Surveillance Solutions that
              protect your people, assets, and operations while providing actionable business insights.
            </p>
          </div>

          {/* Key Features */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 mb-16 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">AI-Based Video Surveillance & Analytics</h3>
            <p className="text-gray-200 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
              Advanced video analytics driven by artificial intelligence for real-time threat detection and operational
              insights
            </p>
          </div>

          {/* Applications */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Applications</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {applications.map((app, index) => {
                const Icon = app.icon
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                    <p className="text-sm font-medium text-gray-800">{app.name}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Subsections */}
          <div className="space-y-12">
            {subsections.map((subsection, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{subsection.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{subsection.description}</p>
                <ul className="space-y-3">
                  {subsection.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Why CCTV Section */}
          <div className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Why CCTV Camera is Important?</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              In today's rapidly growing urban environment, ensuring safety has become a top priority for homes and
              businesses alike. As a leading security and surveillance services provider in Abu Dhabi, we offer
              professional security system installation services tailored to residential, commercial, and industrial
              needs all over UAE.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a trusted CCTV company and a certified MCC Approved company in Abu Dhabi, we specialize in CCTV
              Installation for homes, offices, retail stores, warehouses, and public areas. Our advanced CCTV for home
              solutions feature AI-powered video analytics, motion detection, people counting, vehicle tracking, and
              remote monitoring for enhanced protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
