"use client";

import FirstSection from "@/components/ComplianceBot/FirstSection";
import FivthSection from "@/components/ComplianceBot/FivthSection";
import FourthSection from "@/components/ComplianceBot/FourthSection";
import SecondSection from "@/components/ComplianceBot/SecondSection";
import SeventhSection from "@/components/ComplianceBot/SeventhSection";
import SixthSection from "@/components/ComplianceBot/SixthSection";
import ThirdSection from "@/components/ComplianceBot/ThirdSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ComplianceBot = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl text-center md:text-start px-6 py-24">
        <div className="md:col-span-3">
          <p className="mb-4 text-[#1f6fb2] text-2xl font-medium tracking-wide">
            Compliance Bot
          </p>

          <h1 className="text-3xl text-black md:text-5xl max-w-4xl font-semibold leading-tight">
            Verification-First Compliance Intelligence — Validate Before You
            File
          </h1>

          <p className="mt-6 max-w-xl text-xl text-black/70">
            Filing tools submit data. Compliance Bot protects it.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <button
              onClick={() => router.push("/contact-us")}
              className="group inline-flex items-center max-sm:mx-auto gap-3 rounded-lg bg-[#1f6fb2] px-6 py-3 text-lg font-semibold text-white transition hover:bg-[#1f6fb2]/90"
            >
              Speak With a Compliance Specialist
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1f6fb2] transition group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>

          <p className="mt-6 max-w-xl text-xl text-black/70">
            Before any tax or GST return is filed, Compliance Bot verifies
            accuracy, detects risks, and highlights compliance gaps — ensuring
            every submission is review-ready and penalty-safe.
          </p>
        </div>
      </div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FivthSection />
      <SixthSection />
      <SeventhSection />
      <section className="bg-linear-to-b from-slate-700 to-slate-900 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Move Beyond Reactive Filing?
          </h2>

          <p className="mt-4 text-lg text-slate-100 max-w-3xl mx-auto">
            Stop chasing deadlines. Stop correcting preventable errors.
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all duration-300 text-center w-full hover:bg-slate-200 hover:scale-105"
            >
              Build Your Compliance Workflow
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex text-center items-center justify-center gap-2 rounded-xl text-white border border-white px-8 py-4 text-base font-semibold transition-all duration-300 w-full hover:bg-white hover:text-slate-900 hover:scale-105"
            >
              Book a Compliance Consultation
            </Link>
          </div>
          <p className="mt-4 text-lg text-slate-100 max-w-3xl mx-auto">
            Build a verification-driven compliance workflow that protects your
            filings before submission — not after.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ComplianceBot;
