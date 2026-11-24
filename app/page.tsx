import type { Metadata } from "next";

import Link from "next/link";
import { HeroSkills } from "@/components/HeroSkills";
import { LandingExperience } from "@/components/LandingExperience";
import { ProjectGrid } from "@/components/ProjectGrid";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default async function HomePage() {
  const projects = await getAllProjects();

  return (
    <LandingExperience
      hero={
        <section className="flex h-full items-center justify-center px-6 py-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-sm tracking-[0.28em] text-zinc-400 uppercase">
              Computer Science Student · Subang Jaya, Malaysia
            </p>

            <h1 className="bg-linear-to-r from-zinc-100 to-zinc-500 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-7xl">
              Benedict Biju
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300">
              Computer Science student building real-world systems, automation tools, and full-stack applications
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                href="/projects"
              >
                View Projects
              </Link>

              <Link
                className="rounded-full border border-zinc-700 px-7 py-3 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
                href="/timeline"
              >
                See Timeline
              </Link>

              <Link
                className="rounded-full border border-zinc-700 px-7 py-3 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
                href="https://www.github.com/benedictbiju2006"
              >
                View GitHub
              </Link>
            </div>

            <div className="mt-12">
              <HeroSkills />
            </div>
          </div>
        </section>
      }
      projects={
        <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-16">
          <div className="mb-10">
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
              Projects
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              A selection of things I've built.
            </p>
          </div>

          <ProjectGrid projects={projects} />
        </section>
      }
    />
  );
}
