export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export const asset = {
  hero: "/assets/hero-surface.png",
  philosophy: "/assets/brand-philosophy.png",
  twilight: "/assets/twilight-depth.png",
  abyss: "/assets/abyss.png",
  journal: "/assets/journal-editorial.png",
  research: "/assets/research-atelier.png",
};

export type Species = {
  name: string;
  depth: string;
  description: string;
  price: string;
  image: string;
};

export type DepthZone = {
  id: string;
  label: string;
  name: string;
  range: string;
  tone: string;
  intro: string;
  image: string;
  gradient: string;
  species: Species[];
};

export const depthZones: DepthZone[] = [
  {
    id: "sunlight",
    label: "Zone 01",
    name: "Sunlight Zone",
    range: "0-200 m",
    tone: "Bright, open, quietly radiant",
    intro:
      "The first descent remains close to air and warmth. Species here feel luminous, architectural and accessible only by invitation.",
    image: asset.philosophy,
    gradient: "linear-gradient(180deg, #d8f1ff 0%, #9dd7f3 52%, #3e8bbe 100%)",
    species: [
      {
        name: "Glass Ribbonfish",
        depth: "48 m",
        description:
          "A translucent, silver-veined specimen selected for private reef salons and museum light studies.",
        price: "$42,000",
        image: asset.philosophy,
      },
      {
        name: "Opaline Coral Fan",
        depth: "72 m",
        description:
          "A slow-growing living structure with pearl-toned branches and a certified conservation lineage.",
        price: "$58,000",
        image: asset.philosophy,
      },
      {
        name: "Azure Veil Tang",
        depth: "96 m",
        description:
          "A calm, highly responsive fish prized for its shifting blue body and restrained movement.",
        price: "$31,500",
        image: asset.hero,
      },
    ],
  },
  {
    id: "twilight",
    label: "Zone 02",
    name: "Twilight Zone",
    range: "200-1,000 m",
    tone: "Cool, fogged, meditative",
    intro:
      "Light becomes selective. The collection narrows into species whose rarity is felt through silence, distance and slow motion.",
    image: asset.twilight,
    gradient: "linear-gradient(180deg, #3e8bbe 0%, #236b95 46%, #15446a 100%)",
    species: [
      {
        name: "Velvet Lantern Medusa",
        depth: "420 m",
        description:
          "A drifting gelatinous form with subtle internal glow, reserved for low-light research environments.",
        price: "$86,000",
        image: asset.twilight,
      },
      {
        name: "Nocturne Sailfin",
        depth: "610 m",
        description:
          "A dark-bodied species with matte fins and a calm feeding rhythm suited to panoramic aquaria.",
        price: "$74,000",
        image: asset.twilight,
      },
      {
        name: "Blue Ash Ctenophore",
        depth: "780 m",
        description:
          "A fragile comb jelly whose light moves in controlled waves, handled only through research partners.",
        price: "$112,000",
        image: asset.twilight,
      },
    ],
  },
  {
    id: "midnight",
    label: "Zone 03",
    name: "Midnight Zone",
    range: "1,000-4,000 m",
    tone: "Dark, focused, bioluminescent",
    intro:
      "The ocean becomes a gallery of brief signals. Every living form feels curated, remote and impossibly precise.",
    image: asset.twilight,
    gradient: "linear-gradient(180deg, #15446a 0%, #0c2d4b 48%, #071625 100%)",
    species: [
      {
        name: "Cobalt Halo Squid",
        depth: "1,240 m",
        description:
          "A rare cephalopod whose mantle emits a controlled halo under pressure-balanced observation.",
        price: "$148,000",
        image: asset.twilight,
      },
      {
        name: "Inkglass Dragonet",
        depth: "1,930 m",
        description:
          "A nearly black species with fine iridescent edges, selected for collectors of living shadow.",
        price: "$175,000",
        image: asset.abyss,
      },
      {
        name: "Lumen Thread Star",
        depth: "2,600 m",
        description:
          "A delicate organism with threadlike arms and faint cyan luminescence, available by research permit.",
        price: "$204,000",
        image: asset.abyss,
      },
    ],
  },
  {
    id: "abyss",
    label: "Zone 04",
    name: "Abyss",
    range: "4,000-6,000 m",
    tone: "Near black, minimal, hidden",
    intro:
      "At the lowest point of the page, rarity becomes almost abstract. These species are presented as private discoveries, not inventory.",
    image: asset.abyss,
    gradient: "linear-gradient(180deg, #071625 0%, #05111d 50%, #02070c 100%)",
    species: [
      {
        name: "Abyssal Pearl Angler",
        depth: "4,420 m",
        description:
          "An extraordinary deep-sea presence with one restrained light point and an unmatched acquisition protocol.",
        price: "Private",
        image: asset.abyss,
      },
      {
        name: "Blackwater Glass Eel",
        depth: "5,180 m",
        description:
          "A nearly invisible species documented by Pelagea's private research network before release.",
        price: "Private",
        image: asset.abyss,
      },
      {
        name: "Sable Crown Medusa",
        depth: "5,940 m",
        description:
          "The rarest living artwork in the Pelagea archive, shown only to institutional and private patrons.",
        price: "On request",
        image: asset.abyss,
      },
    ],
  },
];

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
  image: string;
  coverAlt: string;
  sections: {
    title: string;
    body: string[];
  }[];
  pullQuote: string;
};

