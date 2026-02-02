import Image from "next/image";

const locations = [
  {
    country: "USA",
    icon: "/usa.png",
    address: ["2911 AW Grimes Blvd Ste 610,"],
    phone: "+1 512 903 7998",
  },
  {
    country: "United Arab Emirates",
    icon: "/uae.png",
    address: ["Stanmore"],
    phone: "+44 7704 902347",
  },
  {
    country: "Canada",
    icon: "/canada.png",
    address: ["1855 Accelerator Program"],
  },
  {
    country: "Madurai, India",
    icon: "/madurai.png",
    address: ["Bi Bi Kulam, Madurai"],
  },
  {
    country: "Germany",
    icon: "/germany.png",
    address: ["Königsbergerstr. 19, 41812,"],
  },
];

export default function GlobalLocations() {
  return (
    <section className="bg-[#2f4576] py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-5">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="space-y-2 w-full flex flex-col items-center md:items-start"
            >
              <div className="relative w-16 aspect-square invert contrast-100 brightness-0">
                <Image
                  src={loc.icon}
                  alt={loc.country}
                  fill
                  className="invert contrast-100 brightness-0 transistion-colors"
                />
              </div>

              <h3 className="text-lg font-semibold text-white text-center">
                {loc.country}
              </h3>

              <div className="text-sm leading-relaxed opacity-90">
                {loc.address.map((line, idx) => (
                  <p key={idx} className="text-white text-center">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
