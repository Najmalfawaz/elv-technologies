import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { SecuritySurveillance } from "@/components/sections/solutions/security-surveillance"
import { AudioVisualSolutions } from "@/components/sections/solutions/audio-visual"
import { IPTVSolutions } from "@/components/sections/solutions/iptv-smatv"
import { NetworkCommunications } from "@/components/sections/solutions/network-communications"
import { IPPhones } from "@/components/sections/solutions/ip-phones"
import { HomeAutomation } from "@/components/sections/solutions/home-automation"
import { ITEquipment } from "@/components/sections/solutions/it-equipment"

export const metadata = {
  title: "Solutions - ELV Technology Solutions",
  description: "Comprehensive ELV solutions including Security, AV, IPTV, Networking, and Home Automation in UAE",
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent">
              Our Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Comprehensive ELV Technology Solutions tailored for modern businesses across UAE
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Sections */}
      <SecuritySurveillance />
      <AudioVisualSolutions />
      <IPTVSolutions />
      <NetworkCommunications />
      <IPPhones />
      <HomeAutomation />
      <ITEquipment />

      <Footer />
    </div>
  )
}
