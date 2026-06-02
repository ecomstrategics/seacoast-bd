"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { getCategory, type Project } from "@/data/projects";

export function WorkFilter({
  projects,
  categories,
}: {
  projects: Project[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");

  const filters = useMemo(() => ["All", ...categories], [categories]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: projects.length };
    for (const project of projects) {
      const cat = getCategory(project.serviceType);
      map[cat] = (map[cat] ?? 0) + 1;
    }
    return map;
  }, [projects]);

  const visible = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => getCategory(project.serviceType) === active);
  }, [active, projects]);

  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {filters.map((type) => {
          const isActive = type === active;
          return (
            <button
              key={type}
              type="button"
              onClick={() => setActive(type)}
              aria-pressed={isActive}
              className={
                isActive
                  ? "rounded-full bg-orange px-4 py-2 text-sm font-bold text-white transition"
                  : "rounded-full bg-white px-4 py-2 text-sm font-bold text-navy ring-1 ring-navy/10 transition hover:ring-orange/40"
              }
            >
              {type}
              <span className={isActive ? "ml-2 text-white/80" : "ml-2 text-text-secondary"}>
                {counts[type] ?? 0}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-10 text-text-secondary">No projects in this category yet.</p>
      )}
    </div>
  );
}
