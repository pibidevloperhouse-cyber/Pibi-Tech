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
                  href="#"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Aether
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Tachyon
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Vision AI
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Generative AI
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Generative AI
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition"
                >
                  AI/ML
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Custom Software
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Quality Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Agile PODS Teams
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition"
                >
                  Talent Augmentation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <Link
                href="#"
                className="text-slate-400 hover:text-primary transition text-sm"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-primary transition text-sm"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-primary transition text-sm"
              >
                Contact us
              </Link>
            </div>

            <div className="flex gap-4">
              <Link
                href="#"
                className="text-slate-400 hover:text-primary transition"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-primary transition"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-primary transition"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700 text-center text-slate-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} SHARPWIZ Technologies. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
