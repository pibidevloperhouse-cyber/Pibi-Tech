import { CheckCircle, Package, Shield } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: CheckCircle,
      title: "Visual Inspection",
      description:
        "AI-powered real-time defect detection on production lines. Inline QC, static QC, and end-of-line quality assurance.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Package,
      title: "Asset Identification",
      description:
        "Real-time tracking and verification of assets with precision. Track tire sidewalls, serial codes, barcodes and QR codes.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "Industrial Safety",
      description:
        "AI-assisted PPE detection and safety compliance monitoring. Reduce workplace hazards and ensure regulations compliance.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI-powered solutions for modern manufacturing and
            industrial operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition"
              >
                <div
                  className={`w-14 h-14 bg-linear-to-br ${solution.color} rounded-lg flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition">
                  Learn More
                  <span>→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
