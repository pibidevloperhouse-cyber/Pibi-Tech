import { ArrowRight } from "lucide-react";

export default function MissionVisionOfferings() {
  const offerings = [
    {
      id: 1,
      title: "Vision AI",
      description: "Facial recognition, real-time video analytics",
      link: "#",
    },
    {
      id: 2,
      title: "Generative AI",
      description: "Chatbots, process automation",
      link: "#",
    },
    {
      id: 3,
      title: "Digital Transformation",
      description: "Connect devices, people, processes",
      link: "#",
    },
    {
      id: 4,
      title: "POD and Hybrid Teams",
      description: "POD Teams, staffing augmentation, hybrid teams",
      link: "#",
    },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Our Mission
              </h3>
              <p className="text-slate-700 leading-relaxed">
                To drive technological advancement and business growth by
                delivering innovative, high-quality solutions that empower our
                clients to overcome challenges and seize opportunities in an
                ever-evolving digital landscape.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Our Vision
              </h3>
              <p className="text-slate-700 leading-relaxed">
                To be a leading global technology partner, renowned for shaping
                the future through cutting-edge innovation, strategic
                excellence, and unwavering commitment to client success and
                societal impact.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Our Offerings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {offerings.map((offering) => (
                <div
                  key={offering.id}
                  className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-shadow h-full flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {offering.title}
                    </h4>
                    <p className="text-slate-600 text-sm mb-4">
                      {offering.description}
                    </p>
                  </div>
                  <a
                    href={offering.link}
                    className="text-primary hover:text-primary-600 font-semibold flex items-center gap-1 transition"
                  >
                    Know more
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
