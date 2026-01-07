import { TrendingUp, Zap, Clock } from "lucide-react";

export default function WhyPibi() {
  const kpis = [
    {
      icon: TrendingUp,
      percentage: "80%",
      title: "Error Reduction",
      description:
        "Significantly reduce defects and errors in production with AI-powered visual inspection.",
    },
    {
      icon: Zap,
      percentage: "70%",
      title: "Productivity Gain",
      description:
        "Increase operational efficiency and throughput with automated processes.",
    },
    {
      icon: Clock,
      percentage: "50%",
      title: "Faster Operations",
      description:
        "Accelerate production cycles and reduce time-to-market with intelligent automation.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Why Scanflow?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-leading results that drive real business value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-accent mb-2">
                  {kpi.percentage}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {kpi.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {kpi.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your operations?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-[#1D4CAE] text-white font-semibold rounded-lg hover:shadow-lg transition">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
