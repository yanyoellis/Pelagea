import type { Metadata } from "next";
import { CaseStudyClient } from "@/components/case-study-client";

export const metadata: Metadata = {
  title: "UX Case Study",
  description:
    "A multilingual UX case study explaining Pelagea's immersion concept, information architecture, motion, color, accessibility and localization strategy.",
};

export default function CaseStudyPage() {
  return <CaseStudyClient />;
}
