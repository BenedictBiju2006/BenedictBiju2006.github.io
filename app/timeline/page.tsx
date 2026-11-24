import type { Metadata } from "next";
import { Timeline } from "@/components/Timeline";
import { getAllTimelineEvents } from "@/lib/timeline";

export const metadata: Metadata = { title: "Timeline", description: "Academic and professional progression of Benedict Biju.", alternates: { canonical: "/timeline/" } };

export default async function TimelinePage() {
  const timelineEvents = await getAllTimelineEvents();
  return (
    <section className="min-h-[calc(100vh-4rem)] py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">Timeline</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">An overview of my professional and academic progression to date.</p>
      </div>
      <Timeline events={timelineEvents} />
    </section>
  );
}
