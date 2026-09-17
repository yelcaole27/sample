// components/ExperienceSection.tsx
export default function ExperienceSection() {
  const experiences = [
    {
      company: "Cubed Technologies Solutions Phils. Inc.",
      role: "IT Intern",
      period: "Feb 2026 – May 2026",
      points: [
        "Frontend Prototyping: Designed minimalist UI/UX wireframes & prototypes for internal Employee Portal and 'Cubed IT Helpdesk V2' in Figma.",
        "Quality Assurance Testing: Conducted thorough functional usability and design verification testing.",
        "Targeted Data Mining: Extracted & qualified 200+ B2B enterprise prospects across Metro Manila & CALABARZON.",
        "E-Commerce & Digital Assets: Managed mass SKU encoding, pricing models, and product photography for 'Loela' launch on Lazada & Shopee.",
        "IT Infra & Hardware: Custom PC assembly, hardware troubleshooting, and 55-inch Large Format Displays (LFD) daisy-chain setups."
      ]
    },
    {
      company: "Print Shop Operations",
      role: "IT Support & Print Operations Technician",
      period: "2024 – Present",
      points: [
        "Hardware Maintenance: Routine diagnostic testing and part replacement for commercial printers and desktop units.",
        "System Troubleshooting: End-to-end PC assembly and OS fault isolation.",
        "Graphics & Apparel Production: Vectorization for custom apparel, Cricut cutting, and heat press garment printing."
      ]
    }
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6">
        Professional Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="p-6 rounded-xl border border-purple-900/40 bg-zinc-950/80 backdrop-blur-md transition-all duration-300 hover:border-purple-500/60 hover:bg-purple-950/20"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <p className="text-sm text-purple-400 font-mono">{exp.company}</p>
              </div>
              <span className="text-xs font-mono text-zinc-500 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-900/50 w-fit">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-2 text-sm text-zinc-300 list-disc list-inside leading-relaxed">
              {exp.points.map((pt, i) => (
                <li key={i} className="marker:text-purple-400">{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}