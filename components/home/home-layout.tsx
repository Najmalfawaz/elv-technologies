import HeroSection from "@/components/home/hero-section";
import IntroSection from "@/components/home/intro-section";
import ServicesSection from "@/components/home/services-section";
import WhyChooseUsSection from "@/components/home/why-choose-us-section";
import SlideshowSection from "@/components/home/slideshow-section";
import ClientsSection from "@/components/home/clients-section";
import ReviewsSection from "@/components/home/reviews-section";
import CTASection from "@/components/home/cta-section";
import FAQSection from "@/components/home/faq-section";

export default function HomeLayout() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      {/* <SlideshowSection /> */}
      <WhyChooseUsSection />
      <ClientsSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
