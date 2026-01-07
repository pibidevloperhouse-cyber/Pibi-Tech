"use client";

import { useState } from "react";
import { Cloud, Server, Wifi, Smartphone, Cpu, Boxes } from "lucide-react";

export default function DeploymentCompatibility() {
  const [activeTab, setActiveTab] = useState("deployment");

  const deploymentModels = [
    {
      icon: Server,
      title: "Edge",
      description:
        "On-premise processing for real-time performance and data privacy",
    },
    {
      icon: Cloud,
      title: "Cloud",
      description: "Scalable cloud-based solutions with global accessibility",
    },
    {
      icon: Wifi,
      title: "Offline",
      description:
        "Operate without connectivity in remote manufacturing environments",
    },
  ];

  const compatibilityOptions = [
    {
      icon: Cpu,
      title: "Hardware",
      description: "Compatible with industrial cameras and IoT devices",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "Android and iOS apps for on-the-go access and monitoring",
    },
    {
      icon: Boxes,
      title: "Software",
      description: "Integrates with ERP/MES and existing software ecosystems",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Deployment Flexibility & Compatibility
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible deployment options and seamless integration with your
            existing infrastructure
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-gray-300 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("deployment")}
              className={`px-6 py-2 rounded-md font-medium transition ${
                activeTab === "deployment"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Deployment Models
            </button>
            <button
              onClick={() => setActiveTab("compatibility")}
              className={`px-6 py-2 rounded-md font-medium transition ${
                activeTab === "compatibility"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Compatibility
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(activeTab === "deployment"
            ? deploymentModels
            : compatibilityOptions
          ).map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center p-8 border border-gray-200 rounded-xl hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-linear-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
