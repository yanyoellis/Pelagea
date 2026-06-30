import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, ChevronDown } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { DepthZone } from "@/components/depth-zone";
import { OceanAtmosphere } from "@/components/ocean-atmosphere";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { articles, asset, depthZones } from "@/data/site";

export default function Home() {
  return (
    <div className="page-shell text-white">
      <OceanAtmosphere />

      <section className="relative min-h-[112vh] overflow-hidden bg-[#d8f1ff] text-[#06111d]">
        <Image
          src={asset.hero}
          alt="Sunlit ocean surface viewed from underwater."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(216,241,255,0.12),rgba(216,241,255,0.08)_42%,rgba(7,22,37,0.66)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-24 sm:px-8 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="text-xs tracking-[0.24em] text-[#15446a] uppercase">
              Rare marine species for private worlds
            </p>
            <h1 className="font-display mt-6 text-6xl leading-[0.92] text-[#06111d] sm:text-8xl lg:text-[8.8rem]">
              Luxury beneath the surface.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#06111d]/72 sm:text-xl">
              Pelagea is a fictional luxury house for collectors, museums and
              private aquariums seeking the rarest forms of marine life.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#collection"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-[#06111d]/24 bg-[#06111d] px-5 text-xs tracking-[0.08em] text-white uppercase transition duration-500 hover:-translate-y-0.5 hover:bg-[#15446a]"
              >
                Explore Collection
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <Link
                href="/case-study"
                className="ghost-button focus-ring border-[#06111d]/20 text-xs text-[#06111d] hover:border-[#15446a]/50 hover:bg-white/35"
              >
                <BookOpen aria-hidden className="h-4 w-4" />
                View UX Case Study
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-xs tracking-[0.18em] text-white/70 uppercase">
          Begin descent
          <ChevronDown aria-hidden className="h-5 w-5 animate-bounce" />
        </div>
      </section>

      <section className="depth-band bg-[linear-gradient(180deg,#123f65_0%,#0b2d4a_100%)] px-5 py-28 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="relative min-h-[560px] overflow-hidden rounded-[8px]">
              <Image
                src={asset.philosophy}
                alt="Rare translucent fish moving near pale coral."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="image-zoom object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(7,22,37,0.7))]" />
            </div>
          </Reveal>
          <SectionHeading
            eyebrow="Brand Philosophy"
            title="Rarity without excess. Care before possession."
          >
            <p>
              Pelagea searches for marine life that feels closer to living art
              than inventory. Every specimen is imagined through ethical
              sourcing, controlled habitats and a level of restraint usually
              reserved for museums and jewelry houses.
            </p>
            <p className="mt-5">
              The experience asks visitors to slow down. Instead of a standard
              product grid, each movement down the page becomes a deeper layer
              of discovery.
            </p>
          </SectionHeading>
        </div>
      </section>

      <div id="collection">
        {depthZones.map((zone, index) => (
          <DepthZone key={zone.id} zone={zone} index={index} />
        ))}
      </div>

      <section className="depth-band bg-[linear-gradient(180deg,#06111d_0%,#040b13_100%)] px-5 py-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured Journal"
            title="A quieter culture around the ocean."
          >
            <p>
              Pelagea extends beyond acquisition into research, conservation and
              editorial storytelling. The journal gives the fictional brand a
              museum-like layer of credibility and atmosphere.
            </p>
          </SectionHeading>
          <div className="mt-14">
            <ArticleCard article={articles[0]} featured />
          </div>
          <div className="mt-10">
            <Link href="/journal" className="luxury-button focus-ring text-xs">
              Read Journal
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#02070c] px-5 py-32 text-white sm:px-8 lg:px-10">
        <Image
          src={asset.abyss}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.38]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,7,12,0.42),#02070c_80%)]" />
        <Reveal className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="font-display text-4xl leading-tight sm:text-6xl">
            Some worlds exist only for those willing to dive deeper.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="luxury-button focus-ring text-xs">
              Contact Pelagea
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <Link href="/case-study" className="ghost-button focus-ring text-xs">
              <BookOpen aria-hidden className="h-4 w-4" />
              UX Logic
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
