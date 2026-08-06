"use client";

import { HeartPulse, Factory, Rocket, Globe2 } from "lucide-react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HealthcareIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    {/* Heart with cross */}
    <path d="M 50 60 L 25 35 C 15 25, 25 10, 37 10 C 44 10, 50 16, 50 16 C 50 16, 56 10, 63 10 C 75 10, 85 25, 75 35 Z" />
    <path d="M 42 26 L 58 26" strokeWidth="5" />
    <path d="M 50 18 L 50 34" strokeWidth="5" />

    {/* Left Hand */}
    <path d="M 22 92 L 22 80 C 22 75, 15 65, 10 55 C 5 45, 12 35, 18 42 L 26 55 C 26 55, 38 65, 45 65 C 50 65, 50 72, 45 76 L 36 78 L 36 92" />
    <path d="M 24 53 C 24 53, 30 43, 33 43 C 37 43, 38 48, 35 52 L 31 58" />
    <line x1="18" y1="92" x2="40" y2="92" />

    {/* Right Hand */}
    <path d="M 78 92 L 78 80 C 78 75, 85 65, 90 55 C 95 45, 88 35, 82 42 L 74 55 C 74 55, 62 65, 55 65 C 50 65, 50 72, 55 76 L 64 78 L 64 92" />
    <path d="M 76 53 C 76 53, 70 43, 67 43 C 63 43, 62 48, 65 52 L 69 58" />
    <line x1="60" y1="92" x2="82" y2="92" />
  </svg>
);

const ManufacturingIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    {/* Stand */}
    <path d="M 15 80 L 22 50 L 42 50 L 49 80" />
    
    {/* Gear */}
    <path d="M 32 20 L 35 20 L 37 24 L 41 26 L 45 23 L 48 26 L 45 30 L 47 34 L 51 36 L 51 40 L 47 42 L 45 46 L 48 50 L 45 53 L 41 50 L 37 52 L 35 56 L 32 56 L 30 52 L 26 50 L 22 53 L 19 50 L 22 46 L 20 42 L 16 40 L 16 36 L 20 34 L 22 30 L 19 26 L 22 23 L 26 26 L 30 24 Z" />
    <circle cx="33.5" cy="38" r="7" />

    {/* Arm */}
    <path d="M 40 28 L 60 15 L 75 35" />
    <circle cx="60" cy="15" r="4" fill="currentColor" />
    
    {/* Claw */}
    <path d="M 75 35 C 65 40, 65 55, 70 60 L 75 50 L 80 50 L 85 60 C 90 55, 90 40, 80 35 Z" />

    {/* Boxes */}
    <rect x="45" y="60" width="18" height="20" />
    <path d="M 50 60 L 50 68 L 58 68 L 58 60" />
    
    <rect x="70" y="60" width="18" height="20" />
    <path d="M 75 60 L 75 68 L 83 68 L 83 60" />

    {/* Conveyor Belt */}
    <rect x="5" y="80" width="90" height="15" rx="7.5" />
    <line x1="20" y1="87.5" x2="30" y2="87.5" />
    <line x1="45" y1="87.5" x2="55" y2="87.5" />
    <line x1="70" y1="87.5" x2="80" y2="87.5" />
  </svg>
);

const SaaSStartupsIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 25 55 C 10 55, 10 35, 25 35 C 30 20, 50 15, 60 25 C 70 20, 85 25, 85 40 C 95 40, 95 55, 85 55 Z" />
    <path d="M 45 42 L 45 38 L 55 38 L 55 42 L 60 45 L 65 40 L 70 45 L 65 50 L 67 55 L 72 58 L 68 62 L 63 60 L 58 63 L 58 68 L 48 68 L 48 63 L 43 60 L 38 62 L 35 58 L 40 55 L 38 50 L 33 45 L 38 40 L 43 45 Z" />
    <circle cx="50" cy="53" r="4" />
    <path d="M 35 55 L 35 80 L 15 80 L 15 85" />
    <path d="M 45 68 L 45 85" />
    <path d="M 55 68 L 55 85" />
    <path d="M 65 55 L 65 80 L 85 80 L 85 85" />
    <circle cx="15" cy="85" r="3" fill="currentColor" />
    <circle cx="45" cy="85" r="3" fill="currentColor" />
    <circle cx="55" cy="85" r="3" fill="currentColor" />
    <circle cx="85" cy="85" r="3" fill="currentColor" />
  </svg>
);

const GCCIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 50 15 L 45 15 L 42 22 C 35 25, 28 30, 24 38 L 16 39 L 16 48 L 22 52 C 20 60, 22 68, 26 74 L 20 80 L 26 86 L 33 82 C 40 88, 48 90, 56 88 L 60 95 L 68 92 L 68 85" />
    <path d="M 50 25 C 30 25, 30 75, 50 75" />
    <circle cx="50" cy="50" r="5" />
    <path d="M 55 50 L 75 50" />
    <circle cx="80" cy="50" r="5" />
    <path d="M 52 46 L 70 30" />
    <circle cx="75" cy="25" r="5" />
    <path d="M 52 54 L 70 70" />
    <circle cx="75" cy="75" r="5" />
    <path d="M 75 30 L 90 15" />
    <circle cx="90" cy="15" r="4" />
    <path d="M 75 70 L 90 85" />
    <circle cx="90" cy="85" r="4" />
  </svg>
);

export default function Specialist() {
  const specialties = [
    {
      title: "Healthcare",
      description:
        "Streamlined clinical workflows and intelligent patient management processes designed for accuracy, compliance, and care continuity.",
      icon: HealthcareIcon,
      color: "bg-[#4FC6E0]",
    },
    {
      title: "Manufacturing",
      description:
        "Optimized facilities and AI-driven production workflows that increase efficiency, reduce downtime, and improve operational visibility.",
      icon: ManufacturingIcon,
      color: "bg-[#0066A4]",
    },
    {
      title: "SaaS Startups",
      description:
        "Scalable system architecture and AI acceleration enabling 5× faster agile execution and speed to market.",
      icon: SaaSStartupsIcon,
      color: "bg-[#02B2E3]",
    },
    {
      title: "GCC",
      description:
        "Localized intelligence systems designed to navigate regional regulations, supply chains, and market dynamics with confidence.",
      icon: GCCIcon,
      color: "bg-[#484393]",
    },
  ];

  const Card = ({ item }) => {
    const Icon = item.icon;

    return (
      <div
        className={`border border-slate-200 relative rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 ${item.color} hover:brightness-110 text-white`}
      >
        <div className="flex items-center justify-center border w-max p-4 border-white rounded-full mb-5">
          <Icon className="w-12 h-12" />
        </div>

        <div className="absolute -top-5 -right-5 rotate-12 opacity-20">
          <div className="w-32 aspect-square relative">
            <Image
              src="/pi.png"
              alt="PI-BI Technologies"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">{item.title}</h3>

        <p className="leading-relaxed text-md text-white/80">
          {item.description}
        </p>
      </div>
    );
  };

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

        <div className="block sm:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {specialties.map((item, index) => (
              <SwiperSlide className="py-10 !h-auto" key={index}>
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
