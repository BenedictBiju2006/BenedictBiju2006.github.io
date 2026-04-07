import Link from "next/link";

const languages = ["Python", "Java", "C#", "JavaScript"];
const frameworks = ["React", "Flutter", ".NET", "Django"];
const tools = ["Git", "Firebase", "VS Code", "IntelliJ", "Android Studio"];

export default function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-12">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm tracking-[0.28em] text-zinc-400 uppercase">Computer Science Student · Subang Jaya, Malaysia</p>
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
        </div>

        <div className="mt-14 grid gap-6 text-left sm:grid-cols-3">
          <SkillGroup title="Languages" items={languages} />
          <SkillGroup title="Frameworks" items={frameworks} />
          <SkillGroup title="Tools" items={tools} />
        </div>
      </div>
    </section>
  );
}

type SkillGroupProps = {
  title: string;
  items: string[];
};

function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
      <h2 className="text-sm font-semibold tracking-[0.16em] text-zinc-400 uppercase">{title}</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-200">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
