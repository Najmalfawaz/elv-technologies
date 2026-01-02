import { Tv, Satellite, Radio, Hotel } from "lucide-react"

export function IPTVSolutions() {
  return (
    <section id="iptv-smatv" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">IPTV & SMATV Solutions</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Professional IPTV and SMATV solutions in Abu Dhabi and across the UAE, delivering centralized television
              and content distribution systems for hotels, residential developments, campuses, and commercial buildings.
            </p>
          </div>

          {/* What is SMATV */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 mb-12 text-white">
            <div className="flex items-start gap-4 mb-6">
              <Satellite className="w-12 h-12 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">What is SMATV?</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  SMATV (Satellite Master Antenna Television) combines multiple satellite and terrestrial TV signals
                  into a single integrated cable feed for distribution throughout a building. This approach eliminates
                  the need for individual satellite dishes, simplifies maintenance, and ensures consistent signal
                  quality across all rooms and common areas.
                </p>
              </div>
            </div>

            <h4 className="text-xl font-semibold mb-4">SMATV systems are ideal for:</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Hotels and resorts",
                "Residential towers and compounds",
                "Campuses and educational institutions",
                "Corporate and commercial buildings",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hotel IPTV */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-orange-50 rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <Hotel className="w-12 h-12 text-orange-600" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Hotel IPTV Solutions</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ELV Technology Solutions specializes in hotel IPTV and SMATV systems designed to enhance the guest
                experience while providing centralized control for hotel operations.
              </p>
              <ul className="space-y-3">
                {[
                  "Live TV and international programming",
                  "Branded welcome screens",
                  "Video on Demand (VOD)",
                  "PMS and billing integration",
                  "In-room services and promotions",
                  "Centralized content management",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <Radio className="w-12 h-12 text-orange-600" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">IF & RF TV Distribution</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We install satellite dishes and TV antennas to receive programming from selected satellite providers and
                local broadcasters. These signals are processed through professional IF/RF headend equipment.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Custom Internal Channels:</h4>
                <ul className="space-y-2">
                  {[
                    "Hotel information and promotional channels",
                    "Campus or building TV stations",
                    "Event broadcasting and announcements",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Tv className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Our IPTV & SMATV Services</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "IPTV & SMATV system integration",
                "System design in Abu Dhabi & UAE",
                "IF, RF, IP, and hybrid TV systems",
                "Satellite dish and antenna installation",
                "Headend configuration",
                "Testing and commissioning",
              ].map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <p className="font-medium text-gray-800">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
