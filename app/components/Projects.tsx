const PROJECTS = [
  {
    title: "BuildCraft",
    category: "AI / Code Generation",
    description: "An intelligent platform leveraging LLMs for automated boilerplate and full-stack component scaffolding with real-time AST validation.",
    tags: ["Python", "FastAPI", "LangChain", "OpenAI", "React"],
    github: "https://github.com/GURUCHARANTEJA3",
    live: "https://github.com/GURUCHARANTEJA3",
  },
  {
    title: "CodeSage",
    category: "Developer Tooling",
    description: "AI-driven code analysis assistant generating contextual refactoring proposals and automated inline documentation with RAG context.",
    tags: ["Python", "ChromaDB", "Django", "LLMs", "TypeScript"],
    github: "https://github.com/GURUCHARANTEJA3",
    live: "https://github.com/GURUCHARANTEJA3",
  },
  // {
  //   title: "SecureVote",
  //   category: "Distributed Systems",
  //   description: "Cryptographically verifiable online ballot system implementing tamper-evident audit logs, SHA-256 integrity trees, and role-based access.",
  //   tags: ["Python", "Flask", "Cryptography", "PostgreSQL"],
  //   github: "https://github.com/GURUCHARANTEJA3",
  //   live: "https://github.com/GURUCHARANTEJA3",
  // },
  {
    title: "Portfolio Platform",
    category: "Web Engineering",
    description: "High-performance developer showcase built on Next.js 15 Server Components, Tailwind CSS, and zero-runtime asset dependencies.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/GURUCHARANTEJA3/portfolio",
    live: "https://github.com/GURUCHARANTEJA3/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto px-6 border-t border-white/[0.06]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
        <div>
          <span className="font-mono text-xs font-semibold text-purple-400 uppercase tracking-widest">
            Selected Works
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Engineered Projects
          </h2>
        </div>
        <p className="text-xs text-gray-400 mt-2 sm:mt-0 font-mono">
          4 systems deployed & open-sourced
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            className="glass-panel p-6 rounded-xl flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-purple-300 font-medium px-2 py-0.5 rounded bg-purple-950/60 border border-purple-800/40">
                  {p.category}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    title="View Source"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                {p.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] text-gray-300 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.06]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}