"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { getCategory, getRoofingSubcategory, type Project } from "@/data/projects";

export function WorkFilter({
  projects,
  categories,
  roofingSubcategories,
}: {
  projects: Project[];
  categories: string[];
  roofingSubcategories: string[];
}) {
  const [active, setActive] = useState<string>("All");
  const [roofSub, setRoofSub] = useState<string>("All");

  const filters = useMemo(() => ["All", ...categories], [categories]);
  const subFilters = useMemo(() => ["All", ...roofingSubcategories], [roofingSubcategories]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: projects.length };
    for (const project of projects) {
      const cat = getCategory(project.serviceType);
      map[cat] = (map[cat] ?? 0) + 1;
    }
    return map;
  }, [projects]);

  const subCounts = useMemo(() => {
    const roofing = projects.filter((p) => getCategory(p.serviceType) === "Roofing");
    const map: Record<string, number> = { All: roofing.length };
    for (const project of roofing) {
      const sub = getRoofingSubcategory(project.serviceType);
      if (sub) map[sub] = (map[sub] ?? 0) + 1;
    }
    return map;
  }, [projects]);

  const visible = useMemo(() => {
    let list = projects;
    if (active !== "All") {
      list = list.filter((project) => getCategory(project.serviceType) === active);
    }
    if (active === "Roofing" && roofSub !== "All") {
      list = list.filter((project) => getRoofingSubcategory(project.serviceType) === roofSub);
    }
    return list;
  }, [active, roofSub, projects]);

  function selectCategory(type: string) {
    setActive(type);
    setRoofSub("All");
  }

  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {filters.map((type) => {
          const isActive = type === active;
          return (
            <button
              key={type}
              type="button"
              onClick={() => selectCategory(type)}
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

      {active === "Roofing" && (
        <div
          className="mt-3 flex flex-wrap gap-2 border-l-2 border-orange/30 pl-3"
          role="group"
          aria-label="Filter roofing projects by type"
        >
          {subFilters.map((sub) => {
            const isActive = sub === roofSub;
            const label = sub === "All" ? "All Roofing" : sub;
            return (
              <button
                key={sub}
                type="button"
                onClick={() => setRoofSub(sub)}
                aria-pressed={isActive}
                className={
                  isActive
                    ? "rounded-full bg-navy px-3 py-1.5 text-xs font-bold text-white transition"
                    : "rounded-full bg-cool-gray px-3 py-1.5 text-xs font-bold text-navy ring-1 ring-navy/10 transition hover:ring-orange/40"
                }
              >
                {label}
                <span className={isActive ? "ml-1.5 text-white/80" : "ml-1.5 text-text-secondary"}>
                  {subCounts[sub] ?? 0}
                </span>
              </button>
            );
          })}
        </div>
      )}

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
