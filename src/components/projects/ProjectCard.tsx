interface ProjectData {
  id: string;
  data: {
    title: string;
    description: string;
    date: string;
    technologies: string[];
    thumbnail?: string;
    links?: {
      github?: string;
      live?: string;
    };
  };
}

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 group w-full max-w-[320px] h-full">
      <a href={`/projects/${project.id}`} className="flex flex-col h-full">
        <div className="relative w-full h-48 overflow-hidden">
          {project.data.thumbnail ? (
            <img
              src={project.data.thumbnail}
              alt={project.data.title}
              className="w-full h-full min-h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-slate-100 flex items-center justify-center">
              {/* 
                cant use svgs here the way i use them in astro files
                for now this shall do
              */}
              <svg
                className="w-8 text-slate-400 opacity-60"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="p-4 flex-1 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-space-grotesk font-semibold text-lg text-slate-900 line-clamp-1 flex-1">
              {project.data.title}
            </h3>
            {/* 
              same here
            */}
            <svg
              className="w-4 h-4 text-slate-400 transition-all duration-200 group-hover:text-primary group-hover:translate-x-1 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
            {project.data.description}
          </p>

          <div className="text-xs text-slate-500 font-medium">
            {new Date(project.data.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.data.technologies.slice(0, 3).map((tech: string) => (
              <span
                key={tech}
                className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.data.technologies.length > 3 && (
              <span className="bg-slate-100 text-slate-500 px-2 py-1 rounded-full text-xs font-medium">
                +{project.data.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </a>
    </article>
  );
}

export type { ProjectData };
