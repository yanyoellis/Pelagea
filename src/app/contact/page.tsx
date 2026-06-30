import type { Metadata } from "next";
import { Mail, MapPin, Send } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { asset } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pelagea for private collection inquiries, press, collaborations and fictional luxury marine requests.",
};

const inquiryLinks = [
  {
    label: "Business inquiries",
    value: "private@pelagea.example",
  },
  {
    label: "Press",
    value: "press@pelagea.example",
  },
  {
    label: "Collaborations",
    value: "atelier@pelagea.example",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#071625] text-white">
      <PageHero
        eyebrow="Contact"
        title="Private access begins quietly."
        text="For collection requests, institutional partnerships and editorial collaborations, Pelagea responds with the discretion of a private ocean archive."
        image={asset.abyss}
        imageAlt="Dark abyssal ocean scene with subtle bioluminescent organisms."
      />

      <section className="px-5 py-28 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <form className="grid gap-5" aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm text-white/68">
                  Name
                  <input
                    className="focus-ring min-h-14 rounded-[8px] border border-white/12 bg-white/[0.045] px-4 text-white outline-none transition focus:border-cyan-soft"
                    name="name"
                    autoComplete="name"
                  />
                </label>
                <label className="grid gap-2 text-sm text-white/68">
                  Email
                  <input
                    className="focus-ring min-h-14 rounded-[8px] border border-white/12 bg-white/[0.045] px-4 text-white outline-none transition focus:border-cyan-soft"
                    name="email"
                    type="email"
                    autoComplete="email"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm text-white/68">
                Subject
                <input
                  className="focus-ring min-h-14 rounded-[8px] border border-white/12 bg-white/[0.045] px-4 text-white outline-none transition focus:border-cyan-soft"
                  name="subject"
                />
              </label>
              <label className="grid gap-2 text-sm text-white/68">
                Message
                <textarea
                  className="focus-ring min-h-48 resize-y rounded-[8px] border border-white/12 bg-white/[0.045] p-4 text-white outline-none transition focus:border-cyan-soft"
                  name="message"
                />
              </label>
              <button className="luxury-button focus-ring w-fit text-xs" type="button">
                Submit request
                <Send aria-hidden className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="space-y-8">
              {inquiryLinks.map((item) => (
                <div key={item.label} className="border-b border-white/10 pb-7">
                  <p className="text-xs tracking-[0.18em] text-cyan-soft uppercase">
                    {item.label}
                  </p>
                  <a
                    href={`mailto:${item.value}`}
                    className="focus-ring mt-3 inline-flex items-center gap-3 text-lg text-white/78 transition hover:text-white"
                  >
                    <Mail aria-hidden className="h-4 w-4" />
                    {item.value}
                  </a>
                </div>
              ))}

              <div>
                <p className="text-xs tracking-[0.18em] text-cyan-soft uppercase">
                  Social
                </p>
                <div className="mt-4 flex flex-wrap gap-5 text-white/62">
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
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#02070c] px-5 pb-28 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-7xl">
          <div className="map-grid relative min-h-[520px] overflow-hidden rounded-[8px] border border-white/12 bg-[#06111d]">
            <div className="absolute inset-8 rounded-[50%] border border-cyan-soft/20" />
            <div className="absolute inset-20 rounded-[50%] border border-cyan-soft/10" />
            <div className="absolute left-[52%] top-[42%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-3">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-cyan-soft/50 bg-cyan-soft/12">
                <span className="absolute h-12 w-12 animate-ping rounded-full border border-cyan-soft/30" />
                <MapPin aria-hidden className="relative h-5 w-5 text-cyan-soft" />
              </span>
              <span className="max-w-44 text-sm leading-6 text-white/68">
                Pelagea Private Archive, North Atlantic concept location
              </span>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
