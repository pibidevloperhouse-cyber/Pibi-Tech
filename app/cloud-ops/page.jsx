"use client";

import AgenticAIServices from "@/components/AgenticAIServices";
import AgenticAISteps from "@/components/AgenticAISteps";
import AgenticAITypes from "@/components/AgenticAITypes";
import CloudOpsServices from "@/components/CloudOpsServices";
import CloudOpsSteps from "@/components/CloudOpsSteps";
import CloudOpsTechStacks from "@/components/CloudOpsTechStacks";
import IndustriesAgenticAI from "@/components/IndustriesAgenticAI";
import TechnologyStack1 from "@/components/TechnologyStack1";
import WhyAgenticAi from "@/components/WhyAgenticAi";
import { ArrowRight, Target, TrendingUp, Undo2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CloudOps = () => {
  const texts = ["Scales", "Self-Heals", "Secures", "Automates", "Optimizes"];
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const metrics = [
    {
      value: "01",
      unit: "",
      title: "Assess & Architect",
      description:
        "Deep infrastructure audit and architecture blueprint aligned to your growth roadmap.",
      icon: TrendingUp,
    },
    {
      value: "02",
      unit: "",
      title: "Automate & Secure",
      description:
        "Cloud, DevOps, and cybersecurity frameworks engineered for speed and resilience.",
      icon: Target,
    },
    {
      value: "03",
      unit: "",
      title: "Optimize & Scale",
      description:
        "Continuous performance tuning and cost optimization as your systems evolve.",
      icon: Undo2,
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
        <div className="relative mx-auto max-w-7xl px-3 md:px-6 py-18 text-center">
          <h1 className="text-4xl md:text-7xl text-[#1f6fb2] font-bold md:font-extrabold tracking-tight">
            <span className="flex flex-col gap-0 md:gap-1 justify-center items-center">
              Build Infrastructure That {"  "}
              <br />
              <span className="relative inline-block ml-2 md:ml-2 align-middle">
                <span key={index} className="animate-slide-fade">
                  {texts[index]} <br className="block md:hidden" />
                </span>
                <span className="bg-clip-text mt-2 md:mt-0 text-transparent bg-linear-to-r from-cyan-400 to-blue-500">
                  {" "}
                  Your Business Growth
                </span>
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-black/70">
            Cloud, DevOps, cybersecurity, and intelligent infrastructure
            engineered for modern enterprises and fast-growing startups.
          </p>

          <div className="mt-10 flex justify-center items-center gap-6 flex-col md:flex-row">
            <button
              onClick={() => router.push("/contact-us")}
              className="group inline-flex items-center gap-3 cursor-pointer rounded-lg bg-[#1f6fb2] px-6 py-3 text-md md:text-xl font-semibold text-white transition hover:bg-[#1f6fb2]/90"
            >
              Modernize Infrastructure
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
            <button
              onClick={() => router.push("/contact-us")}
              className="group inline-flex items-center gap-3 cursor-pointer rounded-lg text-[#1f6fb2] border border-[#1f6fb2] px-6 py-3 text-md md:text-xl font-semibold bg-white transition hover:bg-[#1f6fb2]/90 hover:text-white"
            >
              Talk to an Expert
              <span className="flex h-9 w-9 items-center justify-center rounded-md text-white bg-[#1f6fb2] transition group-hover:text-[#1f6fb2] group-hover:bg-white group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="section-padding bg-blue-50">
        <div className="container-max">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                How We Accelerate Your Infrastructure Evolution
              </span>
            </h2>
            <p className="text-slate-700 text-xl leading-relaxed">
              A structured path from assessment to scale — built to reduce
              friction and maximize reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 mb-6">
                    <Icon className="w-7 h-7 text-[#248BB3]" />
                  </div>

                  <div className="mb-2">
                    <span className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-brand-gradient">
                      {item.value}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-md leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CloudOpsServices />
      <CloudOpsTechStacks />
      <CloudOpsSteps />
      <section className="bg-linear-to-b from-slate-700 to-slate-900 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Infrastructure That Grows With Your Business
          </h2>

          <p className="mt-4 text-lg text-slate-100 max-w-3xl mx-auto">
            We engineer cloud and infrastructure ecosystems that stay secure,
            automated, and resilient — so your teams focus on innovation, not
            firefighting.
          </p>

          <div className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center w-max mx-auto gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all duration-300 text-center hover:bg-slate-200 hover:scale-105"
            >
              Start Your Infrastructure Transformation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudOps;
