export type TimelineEvent = {
  name: string;
  start: string;
  end?: string;
  description: string;
  projectSlug?: string;
};

export const timelineEvents: TimelineEvent[] = [
  {
    name: "Freelance Product Design Practice",
    start: "2022-03",
    end: "2022-12",
    description:
      "I partnered with small founders to shape early product ideas into clickable prototypes and production-ready interfaces. This period sharpened my visual language, taught me how to run fast discovery cycles, and helped me develop a pragmatic design process grounded in user feedback and measurable product goals.",
  },
  {
    name: "Interactive Data Storytelling",
    start: "2023-01",
    end: "2023-10",
    description:
      "I designed and built interactive visual narratives for a media-focused startup that needed high-performance web experiences. I led architecture discussions, introduced reusable design tokens, and created a collaborative workflow that allowed engineering and editorial teams to ship rich stories on weekly timelines.",
    projectSlug: "interactive-data-stories",
  },
  {
    name: "Senior Frontend Engineer",
    start: "2023-11",
    end: "2025-02",
    description:
      "I joined a product team focused on workflow automation and owned the frontend platform layer. I drove migration to modern tooling, improved accessibility standards, and reduced performance regressions with a stronger observability setup. The role deepened my leadership skills across code quality, mentoring, and delivery.",
    projectSlug: "workflow-automation-suite",
  },
  {
    name: "Independent Studio",
    start: "2025-03",
    description:
      "I launched an independent studio to build polished digital products from concept to deployment. My current work spans product strategy, interface engineering, and narrative-driven marketing websites. The studio model allows me to collaborate deeply with mission-driven teams while maintaining high execution quality.",
    projectSlug: "studio-portfolio-platform",
  },
];
