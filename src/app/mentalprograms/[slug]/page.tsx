import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailLayout } from "@/components/DetailLayout";
import { JsonLd } from "@/components/JsonLd";
import { getMentalProgram, mentalPrograms } from "@/data/programs";
import { decodeSlug } from "@/lib/format";
import { seo } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return mentalPrograms.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/mentalprograms/[slug]">): Promise<Metadata> {
  const program = getMentalProgram(decodeSlug((await params).slug));
  if (!program) return {};
  return seo({ title: `${program.title} | Being Endless`, description: program.summary.replace(/\.\.$/, "…"), path: program.path });
}

export default async function MentalProgramPage({ params }: PageProps<"/mentalprograms/[slug]">) {
  const program = getMentalProgram(decodeSlug((await params).slug));
  if (!program) notFound();

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: program.title,
    description: program.summary,
    serviceType: "Mental wellness counselling",
    url: `${site.url}${program.path}`,
    provider: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <>
      <JsonLd data={serviceLd} />
      <DetailLayout
        title={program.title}
        image={program.image}
        imageAlt={program.imageAlt}
        sections={[{ heading: program.title, paragraphs: [program.summary.replace(/\.\.$/, "…")] }]}
        backHref="/mental-wellness"
        backLabel="Mental Wellness"
      />
    </>
  );
}
