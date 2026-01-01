import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import IntroSection from "@/components/IntroSection";
import MissionVisionOfferings from "@/components/MissionVisionOfferings";
import WhyChooseUs from "@/components/WhyChooseUs";
import RecentEngagements from "@/components/RecentEngagements";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroCarousel />
      <IntroSection />
      <MissionVisionOfferings />
      <WhyChooseUs />
      <RecentEngagements />
      <Footer />
    </div>
  );
}
