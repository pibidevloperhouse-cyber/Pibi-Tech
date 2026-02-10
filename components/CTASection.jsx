import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-linear-to-b from-slate-800 to-slate-900 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Planning your next product build?
        </h2>

        <p className="mt-4 text-lg text-slate-100 max-w-3xl mx-auto">
          Align strategy, design, and engineering under one expert team.
        </p>

        <div className="mt-8">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all duration-300 hover:bg-slate-200 hover:scale-105"
          >
            Talk to Product Experts
          </Link>
        </div>
      </div>
    </section>
  );
}
