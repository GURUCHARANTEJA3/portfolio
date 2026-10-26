"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Python Developer",
  "Full-Stack Engineer",
  "AI / ML & RAG Builder",
  "Data Analyst"
  // "System Architect",
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-20 max-w-5xl mx-auto px-6">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-[110px] pointer-events-none" />

      {/* Status indicator */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] mb-8">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-mono font-medium text-emerald-300">
          Available for SDE / Python / AI Roles
        </span>
      </div>

      {/* Hero Headline */}
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
        Hi, I&apos;m <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">Guru Charan Teja</span>.
      </h1>

      {/* Animated Role Ticker */}
      <div className="h-9 flex items-center mb-6">
        <span className="font-mono text-xl sm:text-2xl text-purple-400 font-semibold transition-all">
          &gt; {ROLES[index]}
        </span>
      </div>

      {/* Senior Bio */}
      <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-10">
        Computer Science graduate specializing in Python backends, production-grade LLM/RAG pipelines, and high-performance microservices. Passionate about clean code, robust architecture, and scalable software.
      </p>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-md shadow-purple-600/20 transition-all flex items-center gap-2"
        >
          <span>Explore Projects</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>

        <a
          href="/portfolio/https://drive.google.com/file/d/1s_beMVesUZsV7san7URbUTr0l1LOnols/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg text-xs font-semibold text-gray-300 border border-white/10 hover:border-white/25 hover:text-white bg-white/[0.02] transition-all flex items-center gap-2"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  );
}