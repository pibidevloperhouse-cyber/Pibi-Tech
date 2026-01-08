"use client";

import { ArrowRight, Bot, Sparkles, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import Slider from "./Slider";

export function MainPage() {
  const texts = ["Build", "Code with", "Maintain", "Test with", "Operate"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#070a18] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e40af30,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#0ea5e930,transparent_55%)]" />

      <Sparkles className="absolute left-24 top-40 text-blue-400/60" />
      <Plus className="absolute left-40 top-24 text-white/40" />
      <Bot className="absolute right-40 top-32 text-blue-400/70" />
      <div className="relative mx-auto max-w-7xl px-6 pt-18 pb-7 text-center">
        <h1 className="text-5xl md:text-6xl text-white font-extrabold tracking-tight">
          <span className="block mt-2">
            WE{" "}
            <span className="relative inline-block h-[1.2em] overflow-hidden align-middle">
              <span key={index} className="animate-slide-fade">
                {texts[index]}{" "}
              </span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500">
                {"{AI AGENTS}"}
              </span>
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
          Automate intelligently. Scale faster. Build enterprise-grade AI agents
          that work across your business ecosystem.
        </p>

        <div className="mt-10 flex justify-center">
          <button className="group inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3 text-lg font-semibold text-[#070a18] transition hover:bg-blue-50">
            Adopt AI and Automation Now
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white transition group-hover:translate-x-1">
              <ArrowRight size={18} />
            </span>
          </button>
        </div>

        <div className="mt-20">
          <p className="mb-8 text-lg text-white">
            Trusted by Global Enterprises and Business Leaders
          </p>

          <Slider />
        </div>
      </div>
    </section>
  );
}
