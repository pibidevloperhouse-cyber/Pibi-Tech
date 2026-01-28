"use client";

import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function OurProducts() {
  const products = [
    {
      title: "Profit Engine",
      tag: "Enterprise AI Platform",
      description:
        "A unified AI-powered platform that connects growth, management, and operations into one intelligent system. Profit Engine helps businesses scale faster, close better deals, and stay consistently profitable — without operational complexity.",
      link: "contact-us",
    },
    {
      title: "Astro Kids",
      tag: "AI + Vedic Intelligence",
      description:
        "Every child is born with a unique cosmic blueprint. By blending 5,000-year-old Vedic wisdom with modern AI, Astro Kids empowers parents to nurture their child’s mental, emotional, and physical well-being — holistically, confidently, and joyfully.",
      link: "contact-us",
    },
  ];

  const Card = ({ product }) => (
    <div className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <span className="inline-block text-md font-semibold text-primary bg-primary/10 py-1 px-3 rounded-full mb-4">
          {product.tag}
        </span>

        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-brand-gradient mb-4">
          {product.title}
        </h3>

        <p className="text-slate-700 leading-relaxed mb-6">
          {product.description}
        </p>
      </div>

      <a
        href={product.link}
        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-6"
      >
        Explore product
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );

  return (
    <section className="section-padding bg-blue-50" id="Products">
      <div className="container-max">
        <div className="mb-16 w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              Our Products
            </span>
          </h2>
          <p className="text-slate-700 text-xl text-center leading-relaxed">
            Purpose-built AI products designed to drive measurable business
            outcomes and meaningful human impact.
          </p>
        </div>

        <div className="block sm:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {products.map((product, index) => (
              <SwiperSlide className="py-10 h-full" key={index}>
                <Card product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden sm:grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
