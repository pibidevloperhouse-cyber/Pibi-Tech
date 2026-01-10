import Image from "next/image";
import Link from "next/link";

export default function SolutionCard({
  title,
  description,
  icon,
  image,
  reverse = false,
}) {
  return (
    <section className="w-full bg-PibiTech-bg-lighter py-5">
      <div className="container mx-auto max-w-330 px-6">
        <div
          className={`flex items-center flex-col md:flex-row gap-6 ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          <div className="w-full lg:w-1/2">
            {icon}
            <h2 className="font-inter mt-3 text-[25px] font-bold leading-[1.2] text-PibiTech-navy mb-4">
              {title}
            </h2>
            <p className="font-inter text-[20px] font-normal text-PibiTech-gray mb-8">
              {description}
            </p>
            <Link
              href="contact-us"
              className="inline-block px-5 py-3 bg-PibiTech-blue text-white text-base font-medium font-sen rounded hover:opacity-90 transition-opacity"
            >
              Explore
            </Link>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl relative w-full aspect-video overflow-hidden">
              <Image
                fill
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
