// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06020e]/80 backdrop-blur-md border-b border-purple-900/40 py-3 shadow-lg shadow-purple-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="font-mono font-bold text-lg text-white tracking-tight flex items-center gap-2 group">
          <span className="h-2 w-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform" />
          yelcaole<span className="text-purple-400">.dev</span>
        </a>

        {/* Navigation Links with Certifications */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-400">
          <a href="#projects" className="hover:text-purple-300 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-purple-300 transition-colors">Skills</a>
          <a href="#certifications" className="hover:text-purple-300 transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
        </nav>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-purple-950/60 border border-purple-800/50 px-3 py-1 text-xs font-mono text-purple-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for Work
        </div>
      </div>
    </header>
  );
}