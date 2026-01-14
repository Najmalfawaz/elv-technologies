
import AboutHeroSection from "@/components/pages/about/hero-section";
import CertificationsSection from "@/components/pages/about/certifications-section";
import MissionVisionValues from "@/components/pages/about/mission-vision-values";
import ProcessSection from "@/components/pages/about/process-section";
import SectorsSection from "@/components/pages/about/sectors-section";
import ContactForm from "@/components/pages/about/contact-form";

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <MissionVisionValues />
      <CertificationsSection />
      <ProcessSection />
      <SectorsSection />
      <div className="py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <ContactForm />
        </div>
      </div>
    </main>
  );
}
