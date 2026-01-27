import HeroCarousel from "@/components/HeroCarousel";
import IntroSection from "@/components/IntroSection";
import MissionVisionOfferings from "@/components/MissionVisionOfferings";
import WhyChooseUs from "@/components/WhyChooseUs";
import RecentEngagements from "@/components/RecentEngagements";
import OurProducts from "@/components/OurProducts";
import Specialist from "@/components/Specialist";
import PerformanceGuarantee from "@/components/PerformanceGuarantee";
import Roadmap from "@/components/RoadMap";
import { MainPage } from "@/components/MainPage";
import TechInovation from "@/components/TechInovation";
import AgentsDetails from "@/components/AgentsDetails";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <MainPage />
      {/* <HeroCarousel /> */}
      <IntroSection />
      <MissionVisionOfferings />
      {/* <WhyChooseUs /> */}
      <OurProducts />
      <AgentsDetails />
      {/* <TechInovation /> */}
      <Specialist />
      <PerformanceGuarantee />
      <Roadmap />
      <RecentEngagements />
    </div>
  );
}
