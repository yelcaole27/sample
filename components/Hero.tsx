import Image from "next/image";

export default function Hero() {
  return (
    <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
        {/* Avatar with Purple Backlight Aura (matching your screenshot) */}
        <div className="relative group shrink-0">
          <div className="absolute -inset-4 rounded-full bg-purple-600/40 blur-2xl transition duration-500 group-hover:bg-purple-500/60" />
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 border-purple-500/60 bg-zinc-950 shadow-2xl shadow-purple-950">
            <Image
              src="/pic.png"
              alt="Christopher Uriel B. Caole"
              width={96}
              height={96}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        <div>
          <p className="font-mono text-sm tracking-wide text-purple-400 mb-1">
            Data Science &amp; Tech Generalist
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
            Christopher Uriel B. Caole
          </h1>
          <p className="font-mono text-xs text-zinc-400">
            Pandacan, Manila • yelcaole27@gmail.com • 09602867464
          </p>
        </div>
      </div>

      <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
        Bridging backend systems, data analytics, physical IT hardware, and minimalist UI/UX design.
      </p>

      <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
        <a
          href="https://github.com/yelcaole27"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-purple-900/60 px-4 py-2.5 text-purple-200 hover:border-purple-500 hover:text-white hover:bg-purple-950/50 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-purple-950/50"
        >
          <svg className="h-4 w-4 fill-current text-purple-400" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub Profile
        </a>
        <a
          href="https://www.facebook.com/yelcaole/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-purple-900/60 px-4 py-2.5 text-purple-200 hover:border-purple-500 hover:text-white hover:bg-purple-950/50 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-purple-950/50"
        >
          <svg
            className="h-4 w-4 fill-none stroke-current text-purple-400"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Get in Touch
        </a>
      </div>
    </section>
  );
}