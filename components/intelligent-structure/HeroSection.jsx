export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[80vh] flex justify-center items-center">
      <div className="absolute inset-0">
        {/* <div className="absolute inset-0 bg-black/50"></div> */}
        {/* <div className="absolute inset-0 bg-navy/90 mix-blend-multiply"></div> */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
        <img
          src="/background.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full px-4 h-full flex flex-col text-center items-center justify-center">
        <h1 className="space-y-0 mb-8">
          <div className="text-4xl md:text-[69px] font-bold leading-tight md:leading-[1.2] tracking-[-1.8px] text-white">
            Scale your Enterprise
          </div>
          <div className="text-4xl md:text-[69px] font-bold leading-tight md:leading-[1.2] tracking-[-1.8px] text-white">
            Workflow with
          </div>
          <div className="text-4xl md:text-[69px] font-bold leading-tight md:leading-[1.2] tracking-[-1.8px] text-white">
            Cloud-Native Agents
          </div>
        </h1>

        <p className="text-lg md:text-xl font-light leading-relaxed text-slate-100 mb-12 max-w-2xl">
          Secure, evaluated and observable on-premises AI Agents for your
          enterprise.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
          <button className="px-10 py-4 bg-orange-400 text-white font-bold text-[17px] leading-7 shadow-lg hover:bg-orange-500 transition-colors">
            Book a Discovery Call
          </button>
          <button className="px-8 py-4 bg-slate-600 text-white font-bold text-[17px] leading-7 shadow-lg hover:bg-slate-700 transition-colors inline-flex items-center gap-2">
            Learn More
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
