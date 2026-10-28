import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Bio Column */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities • Kadapa, AP, India
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400">
                Guru Charan Teja
              </span>
            </h1>

            <p className="text-base sm:text-lg text-purple-300 font-mono mb-5">
              Python Developer • Full-Stack Developer • AI/ML Engineer
            </p>

            <p className="text-gray-300/80 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Computer Science graduate with hands-on expertise in Python, AI/ML (RAG, LangChain), 
              REST APIs, and responsive front-end engineering. Passionate about building robust, 
              scalable systems and production-grade intelligent platforms.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40"
              >
                View Projects
              </a>

              <a
                href="/portfolio/https://drive.google.com/file/d/1s_beMVesUZsV7san7URbUTr0l1LOnols/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/25 bg-white/[0.04] hover:bg-white/[0.08] text-gray-200 font-medium text-sm transition-all backdrop-blur-sm"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* Photo Column */}
          <div className="flex-shrink-0 relative">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-600 to-indigo-500 opacity-40 group-hover:opacity-75 blur-xl transition duration-500" />
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-white/15 bg-[#120d20] shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Paramesugalla Guru Charan Teja"
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0b0616]/95 border border-white/15 px-4 py-1 rounded-full text-xs font-mono text-purple-300 shadow-lg backdrop-blur-md">
                ⚡ Python & AI Developer
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}