export const articles: Article[] = [
  {
    slug: "living-art-below-200-meters",
    category: "Species",
    title: "Living Art Below 200 Meters",
    excerpt:
      "How rarity, care and habitat design shape the first layer of Pelagea's collection.",
    readingTime: "7 min read",
    image: asset.philosophy,
    coverAlt:
      "Translucent rare fish moving above pale coral in refined shallow water.",
    pullQuote:
      "A rare species does not become luxurious because it is expensive. It becomes luxurious when every condition around it is intentional.",
    sections: [
      {
        title: "A Different Definition of Value",
        body: [
          "Pelagea treats rarity as a responsibility before it becomes a visual language. The first question is not how to display a species, but what kind of habitat allows it to remain calm, healthy and legible.",
          "This article follows the sunlight layer, where forms still hold color, translucency and quiet movement. The goal is to understand why restraint is often more memorable than spectacle.",
        ],
      },
      {
        title: "Habitat as Curation",
        body: [
          "For collectors and institutions, a marine environment is never a neutral container. Light temperature, flow, acoustic comfort and viewing distance all become curatorial decisions.",
          "A strong habitat does not compete with the species. It slows the viewer down and gives the living form enough space to appear significant.",
        ],
      },
    ],
  },
  {
    slug: "the-ethics-of-private-depth",
    category: "Conservation",
    title: "The Ethics of Private Depth",
    excerpt:
      "A fictional look at permits, research partnerships and the difference between ownership and stewardship.",
    readingTime: "9 min read",
    image: asset.research,
    coverAlt:
      "Dark conservation atelier with marine specimens in glass and ocean light.",
    pullQuote:
      "Luxury cannot be separated from accountability when the object of desire is alive.",
    sections: [
      {
        title: "Stewardship Before Display",
        body: [
          "The Pelagea concept imagines acquisition as the final step in a longer conservation process. Each specimen is connected to origin records, habitat requirements and a care plan.",
          "In UX terms, this changes the role of information. Provenance is not hidden in legal language; it becomes part of the product's emotional and functional value.",
        ],
      },
      {
        title: "Trust Through Specificity",
        body: [
          "Collectors respond to atmosphere, but curators need structure. A luxury interface can hold both by presenting the mood first and the evidence immediately after.",
          "The experience should never ask users to choose between beauty and credibility.",
        ],
      },
    ],
  },
  {
    slug: "maps-of-the-abyss",
    category: "Exploration",
    title: "Maps of the Abyss",
    excerpt:
      "The deepest zones are less about navigation and more about patience, signal and interpretation.",
    readingTime: "6 min read",
    image: asset.abyss,
    coverAlt:
      "Almost black abyssal ocean with sparse cyan bioluminescent organisms.",
    pullQuote:
      "In the abyss, visibility becomes a privilege. The interface should behave the same way.",
    sections: [
      {
        title: "Designing With Absence",
        body: [
          "The abyssal sections of Pelagea deliberately remove visual noise. There is less color, less copy and less immediate explanation.",
          "This creates a useful tension: the user can still navigate clearly, but the emotional rhythm becomes quieter and more selective.",
        ],
      },
      {
        title: "Signals in Darkness",
        body: [
          "Bioluminescence becomes a metaphor for interaction design. A small glow, used at the right moment, can guide attention better than a loud callout.",
          "The interface earns its drama by withholding, not by adding more decoration.",
        ],
      },
    ],
  },
  {
    slug: "collectors-without-excess",
    category: "Collectors",
    title: "Collectors Without Excess",
    excerpt:
      "Why the language of luxury can be quieter, slower and more precise than conversion-first commerce.",
    readingTime: "5 min read",
    image: asset.journal,
    coverAlt:
      "Editorial research table with marine sketches, specimens and underwater projection.",
    pullQuote:
      "The rarest interaction is often the one that gives the user room to want slowly.",
    sections: [
      {
        title: "The Pace of Desire",
        body: [
          "Many commerce patterns create urgency. Pelagea moves in the opposite direction and asks what happens when browsing becomes anticipation.",
          "The result is less transactional and more ceremonial. Each section gives the visitor permission to linger.",
        ],
      },
      {
        title: "A Catalogue With Memory",
        body: [
          "A standard grid can be efficient, but it rarely creates a spatial memory. By organizing species by depth, Pelagea makes the catalogue easier to remember and harder to confuse with a generic store.",
          "The journey is the product hierarchy.",
        ],
      },
    ],
  },
];

export const aboutTimeline = [
  {
    year: "2016",
    title: "The first private depth archive",
    text: "Pelagea begins as a research-led archive for rare species observation and habitat documentation.",
  },
  {
    year: "2019",
    title: "Museum partnerships",
    text: "The fictional brand expands into institution-backed collection protocols and controlled educational display.",
  },
  {
    year: "2023",
    title: "The living-art collection",
    text: "Pelagea reframes rarity as a combination of ethics, habitat design and emotional presence.",
  },
  {
    year: "2026",
    title: "A digital descent",
    text: "The portfolio experience translates ocean depth into navigation, hierarchy and luxury interaction design.",
  },
];

export const team = [
  "Marine habitat curators",
  "Conservation researchers",
  "Acquisition archivists",
  "Private collection advisors",
];
