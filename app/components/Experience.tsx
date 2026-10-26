const EXPERIENCES = [
  {
    role: "Python Full-Stack Intern",
    company: "Innovate by Hexaind",
    duration: "2024",
    type: "Internship",
    bullets: [
      "Designed and deployed modular REST APIs in Python/Django, cutting response latency by 25%.",
      "Integrated automated verification endpoints with secure database queries and transaction caching.",
      "Collaborated in an Agile sprint environment with Git pull request reviews and CI workflows.",
    ],
    tech: ["Python", "Django", "Git"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Rejoice",
    duration: "2023 - 2024",
    type: "Internship",
    bullets: [
      "Engineered frontend client interfaces with responsive components and asynchronous backend hooks.",
      "Built exploratory NLP document parsing modules to extract structured entity tags.",
      "Improved cross-device rendering reliability and resolved client-side performance bottlenecks.",
    ],
    tech: ["Python", "Flask", "JavaScript", "HTML/CSS", "NLP"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-5xl mx-auto px-6 border-t border-white/[0.06]">
      <span className="font-mono text-xs font-semibold text-purple-400 uppercase tracking-widest">
        Career
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-12">
        Work Experience
      </h2>

      <div className="space-y-6">
        {EXPERIENCES.map((exp) => (
          <div key={exp.company} className="glass-panel p-6 sm:p-7 rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
              <div>
                <h3 className="text-base font-bold text-white">{exp.role}</h3>
                <span className="text-xs text-purple-400 font-medium">{exp.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-gray-400">{exp.duration}</span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-gray-300">
                  {exp.type}
                </span>
              </div>
            </div>

            <ul className="space-y-1.5 mb-5 mt-4">
              {exp.bullets.map((b, i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2 leading-relaxed">
                  <span className="text-purple-400 mt-0.5">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] text-purple-200 bg-purple-950/40 border border-purple-800/30 px-2 py-0.5 rounded"
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