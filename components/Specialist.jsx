import { HeartPulse, Factory, Rocket, Globe2 } from "lucide-react";
import Image from "next/image";

export default function Specialist() {
  const specialties = [
    {
      title: "Healthcare",
      description:
        "Streamlined clinical workflows and intelligent patient management processes designed for accuracy, compliance, and care continuity.",
      icon: HeartPulse,
      color: "bg-[#8A348D]",
    },
    {
      title: "Manufacturing",
      description:
        "Optimized facilities and AI-driven production workflows that increase efficiency, reduce downtime, and improve operational visibility.",
      icon: Factory,
      color: "bg-[#0066A4]",
    },
    {
      title: "SaaS Startups",
      description:
        "Scalable system architecture and AI acceleration enabling 5× faster agile execution and speed to market.",
      icon: Rocket,
      color: "bg-[#02B2E3]",
    },
    {
      title: "GCC Markets",
      description:
        "Localized intelligence systems designed to navigate regional regulations, supply chains, and market dynamics with confidence.",
      icon: Globe2,
      color: "bg-[#484393]",
    },
  ];

  return (
    <section className="section-padding bg-white" id="Services">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              We are specialists at
            </span>
          </h2>
          <p className="text-slate-700 text-xl leading-relaxed">
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
                className={`border border-slate-200 relative rounded-2xl p-6 hover:shadow-xl transition-all duration-300 ${item.color} hover:brightness-110 text-white`}
              >
                <div className="flex items-center justify-center border w-max p-4 border-white rounded-full mb-5">
                  <Icon className="w-12 h-12" />
                </div>

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

                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-md text-white/80">
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
