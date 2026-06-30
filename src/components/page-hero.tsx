import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  cta?: {
    label: string;
    href: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  cta,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[76vh] overflow-hidden bg-[#071625] pt-32 text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.62]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,37,0.12),rgba(7,22,37,0.64)_58%,#071625_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-[64vh] max-w-7xl items-end px-5 pb-16 sm:px-8 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="text-xs tracking-[0.24em] text-cyan-soft uppercase">
            {eyebrow}
          </p>
          <h1 className="font-display mt-5 text-5xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
            {text}
          </p>
          {cta ? (
            <a href={cta.href} className="luxury-button focus-ring mt-9 text-xs">
              {cta.label}
              <ArrowRight aria-hidden className="h-4 w-4" />
            </a>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
