"use client";

import HeroSection from "@/components/intelligent-structure/HeroSection";
import { cn } from "@/lib/utils";
import { ChevronRight, Download, Star } from "lucide-react";
import React, { useState, useEffect } from "react";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { PiCodesandboxLogoThin } from "react-icons/pi";
import { TbClick } from "react-icons/tb";

const testimonials = [
  {
    name: "Bryan Guy",
    role: "CEO, DATABILLITY",
    text: "Collaborating with Pibi Tech on cloud architecture for our SaaS project was an outstanding experience...",
  },
  {
    name: "Vince Palmacci",
    role: "Principal Solution Architect, EQB",
    text: "Collaborating with Rakesh Gohel on Azure cloud architecture was an outstanding experience...",
  },
  {
    name: "Sarah Collins",
    role: "CTO, FinCore",
    text: "Their DevOps automation reduced our deployment time by over 60%...",
  },
  {
    name: "James Patel",
    role: "VP Engineering, Cloudify",
    text: "Exceptional Kubernetes expertise and rock-solid infrastructure design...",
  },
  {
    name: "Emily Chen",
    role: "Product Lead, SaaSify",
    text: "Their cloud migration strategy saved us thousands per month...",
  },
  {
    name: "Michael Brown",
    role: "Founder, DataNest",
    text: "Reliable, scalable, and secure  exactly what we needed...",
  },
];

const services = [
  {
    title: "Agentic AI Model Engineering",
    description:
      "Scale your AI safely with Agentic AI-centered enterprise-grade LLMOps. We implement continuous observability, prompt management, and governance layers so you can deploy models that are accurate and secure.",
  },
  {
    title: "Cloud-Native AI Agent Solutions",
    description:
      "We engineer AI agents tailored to your unique business logic. Built to run securely within your environment, these agents leverage your proprietary data and execute complex workflows autonomously.",
  },
];

