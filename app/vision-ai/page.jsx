import BuiltForIndustry from "@/components/vision-ai/BuildForIndustry";
import ContactForm from "@/components/vision-ai/ContactUs";
import CustomerStories from "@/components/vision-ai/CustomerStories";
import DeliveryProcess from "@/components/vision-ai/DeliveryOptions";
import DeploymentFlexibility from "@/components/vision-ai/DeploymentCompatibility";
import HeroBanner from "@/components/vision-ai/Hero";
import SolutionCard from "@/components/vision-ai/SolutionsCard";
import TrustedCompanies from "@/components/vision-ai/TrustedCompanies";
import WhyPibi from "@/components/vision-ai/WhyPibi";
import { Settings } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <TrustedCompanies />
      <h3 className="text-3xl text-center font-bold bg-clip-text text-transparent bg-brand-gradient mb-4">
        Our Solutions
      </h3>
      <SolutionCard
        title={"Visual Inspection"}
        description={
          "Maintain high production standards by detecting defects early and ensuring consistent quality at every stage of manufacturing"
        }
        icon={<Settings className="w-8 h-8" />}
        image={"/vision-ai/solutions/visual-inspection.png"}
      />
      <SolutionCard
        title={"Asset Identification"}
        description={
          "Automate track-and-trace across industries. Cut down on manual data entry, reduce error, and keep operations moving faster"
        }
        icon={<Settings className="w-8 h-8" />}
        image={"/vision-ai/solutions/asset-identification.png"}
      />
      <SolutionCard
        title={"Industrial Safety"}
        description={
          "Identify risks, monitor safety compliance, and prevent workplace hazards with smart AI safety solutions"
        }
        icon={<Settings className="w-8 h-8" />}
        image={"/vision-ai/solutions/industrial-safety.png"}
      />

      <WhyPibi />
      {/* <DeliveryProcess /> */}
      <DeploymentFlexibility />
      <BuiltForIndustry />
      {/* <CustomerStories /> */}
      <ContactForm />
    </div>
  );
}
