
import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";

type ProjectCardProps = {
  project: ProjectMeta;
  featured?: boolean;
  image?: string;
};

export function ProjectCard({ project, featured = false, image }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full min-h-64 min-w-0 flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/70 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900/90"
    >
      {image && (
        <div className={`relative w-full overflow-hidden bg-zinc-900 ${featured ? "min-h-48 flex-1" : "h-44 sm:h-48"}`}>
          <Image
            src={image}
            alt={`${project.title} preview`}
            fill
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 50vw"}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/30 to-transparent" />
        </div>
      )}

      <div className={`flex flex-col justify-end p-8 ${image ? "" : "flex-1"}`}>
        <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
          {project.date}
        </p>
        <h2 className={`mt-3 font-semibold tracking-tight text-zinc-100 transition group-hover:text-white ${featured ? "text-4xl" : "text-2xl"}`}>
          {project.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
