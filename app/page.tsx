import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm tracking-[0.28em] text-zinc-400 uppercase">BSc. Computer Science</p>
        <h1 className="bg-linear-to-r from-zinc-100 to-zinc-500 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl p-4">
          Benedict Plamthottathil Biju
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
          Driven Computer Science student with practical experience in developing full-stack applications and automation solutions that improve real-world workflows. Proficient in C#, Python, JavaScript, and modern frameworks including React and Flutter. Built projects involving API integration, database design, and cloud services. Actively seeking opportunities to apply technical skills in software engineering and contribute to impactful products.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="text-black">
            <Link
            className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            href="/projects"
          >
            View Projects
          </Link>
          </div>
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
