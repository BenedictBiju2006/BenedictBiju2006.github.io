import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";

type ProjectCardProps = {
  project: ProjectMeta;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group w-[min(88vw,38rem)] shrink-0 snap-center rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 transition hover:border-zinc-600 hover:bg-zinc-900"
    >
      <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">{project.date}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 transition group-hover:text-white">
        {project.title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-zinc-400">{project.description}</p>
    </Link>
  );
}
