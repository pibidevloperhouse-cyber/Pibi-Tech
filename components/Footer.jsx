import { Linkedin, Twitter, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-brand-gradient flex items-center gap-1">
              <div className="w-10 h-10 relative">
                <Image
                  src={"/logo.png"}
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="hidden sm:inline">Pibi Tech</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="contact-us"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Profit Engine
                </Link>
              </li>
              <li>
                <Link
                  href="contact-us"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Astro kIds
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/vision-ai"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Vision AI
                </Link>
              </li>
              <li>
                <Link
                  href="/generative-ai"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Generative AI
                </Link>
              </li>
              <li>
                <Link
                  href="contact-us"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Digital Transformations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="contact-us"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Intelligent Web Engine
                </Link>
              </li>
              <li>
                <Link
                  href="contact-us"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Secure Corporate Brain
                </Link>
              </li>
              <li>
                <Link
                  href="contact-us"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Agentic Process Automation
                </Link>
              </li>
              <li>
                <Link
                  href="contact-us"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Autonomous Strategic Growth
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <Link
                href="contact-us"
                className="text-slate-400 hover:text-primary transition text-md"
              >
                Home
              </Link>
              <Link
                href="contact-us"
                className="text-slate-400 hover:text-primary transition text-md"
              >
                Careers
              </Link>
              <Link
                href="contact-us"
                className="text-slate-400 hover:text-primary transition text-md"
              >
                Contact us
              </Link>
            </div>

            <div className="flex gap-4">
              <Link
                href="contact-us"
                className="text-slate-400 hover:text-primary transition"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="contact-us"
                className="text-slate-400 hover:text-primary transition"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="contact-us"
                className="text-slate-400 hover:text-primary transition"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700 text-center text-slate-500 text-md">
            <p>
              &copy; {new Date().getFullYear()} Pibi Technologies. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
