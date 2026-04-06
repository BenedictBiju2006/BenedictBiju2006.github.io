import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-100" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-4 text-lg leading-8 text-zinc-300" {...props} />
  ),
  img: ({ src = "", alt = "", ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span className="my-8 block w-full overflow-hidden rounded-2xl border border-zinc-800">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="h-auto w-full object-cover"
        unoptimized
        {...rest}
      />
    </span>
  ),
};

type MDXRendererProps = {
  source: string;
};

export function MDXRenderer({ source }: MDXRendererProps) {
  return <MDXRemote source={source} components={components} />;
}
