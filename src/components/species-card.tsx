import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Species } from "@/data/site";
import { Reveal } from "@/components/reveal";

type SpeciesCardProps = {
  species: Species;
  index: number;
};

export function SpeciesCard({ species, index }: SpeciesCardProps) {
  return (
    <Reveal delay={index * 0.08}>
      <article className="group overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.055] text-white shadow-2xl shadow-black/10 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-cyan-soft/40 hover:bg-white/[0.075]">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#071625]">
          <Image
            src={species.image}
            alt={`${species.name} in its Pelagea depth environment`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="image-zoom object-cover opacity-[0.88]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(7,22,37,0.74))]" />
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs tracking-[0.18em] text-cyan-soft uppercase">
                {species.depth}
              </p>
              <h3 className="font-display mt-2 text-2xl leading-tight">
                {species.name}
              </h3>
            </div>
            <ArrowUpRight
              aria-hidden
              className="mt-1 h-5 w-5 shrink-0 text-white/42 transition group-hover:text-cyan-soft"
            />
          </div>
          <p className="mt-5 min-h-24 text-sm leading-7 text-white/62">
            {species.description}
          </p>
          <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-xs tracking-[0.18em] text-white/42 uppercase">
              Private price
            </span>
            <span className="font-display text-xl text-white">{species.price}</span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
