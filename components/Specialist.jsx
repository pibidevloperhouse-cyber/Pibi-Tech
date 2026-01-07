import { HeartPulse, Factory, Rocket, Globe2 } from "lucide-react";

export default function Specialist() {
  const specialties = [
    {
      title: "Healthcare",
      description:
        "Streamlined clinical workflows and intelligent patient management processes designed for accuracy, compliance, and care continuity.",
      icon: HeartPulse,
    },
    {
      title: "Manufacturing",
      description:
        "Optimized facilities and AI-driven production workflows that increase efficiency, reduce downtime, and improve operational visibility.",
      icon: Factory,
    },
    {
      title: "SaaS Startups",
      description:
        "Scalable system architecture and AI acceleration enabling 5× faster agile execution and speed to market.",
      icon: Rocket,
    },
    {
      title: "GCC Markets",
      description:
        "Localized intelligence systems designed to navigate regional regulations, supply chains, and market dynamics with confidence.",
      icon: Globe2,
    },
  ];

  return (
    <section className="section-padding bg-white" id="Services">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              We are specialists at
            </span>
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            Tailored vertical AI agents built for high-stakes industries where
            precision, compliance, and performance matter most.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-5">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
