"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import type { TimelineEvent } from "@/data/timeline";
import { TimelineItem } from "./TimelineItem";

type TimelineProps = {
  events: TimelineEvent[];
};

export function Timeline({ events }: TimelineProps) {
  const { scrollYProgress } = useScroll();
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.round(latest * Math.max(events.length - 1, 0));
    setActiveIndex(index);
  });

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="relative">
        <motion.span
          className="absolute left-0 top-0 h-full w-[2px] origin-top bg-zinc-700"
          style={{ scaleY: scrollYProgress }}
        />
        <div className="space-y-8">
          {events.map((event, idx) => (
            <TimelineItem key={`${event.name}-${event.start}`} event={event} index={idx} activeIndex={activeIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}
