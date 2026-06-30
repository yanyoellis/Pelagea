import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`mx-auto max-w-4xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <p className="text-xs tracking-[0.22em] text-cyan-soft uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display mt-5 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <div className="mt-6 text-base leading-8 text-white/68 sm:text-lg">
        {children}
      </div>
    </Reveal>
  );
}
