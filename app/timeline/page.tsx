import { Timeline } from "@/components/Timeline";
import { timelineEvents } from "@/data/timeline";

export default function TimelinePage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">Timeline</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">A brief journey through selected chapters and meaningful project milestones.</p>
      </div>
      <Timeline events={timelineEvents} />
    </section>
  );
}
