"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, Compass } from "lucide-react";
import { navItems } from "@/data/site";

export function Navigation() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.18, 0.72],
    ["rgba(7,22,37,0.08)", "rgba(7,22,37,0.54)", "rgba(3,9,15,0.86)"],
  );
  const borderColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["rgba(255,255,255,0.10)", "rgba(138,216,255,0.20)"],
  );

  return (
    <motion.header
      style={{ backgroundColor, borderColor }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <nav className="mx-auto w-full max-w-7xl px-5 text-white sm:px-8 lg:px-10">
        <div
          className="flex min-h-20 items-center justify-between"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="focus-ring flex items-center gap-3 text-lg tracking-[0.24em] uppercase"
            aria-label="Pelagea home"
          >
            <Compass aria-hidden className="h-5 w-5 text-cyan-soft" />
            <span className="font-display text-xl tracking-[0.18em]">
              Pelagea
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-[0.72rem] tracking-[0.18em] uppercase text-white/74 md:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-ring transition-colors hover:text-white ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/case-study"
            className="focus-ring hidden min-h-10 items-center gap-2 rounded-[8px] border border-cyan-soft/40 px-4 text-[0.68rem] tracking-[0.16em] uppercase text-white transition hover:border-white/70 hover:bg-white/10 sm:inline-flex"
          >
            <BookOpen aria-hidden className="h-4 w-4" />
            UX Case Study
          </Link>
        </div>

        <div className="flex gap-5 overflow-x-auto border-t border-white/8 pb-3 text-[0.68rem] tracking-[0.16em] uppercase text-white/68 md:hidden">
          {[...navItems, { label: "UX", href: "/case-study" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring shrink-0 pt-3 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
