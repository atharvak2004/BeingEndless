import { PodcastIndex } from "@/components/PodcastIndex";
import { seo } from "@/lib/seo";

export const metadata = seo({ title: "Podcast | Being Endless", path: "/podcast-1" });

export default function PodcastPage() {
  return <PodcastIndex title="Podcast" />;
}
