import { posts } from "@/data/posts";
import { site } from "@/lib/site";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = posts
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${site.url}/post/${p.slug}</link>
      <guid isPermaLink="true">${site.url}/post/${p.slug}</guid>
      <pubDate>${new Date(p.datePublished).toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
      <enclosure url="${site.url}${p.image}" type="image/png" length="0"/>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Being Endless</title>
    <link>${site.url}/blog</link>
    <description>Being Endless</description>
    <atom:link href="${site.url}/blog-feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
