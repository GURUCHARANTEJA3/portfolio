export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/[0.06] bg-[#07040e] py-14">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs text-purple-400 font-semibold uppercase tracking-wider">
            Initiate Contact
          </span>
          <p className="text-sm text-gray-300 mt-1">
            Kadapa, AP, India • Open for remote & relocation
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:bunnyparamesugalla@gmail.com"
            className="px-4 py-2 rounded-lg text-xs font-medium text-white bg-purple-600 hover:bg-purple-500 transition-colors"
          >
            Email Me
          </a>
          <a
            href="https://github.com/GURUCHARANTEJA3"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-xs font-medium text-gray-300 border border-white/10 hover:text-white hover:border-white/20 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-10 pt-6 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-gray-500">
        <span>© {new Date().getFullYear()} Guru Charan Teja</span>
        <span>Built with Next.js & TypeScript</span>
      </div>
    </footer>
  );
}