const AgenticAI = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev + itemsPerView >= testimonials.length ? 0 : prev + itemsPerView,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [itemsPerView]);

  const visibleItems = testimonials.slice(
    activeIndex,
    activeIndex + itemsPerView,
  );

  const totalSteps = Math.ceil(testimonials.length / itemsPerView);
  const currentStep = Math.floor(activeIndex / itemsPerView);

  return (
    <div>
      <HeroSection
        title={"Ship agentic AI that <br /> actually generates Value"}
        content={
          "We help enterprises design, build, and operate GenAI and AI agent systems, from first pilot to fully governed, production-grade Agentic AI Ops."
        }
      />
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl mb-7 md:text-5xl text-center w-full font-bold leading-tight md:leading-[0.8] tracking-[-1.8px] text-[#000052]">
            Our Services
          </h2>
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "mb-8 flex flex-col-reverse md:flex-row gap-4 md:gap-6",
                index % 2 === 1 ? "md:flex-row-reverse" : "",
              )}
            >
              <div className="flex-1 flex justify-center flex-col items-center md:items-start">
                <h3 className="text-3xl max-sm:text-center md:text-5xl font-semibold text-[#000052] leading-[1.1] md:leading-[0.9]">
                  {service.title}
                </h3>
                <p className="mt-4 text-lg text-slate-700">
                  {service.description}
                </p>
                <button className="mt-4 flex items-center gap-2 text-[15px] font-semibold bg-[#248BB3] uppercase text-white px-4 py-2 rounded hover:bg-[#1A6A8C] transition-colors">
                  Learn more
                </button>
              </div>
              <div className="flex-1 p-3">
                <img
                  src={`/service${index + 1}.png`}
                  alt={service.title}
                  className="w-full aspect-video border-4 border-[#000052] shadow-lg mt-6 md:mt-0"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl mb-7 md:text-5xl text-center w-full font-bold leading-tight md:leading-[0.8] tracking-[-1.8px] text-[#000052]">
            Key Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-[#000052] bg-white p-8">
              <PiCodesandboxLogoThin className="w-12 h-12 mb-8 text-[#248BB3]" />
              <h3 className="text-[35px] font-bold text-[#000052] mb-4">
                Data Architecture
              </h3>
              <p className="text-lg text-slate-700 mb-8">
                We architect the data pipelines that power production-ready AI
                systems
              </p>
              <button className="flex items-center gap-2 text-[15px] font-semibold text-[#248BB3] hover:underline">
                Learn more
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="border-2 border-[#000052] bg-white p-8">
              <TbClick className="w-12 h-12 mb-8 text-[#248BB3]" />
              <h3 className="text-[35px] font-bold text-[#000052] mb-4">
                Data Evaluation
              </h3>
              <p className="text-lg text-slate-700 mb-8">
                Assess data quality and relevance for optimized AI and
                businesses Intelligence
              </p>
              <button className="flex items-center gap-2 text-[15px] font-semibold text-[#248BB3] hover:underline">
                Learn more
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="border-2 border-[#000052] bg-white p-8">
              <BsDatabaseFillCheck className="w-12 h-12 mb-8 text-[#248BB3]" />
              <h3 className="text-[35px] font-bold text-[#000052] mb-4">
                KG Enabled AI
                <br />
                Agents
              </h3>
              <p className="text-lg text-slate-700 mb-8">
                We help you build AI Agents powered by Knowledge graphs
              </p>
              <button className="flex items-center gap-2 text-[15px] font-semibold text-[#248BB3] hover:underline">
                Learn more
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[45px] font-bold text-[#000052] mb-16">
            Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 pb-16 border-t border-b border-slate-200 py-8">
            <div className="text-center">
              <div className="text-[59px] font-bold text-orange-400 leading-[1.1] tracking-[-3px] mb-2">
                8+
              </div>
              <div className="text-sm font-bold uppercase tracking-[1.4px] text-slate-600">
                Years of Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-[59px] font-bold text-orange-400 leading-[1.1] tracking-[-3px] mb-2">
                30+
              </div>
              <div className="text-sm font-bold uppercase tracking-[1.4px] text-slate-600">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-[59px] font-bold text-orange-400 leading-[1.1] tracking-[-3px] mb-2">
                100%
              </div>
              <div className="text-sm font-bold uppercase tracking-[1.4px] text-slate-600">
                Satisfaction
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleItems.map((item, i) => (
              <div
                key={i}
                className="bg-[#000052] rounded-2xl p-16 text-white overflow-hidden relative"
              >
                <div className="mb-6">
                  <h4 className="text-[34px] font-bold mb-6 text-white">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-3">
                    <div className="h-0.5 w-8 bg-orange-300"></div>
                    <p className="text-xl font-medium text-orange-300 uppercase tracking-wider">
                      {item.role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 stroke-black"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-base font-light italic leading-none text-blue-50 opacity-90">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-2 justify-center">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i * itemsPerView)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentStep ? "w-12 bg-[#248BB3]" : "w-6 bg-[#00164C]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0F107A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-orangetext-orange-400 mx-auto mb-8"></div>
            <h2 className="text-[46px] font-bold mb-6">
              <span className="text-white">INDUSTRIES WE </span>
              <span className="text-indigo-200">SERVE</span>
            </h2>
            <p className="text-xl font-light text-[#E0E7FF] max-w-4xl mx-auto">
              At Pibi Tech, we bring our innovative solutions and creative
              problem-solving approach to a wide range of industries. Our
              versatile expertise allows us to address the unique challenges
              faced by different sectors, delivering customized strategies that
              drive success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Services",
                description:
                  "Modernizing legacy systems and enabling secure, real-time transactions.",
                icon: "🏛️",
              },
              {
                title: "Banking & Fintech",
                description:
                  "Building next-gen digital wallets, fraud detection AI, and open banking ecosystems.",
                icon: "💳",
              },
              {
                title: "Insurance",
                description:
                  "Automating claims processing and leveraging predictive analytics for risk assessment.",
                icon: "🛡️",
              },
              {
                title: "High Tech & IT",
                description:
                  "Accelerating product lifecycles with DevOps automation and scalable microservices.",
                icon: "💻",
              },
              {
                title: "SaaS Platforms",
                description:
                  "Architecting scalable multi-tenant environments with strict data isolation.",
                icon: "☁️",
              },
              {
                title: "Retail",
                description:
                  "Transforming customer experiences with AI-driven personalization.",
                icon: "🛍️",
              },
            ].map((industry, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-white/5 bg-[#0F357A] hover:bg-[#0F357A]/80 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-2xl mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-[19px] font-bold text-white uppercase tracking-tight mb-3">
                  {industry.title}
                </h3>
                <p className="text-sm font-medium text-blue-50">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-15 pb-36 bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #000 0.07%, rgba(0, 0, 0, 0) 0.07%), linear-gradient(180deg, #000 0.11%, rgba(0, 0, 0, 0) 0.11%)",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-16 pb-12 border-b border-slate-200">
            <div>
              <h2 className="text-[45px] font-bold text-[#000052] mb-4">
                Pibi Tech Insights
              </h2>
              <p className="text-lg text-slate-600">
                Dive into our latest thoughts on technology, innovation, and
                business transformation.
              </p>
            </div>
            <button className="px-6 py-3 border border-slate-400 text-sm font-bold uppercase tracking-[1.4px] text-[#000052] hover:bg-slate-50 transition-colors">
              View All Articles
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/4aa136549b311946348ac3cfab45a1caf77459be?width=775",
                title:
                  "Modernizing Legacy Code with Claude Code: A Comprehensive Guide",
                excerpt:
                  "Legacy codebases are major hassles for any enterprise trying to scale. However, Claude's code now allows for refactoring massive legacy code bases. Lets learn how",
              },
              {
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/2104d55535bc42c76cad2ad96e079e40393bd5be?width=775",
                title:
                  "2025's Remarkable Evolution of AI Agents You Should Know",
                excerpt:
                  "Artificial Intelligence has come a long way in a short time, but what is truly groundbreaking is the rise of AI agents – Systems that do more than jus...",
              },
              {
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/ca884c51978d8fa1c541d0b8285b56b83e88b765?width=775",
                title: "2024's Most Powerful AI Agent Papers",
                excerpt:
                  "AI Agents have become one of the most popular tech trends of 2024, but they are still pretty new and require a lot of improvement. This year we saw an...",
              },
            ].map((article, i) => (
              <article key={i} className="group bg-white">
                <div className="relative bg-slate-200 h-64 overflow-hidden mb-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 border-r border-b border-l border-slate-200">
                  <h3 className="text-[23px] font-bold text-[#000052] leading-none [mb-4">
                    {article.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-none mb-6">
                    {article.excerpt}
                  </p>
                  <div className="pt-6 border-t border-slate-200">
                    <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-[1.4px] text-[#000052] hover:text-[#248BB3] transition-colors">
                      Read Story
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#000052] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[45px] font-bold text-white mb-4 tracking-[-1.2px]">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl font-light text-blue-50">
              Let's discuss how our ambitions can help you achieve your goals.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="px-10 py-4 bg-orange-400 text-[#000052] text-sm font-bold uppercase tracking-[1.4px] hover:bg-[#008080] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-[#000052] border-t border-white/5 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#051126] p-20 relative overflow-hidden mb-16">
            <div className="absolute top-0 right-0 w-64 h-full bg-purple/10 transform -rotate-12 translate-x-24 -translate-y-12"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <div className="inline-block px-3 py-1 border border-[#248BB3]/30 bg-purple/50 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-50">
                    Free Resource
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white leading-[1.2] tracking-[-0.75px] mb-4">
                  Download Our Free Guide on
                  <br />
                  <span className="text-indigo-200">
                    Cloud Infrastructure Optimization
                  </span>
                </h3>
                <p className="text-sm text-slate-500 leading-[1.2]">
                  Discover the secrets to reducing costs and boosting
                  performance. Our expert guide provides actionable insights for
                  modern enterprises.
                </p>
              </div>

              <div className="bg-[#000052] border border-white/5 p-8">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#051126] border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-[#248BB3]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-[#051126] border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-[#248BB3]"
                      />
                    </div>
                  </div>
                  <button className="w-full bg-white text-[#000052] py-3 px-6 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[1.4px] hover:bg-slate-100 transition-colors">
                    <Download className="w-4 h-4" />
                    Download Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgenticAI;
