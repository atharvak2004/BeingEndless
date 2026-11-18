import { PodcastIndex } from "@/components/PodcastIndex";
import { seo } from "@/lib/seo";

export const metadata = seo({
  title: "Mental Wellness & Self Help Podcasts | Being Endless",
  description:
    "Listen to self-help podcasts on mental wellness, mindfulness, personal growth, emotional resilience, anxiety management, self-discovery, and LGBTQ-affirmative counselling insights. Explore practical strategies and inspiring conversations to support your wellbeing and personal development.",
  path: "/mental-wellness-self-help-podcasts",
});

export default function SelfHelpPodcastsPage() {
  return <PodcastIndex title="Self Help Podcasts" />;
}
