import { JsonLd } from "@/components/JsonLd";
import { VideoGallery } from "@/components/VideoGallery";
import { sukoonStories } from "@/data/videos";
import { seo } from "@/lib/seo";
import { videoListJsonLd } from "@/lib/video";

export const metadata = seo({
  title: "Sukoon Stories  | Being Endless",
  description:
    "Discover Sukoon Stories by Being Endless, featuring inspiring reflections on mental wellness, mindfulness, emotional healing, personal growth, resilience, self-discovery, and LGBTQ-affirmative support. Explore meaningful stories that encourage self-awareness, inner peace, and emotional wellbeing.",
  path: "/general-1-2",
});

export default function SukoonStoriesPage() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <JsonLd data={videoListJsonLd(sukoonStories)} />
      <div className="container-site">
        <h1 className="heading-section mb-10 text-center">Sukoon Stories</h1>
        <VideoGallery videos={sukoonStories} channelName="Sukoon Stories" />
      </div>
    </section>
  );
}
