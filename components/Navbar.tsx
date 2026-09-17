// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06020e]/95 backdrop-blur-md border-b border-purple-900/40 py-3 shadow-lg shadow-purple-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left Side: Mobile 3-Lines Icon + Brand Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile 3-Lines Button (Appears only on mobile screens) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden text-purple-300 hover:text-white p-1.5 rounded-lg border border-purple-900/60 bg-purple-950/60 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-5 w-5 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Brand Logo */}
          <a href="#" className="font-mono font-bold text-base sm:text-lg text-white tracking-tight flex items-center gap-2 group">
            <span className="h-2 w-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform" />
            yelcaole<span className="text-purple-400">.dev</span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-purple-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-purple-950/60 border border-purple-800/50 px-3 py-1 text-xs font-mono text-purple-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="hidden sm:inline">On Work</span>
          <span className="sm:hidden">On Work</span>
        </div>
      </div>

      {/* Mobile Drawer Popup Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full inset-x-0 bg-[#06020e]/95 backdrop-blur-xl border-b border-purple-900/60 p-6 shadow-2xl space-y-3 animate-fade-in-up">
          <p className="text-[11px] font-mono text-purple-400 uppercase tracking-wider mb-2">
            Navigation
          </p>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-purple-300 p-2.5 rounded-lg hover:bg-purple-950/50 transition-all border border-transparent hover:border-purple-900/40"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}