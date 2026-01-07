import Footer from "@/components/Footer";
import DeploymentCompatibility from "@/components/vision-ai/DeploymentCompatibility";
import Hero from "@/components/vision-ai/Hero";
import Solutions from "@/components/vision-ai/Solutions";
import TrustedCompanies from "@/components/vision-ai/TrustedCompanies";
import WhyPibi from "@/components/vision-ai/WhyPibi";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Solutions />
      <TrustedCompanies />
      <DeploymentCompatibility />
      <WhyPibi />
      <Footer />
    </div>
  );
}
