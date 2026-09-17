// components/Hero.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: "software-data",
      icon: "⚡",
      title: "Data Science & Backend",
      desc: "Architecting MongoDB tracking systems (MEAMS), writing Python/SQL logic, and mining 200+ B2B datasets.",
      skills: ["Python", "SQL (MySQL)", "MongoDB", "Data Mining", "Excel Automation"]
    },
    {
      id: "uiux-design",
      icon: "🎨",
      title: "UI/UX & Prototyping",
      desc: "Translating complex workflows into minimalist Figma wireframes & interactive prototypes (Cubed IT Helpdesk V2).",
      skills: ["Figma", "UI/UX Wireframing", "Interactive Mockups", "QA Testing"]
    },
    {
      id: "it-infra",
      icon: "🖥️",
      title: "IT Infrastructure & Hardware",
      desc: "Hands-on PC assembly, system troubleshooting, commercial printer maintenance, and 55\" LFD display daisy-chain setups.",
      skills: ["PC Assembly", "LFD Daisy-Chaining", "Hardware Repair", "Network Config"]
    },
    {
      id: "creative-media",
      icon: "🎬",
      title: "Digital Media & E-Commerce",
      desc: "Directing short film post-production (Dasal/Kasal), product photography, and mass SKU cataloging for Lazada/Shopee.",
      skills: ["CapCut Video", "Cinematography", "SKU Cataloging", "Product Photography"]
    }
  ];

  return (
    <section className="animate-fade-in-up space-y-12" style={{ animationDelay: "100ms" }}>
      {/* Top Banner & Profile Header */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 pb-8 border-b border-purple-900/30">
        
        {/* Modern Cool Large Avatar Showcase */}
        <div className="relative group shrink-0">
          {/* Outer Pulsing Neon Ambient Atmosphere */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-600 via-violet-500 to-indigo-500 opacity-60 blur-2xl transition duration-500 group-hover:opacity-90 group-hover:blur-3xl" />

          {/* Main Photo Frame (Bigger 192px Size + Squircle Border) */}
          <div className="relative h-40 w-40 sm:h-48 sm:w-48 lg:h-52 lg:w-52 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-purple-400/50 bg-zinc-950 shadow-2xl shadow-purple-950 transition-all duration-500 group-hover:border-purple-400 group-hover:scale-[1.03]">
            <Image
              src="/pic.png"
              alt="Christoper Uriel B. Caole"
              width={208}
              height={208}
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              priority
            />
            {/* Subtle Gradient Shine Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
          </div>

          {/* Floating Status Pill Overlay */}
          <div className="absolute -bottom-3 -right-2 sm:-right-3 inline-flex items-center gap-2 rounded-full bg-zinc-950/90 border border-purple-500/60 px-3.5 py-1.5 shadow-xl backdrop-blur-md text-xs font-mono text-purple-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
            </span>
            Data Science &amp; Dev
          </div>
        </div>

        {/* Text Details & Header Info */}
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-300 text-xs font-mono">
              B.S. IT (Data Science) • Dean&apos;s Lister
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Christoper Uriel B. Caole
          </h1>
          <p className="font-mono text-xs text-purple-400 mb-6">
            Pandacan, Manila • yelcaole27@gmail.com • 09602867464
          </p>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-6">
            Bridging backend systems, data analytics, physical IT hardware, and minimalist UI/UX design.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-start gap-3">
            <a
              href="https://github.com/yelcaole27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950/80 border border-purple-900/60 px-5 py-2.5 text-purple-200 hover:border-purple-500 hover:text-white hover:bg-purple-950/50 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-purple-950/50"
            >
              <svg className="h-4 w-4 fill-current text-purple-400" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.facebook.com/yelcaole/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600/90 hover:bg-purple-600 border border-purple-400 px-5 py-2.5 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-purple-900/50"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Live Key Metrics Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        <div className="p-4 rounded-xl border border-purple-900/40 bg-zinc-950/60 backdrop-blur-md">
          <div className="text-2xl font-bold text-purple-400">200+</div>
          <div className="text-xs text-zinc-400 font-mono mt-1">Qualified B2B Leads Mined</div>
        </div>
        <div className="p-4 rounded-xl border border-purple-900/40 bg-zinc-950/60 backdrop-blur-md">
          <div className="text-2xl font-bold text-purple-400">55&quot; LFD</div>
          <div className="text-xs text-zinc-400 font-mono mt-1">Daisy-Chain Display Infra</div>
        </div>
        <div className="p-4 rounded-xl border border-purple-900/40 bg-zinc-950/60 backdrop-blur-md">
          <div className="text-2xl font-bold text-purple-400">Full-Stack</div>
          <div className="text-xs text-zinc-400 font-mono mt-1">MongoDB &amp; Next.js Systems</div>
        </div>
        <div className="p-4 rounded-xl border border-purple-900/40 bg-zinc-950/60 backdrop-blur-md">
          <div className="text-2xl font-bold text-purple-400">2022–2026</div>
          <div className="text-xs text-zinc-400 font-mono mt-1">Dean&apos;s Lister (BS IT)</div>
        </div>
      </div>

      {/* Interactive 4 Core Pillars Selector */}
      <div className="pt-6 space-y-4">
        <h3 className="text-sm font-mono text-purple-400 tracking-wider uppercase">
          Explore My Core Capabilities
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(idx)}
              className={`text-left p-5 rounded-xl border transition-all duration-300 ${
                activePillar === idx
                  ? "border-purple-500 bg-purple-950/40 shadow-xl shadow-purple-950/50 scale-[1.02]"
                  : "border-purple-900/30 bg-zinc-950/60 hover:border-purple-800 hover:bg-zinc-900/40"
              }`}
            >
              <div className="text-2xl mb-2">{pillar.icon}</div>
              <h4 className="text-sm font-semibold text-zinc-100 mb-1">{pillar.title}</h4>
              <p className="text-xs text-zinc-400 line-clamp-2">{pillar.desc}</p>
            </button>
          ))}
        </div>

        {/* Selected Pillar Active Spotlight Card */}
        <div className="p-6 rounded-xl border border-purple-800/60 bg-purple-950/30 backdrop-blur-md space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{pillars[activePillar].icon}</span>
            <h4 className="text-lg font-bold text-white">{pillars[activePillar].title}</h4>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed">{pillars[activePillar].desc}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {pillars[activePillar].skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-md bg-purple-900/60 border border-purple-700/60 text-purple-200 text-xs font-mono"
              >
                {skill}
              </span>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}