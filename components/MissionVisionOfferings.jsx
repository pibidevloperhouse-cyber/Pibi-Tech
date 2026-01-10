import {
  ArrowRight,
  Binoculars,
  Brain,
  BriefcaseBusiness,
  CalendarSync,
  FolderLock,
  Telescope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MissionVisionOfferings() {
  const offerings = [
    {
      id: 1,
      title: "Intelligent Web Engine (Foundations)",
      description:
        "We design and optimize your website for search engines and AI platforms",
      link: "contact-us",
      icon: Brain,
      color: "bg-[#8A348D]",
    },
    {
      id: 2,
      title: "Secure Corporate Brain (Knowledge Layer)",
      description:
        "Enterprise-grade knowledge systems powered by LLMs, SLMs, RAG architecture",
      link: "contact-us",
      color: "bg-[#0066A4]",
      icon: FolderLock,
    },
    {
      id: 3,
      title: "Intelligent Business Process Automation (Execution Layer)",
      description: "End-to-end automation using AI, RPA, LLMs.",
      link: "intelligent-process-automation",
      color: "bg-[#02B2E3]",
      icon: BriefcaseBusiness,
    },
    {
      id: 4,
      title: "Autonomous Strategic Growth (Proactive Layer)",
      description:
        "AI-powered growth systems that proactively analyze market signals",
      link: "contact-us",
      color: "bg-[#484393]",
      icon: CalendarSync,
    },
  ];

  return (
    <section className="section-padding bg-white" id="Solutions">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-col-2 gap-12 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                Our Offerings
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {offerings.map((offering) => (
                <div
                  key={offering.id}
                  className={`${offering.color} rounded-xl relative aspect-5/6 p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between`}
                >
                  <div className="text-white text-3xl absolute -top-5 -right-5 rotate-12">
                    <div className="w-32 aspect-square relative">
                      <Image
                        src="/pi.png"
                        alt="PI-BI Technologies"
                        fill
                        className="object-contain opacity-20"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center border w-max p-4 text-white border-white rounded-full mb-5">
                    <offering.icon className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      {offering.title}
                    </h4>
                    <p className="text-white/80 leading-relaxed mb-6">
                      {offering.description}
                    </p>
                  </div>

                  <Link
                    href={offering.link}
                    className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
                  >
                    Know more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
