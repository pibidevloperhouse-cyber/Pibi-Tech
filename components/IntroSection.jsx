import {
  Binoculars,
  CheckCircle2,
  Cog,
  Telescope,
  UserStar,
} from "lucide-react";
import Image from "next/image";

export default function IntroSection() {
  const features = ["DevOps", "Agile", "ITIL"];

  return (
    <section className="section-padding bg-blue-50" id="WhoWeAre">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8 lg:gap-12">
          <div className="bg-[#8A348C] p-4 rounded-2xl relative">
            <div className="text-white text-3xl absolute -top-5 -right-5 rotate-12">
              <div className="w-32 aspect-square relative">
                <Image
                  src="/pi.png"
                  alt="PI-BI Technologies"
                  fill
                  className="object-contain opacity-20"
                />
              </div>
            </div>
            <div className="flex items-center justify-center border w-max p-4 text-white border-white rounded-full mb-5">
              <UserStar className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Who we are</span>
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              <span className="font-semibold text-white">
                PI-BI Technologies
              </span>{" "}
              is a leading provider of AI transformation solutions that craft
              unique competitive advantages through agentic orchestration.
            </p>
          </div>

          <div className="bg-[#0066A4] p-4 rounded-2xl relative">
            <div className="text-white text-3xl absolute -top-5 -right-5 rotate-12">
              <div className="w-32 aspect-square relative">
                <Image
                  src="/pi.png"
                  alt="PI-BI Technologies"
                  fill
                  className="object-contain opacity-20"
                />
              </div>
            </div>
            <div className="flex items-center justify-center border w-max p-4 text-white border-white rounded-full mb-5">
              <Cog className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">What we do</span>
            </h2>
            <p className="text-white/80 text-xl leading-relaxed">
              We re-engineer your business to become
              <span className="font-semibold text-white"> future-ready </span>
              with
              <span className="font-semibold text-white"> 5× growth</span>.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8 lg:gap-12">
          <div className="bg-[#02B2E3] p-4 rounded-2xl relative">
            <div className="text-white text-3xl absolute -top-5 -right-5 rotate-12">
              <div className="w-32 aspect-square relative">
                <Image
                  src="/pi.png"
                  alt="PI-BI Technologies"
                  fill
                  className="object-contain opacity-20"
                />
              </div>
            </div>
            <div className="flex items-center justify-center border w-max p-4 text-white border-white rounded-full mb-5">
              <Telescope className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Our Mission</span>
            </h2>
            <p className="text-white/80 text-xl leading-relaxed">
              To drive AI-led transformation by delivering innovative,
              enterprise-grade solutions that empower businesses to operate
              smarter, faster, and at scale.
            </p>
          </div>

          <div className="bg-[#484393] p-4 rounded-2xl relative">
            <div className="text-white text-3xl absolute -top-5 -right-5 rotate-12">
              <div className="w-32 aspect-square relative">
                <Image
                  src="/pi.png"
                  alt="PI-BI Technologies"
                  fill
                  className="object-contain opacity-20"
                />
              </div>
            </div>
            <div className="flex items-center justify-center border w-max p-4 text-white border-white rounded-full mb-5">
              <Binoculars className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Our Vision</span>
            </h2>
            <p className="text-white/80 text-xl leading-relaxed">
              To become the most trusted global technology partner, shaping the
              future of industries through practical, agentic AI systems that
              deliver measurable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="">
            <h2 className="text-xl capitalize">Our process Approach</h2>
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
          </div> */
}
