"use client";

import ImplementationProcessSection from "@/components/PriceSense/ImplementationProcessSection";
import OurAdvantageSection from "@/components/PriceSense/OurAdvantageSection";
import PriceSenseIntroSection from "@/components/PriceSense/PriceSenseIntroSection";
import PriceSenseRevenueImpact from "@/components/PriceSense/PriceSenseRevenueImpact";
import PricingIntelligenceCapabilities from "@/components/PriceSense/PricingIntelligenceCapabilities";
import ProfitPrecisionFramework from "@/components/PriceSense/ProfitPrecisionFramework";
import TraditionalPricingChallenges from "@/components/PriceSense/TraditionalPricingChallenges";
import WhoPriceSenseIsFor from "@/components/PriceSense/WhoPriceSenseIsFor";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl text-center md:text-start px-6 py-24">
        <div className="md:col-span-3">
          <p className="mb-4 text-[#1f6fb2] text-2xl font-medium tracking-wide">
            PriceSense
          </p>

          <h1 className="text-3xl text-black md:text-5xl max-w-4xl font-semibold leading-tight">
            Smarter Pricing. Higher Win Rates. Stronger Margins.
          </h1>
          <div className="mt-10 flex items-center gap-6">
            <button
              onClick={() => router.push("/contact-us")}
              className="group inline-flex items-center max-sm:mx-auto gap-3 rounded-lg bg-[#1f6fb2] px-6 py-3 text-lg font-semibold text-white transition hover:bg-[#1f6fb2]/90"
            >
              Talk to a Pricing Expert
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>

          <p className="mt-6 max-w-xl text-xl text-black/70">
            AI-powered pricing intelligence that recommends the optimal price
            balancing competitiveness and profitability in real time.
          </p>
        </div>
      </div>
      <PriceSenseIntroSection />
      <PriceSenseRevenueImpact />
      <PricingIntelligenceCapabilities />
      <ProfitPrecisionFramework />
      <TraditionalPricingChallenges />
      <OurAdvantageSection />
      <ImplementationProcessSection />
      <WhoPriceSenseIsFor />
      <section className="bg-linear-to-b from-slate-700 to-slate-900 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Turn Pricing Into a Competitive Advantage
          </h2>

          <p className="mt-4 text-lg text-slate-100 max-w-3xl mx-auto">
            PriceSense transforms pricing from a reactive task into a structured
            revenue engine helping organizations close deals faster while
            protecting profitability.
          </p>

          <p className="mt-4 text-lg text-slate-100 max-w-3xl mx-auto">
            Every price becomes intentional. Every decision becomes measurable.
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all duration-300 text-center w-full hover:bg-slate-200 hover:scale-105"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex text-center items-center justify-center gap-2 rounded-xl text-white border border-white px-8 py-4 text-base font-semibold transition-all duration-300 w-full hover:bg-white hover:text-slate-900 hover:scale-105"
            >
              Talk to a Pricing Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
