"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter();

  const services = {
    Transform: [
      "Generative AI",
      "AI/ML",
      "Data Engineering",
      "Business Intelligence",
      "Solutions Architecture",
      "Cloud-Native Solutions",
    ],
    Develop: [
      "Custom Software",
      "DevOps Automation",
      "Quality Engineering",
      "UI/UX Design",
    ],
    Enhance: ["Cloud Migration", "Legacy Modernization"],
    Operate: [
      "Consulting Services",
      "Agile PODS Teams",
      "Hybrid Teams",
      "Talent Augmentation",
    ],
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-brand-gradient flex items-center gap-1"
          >
            <div className="w-10 h-10 relative">
              <Image
                src={"/logo.png"}
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="hidden sm:inline">Pibi Tech</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="#Products"
              className="text-slate-700 hover:text-primary transition"
            >
              Products
            </Link>
            <Link
              href="contact-us"
              className="text-slate-700 hover:text-primary transition"
            >
              Solutions
            </Link>

            <div className="relative group">
              <button
                onClick={() => router.push("/contact-us")}
                className="flex items-center gap-1 text-slate-700 hover:text-primary transition"
              >
                Services
                <ChevronDown className="w-4 h-4 text-primary" />
              </button>

              <div className="absolute left-0 mt-0 hidden group-hover:block bg-white shadow-xl rounded-b-lg z-50 pt-2">
                <div className="grid grid-cols-4 p-8 gap-10 min-w-max">
                  {Object.entries(services).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="font-bold text-slate-900 mb-4 text-sm">
                        {category}
                      </h3>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item}>
                            <Link
                              href="contact-us"
                              className="text-slate-600 hover:text-primary transition text-sm font-medium"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="contact-us"
              className="text-slate-700 hover:text-primary transition"
            >
              Who we are
            </Link>
            <Link
              href="contact-us"
              className="text-slate-700 hover:text-primary transition"
            >
              Careers
            </Link>
            <Link
              href="/contact-us"
              className="text-slate-700 hover:text-primary transition"
            >
              Contact us
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="contact-us"
              className="text-slate-600 hover:text-primary transition"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="contact-us"
              className="text-slate-600 hover:text-primary transition"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-slate-200">
            <Link
              href="contact-us"
              className="block py-3 text-slate-700 hover:text-primary transition"
            >
              Products
            </Link>
            <Link
              href="contact-us"
              className="block py-3 text-slate-700 hover:text-primary transition"
            >
              Solutions
            </Link>

            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "services" ? null : "services")
              }
              className="w-full text-left py-3 text-slate-700 hover:text-primary transition flex items-center justify-between"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition ${
                  openDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "services" && (
              <div className="pl-4 bg-slate-50 py-3 space-y-2">
                {Object.entries(services).map(([category, items]) => (
                  <div key={category}>
                    <p className="font-semibold text-slate-800 text-sm mt-3 mb-2">
                      {category}
                    </p>
                    {items.map((item) => (
                      <Link
                        key={item}
                        href="contact-us"
                        className="block text-slate-600 hover:text-primary text-sm py-1"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <Link
              href="contact-us"
              className="block py-3 text-slate-700 hover:text-primary transition"
            >
              Who we are
            </Link>
            <Link
              href="contact-us"
              className="block py-3 text-slate-700 hover:text-primary transition"
            >
              Careers
            </Link>
            <Link
              href="contact-us"
              className="block py-3 text-slate-700 hover:text-primary transition"
            >
              Contact us
            </Link>

            <div className="flex gap-4 pt-4 border-t border-slate-200">
              <Link
                href="contact-us"
                className="text-slate-600 hover:text-primary transition"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="contact-us"
                className="text-slate-600 hover:text-primary transition"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
