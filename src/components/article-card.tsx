import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/data/site";
import { Reveal } from "@/components/reveal";

type ArticleCardProps = {
  article: Article;
  featured?: boolean;
  index?: number;
};

export function ArticleCard({ article, featured = false, index = 0 }: ArticleCardProps) {
  return (
    <Reveal delay={index * 0.07}>
      <Link
        href={`/journal/${article.slug}`}
        className={`focus-ring group block overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.045] text-white transition duration-500 hover:-translate-y-1 hover:border-cyan-soft/40 ${
          featured ? "grid lg:grid-cols-[1.18fr_0.82fr]" : ""
        }`}
      >
        <div
          className={`relative overflow-hidden bg-[#071625] ${
            featured ? "min-h-[420px]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={article.image}
            alt={article.coverAlt}
            fill
            sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
            className="image-zoom object-cover opacity-[0.86]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(7,22,37,0.74))]" />
        </div>
        <div className={`p-6 ${featured ? "lg:p-10" : ""}`}>
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs tracking-[0.18em] text-cyan-soft uppercase">
              {article.category}
            </p>
            <p className="text-xs text-white/42">{article.readingTime}</p>
          </div>
          <h2
            className={`font-display mt-4 leading-tight ${
              featured ? "text-4xl sm:text-5xl" : "text-3xl"
            }`}
          >
            {article.title}
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/62">
            {article.excerpt}
          </p>
          <span className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.18em] text-white/78 uppercase">
            Read editorial
            <ArrowRight
              aria-hidden
              className="h-4 w-4 transition group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
