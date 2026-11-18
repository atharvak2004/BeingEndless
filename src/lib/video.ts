import type { Video } from "@/data/videos";

export const thumb = (id: string, size: "mqdefault" | "hqdefault" | "maxresdefault" = "hqdefault") =>
  `https://i.ytimg.com/vi/${id}/${size}.jpg`;

export function videoListJsonLd(videos: Video[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: videos.map((v, i) => ({
      "@type": "VideoObject",
      position: i + 1,
      thumbnailUrl: thumb(v.id, "mqdefault"),
      name: v.title,
      description: v.description || v.title,
      uploadDate: v.uploadDate,
      duration: v.duration,
      embedUrl: `https://www.youtube.com/embed/${v.id}`,
      contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
    })),
  };
}
