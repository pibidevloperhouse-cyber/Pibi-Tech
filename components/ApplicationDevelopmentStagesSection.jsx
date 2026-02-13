"use client";

import {
  Search,
  PenTool,
  Layers,
  ShieldCheck,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const stages = [
  {
    title: "Discovery & Strategy",
    description:
      "Business goals → requirements → outcome orientation. We define clarity before code.",
    icon: Search,
  },
  {
    title: "UI / UX Design",
    description:
      "Human-centered design with intuitive flows, structured journeys, and experience-first thinking.",
    icon: PenTool,
  },
  {
    title: "Full-Stack Development",
    description:
      "Robust backend logic, scalable frontend interfaces, and seamless integrations.",
    icon: Layers,
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Automated and manual testing frameworks to ensure reliability, performance, and stability.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment & Scaling",
    description:
      "Cloud setup, CI/CD workflows, infrastructure configuration, and performance tuning.",
    icon: Rocket,
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing monitoring, continuous improvements, optimization, and long-term platform evolution.",
    icon: LifeBuoy,
  },
];

const ApplicationDevelopmentStagesSection = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="max-w-4xl mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Application Development Stages
            </span>
          </h2>

          <p className="text-slate-700 text-xl leading-relaxed">
            A structured lifecycle designed to move ideas into scalable,
            high-performance digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#248BB3]/10 mb-6">
                  <Icon className="w-7 h-7 text-[#248BB3]" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {stage.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApplicationDevelopmentStagesSection;
