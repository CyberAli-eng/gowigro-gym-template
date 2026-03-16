import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import ExperienceSection from "@/components/ExperienceSection";
import TrainersSection from "@/components/TrainersSection";
import TransformationSection from "@/components/TransformationSection";
import PricingSection from "@/components/PricingSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import GymFooter from "@/components/GymFooter";
import {
  GymNavbar,
  StickyCTABar,
  WhatsAppButton,
  ScrollProgress,
  ExitIntentPopup,
} from "@/components/ConversionElements";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <ScrollProgress />
      <GymNavbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="trainers">
          <TrainersSection />
        </div>
        <TransformationSection />
        <div id="pricing">
          <PricingSection />
        </div>
        <FacilitiesSection />
        <LeadCaptureSection />
        <div id="faq">
          <FAQSection />
        </div>
        <FinalCTASection />
      </main>
      <GymFooter />
      <StickyCTABar />
      <WhatsAppButton />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
