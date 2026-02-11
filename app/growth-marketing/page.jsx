"use client";

import AgenticAIServices from "@/components/AgenticAIServices";
import AgenticAISteps from "@/components/AgenticAISteps";
import AgenticAITypes from "@/components/AgenticAITypes";
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
      <section className="relative overflow-hidden text-white">
        <div className="relative mx-auto max-w-7xl px-6 pt-18 text-center">
          <div className="mb-4 text-[#1f6fb2] text-2xl font-medium uppercase tracking-wide">
            Build a Revenue-Driven MarTech & Automation Ecosystem
          </div>
          <h1 className="text-5xl md:text-7xl text-[#1f6fb2] font-extrabold tracking-tight">
            <span className="flex flex-col gap-0 md:gap-1 md:flex-row justify-center items-center">
              We{"  "}
              <span className="relative inline-block ml-2 md:ml-2 align-middle">
                <span key={index} className="animate-slide-fade">
                  {texts[index]} <br className="block md:hidden" />
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
              className="group inline-flex items-center gap-3 cursor-pointer rounded-lg bg-[#1f6fb2] px-6 py-3 text-md md:text-xl font-semibold text-white transition hover:bg-[#1f6fb2]/90"
            >
              Adopt AI and Automation Now
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
      <AgenticAITypes />
      <UnlockGrowth />
      <section className="bg-linear-to-b from-slate-700 to-slate-900 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Kick Off Your MarTech & Automation Journey Today
          </h2>

          <p className="mt-4 text-lg text-slate-100 max-w-3xl mx-auto">
            Transform your marketing into a connected, intelligent growth
            engine.
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all duration-300 text-center w-full hover:bg-slate-200 hover:scale-105"
            >
              Let’s Work Together
            </Link>
          </div>
          <p className="mt-4 text-lg text-center text-slate-100 max-w-3xl mx-auto">
            Build smarter campaigns. Automate revenue. Scale with confidence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AgenticProcessAutomation;
