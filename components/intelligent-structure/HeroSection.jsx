export default function HeroSection({ title, content }) {
  return (
    <section className="relative w-full overflow-hidden min-h-[80vh] flex justify-center items-center">
      <div className="absolute inset-0">
        <img
          src="/background.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full px-4 h-full flex flex-col text-center items-center justify-center">
        <h1 className="space-y-0 mb-8">
          {title.split("<br />").map((line, index) => (
            <div
              key={index}
              className="text-4xl md:text-[69px] font-bold leading-tight md:leading-[1.2] tracking-[-1.8px] text-white"
            >
              {line}
            </div>
          ))}
        </h1>

        <p className="text-lg md:text-xl font-light leading-relaxed text-slate-100 mb-12 max-w-2xl">
          {content}
        </p>

        <div className="flex flex-col sm:flex-row w-full max-w-2xl gap-6 justify-center md:justify-start">
          <button className="px-10 py-4 bg-orange-400 flex-1 text-white font-bold text-[17px] leading-7 shadow-lg hover:bg-orange-500 transition-colors">
            Book a Discovery Call
          </button>
          <button className="px-8 py-4 flex-1 text-center w-full inline-flex justify-center items-center bg-slate-600 text-white font-bold text-[17px] leading-7 shadow-lg hover:bg-slate-700 transition-colors gap-2">
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
