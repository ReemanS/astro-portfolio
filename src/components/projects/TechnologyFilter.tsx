interface TechnologyFilterProps {
  technologies: string[];
  selectedTechnologies: string[];
  onToggleTechnology: (tech: string) => void;
  onClearFilters: () => void;
  projectCount: number;
}

export default function TechnologyFilter({
  technologies,
  selectedTechnologies,
  onToggleTechnology,
  onClearFilters,
  projectCount,
}: TechnologyFilterProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-slate-700">
        Filter by Technology
      </h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <button
            key={tech}
            onClick={() => onToggleTechnology(tech)}
            className={`
              px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 border hover:cursor-pointer
              ${
                selectedTechnologies.includes(tech)
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary hover:bg-primary/5"
              }
            `}
          >
            {tech}
          </button>
        ))}
      </div>

      {selectedTechnologies.length > 0 && (
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm text-slate-600">
            Showing {projectCount} project
            {projectCount !== 1 ? "s" : ""}
          </span>
          <button
            onClick={onClearFilters}
            className="text-sm text-primary hover:text-primary/80 underline hover:cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
