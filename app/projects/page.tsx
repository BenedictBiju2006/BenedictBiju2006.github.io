import { HorizontalScroll } from "@/components/HorizontalScroll";
import { ProjectCard } from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <section className="min-h-[calc(100vh-4rem)] py-16">
      <div className="mx-auto mb-8 max-w-7xl px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">Projects</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Scroll sideways through selected work. 
        </p>
      </div>
      <HorizontalScroll>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </HorizontalScroll>
    </section>
  );
}
