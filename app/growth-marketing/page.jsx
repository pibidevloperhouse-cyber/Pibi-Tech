"use client";

import AgenticAIServices from "@/components/AgenticAIServices";
import AgenticAISteps from "@/components/AgenticAISteps";
import AgenticAITypes from "@/components/AgenticAITypes";
import CTASection from "@/components/CTASection";
import GrowthServices from "@/components/GrowthServices";
import IndustriesAgenticAI from "@/components/IndustriesAgenticAI";
import TechnologyStack1 from "@/components/TechnologyStack1";
import UnlockGrowth from "@/components/UnlockGrowth";
import WhyAgenticAi from "@/components/WhyAgenticAi";
import WhyMarGrowth from "@/components/WhyMarGrowth";
import { ArrowRight, Target, TrendingUp, Undo2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AgenticProcessAutomation = () => {
  const texts = ["Automate", "Optimize", "Personalize", "Scale"];
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const metrics = [
    {
      value: "",
      unit: "",
      title: "Act with Autonomy",
      description:
        "AI agents operate independently, make informed decisions, and execute tasks without constant human supervision.",
      icon: TrendingUp,
    },
    {
      value: "",
      unit: "",
      title: "Handles Complex Workflows",
      description:
        "From multi-step processes to cross-system coordination, agents manage complexity with precision.",
      icon: Target,
    },
    {
      value: "",
      unit: "",
      title: "Learns & Improves Continuously",
      description:
        "Built-in learning loops help agents adapt to new data, behaviors, and business conditions.",
      icon: Undo2,
    },
    {
      value: "",
      unit: "",
      title: "Scales Across Teams & Tools",
      description:
        "Deploy once. Scale across departments, platforms, and enterprise systems seamlessly.",
      icon: ArrowRight,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative min-h-[80vh] flex justify-center items-center overflow-hidden text-white">
        <div className="relative mx-auto max-w-7xl px-6 pt-18 text-center">
          {/* <div className="mb-4 text-[#1f6fb2] text-2xl font-medium uppercase tracking-wide">
            Build a Revenue-Driven MarTech & Automation Ecosystem
          </div> */}
          <h1 className="text-5xl md:text-7xl text-[#1f6fb2] font-extrabold tracking-tight">
            <span className="flex flex-col gap-0 md:gap-1 justify-center items-center">
              We{"  "} <br />
              <span className="relative inline-block ml-2 md:ml-2 align-middle">
                <span key={index} className="animate-slide-fade">
                  {texts[index]} <br />
                </span>
                <span className="bg-clip-text mt-2 md:mt-0 text-transparent bg-linear-to-r from-cyan-400 to-blue-500">
                  Your Marketing Operations
                </span>
              </span>
            </span>
          </h1>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => router.push("/contact-us")}
              className="group inline-flex items-center max-sm:mx-auto gap-3 rounded-lg bg-linear-to-r from-[#2563eb] to-[#059669] px-6 py-3 text-lg font-semibold text-white transition"
            >
              Let's Work Together
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-black/70">
            Transform conventional marketing into a connected, data-powered
            growth engine that consistently generates leads, nurtures prospects,
            and accelerates revenue.
          </p>
        </div>
      </section>

      <WhyMarGrowth />
      <GrowthServices />
      <UnlockGrowth />
      <CTASection
        title="Kick Off Your MarTech & Automation Journey Today"
        content="Transform your marketing into a connected, intelligent growth engine."
        content2="Build smarter campaigns. Automate revenue. Scale with confidence."
        ctaText1="Let’s Work Together"
      />
    </div>
  );
};

export default AgenticProcessAutomation;
