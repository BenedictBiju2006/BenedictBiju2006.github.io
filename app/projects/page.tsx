import type { Metadata } from "next";

import { ProjectGrid } from "@/components/ProjectGrid";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projects", description: "Software engineering, artificial intelligence and systems development projects by Benedict Biju.", alternates: { canonical: "/projects/" } };

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <section className="min-h-[calc(100vh-4rem)] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-400">
            A collection of projects exploring software engineering, artificial intelligence, and systems development.
          </p>
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
