import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-purple-900/40 bg-zinc-950/80 backdrop-blur-md p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-purple-500/60 hover:bg-purple-950/30 hover:shadow-2xl hover:shadow-purple-950/60">
      {/* Top Purple Ambient Glow Line */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-500/0 to-transparent transition-all duration-500 group-hover:via-purple-500/70" />

      <div>
        <div className="flex items-center justify-between gap-4 font-mono text-xs text-purple-400 mb-2">
          <span className="transition-colors duration-200 group-hover:text-purple-300">{project.role}</span>
          <span className="text-zinc-500">{project.period}</span>
        </div>

        <div className="flex items-start justify-between gap-4 mt-1">
          <h3 className="text-lg font-bold text-zinc-100 transition-colors duration-200 group-hover:text-white">
            {project.title}
          </h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 transition-all duration-200 hover:text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-zinc-950 rounded-md shrink-0"
            aria-label={`View ${project.title}`}
          >
            <svg
              className="h-5 w-5 stroke-current transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-300">
          {project.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-purple-950/60 border border-purple-900/60 px-2.5 py-0.5 text-[11px] font-medium text-purple-300 transition-all duration-200 hover:border-purple-500 hover:text-purple-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}