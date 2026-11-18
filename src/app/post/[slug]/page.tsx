import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PostBody } from "@/components/PostBody";
import { getPost, posts } from "@/data/posts";
import { decodeSlug, formatShortDate } from "@/lib/format";
import { seo } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/post/[slug]">): Promise<Metadata> {
  const post = getPost(decodeSlug((await params).slug));
  if (!post) return {};
  // Live Wix posts use the bare headline as <title> and the excerpt as og:description.
  return seo({
    title: post.title,
    description: post.description,
    path: `/post/${post.slug}`,
    type: "article",
    image: post.image,
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
  });
}

export default async function PostPage({ params }: PageProps<"/post/[slug]">) {
  const post = getPost(decodeSlug((await params).slug));
  if (!post) notFound();

  const url = `${site.url}/post/${post.slug}`;
  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    author: { "@type": "Person", name: post.author },
    dateModified: post.dateModified,
    datePublished: post.datePublished,
    headline: post.title,
    mainEntityOfPage: { "@id": url, "@type": "ItemPage", url },
    description: post.description,
    url,
    image: { "@type": "ImageObject", url: `${site.url}${post.image}`, width: "1448", height: "1086" },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
  const recent = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={ld} />
      <article className="bg-white py-14 sm:py-20">
        <div className="container-site max-w-[780px]">
          <Link href="/blog" className="text-[14px] hover:text-brand">
            ← All Posts
          </Link>
          <header className="mt-8">
            <p className="text-[13px] text-ink-soft">
              {post.author} · <time dateTime={post.datePublished}>{formatShortDate(post.datePublished)}</time> · {post.readTime} min read
            </p>
            <h1 className="mt-4 font-serif text-[32px] leading-tight sm:text-[40px]">{post.title}</h1>
          </header>
          <PostBody blocks={post.blocks} />
        </div>
      </article>

      <section className="bg-mist py-14">
        <div className="container-site max-w-[980px]">
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-[26px]">Recent Posts</h2>
            <Link href="/blog" className="text-[14px] hover:text-brand">
              See All
            </Link>
          </div>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {recent.map((p) => (
              <li key={p.slug} className="bg-white">
                <Link href={`/post/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={p.image} alt={p.title} fill sizes="(min-width:640px) 300px, 90vw" className="object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <p className="p-4 font-serif text-[17px] leading-snug group-hover:text-brand">{p.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
