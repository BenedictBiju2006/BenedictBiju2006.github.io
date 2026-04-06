import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-semibold tracking-tight text-white">404</h1>
      <p className="mt-4 text-zinc-400">The page you are looking for does not exist.</p>
      <Link href="/projects" className="mt-8 rounded-full border border-zinc-700 px-6 py-3 text-sm text-zinc-200 hover:bg-zinc-900">
        Back to projects
      </Link>
    </section>
  );
}
