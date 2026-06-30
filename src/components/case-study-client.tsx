"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Globe2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  caseStudyCopy,
  languageOptions,
  type CaseLang,
} from "@/data/case-study";

export function CaseStudyClient() {
  const [lang, setLang] = useState<CaseLang>("en");
  const copy = caseStudyCopy[lang];

  const sectionLinks = useMemo(
    () => copy.sections.map((section) => ({ id: section.id, title: section.title })),
    [copy.sections],
  );

  return (
    <div lang={copy.htmlLang} className="bg-[#071625] text-white">
      <section className="relative overflow-hidden px-5 pt-36 pb-20 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(138,216,255,0.18),transparent_34rem)]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:items-start">
            <Reveal>
              <p className="text-xs tracking-[0.24em] text-cyan-soft uppercase">
                {copy.labels.eyebrow}
              </p>
              <h1 className="font-display mt-5 max-w-5xl text-6xl leading-[0.94] sm:text-8xl">
                {copy.labels.title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
                {copy.labels.subtitle}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/" className="luxury-button focus-ring text-xs">
                  {copy.labels.viewWebsite}
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
                <a href="#overview" className="ghost-button focus-ring text-xs">
                  {copy.labels.summary}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <aside className="rounded-[8px] border border-white/12 bg-white/[0.055] p-5 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs tracking-[0.18em] text-cyan-soft uppercase">
                    {copy.labels.switcher}
                  </p>
                  <Globe2 aria-hidden className="h-4 w-4 text-cyan-soft" />
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {languageOptions.map((option) => (
                    <button
                      key={option.code}
                      type="button"
                      aria-pressed={lang === option.code}
                      onClick={() => setLang(option.code)}
                      className={`focus-ring min-h-11 rounded-[8px] border text-xs tracking-[0.14em] transition ${
                        lang === option.code
                          ? "border-cyan-soft bg-cyan-soft/16 text-white"
                          : "border-white/12 bg-white/[0.035] text-white/58 hover:border-white/34 hover:text-white"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-white/54">
                  {copy.labels.localizationNote}
                </p>
              </aside>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {copy.metrics.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 0.06}>
                <div className="min-h-36 rounded-[8px] border border-white/12 bg-white/[0.045] p-5">
                  <p className="text-xs tracking-[0.18em] text-cyan-soft uppercase">
                    {metric.label}
                  </p>
                  <p className="font-display mt-6 text-2xl leading-tight">
                    {metric.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[8px] border border-white/12 bg-white/[0.045] p-5">
              <p className="text-xs tracking-[0.18em] text-cyan-soft uppercase">
                {copy.labels.contents}
              </p>
              <nav
                aria-label={copy.labels.navigation}
                className="mt-5 grid max-h-[60vh] gap-3 overflow-y-auto pr-2 text-sm text-white/58"
              >
                {sectionLinks.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="focus-ring transition hover:text-white"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="text-xs tracking-[0.18em] text-cyan-soft uppercase">
                  {copy.labels.navigation}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/58">
                  {copy.navItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-[8px] border border-white/10 px-3 py-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            {copy.sections.map((section, index) => (
              <Reveal key={section.id} delay={index < 4 ? index * 0.04 : 0}>
                <section
                  id={section.id}
                  className="scroll-mt-28 rounded-[8px] border border-white/12 bg-white/[0.04] p-6 sm:p-8 lg:p-10"
                >
                  <p className="text-xs tracking-[0.18em] text-cyan-soft uppercase">
                    {section.kicker}
                  </p>
                  <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
                    {section.title}
                  </h2>
                  <div className="mt-7 space-y-5 text-base leading-8 text-white/68 sm:text-lg">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-7 grid gap-3 text-base leading-7 text-white/68 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
