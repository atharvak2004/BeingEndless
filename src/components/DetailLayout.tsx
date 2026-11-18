import Image from "next/image";
import Link from "next/link";
import type { ContentSection } from "@/data/counselling";

type Props = {
  title: string;
  image: string;
  imageAlt: string;
  sections: ContentSection[];
  backHref: string;
  backLabel: string;
};

/** Shared template for counselling / mental-wellness program detail pages. */
export function DetailLayout({ title, image, imageAlt, sections, backHref, backLabel }: Props) {
  return (
    <article className="bg-white py-14 sm:py-20">
      <div className="container-site max-w-[820px]">
        <nav aria-label="Breadcrumb" className="mb-6 text-[13px] text-ink-soft">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <span aria-hidden> / </span>
          <Link href={backHref} className="hover:text-brand">
            {backLabel}
          </Link>
        </nav>
        <h1 className="heading-section">{title}</h1>
        <div className="relative mt-8 aspect-[680/385] overflow-hidden">
          <Image src={image} alt={imageAlt || title} fill priority sizes="(min-width:820px) 780px, 100vw" className="object-cover" />
        </div>

        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-serif text-[24px] leading-snug sm:text-[28px]">{s.heading}</h2>
              {s.paragraphs?.map((p, i) => (
                <p key={i} className="mt-4 text-[17px] leading-relaxed">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-[17px] leading-relaxed marker:text-brand">
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
              {s.after?.map((p, i) => (
                <p key={i} className="mt-4 text-[17px] leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-14 border border-line bg-mist p-8 text-center">
          <p className="font-serif text-[22px]">Book Your First Free 20-Minute Discovery Session</p>
          <Link href="/contact-8" className="btn-dark mt-5">
            Book Your Session
          </Link>
        </div>
      </div>
    </article>
  );
}
