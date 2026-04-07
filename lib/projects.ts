import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export type ProjectFrontmatter = {
  title: string;
  date: string;
  description: string;
};

export type ProjectMeta = ProjectFrontmatter & {
  slug: string;
};

export type Project = ProjectMeta & {
  content: string;
};

export async function getAllProjects(): Promise<ProjectMeta[]> {
  const entries = await fs.readdir(projectsDirectory);
  const files = entries.filter((file) => file.endsWith(".mdx"));

  const projects = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, file);
      const source = await fs.readFile(fullPath, "utf-8");
      const { data } = matter(source);

      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? "1970-01-01"),
        description: String(data.description ?? ""),
      } satisfies ProjectMeta;
    }),
  );

  return projects.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  try {
    const source = await fs.readFile(fullPath, "utf-8");
    const { data, content } = matter(source);

    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? "1970-01-01"),
      description: String(data.description ?? ""),
      content,
    };
  } catch {
    return null;
  }
}
