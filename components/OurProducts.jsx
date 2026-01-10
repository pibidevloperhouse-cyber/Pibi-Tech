import { ArrowRight } from "lucide-react";

export default function OurProducts() {
  const products = [
    {
      title: "Profit Engine",
      tag: "Enterprise AI Platform",
      description:
        "A unified AI-powered platform that connects growth, management, and operations into one intelligent system. Profit Engine helps businesses scale faster, close better deals, and stay consistently profitable — without operational complexity.",
      highlights: [
        "Unified growth & operations",
        "AI-driven decision intelligence",
        "Scalable without complexity",
      ],
      link: "contact-us",
    },
    {
      title: "Astro Kids",
      tag: "AI + Vedic Intelligence",
      description:
        "Every child is born with a unique cosmic blueprint. By blending 5,000-year-old Vedic wisdom with modern AI, Astro Kids empowers parents to nurture their child’s mental, emotional, and physical well-being — holistically, confidently, and joyfully.",
      highlights: [
        "Personalized child insights",
        "Vedic astrology + AI",
        "Holistic growth guidance",
      ],
      link: "contact-us",
    },
  ];

  return (
    <section className="section-padding bg-blue-50" id="Products">
      <div className="container-max">
        <div className="mb-16 w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent text-center bg-brand-gradient">
              Our Products
            </span>
          </h2>
          <p className="text-slate-700 text-xl text-center leading-relaxed">
            Purpose-built AI products designed to drive measurable business
            outcomes and meaningful human impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-md font-semibold text-primary bg-primary/10 py-1 rounded-full mb-4">
                  {product.tag}
                </span>

                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-brand-gradient mb-4">
                  {product.title}
                </h3>

                <p className="text-slate-700 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* <ul className="space-y-2 mb-8">
                  {product.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-600 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul> */}
              </div>

              <a
                href={product.link}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Explore product
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
