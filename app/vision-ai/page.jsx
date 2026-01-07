import BuiltForIndustry from "@/components/vision-ai/BuildForIndustry";
import ContactForm from "@/components/vision-ai/ContactUs";
import CustomerStories from "@/components/vision-ai/CustomerStories";
import DeliveryProcess from "@/components/vision-ai/DeliveryOptions";
import DeploymentFlexibility from "@/components/vision-ai/DeploymentCompatibility";
import HeroBanner from "@/components/vision-ai/Hero";
import TrustedCompanies from "@/components/vision-ai/TrustedCompanies";
import WhyPibi from "@/components/vision-ai/WhyPibi";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <TrustedCompanies />
      <WhyPibi />
      <DeliveryProcess />
      <DeploymentFlexibility />
      <BuiltForIndustry />
      <CustomerStories />
      <ContactForm />
    </div>
  );
}
