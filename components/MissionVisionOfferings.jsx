"use client";

import {
  AppWindowMac,
  ArrowRight,
  BotMessageSquare,
  Cloud,
  PanelsTopLeft,
  Rocket,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const EnterpriseInfraIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 5 85 L 5 5 L 35 5 L 35 60" />
    <path d="M 35 25 L 65 25 L 65 80 L 54 80" />
    
    <rect x="12" y="15" width="16" height="6" />
    <rect x="12" y="27" width="6" height="6" />
    <rect x="22" y="27" width="6" height="6" />
    <rect x="12" y="39" width="6" height="6" />
    <rect x="22" y="39" width="6" height="6" />
    <path d="M 12 80 L 12 58 C 12 52, 22 52, 22 58 L 22 64" />

    <rect x="43" y="35" width="14" height="6" />
    <rect x="43" y="47" width="5" height="5" />
    <rect x="52" y="47" width="5" height="5" />
    <rect x="43" y="58" width="5" height="5" />
    <rect x="52" y="58" width="5" height="5" />

    <circle cx="20" cy="72" r="7" />
    <path d="M 5 95 C 5 85, 12 81, 20 81 C 28 81, 35 85, 35 95" />

    <circle cx="38" cy="68" r="7" />
    <path d="M 31 87 C 34 79, 38 77, 41 77 C 49 77, 53 83, 53 95" />

    <circle cx="80" cy="75" r="8" />
    <path d="M 64 95 C 64 85, 70 82, 80 82 C 90 82, 96 85, 96 95" />

    <path d="M 70 38 L 70 58 M 65 53 L 70 58 L 75 53" />
    <path d="M 85 30 L 85 50 M 80 45 L 85 50 L 90 45" />
  </svg>
);

const MartechGrowthIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 15 35 L 15 15 C 15 10, 20 5, 25 5 L 85 5 C 90 5, 95 10, 95 15 L 95 65 C 95 70, 90 75, 85 75 L 40 75" />
    <path d="M 40 15 L 80 15 C 83 15, 85 17, 85 20 L 85 60 C 85 63, 83 65, 80 65 L 40 65" />
    
    <path d="M 55 75 C 55 85, 45 87, 45 90" />
    <path d="M 65 75 C 65 85, 75 87, 75 90" />
    <path d="M 45 90 L 80 90 C 83 90, 85 92, 85 95 L 40 95" />

    <g transform="rotate(-20 65 40)">
      <polygon points="50,30 75,20 75,60 50,50" />
      <line x1="60" y1="26" x2="60" y2="54" />
      <line x1="68" y1="23" x2="68" y2="57" />
      <rect x="75" y="15" width="6" height="50" rx="3" />
      <rect x="42" y="32" width="8" height="16" rx="2" />
      <path d="M 58 53 L 55 65 C 55 68, 62 68, 65 65 L 68 57" />
    </g>

    <rect x="10" y="35" width="30" height="60" rx="4" />
    <path d="M 17 35 L 17 39 C 17 41, 19 43, 21 43 L 29 43 C 31 43, 33 41, 33 39 L 33 35" />
    <line x1="10" y1="82" x2="40" y2="82" />
    <line x1="20" y1="89" x2="30" y2="89" strokeWidth="3" />
  </svg>
);

const AIAtomIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(30 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(-30 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(90 50 50)" />
    
    <circle cx="84" cy="70" r="6" fill="currentColor" stroke="none" />
    <circle cx="16" cy="30" r="6" fill="currentColor" stroke="none" />
    <circle cx="84" cy="30" r="6" fill="currentColor" stroke="none" />
    <circle cx="16" cy="70" r="6" fill="currentColor" stroke="none" />
    <circle cx="50" cy="10" r="6" fill="currentColor" stroke="none" />
    <circle cx="50" cy="90" r="6" fill="currentColor" stroke="none" />

    <text x="50" y="60" fontSize="28" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="sans-serif">
      AI
    </text>
  </svg>
);

const AppDevIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 38 80 L 33 95 L 67 95 L 62 80" />
    <line x1="25" y1="95" x2="75" y2="95" />
    <rect x="5" y="5" width="90" height="75" rx="6" />
    <line x1="5" y1="65" x2="95" y2="65" />
    <line x1="45" y1="72" x2="55" y2="72" strokeWidth="5" />
    <rect x="16" y="16" width="68" height="42" rx="2" />
    <line x1="16" y1="26" x2="84" y2="26" />
    <circle cx="22" cy="21" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="29" cy="21" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="36" cy="21" r="2.5" fill="currentColor" stroke="none" />
    <path d="M 32 35 L 24 41 L 32 47" strokeWidth="3" />
    <path d="M 44 35 L 52 41 L 44 47" strokeWidth="3" />
    <line x1="41" y1="33" x2="35" y2="49" strokeWidth="3" />
    <rect x="62" y="32" width="12" height="12" strokeWidth="3" />
    <line x1="62" y1="49" x2="74" y2="49" strokeWidth="3" />
    <line x1="62" y1="54" x2="74" y2="54" strokeWidth="3" />
  </svg>
);

const EnterpriseDevIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 12 45 L 12 35 L 22 35 L 29 20 L 39 20 L 44 8 L 56 8 L 61 20 L 71 20 L 78 35 L 88 35 L 88 45" />
    <line x1="12" y1="45" x2="32" y2="45" />
    <line x1="68" y1="45" x2="88" y2="45" />
    <circle cx="50" cy="45" r="18" />
    <circle cx="50" cy="45" r="5" fill="currentColor" />
    <path d="M 20 45 L 20 60 L 12 70 L 12 75" />
    <path d="M 30 45 L 30 60 L 38 70 L 38 75" />
    <path d="M 43 62 L 43 85" />
    <path d="M 57 62 L 57 85" />
    <path d="M 70 45 L 70 60 L 62 70 L 62 75" />
    <path d="M 80 45 L 80 60 L 88 70 L 88 75" />
    <circle cx="12" cy="80" r="4" />
    <circle cx="38" cy="80" r="4" />
    <circle cx="43" cy="90" r="4" />
    <circle cx="57" cy="90" r="4" />
    <circle cx="62" cy="80" r="4" />
    <circle cx="88" cy="80" r="4" />
  </svg>
);

const ProductDevIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 10 90 L 22 98 L 28 86 L 16 78 Z" />
    <line x1="14" y1="86" x2="24" y2="92" />
    <path d="M 25 89 C 40 98, 65 95, 80 82 C 88 75, 84 65, 75 65 L 45 78" />
    <path d="M 20 75 C 35 65, 50 65, 65 72" />
    <path d="M 65 69 C 78 62, 72 52, 60 58 L 48 65" />
    <path d="M 40 18 L 25 28 L 40 38 L 55 28 Z" />
    <path d="M 25 28 L 25 48 L 40 58 L 40 38" />
    <path d="M 40 38 L 40 58 L 55 48 L 55 28" />
    <path d="M 30 25 L 40 32 L 45 29 L 35 22 Z" fill="currentColor" />
    <path d="M 40 32 L 40 45 L 45 42 L 45 29 Z" fill="currentColor" stroke="none" />
    <path d="M 68 28 L 68 24 L 72 24 L 72 28 L 77 30 L 80 27 L 83 30 L 81 34 L 84 38 L 88 38 L 88 42 L 84 42 L 81 46 L 83 50 L 80 53 L 77 50 L 72 52 L 72 56 L 68 56 L 68 52 L 63 50 L 60 53 L 57 50 L 59 46 L 56 42 L 52 42 L 52 38 L 56 38 L 59 34 L 57 30 L 60 27 L 63 30 Z" />
    <circle cx="70" cy="40" r="5" fill="none" />
  </svg>
);

const offerings = [
  {
    id: 1,
    title: "Enterprise Website Development",
    description:
      "An AI-powered growth driven website that works as a 24/7 sales and qualification system that attracts, qualifies, and converts visitors into revenue opportunities  not just a digital brochure.",
    link: "enterprise-website-development",
    icon: EnterpriseDevIcon,
    color: "bg-[#4FC6E0]",
  },
  {
    id: 2,
    title: "Product Development & Engineering",
    description:
      "A full-stack product engineering partnership to take your idea from concept to design, build, and scale products that are reliable, adaptable, and market fit.",
    link: "product-development",
    icon: ProductDevIcon,
    color: "bg-[#0066A4]",
  },
  {
    id: 3,
    title: "AI & Agentic Process Automation",
    description:
      "Autonomous AI agents that replace repetitive work, accelerate decisions, and reduce operational costs  and drive measurable efficiency gains.",
    link: "agentic-process-automation",
    icon: AIAtomIcon,
    color: "bg-[#02B2E3]",
  },
  {
    id: 4,
    title: "Application Development",
    description:
      "Robust digital applications engineered for performance, security, and continuous business growth.",
    link: "application-development",
    icon: AppDevIcon,
    color: "bg-[#484393]",
  },
  {
    id: 5,
    title: "Enterprise Infrastructure & Cloud Ops",
    description:
      "A resilient, secure cloud foundation that supports business continuity, scale, and operational efficiency.",
    link: "cloud-ops",
    icon: EnterpriseInfraIcon,
    color: "bg-[#4FC6E0]",
  },
  {
    id: 6,
    title: "MarTech & Growth Hacking",
    description:
      "A technology-driven growth system that consistently generates qualified leads and converts them into predictable revenue.",
    link: "growth-marketing",
    icon: MartechGrowthIcon,
    color: "bg-[#0066A4]",
  },
];

const OfferingCard = ({ offering }) => (
  <div
    className={`${offering.color} rounded-xl md:min-h-100 relative p-6 border border-slate-200 h-full flex flex-col justify-between`}
  >
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

    <div className="flex items-center justify-center border w-max p-4 text-white border-white rounded-full mb-5">
      <offering.icon className="w-10 h-10" />
    </div>

    <div className="flex-grow">
      <h4 className="text-xl font-bold text-white mb-3">{offering.title}</h4>
      <p className="text-white/80 leading-relaxed mb-6">
        {offering.description}
      </p>
    </div>

    <Link
      href={offering.link}
      className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all mt-auto"
    >
      Know more
      <ArrowRight className="w-4 h-4" />
    </Link>
  </div>
);

export default function MissionVisionOfferings() {
  return (
    <section className="section-padding bg-white" id="Services">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          <span className="bg-clip-text text-transparent bg-brand-gradient">
            Our Offerings
          </span>
        </h2>

        <div>
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            {offerings.map((offering) => (
              <SwiperSlide className="py-10 !h-auto" key={offering.id}>
                <OfferingCard offering={offering} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
