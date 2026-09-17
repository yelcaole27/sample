// components/ContactSection.tsx
"use client";

import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("yelcaole27@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="space-y-8 pt-8 border-t border-purple-900/30">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
            Let&apos;s Connect
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Get In Touch
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-md">
            Available for immediate full-time employment and on-site opportunities in Metro Manila.
          </p>
        </div>

        {/* Copy Email Button */}
        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-2 rounded-xl bg-purple-950/80 border border-purple-800/60 px-5 py-3 text-sm font-mono text-purple-200 hover:border-purple-400 hover:text-white transition-all shadow-lg shadow-purple-950/40"
        >
          <svg className="h-4 w-4 fill-none stroke-current text-purple-400" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          {copied ? "Email Copied! ✓" : "yelcaole27@gmail.com"}
        </button>
      </div>

      {/* 4 Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Email Card */}
        <a
          href="mailto:yelcaole27@gmail.com"
          className="p-5 rounded-xl border border-purple-900/40 bg-zinc-950/80 backdrop-blur-md transition-all duration-300 hover:border-purple-500/60 hover:bg-purple-950/20 group"
        >
          <div className="text-purple-400 text-lg mb-2">✉️</div>
          <h3 className="text-sm font-semibold text-white group-hover:text-purple-300">Email</h3>
          <p className="text-xs text-zinc-400 font-mono mt-1">yelcaole27@gmail.com</p>
        </a>

        {/* Mobile Number Card */}
        <a
          href="tel:09602867464"
          className="p-5 rounded-xl border border-purple-900/40 bg-zinc-950/80 backdrop-blur-md transition-all duration-300 hover:border-purple-500/60 hover:bg-purple-950/20 group"
        >
          <div className="text-purple-400 text-lg mb-2">📱</div>
          <h3 className="text-sm font-semibold text-white group-hover:text-purple-300">Mobile Phone</h3>
          <p className="text-xs text-zinc-400 font-mono mt-1">09602867464</p>
        </a>

        {/* Facebook Card */}
        <a
          href="https://www.facebook.com/yelcaole/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-xl border border-purple-900/40 bg-zinc-950/80 backdrop-blur-md transition-all duration-300 hover:border-purple-500/60 hover:bg-purple-950/20 group"
        >
          <div className="text-purple-400 text-lg mb-2">💬</div>
          <h3 className="text-sm font-semibold text-white group-hover:text-purple-300">Facebook</h3>
          <p className="text-xs text-zinc-400 font-mono mt-1">facebook.com/yelcaole</p>
        </a>

        {/* GitHub Card */}
        <a
          href="https://github.com/yelcaole27"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-xl border border-purple-900/40 bg-zinc-950/80 backdrop-blur-md transition-all duration-300 hover:border-purple-500/60 hover:bg-purple-950/20 group"
        >
          <div className="text-purple-400 text-lg mb-2">🐙</div>
          <h3 className="text-sm font-semibold text-white group-hover:text-purple-300">GitHub</h3>
          <p className="text-xs text-zinc-400 font-mono mt-1">github.com/yelcaole27</p>
        </a>
      </div>
    </section>
  );
}