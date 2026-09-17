import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="mb-20 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        Featured Projects
      </h2>
      {/* Dynamically expands from 1 col -> 2 cols -> 3 cols -> 4 cols depending on window width */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {projects.map((project, index) => (
          <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${250 + index * 100}ms` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}