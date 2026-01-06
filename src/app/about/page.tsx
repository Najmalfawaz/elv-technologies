import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AboutHeroSection from "@/components/sections/about/hero-section"
import MissionVisionValues from "@/components/sections/about/mission-vision-values"
import CertificationsSection from "@/components/sections/about/certifications-section"
import ProcessSection from "@/components/sections/about/process-section"
import SectorsSection from "@/components/sections/about/sectors-section"
import ContactDialog from "@/components/sections/home/contact-dialog"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHeroSection />
        <MissionVisionValues />
        <CertificationsSection />
        <ProcessSection />
        <SectorsSection />
      </main>
      <Footer />
    </div>
  )
}
