import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Libre_Baskerville, Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingSocial } from "@/components/FloatingSocial";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const sans = Wix_Madefor_Display({ subsets: ["latin"], variable: "--font-madefor", display: "swap" });
const serif = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-baskerville", display: "swap" });
const accent = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-cormorant", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  applicationName: site.name,
  formatDetection: { telephone: false },
  verification: {
    google: site.verification.google,
    other: { "msvalidate.01": site.verification.bing },
  },
  alternates: {
    types: { "application/rss+xml": [{ url: "/blog-feed.xml", title: "Being Endless - RSS" }] },
  },
  openGraph: { siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const websiteLd = [
  {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    url: `${site.url}/`,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${site.url}/search?q={search_term}` },
      "query-input": "required name=search_term",
    },
  },
  { "@context": "https://schema.org/", "@type": "WebSite", name: site.name, url: site.url },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${accent.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-ink antialiased">
        <JsonLd data={websiteLd} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingSocial />
      </body>
    </html>
  );
}
