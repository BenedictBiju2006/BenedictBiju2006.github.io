import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://benedictbiju2006.github.io";
  const projects = await getAllProjects();
  return ["/", "/projects/", "/timeline/", ...projects.map(project => `/projects/${project.slug}/`)].map(path => ({ url: base + path }));
}
