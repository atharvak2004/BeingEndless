import Image from "next/image";
import Link from "next/link";
import { faqs, focusAreas, steps, whyChooseUs } from "@/data/home";
import type { Post } from "@/data/posts";
import { formatShortDate } from "@/lib/format";

export function SectionTitle({ as: Tag = "h2", children, className = "" }: { as?: "h1" | "h2"; children: React.ReactNode; className?: string }) {
  return <Tag className={`heading-section text-center ${className}`}>{children}</Tag>;
}

export function AboutIntro() {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="container-site grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] md:gap-14">
        <h2 className="text-center font-serif text-[31px] font-bold leading-[1.2] sm:text-[40px] md:pt-10 md:text-left md:text-[48px] md:leading-[1.15]">
          About <br />
          Being
          <br className="hidden md:block" /> Endless
        </h2>
        <div className="space-y-6 text-justify text-[16px] leading-relaxed hyphens-auto sm:text-[18px] md:text-left">
          <p>
            Being Endless is a platform dedicated to raising awareness around wellness, resilience, personal growth, and the endless
            possibilities within every individual. We bring together insights from human behavior, mindfulness, well-being, and innovative
            thinking to inspire reflection, positive change, and meaningful transformation.
          </p>
          <p>
            Through thought-provoking content, meaningful conversations, wellness awareness initiatives, and community engagement, we
            encourage individuals to build self-awareness, strengthen resilience, and approach life with confidence, clarity, and purpose.
          </p>
          <p>
            Our vision is to inspire people to embrace continuous growth, lifelong learning, and the endless possibilities for well-being,
            self-discovery, and a more fulfilling life.
          </p>
        </div>
      </div>
    </section>
  );
}

export function AreaOfFocus() {
  return (
    <section className="bg-mist py-12 sm:py-20">
      <div className="container-site">
        <SectionTitle>Area of Focus</SectionTitle>
        <p className="mx-auto mt-6 max-w-[760px] text-center text-[16px] leading-relaxed">
          Being Endless is dedicated to raising awareness of wellness, resilience, and personal growth. We inspire individuals to better
          understand themselves, embrace life&apos;s challenges, and discover the endless possibilities for growth, well-being, and a more
          meaningful life.
        </p>
        <ul className="mt-8 grid sm:mt-12 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((f) => (
            <li key={f.title} className="card-outline p-3">
              <div className="relative aspect-[283/161] overflow-hidden">
                <Image src={f.image} alt={f.alt} fill sizes="(min-width:1024px) 260px, (min-width:640px) 45vw, 90vw" className="object-cover" />
              </div>
              <p className="px-2 pb-4 pt-5 text-center text-[17px] font-semibold leading-snug">{f.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HowItWorks({ as = "h2", className = "" }: { as?: "h1" | "h2"; className?: string }) {
  return (
    <section className={`bg-mist py-12 sm:py-20 ${className}`}>
      <div className="container-site">
        <SectionTitle as={as}>How it Works</SectionTitle>
        <ol className="mx-auto mt-8 grid sm:mt-12 max-w-[900px] gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="card-outline flex flex-col items-center px-6 pb-8 pt-6 text-center">
              <Image src={s.image} alt={s.alt} width={146} height={153} className="h-[140px] w-auto object-contain" />
              <h3 className="mt-5 flex items-baseline justify-center gap-2 text-[17px] font-semibold leading-snug">
                <span className="font-serif text-[28px] font-normal">{i + 1}.</span>
                <span>{s.title}</span>
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export type CardItem = { title: string; summary: string; image: string; imageAlt: string; href: string };

export function ProgramGrid({ title, items, as = "h2", columns = 3 }: { title: string; items: CardItem[]; as?: "h1" | "h2"; columns?: 3 }) {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="container-site">
        <SectionTitle as={as}>{title}</SectionTitle>
        <ul className={`mx-auto mt-12 grid max-w-[900px] gap-8 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}>
          {items.map((p) => (
            <li key={p.href} className="card-outline flex flex-col p-3">
              <div className="relative aspect-[282/160] overflow-hidden">
                <Image src={p.image} alt={p.imageAlt} fill sizes="(min-width:1024px) 280px, (min-width:640px) 45vw, 90vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col items-center px-3 pb-4 pt-5 text-center">
                <h3 className="text-[19px] font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed">{p.summary}</p>
                <Link href={p.href} className="btn-dark mt-5 px-5 py-2 text-[13px]" aria-label={`Know More about ${p.title}`}>
                  Know More
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function BlogCard({ post, headingAs: H = "h3" }: { post: Post; headingAs?: "h2" | "h3" }) {
  return (
    <article className="group flex h-full flex-col bg-white">
      <Link href={`/post/${post.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width:1024px) 300px, (min-width:640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[12px] text-ink-soft">
          <time dateTime={post.datePublished}>{formatShortDate(post.datePublished)}</time>
          <span aria-hidden> · </span>
          {post.readTime} min read
        </p>
        <H className="mt-3 line-clamp-2 font-serif text-[22px] leading-snug">
          <Link href={`/post/${post.slug}`} className="hover:text-brand">
            {post.title}
          </Link>
        </H>
        <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed">{post.excerpt}</p>
      </div>
    </article>
  );
}

export function BlogGrid({ posts, title = "Blogs", as = "h2" }: { posts: Post[]; title?: string; as?: "h1" | "h2" }) {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="container-site">
        <SectionTitle as={as}>{title}</SectionTitle>
        <ul className="mx-auto mt-8 grid sm:mt-12 max-w-[960px] gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <BlogCard post={p} headingAs={as === "h1" ? "h2" : "h3"} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function WhyChooseUs({ className = "" }: { className?: string }) {
  return (
    <section className={`bg-white py-12 sm:py-20 ${className}`}>
      <div className="container-site">
        <SectionTitle>Why Choose Us</SectionTitle>
        <ul className="mx-auto mt-8 grid sm:mt-12 max-w-[900px] gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w) => (
            <li key={w.title} className="card-outline flex flex-col items-center px-6 py-8 text-center">
              <Image src={w.icon} alt={w.alt} width={64} height={64} className="h-14 w-14 object-contain" />
              <h3 className="mt-5 text-[17px] font-semibold leading-snug">{w.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed">{w.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq({ className = "" }: { className?: string }) {
  return (
    <section className={`bg-mist py-12 sm:py-20 ${className}`} aria-labelledby="faq-heading">
      <div className="container-site">
        <h2 id="faq-heading" className="heading-section text-center">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mt-8 max-w-[760px] space-y-3 sm:mt-12">
          {faqs.map((f, i) => (
            <details key={f.q} name="faq" open={i === 0} className="group card-outline px-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px]">
                <span>{f.q}</span>
                <svg className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </summary>
              <p className="pb-5 text-[14px] leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
