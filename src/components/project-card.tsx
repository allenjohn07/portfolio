import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  subtitle: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  width?: number;
  height?: number;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  dates,
  tags,
  image,
  links,
  className,
  width,
  height,
}: Props) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-border hover:shadow-lg hover:shadow-primary/5 h-full flex flex-col",
        className
      )}
    >
      {image && (
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={width}
            height={height}
            className="h-44 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-base tracking-tight">
              {title}
              {subtitle && (
                <span className="text-muted-foreground/60 font-normal ml-1.5 text-xs">
                  ({subtitle})
                </span>
              )}
            </h3>
          </div>
          <p className="text-xs text-muted-foreground/60">{dates}</p>
        </div>

        <Markdown className="prose max-w-full text-pretty font-sans text-sm leading-relaxed text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[11px] rounded-full bg-primary/5 text-muted-foreground border border-border/50 transition-colors duration-300 hover:border-primary/30 hover:text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="flex items-center gap-2 pt-1">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.icon}
                <span className="border-b border-transparent hover:border-current">
                  {link.type}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
