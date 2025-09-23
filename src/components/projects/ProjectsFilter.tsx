import { useState, useMemo } from "react";
import TechnologyFilter from "./TechnologyFilter";
import ProjectGrid from "./ProjectGrid";
import type { ProjectData } from "./ProjectCard";

interface ProjectsFilterProps {
  projects: ProjectData[];
  technologies: string[];
}

export default function ProjectsFilter({
  projects,
  technologies,
}: ProjectsFilterProps) {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );

  const filteredProjects = useMemo(() => {
    if (selectedTechnologies.length === 0) {
      return projects;
    }

    return projects.filter((project) =>
      selectedTechnologies.every((tech) =>
        project.data.technologies.includes(tech)
      )
    );
  }, [projects, selectedTechnologies]);

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div className="space-y-4">
      <TechnologyFilter
        technologies={technologies}
        selectedTechnologies={selectedTechnologies}
        onToggleTechnology={toggleTechnology}
        onClearFilters={clearFilters}
        projectCount={filteredProjects.length}
      />

      <ProjectGrid
        projects={filteredProjects}
        hasFilters={selectedTechnologies.length > 0}
      />
    </div>
  );
}
