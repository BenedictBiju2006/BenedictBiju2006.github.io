import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Portfolio",
  description: "A modern portfolio built with Next.js, TypeScript, Tailwind, and MDX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-800/80 bg-black/30 backdrop-blur-xl">
          <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
            <Link className="text-sm font-medium tracking-widest text-zinc-300 uppercase" href="/">
              Portfolio
            </Link>
            <div className="flex gap-6 text-sm text-zinc-300">
              <Link className="transition hover:text-white" href="/projects">
                Projects
              </Link>
              <Link className="transition hover:text-white" href="/timeline">
                Timeline
              </Link>
            </div>
          </nav>
        </header>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
