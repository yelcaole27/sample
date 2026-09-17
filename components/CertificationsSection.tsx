// components/CertificationsSection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { certificates } from "@/data/certificates";

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Certifications &amp; Credentials
          </h2>
          <p className="text-xs font-mono text-purple-400 mt-1">
            Verified Industry Standards &amp; Training
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group relative flex flex-col justify-between p-6 rounded-xl border border-purple-900/40 bg-zinc-950/80 backdrop-blur-md transition-all duration-300 hover:border-purple-500/60 hover:bg-purple-950/20 shadow-lg shadow-purple-950/30"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-xs font-mono text-purple-300">
                  <svg className="h-3.5 w-3.5 fill-current text-purple-400" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.12-1.96.99-3.1-.97.04-2.14.65-2.83 1.45-.61.71-1.15 1.87-1.01 2.99 1.09.08 2.18-.52 2.85-1.34z"/>
                  </svg>
                  {cert.issuer}
                </span>
                <button
                  onClick={() => setSelectedCert(cert.image)}
                  className="text-xs font-mono text-purple-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  View Certificate ↗
                </button>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                {cert.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {cert.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md bg-purple-950/60 border border-purple-900/60 text-[11px] font-mono text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox Popup for Certificate Preview */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in-up"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-3xl w-full bg-zinc-950 border border-purple-800/60 rounded-2xl p-4 shadow-2xl">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-sm font-mono bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1"
            >
              Close ✕
            </button>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mt-8">
              <Image
                src={selectedCert}
                alt="Apple Certificate of Completion"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}