import type { Metadata } from "next";
import { site } from "./site";

type SeoInput = {
  /** Full <title> exactly as on the live site (no template applied). */
  title: string;
  description?: string;
  /** Path as it should appear in the canonical URL (already URL-encoded). "" for home. */
  path: string;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

/** Builds per-page metadata mirroring the tags emitted by the live Wix site. */
export function seo({ title, description, path, type = "website", image, publishedTime, modifiedTime }: SeoInput): Metadata {
  const url = `${site.url}${path}`;
  return {
    title: { absolute: title },
    ...(description ? { description } : {}),
    // Page-level `alternates` replaces the root one, so the RSS link is repeated here.
    alternates: {
      canonical: url,
      types: { "application/rss+xml": [{ url: `${site.url}/blog-feed.xml`, title: "Being Endless - RSS" }] },
    },
    openGraph: {
      title,
      ...(description ? { description } : {}),
      url,
      siteName: site.name,
      type,
      ...(image ? { images: [{ url: image }] } : {}),
      ...(type === "article" && publishedTime ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      ...(description ? { description } : {}),
      ...(image ? { images: [image] } : {}),
    },
  };
}
