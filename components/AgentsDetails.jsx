"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const AgentsDetails = () => {
  const router = useRouter();
  return (
    <section className="relative py-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(90deg, #000 0.07%, rgba(0, 0, 0, 0) 0.07%), linear-gradient(180deg, #000 0.1%, rgba(0, 0, 0, 0) 0.1%)",
        // }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-20 pb-8 border-b border-slate-300">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[68px] font-bold leading-tight md:leading-[0.8] tracking-[-1.8px] text-[#000052] mb-4">
              <div>Industry Standard</div>
              <div>solutions that scale</div>
              <div>with you</div>
            </h2>
          </div>
          <div className="max-w-full md:max-w-[384px]">
            <p className="text-base md:text-lg font-medium text-slate-700 leading-relaxed md:leading-[1.1]">
              We engineer the digital backbone of modern enterprises with
              precision and foresight.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-3 w-full">
          <div
            onClick={() => router.push("/agentic-ai")}
            className="border-2 border-[#000052] bg-white p-8 flex flex-col justify-between group hover:shadow-lg transition-shadow"
          >
            <div>
              <div className="flex items-start justify-between mb-8">
                <div className="border border-slate-300 rounded-lg flex items-center justify-center shadow-sm bg-white p-4">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 18V5M15 13c-.865-.253-1.625-.78-2.166-1.5A3.5 3.5 0 0 1 12 9a3.5 3.5 0 0 1-.834 2.5A3.5 3.5 0 0 1 9 13M17.598 6.5c.23-.399.366-.845.396-1.304.03-.459-.046-.919-.222-1.344a2.5 2.5 0 0 0-2.89-1.378 2.5 2.5 0 0 0-1.673 1.562A2.5 2.5 0 0 0 12 5a2.5 2.5 0 0 0-1.209-.964 2.5 2.5 0 0 0-1.673-1.562 2.5 2.5 0 0 0-2.89 1.378c-.176.425-.252.885-.222 1.344.03.459.166.905.396 1.304M17.997 5.125a3 3 0 0 1 2.668 2.44c.09.554.046 1.124-.127 1.66M18 18a3 3 0 0 0 2.136-5.106M19.967 17.483c.07.542.028 1.093-.123 1.619a3 3 0 0 1-5.177.967 3 3 0 0 1-1.338-1.427A3 3 0 0 1 12 18a3 3 0 0 1-1.329 1.642 3 3 0 0 1-1.338 1.427 3 3 0 0 1-5.177-.967 3 3 0 0 1-.123-1.619M6 18a3 3 0 0 1-2.136-5.106M6.003 5.125a3 3 0 0 0-2.668 2.44 3 3 0 0 0 .127 1.66" />
                  </svg>
                </div>
                <span className="text-[55px] font-bold text-slate-400 leading-[1.1]">
                  01
                </span>
              </div>

              <h3 className="text-[35px] font-bold text-[#000052] leading-[1.1] mb-4">
                Agentic AI
              </h3>

              <p className="text-lg font-medium text-slate-700 leading-[1.1] mb-6">
                We help you build and modernize your AI Stack so AI agents can
                plug in seamlessly and deliver real business impact.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-slate-300 bg-slate-100 text-slate-700">
                  RAG
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-slate-300 bg-slate-100 text-slate-700">
                  MCP
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-slate-300 bg-slate-100 text-slate-700">
                  Skills
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-slate-300 bg-slate-100 text-slate-700">
                  A2A
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-slate-300 bg-slate-100 text-slate-700">
                  Agentic RAG
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-slate-300 bg-slate-100 text-slate-700">
                  Context Engineering
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-slate-300 bg-slate-100 text-slate-700">
                  LLMOps
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-300">
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-[1.4px] text-slate-600 hover:text-[#000052] transition-colors">
                Learn more
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            onClick={() => router.push("/intelligent-infrastructure")}
            className="border-2 cursor-pointer border-[#000052] bg-[#248BB3] text-white p-8 flex flex-col justify-between group hover:shadow-lg transition-shadow"
          >
            <div>
              <div className="flex items-start justify-between mb-8">
                <div className="text-black border border-slate-300 rounded-lg flex items-center justify-center shadow-sm bg-white p-4">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 20v2M12 2v2M17 20v2M17 2v2M2 12h2M2 17h2M2 7h2M20 12h2M20 17h2M20 7h2M7 20v2M7 2v2M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM15 8H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
                  </svg>
                </div>
                <span className="text-[55px] font-bold leading-[1.1]">02</span>
              </div>

              <h3 className="text-[35px] text-white font-bold leading-[1.1] mb-4">
                Intelligent
                <br />
                Infrastructure
              </h3>

              <p className="text-lg font-medium text-white leading-[1.1] mb-6">
                We build infrastructure that thinks, combining agentic AI and
                cloud ops into systems that adapt, learn, and scale.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-white/20 bg-[#248BB3] text-white">
                  Infrastructure as a code
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-white/20 bg-[#248BB3] text-white">
                  Monitoring
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-white/20 bg-[#248BB3] text-white">
                  Observability
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-white/20 bg-[#248BB3] text-white">
                  SLO
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-white">
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-[1.4px] hover:opacity-80 transition-opacity">
                Learn more
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="border-2 border-[#000052] bg-white p-8 flex flex-col justify-between group hover:shadow-lg transition-shadow">
            <div>
              <div className="flex items-start justify-between mb-8">
                <div className="border border-slate-300 rounded-lg flex items-center justify-center shadow-sm bg-white p-4">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17.5 19H9a5 5 0 1 1 3.71-8.3m.79 2.3h4a3.5 3.5 0 0 1 0 7z" />
                  </svg>
                </div>
                <span className="text-[55px] font-bold text-slate-400 leading-[1.1]">
                  03
                </span>
              </div>

              <h3 className="text-[35px] font-bold text-[#000052] leading-[1.1] mb-4">
                Cloud Ops
              </h3>

              <p className="text-lg font-medium text-slate-700 leading-[1.1] mb-6">
                We design, and operate AWS, Azure, and GCP so your teams can
                ship faster with well-architected cloud foundations.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-slate-300 bg-slate-100 text-slate-700">
                  Cloud Native
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-slate-300 bg-slate-100 text-slate-700">
                  DevOps
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-slate-300 bg-slate-100 text-slate-700">
                  Kubernetes
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-300">
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-[1.4px] text-slate-600 hover:text-[#000052] transition-colors">
                Learn more
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsDetails;
