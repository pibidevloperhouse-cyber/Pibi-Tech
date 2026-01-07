import { CheckCircle2 } from "lucide-react";

export default function IntroSection() {
  const features = [
    "Innovation driven",
    "Customer-Centric Approach",
    "Excellence in Delivery",
    "Long-Term Relationships",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-7 lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                Who we are
              </span>
            </h2>

            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              <span className="font-semibold text-primary">
                PI-BI Technologies
              </span>{" "}
              is a leading provider of AI transformation solutions that craft
              unique competitive advantages through agentic orchestration.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                What we do
              </span>
            </h2>

            <p className="text-slate-700 text-lg leading-relaxed">
              We re-engineer your business to become
              <span className="font-semibold text-secondary">
                {" "}
                future-ready{" "}
              </span>
              with
              <span className="font-semibold text-primary"> 5× growth</span>.
            </p>
          </div>

          <div className="md:col-span-7 lg:col-span-3">
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-6 h-6 text-primary shrink-0"
                    color="#1f6fb2"
                  />
                  <span className="text-primary font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
