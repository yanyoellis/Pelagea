import Link from "next/link";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#02070c] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr] lg:px-10">
        <div>
          <Link
            href="/"
            className="focus-ring font-display text-2xl tracking-[0.18em] uppercase"
          >
            Pelagea
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
            Rare marine species, editorial depth and private collection
            inquiries for a fictional luxury ocean house.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.18em] text-cyan-soft uppercase">
            Navigation
          </p>
          <div className="mt-5 grid gap-3 text-sm text-white/64">
            {[...navItems, { label: "UX Case Study", href: "/case-study" }].map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring w-fit transition hover:text-white"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.18em] text-cyan-soft uppercase">
            Social
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/64">
            <a className="focus-ring transition hover:text-white" href="#">
              Instagram
            </a>
            <a className="focus-ring transition hover:text-white" href="#">
              Vimeo
            </a>
            <a className="focus-ring transition hover:text-white" href="#">
              LinkedIn
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/42">
            <a className="focus-ring transition hover:text-white" href="#">
              Privacy Policy
            </a>
            <a className="focus-ring transition hover:text-white" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 px-5 py-5 text-center text-xs tracking-[0.12em] text-white/36 uppercase">
        Copyright 2026 Pelagea. Conceptual portfolio project.
      </div>
    </footer>
  );
}
