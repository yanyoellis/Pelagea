import Image from "next/image";
import type { DepthZone as DepthZoneType } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SpeciesCard } from "@/components/species-card";

type DepthZoneProps = {
  zone: DepthZoneType;
  index: number;
};

export function DepthZone({ zone, index }: DepthZoneProps) {
  return (
    <section
      id={zone.id}
      className="depth-band relative overflow-hidden px-5 py-28 text-white sm:px-8 lg:px-10"
      style={{ background: zone.gradient }}
    >
      <div className="absolute inset-0 opacity-20">
        <Image
          src={zone.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,37,0.12),rgba(7,22,37,0.58))]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs tracking-[0.22em] text-cyan-soft uppercase">
              {zone.label} / {zone.range}
            </p>
            <h2 className="font-display mt-5 text-5xl leading-none sm:text-6xl lg:text-7xl">
              {zone.name}
            </h2>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-sm tracking-[0.18em] text-white/48 uppercase">
              {zone.tone}
            </p>
            <p className="mt-4 text-lg leading-8 text-white/72">{zone.intro}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {zone.species.map((species, speciesIndex) => (
            <SpeciesCard
              key={species.name}
              species={species}
              index={index + speciesIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
