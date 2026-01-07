import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MissionVisionOfferings() {
  const offerings = [
    {
      id: 1,
      title: "Intelligent Web Engine (Foundations)",
      description:
        "We design and optimize your website for search engines and AI platforms",
      link: "#",
    },
    {
      id: 2,
      title: "Secure Corporate Brain (Knowledge Layer)",
      description:
        "Enterprise-grade knowledge systems powered by LLMs, SLMs, RAG architecture",
      link: "#",
    },
    {
      id: 3,
      title: "Intelligent Business Process Automation (Execution Layer)",
      description: "End-to-end automation using AI, RPA, LLMs.",
      link: "#",
    },
    {
      id: 4,
      title: "Autonomous Strategic Growth (Proactive Layer)",
      description:
        "AI-powered growth systems that proactively analyze market signals",
      link: "#",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="space-y-12 lg:pr-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-brand-gradient">
                  Our Mission
                </span>
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                To drive AI-led transformation by delivering innovative,
                enterprise-grade solutions that empower businesses to operate
                smarter, faster, and at scale.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-brand-gradient">
                  Our Vision
                </span>
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                To become the most trusted global technology partner, shaping
                the future of industries through practical, agentic AI systems
                that deliver measurable growth.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                Our Offerings
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {offerings.map((offering) => (
                <div
                  key={offering.id}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">
                      {offering.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {offering.description}
                    </p>
                  </div>

                  <Link
                    href={offering.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
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
