export default function About() {
  const skillCategories = [
    {
      title: "Backend & Systems",
      skills: ["Python", "Django", "Flask", "FastAPI"],
    },
    {
      title: "AI & Machine Learning",
      skills: ["RAG Pipelines", "LangChain", "Vector DBs (Chroma)", "NLP", "LLMs"],
    },
    {
      title: "Frontend & Web",
      skills: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub Actions", "Docker Basics", "Linux", "Postman"],
    },
  ];

  return (
    <section id="about" className="py-20 max-w-5xl mx-auto px-6 border-t border-white/[0.06]">
      <div className="mb-10">
        <span className="font-mono text-xs font-semibold text-purple-400 uppercase tracking-widest">
          Background
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
          Technical Profile & Education
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Education & Bio Card */}
        <div className="glass-panel p-6 rounded-xl md:col-span-1 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[10px] text-purple-400 uppercase tracking-wider font-semibold">
              Education
            </span>
            <h3 className="text-base font-bold text-white mt-2">B.Tech in Computer Science</h3>
            <p className="text-xs text-gray-400 mt-1">NBKRIST, AP</p>
            <div className="mt-4 inline-block px-2.5 py-1 rounded bg-purple-950/60 border border-purple-800/40 text-purple-300 font-mono text-xs">
              CGPA: 8.10 / 10.0
            </div>

            <p className="text-xs text-gray-400 mt-5 leading-relaxed">
              Focused on systems architecture, data structures, and production artificial intelligence workflows.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-gray-400">
            📍 Nellore, Vidyanagar, Andhra Pradesh
          </div>
        </div>

        {/* Technical Skills Matrix (Replaces big illustration) */}
        <div className="glass-panel p-6 rounded-xl md:col-span-2">
          <span className="font-mono text-[10px] text-purple-400 uppercase tracking-wider font-semibold">
            Core Competencies
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
            {skillCategories.map((cat) => (
              <div key={cat.title}>
                <h4 className="text-xs font-semibold text-white mb-2.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] text-gray-300 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}