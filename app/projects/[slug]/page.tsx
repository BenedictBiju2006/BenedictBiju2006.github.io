import { notFound } from "next/navigation";
import { MDXRenderer } from "@/components/MDXRenderer";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">{project.date}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">{project.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-zinc-300">{project.description}</p>
      <div className="mt-10 border-t border-zinc-800 pt-8">
        <MDXRenderer source={project.content} />
      </div>
    </article>
  );
}
