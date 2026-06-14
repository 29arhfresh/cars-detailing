import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import GallerySection from "@/components/GallerySection";
import WhyUsSection from "@/components/WhyUsSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import AIChat from "@/components/AIChat";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0A0A0A" }}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSection />
      <GallerySection />
      <WhyUsSection />
      <ReviewsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <AIChat />
    </main>
  );
}
