"use client";

import CTA from "@/components/ProfitEngine/CTA";
import Feature from "@/components/ProfitEngine/Feature";
import Hero from "@/components/ProfitEngine/Hero";
import HowItWorks from "@/components/ProfitEngine/HowItWorks";
import Testimonials from "@/components/ProfitEngine/Testimonials";
import "@/app/app.css";

export default function BusinessIntelligent() {
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen text-slate-100 dark:text-slate-100 light:text-slate-900 antialiased">
      <main className="relative z-10">
        <Hero fadeUp={fadeUp} />
        <Feature fadeUp={fadeUp} />
        <Testimonials fadeUp={fadeUp} />
        <HowItWorks fadeUp={fadeUp} />
        <CTA fadeUp={fadeUp} />
      </main>
    </div>
  );
}
