import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailLayout } from "@/components/DetailLayout";
import { JsonLd } from "@/components/JsonLd";
import { counsellingPrograms, getCounsellingProgram } from "@/data/counselling";
import { decodeSlug } from "@/lib/format";
import { seo } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return counsellingPrograms.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/counselling-program/[slug]">): Promise<Metadata> {
  const program = getCounsellingProgram(decodeSlug((await params).slug));
  if (!program) return {};
  // The live site publishes no meta description on these pages; title + canonical match exactly.
  return seo({ title: `${program.title} | Being Endless`, path: program.path });
}

export default async function CounsellingProgramPage({ params }: PageProps<"/counselling-program/[slug]">) {
  const program = getCounsellingProgram(decodeSlug((await params).slug));
  if (!program) notFound();

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: program.title.replace("⁠", ""),
    description: program.summary,
    serviceType: "Counselling",
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
        sections={program.sections}
        backHref="/counselling-services"
        backLabel="Counselling Program"
      />
    </>
  );
}
