import ProjectCard, { type ProjectData } from "./ProjectCard";

interface ProjectGridProps {
  projects: ProjectData[];
  hasFilters: boolean;
}

// refactored from previous astro component
// seems like it needed a bit more javascript magic
export default function ProjectGrid({
  projects,
  hasFilters,
}: ProjectGridProps) {
  return (
    <>
      <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto md:items-stretch">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {projects.length === 0 && hasFilters && (
        <div className="text-center py-12">
          <p className="text-slate-500">
            No projects found with the selected technologies.
          </p>
        </div>
      )}
    </>
  );
}
