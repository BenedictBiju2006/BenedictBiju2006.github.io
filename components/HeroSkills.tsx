const skills = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Java",
  "C#",
  "Supabase",
  "Firebase",
  "SQL",
  "Git",
];

export function HeroSkills() {
  return (
    <div className="mt-12 border-t border-zinc-800 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
        <span className="shrink-0 pt-1 font-mono text-xs tracking-wider text-zinc-500 uppercase">
          I work with
        </span>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {skills.map((skill, index) => (
            <span key={skill} className="inline-flex items-center gap-3">
              <span className="cursor-pointer text-sm text-zinc-400 transition-colors hover:text-white">
                {skill}
              </span>
              {index < skills.length - 1 && (
                <span className="text-zinc-700" aria-hidden="true">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}