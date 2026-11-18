import { JsonLd } from "@/components/JsonLd";
import { VideoGallery } from "@/components/VideoGallery";
import { rootsAndRising } from "@/data/videos";
import { seo } from "@/lib/seo";
import { videoListJsonLd } from "@/lib/video";

export const metadata = seo({
  title: "Roots and Rising  | Being Endless",
  description:
    "Explore Roots and Rising, a personal growth and mental wellness journey focused on self-awareness, emotional resilience, mindfulness, healing, and LGBTQ-affirmative support. Discover practical insights that help you build stronger foundations and create meaningful change.",
  path: "/podcast",
});

export default function RootsAndRisingPage() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <JsonLd data={videoListJsonLd(rootsAndRising)} />
      <div className="container-site">
        <h1 className="heading-section mb-10 text-center">Roots and Rising</h1>
        <VideoGallery videos={rootsAndRising} channelName="Roots and Rising" />
      </div>
    </section>
  );
}
