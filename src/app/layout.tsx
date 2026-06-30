import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: {
    default: "Pelagea - Luxury Beneath the Surface",
    template: "%s | Pelagea",
  },
  description:
    "A premium conceptual website for rare marine species, immersive ocean-depth storytelling, and luxury UX exploration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className="min-h-full flex flex-col antialiased"
        style={{
          "--font-body":
            '"Inter", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
          "--font-display":
            '"IvyPresto Display", "Cormorant Garamond", "Times New Roman", Georgia, serif',
        } as CSSProperties}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
