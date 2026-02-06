"use client";

import MissionVisionOfferings from "@/components/MissionVisionOfferings";
import OurProducts from "@/components/OurProducts";
import Specialist from "@/components/Specialist";
import PerformanceGuarantee from "@/components/PerformanceGuarantee";
import Roadmap from "@/components/RoadMap";
import { MainPage } from "@/components/MainPage";
import AgentsDetails from "@/components/AgentsDetails";
import GlobalLocations from "@/components/GlobalLocations";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      <MainPage />
      {/* <HeroCarousel /> */}
      {/* <IntroSection /> */}
      <section className="relative py-8 border shadow-lg border-[#1f6fb2] max-w-7xl mx-auto rounded-xl overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-start items-start gap-8 pb-8 ">
            <h2 className="text-2xl flex-[35%] sm:text-3xl md:text-4xl font-bold leading-tight tracking-[-1.8px] text-[#000052]">
              Next-Gen AI & <br />
              Product Engineering
            </h2>

            <p className="max-w-full flex-[65%] text-lg md:text-xl font-medium text-slate-700">
              <span className="text-[#1f6fb2] font-bold">
                Pi Bi Technologies
              </span>{" "}
              is a global AI and digital technology company specializing in{" "}
              <span className="text-[#1f6fb2] font-bold">
                AI Solutions, Agentic process automation, product development,
                and enterprise digital transformation.
              </span>{" "}
              We help businesses automate workflows, enhance operational
              efficiency, and build intelligent systems that support sustainable
              growth.
            </p>
          </div>
        </div>
        <button
          className={`flex px-4 py-2 rounded-lg mx-auto items-center gap-2 text-sm font-bold uppercase tracking-[1.4px] text-white bg-[#1f6fb2] hover:opacity-80 cursor-pointer`}
          onClick={() => router.push("/about-us")}
        >
          Read Our Story
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>
      <MissionVisionOfferings />
      {/* <WhyChooseUs /> */}
      <OurProducts />
      <AgentsDetails />
      {/* <TechInovation /> */}
      <Specialist />
      <PerformanceGuarantee />
      <Roadmap />
      <GlobalLocations />
      {/* <RecentEngagements /> */}
    </div>
  );
}
