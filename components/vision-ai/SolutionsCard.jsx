import Link from "next/link";

export default function SolutionCard({
  title,
  description,
  icon,
  image,
  reverse = false,
}) {
  return (
    <section className="w-full bg-PibiTech-bg-lighter py-20">
      <div className="container mx-auto max-w-[1320px] px-6">
        <div
          className={`flex items-center gap-12 ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            {icon}
            <h2 className="font-inter text-[25px] font-bold leading-[50px] text-PibiTech-navy mb-4">
              {title}
            </h2>
            <p className="font-inter text-[20px] font-normal leading-[30px] text-PibiTech-gray mb-8">
              {description}
            </p>
            <Link
              href="contact-us"
              className="inline-block px-5 py-3 bg-PibiTech-blue text-white text-base font-medium font-sen rounded hover:opacity-90 transition-opacity"
            >
              Explore
            </Link>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
