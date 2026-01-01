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
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8 lg:gap-12">
          <div className="md:col-span-7 lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Your Trusted Partner in AI and Digital Transformation
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              SHARPWIZ Technologies is your dedicated partner in navigating the
              complexities of AI and digital transformation. We combine
              cutting-edge technology with a deep understanding of your business
              needs to deliver innovative, high-quality solutions. Our
              commitment to excellence, paired with our customer-centric
              approach, ensures that every project is a step toward your
              success.
            </p>
          </div>

          <div className="md:col-span-7 lg:col-span-3 lg:pl-6">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-slate-700 font-semibold">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
