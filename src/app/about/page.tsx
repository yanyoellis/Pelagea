import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { aboutTimeline, asset, team } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, research posture and fictional ethical framework behind Pelagea.",
};

const editorialSections = [
  {
    eyebrow: "Our Story",
    title: "A house built for depth, not display.",
    text: "Pelagea began as a fictional archive for rare marine observation. Over time, it became a luxury concept where the language of collection is balanced with stewardship, care and the quiet authority of research.",
    image: asset.journal,
    alt: "Marine research table with specimens and underwater projected light.",
  },
  {
    eyebrow: "Our Mission",
    title: "To make rarity feel responsible.",
    text: "The brand imagines a different kind of private acquisition. Every living specimen is connected to habitat design, origin records and a slower cultural story around the ocean.",
    image: asset.philosophy,
    alt: "Translucent fish swimming in a bright underwater habitat.",
  },
  {
    eyebrow: "Ethical Collection",
    title: "No desire without documentation.",
    text: "In the Pelagea world, every acquisition begins with permits, environmental assessment and a refusal to treat living species as decoration. Beauty is allowed only when care is already in place.",
    image: asset.research,
    alt: "Conservation atelier with coral specimens and cool ocean light.",
  },
  {
    eyebrow: "Research",
    title: "The archive is part of the product.",
    text: "Curators and collectors need more than a name and a price. Pelagea's fictional archive records habitat conditions, movement patterns, light needs and conservation context.",
    image: asset.twilight,
    alt: "Dim blue underwater scene with jellyfish and suspended particles.",
  },
  {
    eyebrow: "Conservation",
    title: "Luxury measured by restraint.",
    text: "The most valuable species are not always available. Pelagea uses scarcity as an ethical design principle: some encounters remain editorial, educational or entirely private.",
    image: asset.abyss,
    alt: "Abyssal ocean scene with sparse bioluminescent forms.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#071625] text-white">
      <PageHero
        eyebrow="About Pelagea"
        title="A fictional ocean house with museum instincts."
        text="Pelagea is imagined as a luxury brand where rare marine life is never reduced to inventory. It is researched, protected, framed and experienced slowly."
        image={asset.research}
        imageAlt="Private marine research atelier with rare coral specimens."
      />

      <section className="depth-band px-5 py-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-28">
          {editorialSections.map((section, index) => (
            <div
              key={section.eyebrow}
              className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div className="relative min-h-[420px] overflow-hidden rounded-[8px]">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="image-zoom object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(7,22,37,0.72))]" />
                </div>
              </Reveal>
              <SectionHeading eyebrow={section.eyebrow} title={section.title}>
                <p>{section.text}</p>
              </SectionHeading>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#071625_0%,#02070c_100%)] px-5 py-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Fictional Timeline"
            title="A history designed like an archive."
            align="center"
          >
            <p>
              The Pelagea timeline is part brand mythology, part UX device. It
              gives the concept weight without pretending to be a real company.
            </p>
          </SectionHeading>

          <div className="mt-16 grid gap-5 md:grid-cols-4">
            {aboutTimeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.08}>
                <article className="min-h-72 rounded-[8px] border border-white/12 bg-white/[0.045] p-6">
                  <p className="font-display text-4xl text-cyan-soft">
                    {item.year}
                  </p>
                  <h3 className="mt-8 text-xl leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-white/58">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#02070c] px-5 py-28 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading eyebrow="The Team" title="A quiet network of specialists.">
            <p>
              Pelagea is guided by fictional curators, researchers and private
              advisors. The team is intentionally presented as a collective
              practice rather than a corporate roster.
            </p>
          </SectionHeading>
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {team.map((role) => (
                <div
                  key={role}
                  className="rounded-[8px] border border-white/12 bg-white/[0.045] p-6 text-lg text-white/78"
                >
                  {role}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
