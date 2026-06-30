import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ReadingProgress } from "@/components/reading-progress";
import { Reveal } from "@/components/reveal";
import { articles } from "@/data/site";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-[#071625] text-white">
      <ReadingProgress />
      <section className="relative min-h-[88vh] overflow-hidden pt-28">
        <Image
          src={article.image}
          alt={article.coverAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.72]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,37,0.08),rgba(7,22,37,0.66)_58%,#071625_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-end px-5 pb-16 sm:px-8 lg:px-10">
          <Reveal className="max-w-4xl">
            <Link
              href="/journal"
              className="focus-ring inline-flex items-center gap-2 text-xs tracking-[0.18em] text-white/64 uppercase transition hover:text-white"
            >
              <ArrowLeft aria-hidden className="h-4 w-4" />
              Journal
            </Link>
            <p className="mt-8 text-xs tracking-[0.22em] text-cyan-soft uppercase">
              {article.category} / {article.readingTime}
            </p>
            <h1 className="font-display mt-5 text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">
              {article.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              {article.excerpt}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[260px_minmax(0,760px)_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-l border-white/12 pl-5">
              <p className="text-xs tracking-[0.18em] text-cyan-soft uppercase">
                Contents
              </p>
              <nav className="mt-5 grid gap-3 text-sm text-white/54">
                {article.sections.map((section) => (
                  <a
                    key={section.title}
                    href={`#${section.title.toLowerCase().replaceAll(" ", "-")}`}
                    className="focus-ring transition hover:text-white"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div>
            <Reveal>
              <blockquote className="font-display border-y border-white/12 py-10 text-3xl leading-tight text-white sm:text-4xl">
                &ldquo;{article.pullQuote}&rdquo;
              </blockquote>
            </Reveal>

            <div className="mt-16 space-y-16">
              {article.sections.map((section, index) => (
                <Reveal key={section.title} delay={index * 0.06}>
                  <section
                    id={section.title.toLowerCase().replaceAll(" ", "-")}
                    className="scroll-mt-32"
                  >
                    <h2 className="font-display text-4xl leading-tight">
                      {section.title}
                    </h2>
                    <div className="mt-6 space-y-5 text-lg leading-9 text-white/68">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="hidden xl:block">
            <div className="sticky top-28 h-[560px] overflow-hidden rounded-[8px]">
              <Image
                src={article.image}
                alt=""
                fill
                sizes="25vw"
                className="object-cover opacity-[0.8]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(7,22,37,0.78))]" />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
