/**
 * Mental Wellness Programs (/mental-wellness and /mentalprograms/[slug]).
 * Card text is copied verbatim from the live listing. On the live Wix site the
 * individual /mentalprograms/* pages currently redirect to unrelated CMS items,
 * so detail pages here use the listing content.
 */
export type MentalProgram = {
  /** decoded slug as it appears in the URL path */
  slug: string;
  /** URL-encoded path segment exactly as linked on the live site */
  path: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export const mentalPrograms: MentalProgram[] = [
  {
    slug: "depression-counselling",
    path: "/mentalprograms/depression-counselling",
    title: "Depression Counselling",
    summary:
      "Depression is classified as a mood disorder. It may be described as feelings of sadness, loss, or anger that..",
    image: "/images/program-depression.png",
    imageAlt: "depression counselling.png",
  },
  {
    slug: "anxiety-counselling",
    path: "/mentalprograms/anxiety-counselling",
    title: "Anxiety Counselling",
    summary:
      "Anxiety is our body’s response to stress. It’s a feeling of fear or apprehension about what will or might happen..",
    image: "/images/program-anxiety.png",
    imageAlt: "anxiety counselling.png",
  },
  {
    slug: "ocd",
    path: "/mentalprograms/ocd",
    title: "OCD",
    summary:
      "Obsessive-compulsive disorder (OCD) is a mental health condition that involves obsessions..",
    image: "/images/program-ocd.png",
    imageAlt: "ocd counselling.png",
  },
  {
    slug: "adhd",
    path: "/mentalprograms/adhd",
    title: "ADHD Counselling",
    summary:
      "Attention deficit Hyperactivity Disorder (ADHD) is usually first diagnosed in childhood and often lasts into adulthood.",
    image: "/images/program-adhd.png",
    imageAlt: "ADHD Therapy space.png",
  },
  {
    slug: "stress-&-anxiety-management",
    path: "/mentalprograms/stress-%26-anxiety-management",
    title: "Stress and Anxiety Management Counselling",
    summary:
      "Stress is the body’s response to physical or emotional demands. Emotional stress can play a role in causing depression or be a symptom of it.",
    image: "/images/program-stress.png",
    imageAlt: "Stress and anxiety management space.png",
  },
];

export function getMentalProgram(slug: string) {
  return mentalPrograms.find((p) => p.slug === slug);
}
