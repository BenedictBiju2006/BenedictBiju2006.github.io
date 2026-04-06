type HorizontalScrollProps = {
  children: React.ReactNode;
};

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  return (
    <div className="relative mx-auto w-full max-w-7xl">
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 py-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {children}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-black to-transparent" />
    </div>
  );
}
