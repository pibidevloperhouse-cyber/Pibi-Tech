import { ArrowRight } from "lucide-react";

export default function RecentEngagements() {
  const engagements = [
    {
      id: 1,
      title: "Vision AI",
      subtitle: "Industry 5.0 for Enterprises",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&w=600&h=400",
      link: "#",
    },
    {
      id: 2,
      title: "Digital Transformation",
      subtitle: "EMS at Largest Asian Airport",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&h=400",
      link: "#",
    },
    {
      id: 3,
      title: "Generative AI",
      subtitle: "Personalised Shopping Assistant",
      image:
        "https://images.unsplash.com/photo-1677442d019cecf3d4a597a9d4b96c6d1badc0f78?auto=format&fit=crop&w=600&h=400",
      link: "#",
    },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Our Recent Engagements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engagements.map((engagement) => (
            <div
              key={engagement.id}
              className="card-base overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img
                  src={engagement.image}
                  alt={engagement.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {engagement.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {engagement.subtitle}
                </p>
                <a
                  href={engagement.link}
                  className="text-primary hover:text-primary-600 font-semibold flex items-center gap-1 transition"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
