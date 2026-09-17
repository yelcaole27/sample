export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Software & Data",
      skills: ["Python", "SQL (MySQL)", "Windows Forms", "Data Mining", "Data Migration", "Advanced Excel"],
    },
    {
      title: "Design & Prototyping",
      skills: ["Figma", "UI/UX Prototyping", "Wireframing", "Vector Graphics", "Interactive Mockups"],
    },
    {
      title: "Hardware & Operations",
      skills: ["PC Assembly", "LFD Daisy-Chain Setup", "Network Config", "Heat Press & Apparel"],
    },
  ];

  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold tracking-tight text-white mb-6 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
        Skills &amp; Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="rounded-xl border border-purple-900/40 bg-zinc-950 p-6 flex flex-col justify-between animate-fade-in-up transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-950/20"
            style={{ animationDelay: `${650 + index * 100}ms` }}
          >
            <div>
              <h3 className="text-base font-semibold text-purple-200 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-900/60 text-purple-300 transition-all duration-200 hover:border-purple-400 hover:text-white hover:bg-purple-900/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}