import { Home, Lightbulb, Lock, Smartphone, Zap, Sun } from "lucide-react"

export function HomeAutomation() {
  const features = [
    { icon: Lightbulb, title: "Smart Lighting", description: "Automated lighting with dimming and scene control" },
    { icon: Home, title: "Home Entertainment", description: "Multi-room audio and video distribution" },
    { icon: Lock, title: "Smart Security", description: "CCTV and smart lock integration" },
    { icon: Smartphone, title: "Mobile Control", description: "Control everything from your smartphone" },
    { icon: Zap, title: "Energy Management", description: "Monitor and optimize energy consumption" },
    { icon: Sun, title: "Scene Automation", description: "Create custom automation scenes" },
  ]

  const lightingFeatures = [
    "Dimming and lighting scene creation",
    "Motion-based and scheduled lighting",
    "Daylight sensing",
    "Architectural lighting control",
    "Voice-activated control",
    "Energy-efficient operation",
  ]

  return (
    <section id="home-automation" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Home Automation & Lighting Control</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Advanced home automation and lighting control systems in Abu Dhabi, Dubai, and across the UAE, delivering
              smart, energy-efficient, and user-friendly solutions for modern homes.
            </p>
          </div>

          {/* Smart Home Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>

          {/* Lighting Control Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 text-white">
              <div className="flex items-center gap-4 mb-6">
                <Lightbulb className="w-12 h-12 text-orange-500" />
                <h3 className="text-2xl md:text-3xl font-bold">Lighting Control Systems</h3>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed">
                We provide lighting control systems in Abu Dhabi and Dubai that offer aesthetic flexibility and energy
                efficiency. Automated lighting creates the perfect ambience while reducing energy consumption.
              </p>
              <ul className="space-y-3">
                {lightingFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Why Choose ELV Technology Solutions?
              </h3>
              <div className="space-y-4">
                {[
                  "Tailored home automation solutions for villas & luxury residences",
                  "Professional installation and system programming",
                  "Scalable smart home platforms for future upgrades",
                  "Reliable after-sales service and maintenance",
                  "Integration with leading smart home brands",
                  "Energy-efficient and eco-friendly solutions",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-orange-50 rounded-2xl p-4">
                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
