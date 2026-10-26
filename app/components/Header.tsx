"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#080511]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Monogram Badge */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-mono font-bold text-white text-xs tracking-wider shadow-sm group-hover:scale-105 transition-transform">
            GC
          </div>
          <span className="font-semibold text-sm tracking-tight text-white group-hover:text-purple-300 transition-colors">
            Guru Charan Teja
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-400">
          <Link href="#about" className="hover:text-white transition-colors">About & Skills</Link>
          <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/GURUCHARANTEJA3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-300 border border-white/10 hover:border-purple-500/50 hover:text-white bg-white/[0.02] transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c0919] px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="#about" onClick={() => setIsOpen(false)} className="text-gray-300">About & Skills</Link>
          <Link href="#experience" onClick={() => setIsOpen(false)} className="text-gray-300">Experience</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)} className="text-gray-300">Projects</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="text-gray-300">Contact</Link>
        </div>
      )}
    </header>
  );
}