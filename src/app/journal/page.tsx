import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { articles, asset } from "@/data/site";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Pelagea's premium editorial journal on rare species, exploration, conservation and deep-sea culture.",
};

export default function JournalPage() {
  const [featured, ...rest] = articles;

  return (
    <div className="bg-[#071625] text-white">
      <PageHero
        eyebrow="Pelagea Journal"
        title="Vogue pacing. Ocean science gravity."
        text="A fictional editorial magazine for species, exploration, conservation, collectors and the emotional culture of the deep sea."
        image={asset.journal}
        imageAlt="Editorial marine research table with specimens and ocean projection."
      />

      <section className="depth-band px-5 py-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <ArticleCard article={featured} featured />

          <div className="mt-24">
            <SectionHeading
              eyebrow="Editorial Grid"
              title="Stories for collectors, curators and ocean minds."
            >
              <p>
                Each article expands the brand world and keeps the site from
                feeling like a simple catalogue. The tone remains calm,
                investigative and cinematic.
              </p>
            </SectionHeading>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {rest.map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
