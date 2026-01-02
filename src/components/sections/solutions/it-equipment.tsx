import { Server, Monitor, Printer, HardDrive, Cpu, Shield } from "lucide-react"

export function ITEquipment() {
  const equipment = [
    { icon: Monitor, name: "Desktops & Laptops" },
    { icon: Server, name: "Servers & Storage" },
    { icon: HardDrive, name: "Networking Devices" },
    { icon: Shield, name: "UPS Systems" },
    { icon: Printer, name: "Printers & Peripherals" },
    { icon: Cpu, name: "Racks & Cabinets" },
  ]

  return (
    <section id="it-equipment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">IT Equipment Supply & Installation</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Reliable IT equipment supply and installation services in the UAE, supporting businesses across Abu Dhabi,
              Dubai, and all Emirates with high-quality technology solutions for modern workplaces.
            </p>
          </div>

          {/* Equipment Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {equipment.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                </div>
              )
            })}
          </div>

          {/* Details */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Comprehensive IT Solutions</h3>
            <p className="text-gray-200 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              We supply and deploy a wide range of IT equipment for offices, meeting rooms, and enterprise environments.
              All solutions are selected to ensure performance, compatibility, and long-term reliability.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-orange-400">Our Services Include:</h4>
                <ul className="space-y-2">
                  {[
                    "IT equipment selection and supply",
                    "Professional installation services",
                    "Configuration and testing",
                    "Structured cabling integration",
                    "Network setup and security",
                    "System handover and training",
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                      <span className="text-gray-200 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-orange-400">Benefits:</h4>
                <ul className="space-y-2">
                  {[
                    "Performance-focused equipment selection",
                    "Cost-effective solutions",
                    "Future-ready infrastructure",
                    "Compliance with industry standards",
                    "Scalable for business growth",
                    "Long-term reliability and support",
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                      <span className="text-gray-200 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
