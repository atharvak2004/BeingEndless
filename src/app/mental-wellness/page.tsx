import { ProgramGrid } from "@/components/sections";
import { mentalPrograms } from "@/data/programs";
import { seo } from "@/lib/seo";

export const metadata = seo({
  title: "Mental Wellness | Being Endless",
  description:
    "Explore mental wellness support for anxiety, depression, stress, relationships and personal growth. Being Endless provides confidential counselling to help you build resilience and wellbeing.",
  path: "/mental-wellness",
});

export default function MentalWellnessPage() {
  return (
    <ProgramGrid
      as="h1"
      title="Mental Wellness Programs"
      items={mentalPrograms.map((p) => ({ title: p.title, summary: p.summary, image: p.image, imageAlt: p.imageAlt, href: p.path }))}
    />
  );
}
