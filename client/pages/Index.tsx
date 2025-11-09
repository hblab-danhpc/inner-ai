import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AppDemoSection from "@/components/AppDemoSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import QuoteSection from "@/components/QuoteSection";
import FooterSection from "@/components/FooterSection";

export default function Index() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <AppDemoSection />
      <ComingSoonSection />
      <QuoteSection />
      <FooterSection />
    </div>
  );
}
