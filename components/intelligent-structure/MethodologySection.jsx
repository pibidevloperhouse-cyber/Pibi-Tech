export default function MethodologySection() {
  const steps = [
    {
      number: 1,
      title: "Understand the Problem",
      description:
        "We begin by analyzing your business requirements, and the specific outcomes.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.9999 20.9999L16.6599 16.6599"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      position: "left",
    },
    {
      number: 2,
      title: "Create a POC",
      description:
        "Rapid prototyping of a Proof of Concept to validate feasibility and demonstrate value.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H20"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 12.5L8 15L10 17.5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 12.5L16 15L14 17.5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      position: "right",
    },
    {
      number: 3,
      title: "Understand Infrastructure",
      description:
        "Comprehensive assessment of your tech stack to ensure seamless integration.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 2H4C2.89543 2 2 2.89543 2 4V8C2 9.10457 2.89543 10 4 10H20C21.1046 10 22 9.10457 22 8V4C22 2.89543 21.1046 2 20 2Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 14H4C2.89543 14 2 14.8954 2 16V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V16C22 14.8954 21.1046 14 20 14Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6H6.01"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 18H6.01"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      position: "left",
    },
    {
      number: 4,
      title: "Choose the Right Frameworks",
      description:
        "Selecting the optimal orchestration framework tailored to your use case.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20V22"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2V4"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 20V22"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 2V4"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12H4"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17H4"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 7H4"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 12H22"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 17H22"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 7H22"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 20V22"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 2V4"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      position: "right",
    },
    {
      number: 5,
      title: "Utilize the Right Tools",
      description:
        "Implementing best-in-class tools required according to your use.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7 6.29979C14.5168 6.48671 14.4141 6.73803 14.4141 6.99979C14.4141 7.26154 14.5168 7.51286 14.7 7.69979L16.3 9.29979C16.4869 9.48301 16.7382 9.58564 17 9.58564C17.2617 9.58564 17.5131 9.48301 17.7 9.29979L20.806 6.19479C21.126 5.87279 21.669 5.97479 21.789 6.41279C22.0911 7.51166 22.074 8.67385 21.7398 9.76338C21.4055 10.8529 20.7678 11.8247 19.9014 12.565C19.0349 13.3054 17.9756 13.7836 16.8472 13.9439C15.7189 14.1041 14.5683 13.9396 13.53 13.4698L5.61998 21.3798C5.22215 21.7775 4.68264 22.0008 4.12012 22.0008C3.55761 22.0007 3.01817 21.7771 2.62048 21.3793C2.22279 20.9815 1.99942 20.4419 1.99951 19.8794C1.99961 19.3169 2.22315 18.7775 2.62098 18.3798L10.531 10.4698C10.0611 9.4315 9.89668 8.28087 10.0569 7.15253C10.2171 6.0242 10.6954 4.96484 11.4357 4.0984C12.1761 3.23196 13.1479 2.5943 14.2374 2.26001C15.3269 1.92573 16.4891 1.90865 17.588 2.21079C18.026 2.33079 18.128 2.87279 17.807 3.19479L14.7 6.29979Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      position: "left",
    },
    {
      number: 6,
      title: "Identify Design Patterns",
      description:
        "We also try to under the best design pattern for efficient scaling for your agents.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H11C11.5523 21 12 20.5523 12 20V15C12 14.4477 11.5523 14 11 14Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 14H17C16.4477 14 16 14.4477 16 15V20C16 20.5523 16.4477 21 17 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      position: "right",
    },
    {
      number: 7,
      title: "Context Engineering",
      description:
        "Memory management, RAG and prompt engineering for effect context enrichment.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 18V5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 13C14.1348 12.7471 13.3748 12.2206 12.834 11.4995C12.2932 10.7784 12.0005 9.90141 12 9C11.9995 9.90141 11.7068 10.7784 11.166 11.4995C10.6252 12.2206 9.8652 12.7471 9 13"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      position: "left",
    },
    {
      number: 8,
      title: "Agentic Evaluation",
      description:
        "Rigorous testing for hallucinations, accuracy, and adherence to safety.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0202 11.67 21.94C7.5 20.5 4 18 4 13V5.99996C4 5.73474 4.10536 5.48039 4.29289 5.29285C4.48043 5.10532 4.73478 4.99996 5 4.99996C7 4.99996 9.5 3.79996 11.24 2.27996C11.4519 2.09896 11.7214 1.99951 12 1.99951C12.2786 1.99951 12.5481 2.09896 12.76 2.27996C14.51 3.80996 17 4.99996 19 4.99996C19.2652 4.99996 19.5196 5.10532 19.7071 5.29285C19.8946 5.48039 20 5.73474 20 5.99996V13Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      position: "right",
    },
    {
      number: 9,
      title: "Cloud Deployment",
      description:
        "Production-ready deployment via Helm charts into your Kubernetes clusters with full CI/CD Integration.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 13V21"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.00009 14.8988C3.25714 14.1397 2.69666 13.2215 2.36113 12.2137C2.0256 11.2059 1.9238 10.135 2.06346 9.08208C2.20311 8.02913 2.58055 7.02178 3.16719 6.13631C3.75383 5.25085 4.53428 4.51049 5.44943 3.97133C6.36458 3.43216 7.39042 3.10833 8.44926 3.02435C9.5081 2.94038 10.5722 3.09846 11.5609 3.48664C12.5496 3.87481 13.4369 4.48289 14.1558 5.26481C14.8747 6.04674 15.4062 6.98201 15.7101 7.99978H17.5001C18.4656 7.99967 19.4056 8.3101 20.1811 8.88522C20.9566 9.46033 21.5266 10.2696 21.8069 11.1936C22.0871 12.1175 22.0628 13.1071 21.7374 14.0162C21.4121 14.9252 20.803 15.7055 20.0001 16.2418"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 17L12 13L16 17"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      position: "left",
      hasButton: true,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-[12px] font-bold leading-5 tracking-wider uppercase text-slate-600 mb-6">
            The Methodology
          </p>
          <h2 className="text-4xl md:text-[67px] font-bold leading-tight tracking-[-1.5px] text-blue-800 mb-6">
            How Pibi Tech Builds Your Agents
          </h2>
          <p className="text-lg md:text-[25px] font-medium leading-relaxed text-slate-600 max-w-3xl mx-auto">
            A systematic, engineering-first approach to deploying autonomous
            intelligence in your enterprise environment.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-800 transform -translate-x-1/2"></div>

          <div className="space-y-16 max-w-[85%] mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-0 ${step.position === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div
                  className={`w-full md:w-2xl ${step.position === "left" ? "md:pr-12" : "md:pl-12"}`}
                >
                  {step.hasButton ? (
                    <div className="p-9 rounded-2xl border-3 border-blue-800 bg-slate-50">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg border border-slate-200 bg-white shadow-sm">
                          {step.icon}
                        </div>
                        <h3 className="text-xl md:text-[22px] font-bold leading-7 text-blue-800 pt-3">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-base md:text-[20px] font-medium leading-7 text-slate-600 mb-6">
                        {step.description}
                      </p>
                      <button className="px-6 py-3 bg-blue-800 text-white font-bold text-[19px] leading-6 rounded-lg hover:bg-navy transition-colors">
                        Get Started
                      </button>
                    </div>
                  ) : (
                    <div className="p-9 rounded-2xl border-3 border-blue-800 bg-slate-50">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg border border-slate-200 bg-white shadow-sm">
                          {step.icon}
                        </div>
                        <h3 className="text-xl md:text-[22px] font-bold leading-7 text-blue-800 pt-3">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-base md:text-[20px] font-medium leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                <div className="hidden md:flex w-14 h-14 rounded-full border-2 border-blue-800 bg-blue-400 items-center justify-center text-white font-bold text-[22px] shrink-0 z-10">
                  {step.number}
                </div>

                <div className="hidden md:block w-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
