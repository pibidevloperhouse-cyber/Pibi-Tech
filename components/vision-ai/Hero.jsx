"use client";

import { useState } from "react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("inspection");

  const tabs = [
    {
      id: "inspection",
      label: "Visual Inspection",
      title: "Visual Inspection Automated.",
      description:
        "Ensure product meets standards during every stage of manufacturing.",
    },
    {
      id: "identification",
      label: "Asset Identification",
      title: "Asset Identification Simplified.",
      description:
        "Track and verify every asset in real-time with precision and reliability.",
    },
  ];

  return (
    <section className="w-full bg-white pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="w-[90%] bg-blue-200 absolute left-1/2 -translate-x-1/2 top-0 h-full rounded-b-full -z-10" />
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-gray-300 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md font-medium transition ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <div key={tab.id} className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
                      {tab.title}
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                      {tab.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button className="px-8 py-3 bg-linear-to-r from-primary to-[#1D4CAE] text-white font-semibold rounded-lg hover:shadow-lg transition">
                        Explore
                      </button>
                      <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition">
                        Request Demo
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>

          <div className="relative">
            <div className="aspect-video rounded-xl bg-linear-to-br from-blue-50 via-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary/40 rounded-full" />
                </div>
                <p className="text-gray-600 font-medium">
                  {activeTab === "inspection"
                    ? "Visual Inspection AI"
                    : "Asset Tracking"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
