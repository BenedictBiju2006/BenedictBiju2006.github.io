import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const timelineDirectory = path.join(process.cwd(), "content/timeline");

export type TimelineFrontmatter = {
  name: string;
  start: string;
  end?: string;
  description: string;
  projectSlug?: string;
};

export type TimelineEvent = TimelineFrontmatter & {
  slug: string;
  content: string;
};

export async function getAllTimelineEvents(): Promise<TimelineEvent[]> {
  const entries = await fs.readdir(timelineDirectory);
  const files = entries.filter((file) => file.endsWith(".mdx"));

  const events = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(timelineDirectory, file);
      const source = await fs.readFile(fullPath, "utf-8");
      const { data, content } = matter(source);

      return {
        slug,
        name: String(data.name ?? slug),
        start: String(data.start ?? "1970"),
        end: data.end ? String(data.end) : undefined,
        description: String(data.description ?? ""),
        projectSlug: data.projectSlug ? String(data.projectSlug) : undefined,
        content,
      } satisfies TimelineEvent;
    }),
  );

  return events.sort((a, b) => +new Date(a.start) - +new Date(b.start));
}