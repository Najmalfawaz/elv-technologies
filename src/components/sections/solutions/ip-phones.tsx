import { Phone, Building } from "lucide-react"

export function IPPhones() {
  const brands = [
    { name: "Cisco", description: "Enterprise IP phones, call control, VoIP, collaboration" },
    { name: "Avaya", description: "IP PBX systems, desk phones, hospitality telephony" },
    { name: "Panasonic", description: "IP phones and hybrid IP-PBX systems" },
    { name: "NEC", description: "Enterprise IP telephony and unified communications" },
    { name: "HP (Poly / Polycom)", description: "IP desk phones and conference phones" },
    { name: "Linksys", description: "SIP-based IP phones (SMB-focused)" },
  ]

  const features = [
    "High-definition voice quality",
    "Centralized call management",
    "Reduced infrastructure requirements",
    "Easy expansion and multi-branch connectivity",
    "Integration with Wi-Fi phones and mobile devices",
    "Cloud and on-premise deployment options",
  ]

  return (
    <section id="ip-phones" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">IP Phone Systems</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Reliable voice communication is essential for hotels, offices, commercial buildings, and multi-site
              organizations. Modern IP phone systems deliver high-quality voice, advanced call features, and seamless
              integration with IT networks.
            </p>
          </div>

          {/* What IP Delivers */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <Phone className="w-12 h-12 text-orange-600" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">What an IP Phone System Delivers</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                IP phone systems use your data network to transmit voice calls, providing modern communication
                capabilities that far exceed traditional telephony.
              </p>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-10 flex items-center justify-center">
              <div className="text-center">
                <Building className="w-24 h-24 mx-auto mb-6 text-orange-600" />
                <h4 className="text-xl font-bold text-gray-900 mb-4">Suitable For</h4>
                <div className="space-y-2">
                  {[
                    "Hotels & Hospitality",
                    "Corporate Offices",
                    "Commercial Buildings",
                    "Multi-site Organizations",
                  ].map((item, idx) => (
                    <div key={idx} className="px-4 py-2 bg-gray-50 rounded-lg">
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Brands */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Brands & Technologies We Work With</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((brand, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-3 text-orange-400">{brand.name}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{brand.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
