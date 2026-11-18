import { ProgramGrid } from "@/components/sections";
import { counsellingPrograms } from "@/data/counselling";
import { seo } from "@/lib/seo";

export const metadata = seo({
  title: "Counselling Services | Being Endless",
  description:
    "Being Endless offers confidential counselling services for anxiety, depression, stress, relationships and personal growth, including LGBTQ-affirmative counselling and online mental wellness support.",
  path: "/counselling-services",
});

export default function CounsellingServicesPage() {
  return (
    <ProgramGrid
      as="h1"
      title="Counselling Program"
      items={counsellingPrograms.map((p) => ({ title: p.title, summary: p.summary, image: p.image, imageAlt: p.imageAlt, href: p.path }))}
    />
  );
}
