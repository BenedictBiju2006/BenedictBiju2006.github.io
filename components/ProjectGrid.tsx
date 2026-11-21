
import type { ProjectMeta } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectGridProps = {
  projects: ProjectMeta[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  const groups = Array.from({ length: Math.ceil(projects.length / 3) }, (_, index) => projects.slice(index * 3, index * 3 + 3));

  return (
    <div className="grid gap-5">
      {groups.map((group, groupIndex) => {
        const complete = group.length === 3;
        const reversed = groupIndex % 2 === 1;

        return (
          <div
            key={group[0].slug}
            className={complete ? "grid gap-5 md:grid-cols-2 md:grid-rows-[repeat(2,minmax(14rem,auto))]" : "grid gap-5 md:grid-cols-2"}
          >
            {group.map((project, index) => {
              const featured = complete && index === 0;

              return (
                <div
                  key={project.slug}
                  className={[
                    featured ? "md:row-span-2" : "",
                    featured && reversed ? "md:col-start-2 md:row-start-1" : "",
                    complete && reversed && index === 1 ? "md:col-start-1 md:row-start-1" : "",
                    complete && reversed && index === 2 ? "md:col-start-1 md:row-start-2" : "",
                    !complete && group.length === 1 ? "md:col-span-2" : "",
                  ].filter(Boolean).join(" ")}
                >
                  <ProjectCard project={project} featured={featured} image={project.image} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
