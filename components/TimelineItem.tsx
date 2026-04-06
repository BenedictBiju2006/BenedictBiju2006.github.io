"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { TimelineEvent } from "@/data/timeline";

type TimelineItemProps = {
  event: TimelineEvent;
  index: number;
  activeIndex: number;
};

export function TimelineItem({ event, index, activeIndex }: TimelineItemProps) {
  const isActive = index === activeIndex;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.04 }}
      className="relative pl-10"
    >
      <span
        className={`absolute left-[-8px] top-2 h-4 w-4 rounded-full border-2 transition ${
          isActive ? "border-white bg-white" : "border-zinc-600 bg-zinc-900"
        }`}
      />
      <div className={`rounded-2xl border p-6 transition ${isActive ? "border-zinc-500 bg-zinc-900" : "border-zinc-800 bg-zinc-950"}`}>
        <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
          {event.start} {event.end ? `— ${event.end}` : "— Present"}
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100">{event.name}</h3>
        <p className="mt-4 leading-7 text-zinc-300">{event.description}</p>
        {event.projectSlug ? (
          <Link href={`/projects/${event.projectSlug}`} className="mt-4 inline-flex text-sm font-medium text-zinc-200 underline underline-offset-4 hover:text-white">
            View related project
          </Link>
        ) : null}
      </div>
    </motion.article>
  );
}
