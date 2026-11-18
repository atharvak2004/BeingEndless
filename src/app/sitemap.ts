import type { MetadataRoute } from "next";
import { counsellingPrograms } from "@/data/counselling";
import { posts } from "@/data/posts";
import { mentalPrograms } from "@/data/programs";
import { site } from "@/lib/site";

const staticPages = [
  "",
  "/about-3",
  "/mental-wellness",
  "/counselling-services",
  "/general-clean",
  "/blog",
  "/podcast",
  "/podcast-1",
  "/general-1-2",
  "/mental-wellness-self-help-podcasts",
  "/contact-8",
  "/coming-soon-01",
  "/inquiry-services-page",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...mentalPrograms.map((p) => ({ url: `${site.url}${p.path}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...counsellingPrograms.map((p) => ({ url: `${site.url}${p.path}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...posts.map((p) => ({ url: `${site.url}/post/${p.slug}`, lastModified: p.dateModified, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
