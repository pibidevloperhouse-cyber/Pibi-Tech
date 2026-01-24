export default function WhyCloudNativeSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-[67px] font-bold leading-tight tracking-[-1.5px] text-navy-dark mb-6">
            Why Cloud Native Agents Matter
          </h2>
          <p className="text-lg md:text-[25px] font-medium leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Unlock unprecedented speed and flexibility with cloud-native
            technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 md:p-9 border-2 border-navy-dark rounded bg-white hover:shadow-xl transition-shadow">
            <div className="p-4 w-16.5 h-16.5 rounded-lg border border-slate-200 bg-white shadow-sm mb-8">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6666 17.3333C26.6666 23.9999 21.9999 27.3333 16.4533 29.2666C16.1628 29.365 15.8473 29.3603 15.5599 29.2533C9.99992 27.3333 5.33325 23.9999 5.33325 17.3333V7.99995C5.33325 7.64633 5.47373 7.30719 5.72378 7.05714C5.97383 6.80709 6.31296 6.66662 6.66659 6.66662C9.33325 6.66662 12.6666 5.06662 14.9866 3.03995C15.2691 2.79861 15.6284 2.66602 15.9999 2.66602C16.3714 2.66602 16.7308 2.79861 17.0133 3.03995C19.3466 5.07995 22.6666 6.66662 25.3333 6.66662C25.6869 6.66662 26.026 6.80709 26.2761 7.05714C26.5261 7.30719 26.6666 7.64633 26.6666 7.99995V17.3333Z"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15.9999L14.6667 18.6666L20 13.3333"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-2xl md:text-[34px] font-bold leading-9 text-navy-dark mb-4">
              Data Sovereignty
            </h3>

            <p className="text-lg md:text-[22px] font-medium leading-7.25 text-slate-600">
              We protect your data ensuring strict compliance with GDPR, HIPAA
              and SOC2
            </p>
          </div>

          <div className="group p-8 md:p-9 border-2 border-navy-dark rounded bg-white hover:shadow-xl transition-shadow">
            <div className="p-4 w-16.5 h-16.5 rounded-lg border border-slate-200 bg-white shadow-sm mb-8">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33324 18.6666C5.08093 18.6674 4.83355 18.5967 4.61985 18.4625C4.40614 18.3284 4.23489 18.1364 4.12597 17.9088C4.01706 17.6812 3.97497 17.4273 4.00457 17.1768C4.03418 16.9262 4.13428 16.6892 4.29324 16.4932L17.4932 2.89323C17.5923 2.77893 17.7272 2.7017 17.8759 2.6742C18.0246 2.6467 18.1782 2.67058 18.3115 2.7419C18.4449 2.81322 18.55 2.92775 18.6097 3.0667C18.6694 3.20565 18.68 3.36076 18.6399 3.50656L16.0799 11.5332C16.0044 11.7353 15.9791 11.9526 16.006 12.1666C16.033 12.3806 16.1115 12.5848 16.2347 12.7618C16.3579 12.9388 16.5223 13.0832 16.7136 13.1828C16.9049 13.2823 17.1176 13.3339 17.3332 13.3332H26.6666C26.9189 13.3324 27.1663 13.4031 27.38 13.5373C27.5937 13.6714 27.7649 13.8634 27.8738 14.091C27.9828 14.3186 28.0249 14.5724 27.9952 14.823C27.9656 15.0736 27.8655 15.3106 27.7066 15.5066L14.5066 29.1066C14.4076 29.2208 14.2726 29.2981 14.1239 29.3256C13.9752 29.3531 13.8216 29.3292 13.6883 29.2579C13.5549 29.1866 13.4498 29.072 13.3901 28.9331C13.3305 28.7941 13.3198 28.639 13.3599 28.4932L15.9199 20.4666C15.9954 20.2645 16.0207 20.0472 15.9938 19.8332C15.9668 19.6192 15.8884 19.415 15.7651 19.238C15.6419 19.061 15.4775 18.9165 15.2862 18.817C15.0949 18.7175 14.8822 18.6659 14.6666 18.6666H5.33324Z"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-2xl md:text-[34px] font-bold leading-9 text-navy-dark mb-4">
              Low Latency
            </h3>

            <p className="text-lg md:text-[22px] font-medium leading-7.25 text-slate-600">
              By running agents where your applications run, you improve
              response times, and cut costs.
            </p>
          </div>

          <div className="group p-8 md:p-9 border-2 border-navy-dark rounded bg-white hover:shadow-xl transition-shadow">
            <div className="p-4 w-16.5 h-16.5 rounded-lg border border-slate-200 bg-white shadow-sm mb-8">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.96008 17.2267C3.56643 17.4632 3.24052 17.7973 3.01393 18.1968C2.78734 18.5962 2.66775 19.0474 2.66675 19.5067V23.8267C2.66775 24.2859 2.78734 24.7371 3.01393 25.1365C3.24052 25.536 3.56643 25.8702 3.96008 26.1067L7.96008 28.5067C8.37483 28.7558 8.84957 28.8875 9.33341 28.8875C9.81726 28.8875 10.292 28.7558 10.7067 28.5067L16.0001 25.3333V18L9.33341 14L3.96008 17.2267Z"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.33343 22L3.01343 18.2"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.33325 22L15.9999 18"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.33325 22V28.8933"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 18V25.3333L21.2933 28.5067C21.7081 28.7558 22.1828 28.8875 22.6667 28.8875C23.1505 28.8875 23.6252 28.7558 24.04 28.5067L28.04 26.1067C28.4337 25.8702 28.7596 25.536 28.9862 25.1365C29.2127 24.7371 29.3323 24.2859 29.3333 23.8267V19.5067C29.3323 19.0474 29.2127 18.5962 28.9862 18.1968C28.7596 17.7973 28.4337 17.4632 28.04 17.2267L22.6667 14L16 18Z"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.6667 22L16 18"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.6667 22L28.9867 18.2"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.6667 22V28.8933"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6266 5.89338C10.2329 6.12988 9.90702 6.46404 9.68044 6.86349C9.45385 7.26294 9.33426 7.71414 9.33325 8.17338V14L15.9999 18L22.6666 14V8.17338C22.6656 7.71414 22.546 7.26294 22.3194 6.86349C22.0928 6.46404 21.7669 6.12988 21.3733 5.89338L17.3733 3.49337C16.9585 3.24419 16.4838 3.11255 15.9999 3.11255C15.5161 3.11255 15.0413 3.24419 14.6266 3.49337L10.6266 5.89338Z"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9999 10.6667L9.67993 6.8667"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 10.6667L22.32 6.8667"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 18.0001V10.6667"
                  stroke="black"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-2xl md:text-[34px] font-bold leading-9 text-navy-dark mb-4">
              Scalability
            </h3>

            <p className="text-lg md:text-[22px] font-medium leading-7.25 text-slate-600">
              Containerize and distribute AI workloads efficiently across any
              infrastructure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
