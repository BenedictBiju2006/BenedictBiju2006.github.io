
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type LandingExperienceProps = {
  hero: ReactNode;
  projects: ReactNode;
};

const HEADER_HEIGHT = 64;

export function LandingExperience({ hero, projects }: LandingExperienceProps) {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [projectsHeight, setProjectsHeight] = useState(0);
  const { scrollY } = useScroll();
  const reducedMotion = useReducedMotion();

  const x = useTransform(scrollY, [0, Math.max(viewport.height, 1)], [0, -viewport.width]);

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: Math.max(window.innerHeight - HEADER_HEIGHT, 1),
      });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    const observer = new ResizeObserver(() => {
      if (projectsRef.current) setProjectsHeight(projectsRef.current.getBoundingClientRect().height);
    });

    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      window.removeEventListener("resize", updateViewport);
      observer.disconnect();
    };
  }, []);

  if (reducedMotion) {
    return (
      <div>
        <div className="min-h-[calc(100dvh-4rem)]">{hero}</div>
        {projects}
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-clip">
      <section className="relative h-[calc(200dvh-8rem)]">
        <div className="sticky top-16 h-[calc(100dvh-4rem)]">
          <motion.div className="flex w-[200vw] items-start" style={{ x }}>
            <div className="h-[calc(100dvh-4rem)] w-screen shrink-0">
              {hero}
            </div>

            <div ref={projectsRef} className="w-screen shrink-0">
              {projects}
            </div>
          </motion.div>
        </div>
      </section>

      <div aria-hidden="true" style={{ height: Math.max(0, projectsHeight - viewport.height) }} />
    </div>
  );
}
