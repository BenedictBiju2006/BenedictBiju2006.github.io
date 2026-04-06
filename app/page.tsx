import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm tracking-[0.28em] text-zinc-400 uppercase">Software Engineer</p>
        <h1 className="bg-linear-to-r from-zinc-100 to-zinc-500 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-7xl">
          Alex Morgan
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
          I design and build elegant digital products with a focus on performance, storytelling, and delightful user
          experiences.
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
        </div>
      </div>
    </section>
  );
}
