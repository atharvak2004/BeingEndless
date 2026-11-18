import { getImageProps } from "next/image";
import Link from "next/link";
import { AboutIntro, AreaOfFocus, BlogGrid, Faq, faqJsonLd, HowItWorks, ProgramGrid, WhyChooseUs } from "@/components/sections";
import { JsonLd } from "@/components/JsonLd";
import { mentalPrograms } from "@/data/programs";
import { posts } from "@/data/posts";
import { seo } from "@/lib/seo";

export const metadata = seo({
  title: "Online Counselling & Mental Wellness | Being Endless",
  description:
    "Being Endless offers confidential online counselling and mental wellness support for anxiety, depression, stress, relationships, and personal growth.\nLGBTQ+ Affirmative ",
  path: "",
});

const homePrograms = ["depression-counselling", "anxiety-counselling", "ocd"]
  .map((s) => mentalPrograms.find((p) => p.slug === s)!)
  .map((p) => ({ title: p.title, summary: p.summary, image: p.image, imageAlt: p.imageAlt, href: p.path }));

// Art direction: Next only optimizes <img>, so build both srcsets and switch with <picture>.
const heroDesktop = getImageProps({ src: "/images/hero.png", alt: "", width: 1672, height: 941, sizes: "100vw" }).props.srcSet;
const { srcSet: heroMobileSrcSet, ...heroMobileRest } = getImageProps({
  src: "/images/hero-mobile.png",
  alt: "",
  width: 941,
  height: 1672,
  sizes: "100vw",
  priority: true,
}).props;
const heroMobile = { ...heroMobileRest, srcSet: heroMobileSrcSet };

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/*
        Hero layouts:
        - phones (<640px): portrait art with text overlaid on top, as on the live mobile site
        - tablets (640–1023px): text block above the wide art
        - desktop (≥1024px): wide art with text overlaid on the left
      */}
      <section className="relative overflow-hidden bg-mist">
        <div className="relative mx-auto h-[178vw] max-w-[1440px] sm:h-auto lg:h-[476px]">
          <div aria-hidden className="absolute inset-x-0 top-0 z-[1] h-[55%] bg-gradient-to-b from-[#f7efe6]/80 via-[#f7efe6]/40 to-transparent sm:hidden" />
          <div aria-hidden className="absolute inset-y-0 left-0 z-[1] hidden w-[62%] bg-gradient-to-r from-mist via-mist/85 to-transparent lg:block xl:w-[50%] xl:from-mist/70 xl:via-mist/40" />
          <div className="relative z-10 flex flex-col items-center px-4 pt-5 text-center sm:px-10 sm:pb-10 sm:pt-12 lg:h-full lg:w-[50%] lg:justify-center lg:px-10 lg:pb-0 lg:pt-0 xl:w-[48%]">
            <h5 className="font-accent text-[clamp(13px,3.9vw,16px)] font-bold leading-snug sm:text-[20px] lg:text-[22px]">Exploring the Endless Possibilities Within You</h5>
            <h1 className="mt-1.5 font-serif text-[clamp(16px,5.3vw,24px)] leading-[1.35] text-brand sm:mt-3 sm:text-[34px] xl:text-[40px]">
              <span className="whitespace-nowrap">Building Resilience for Today</span> <br />
              <span className="whitespace-nowrap">Inspiring Growth for Tomorrow</span>
            </h1>
            <p className="mt-2 text-[clamp(12px,3.6vw,15px)] leading-snug sm:mt-4 sm:text-[17px] lg:text-[18px]">
              Empowering individuals through wellness, self-awareness
              <br />
              personal growth and innovation
            </p>
            <p className="mt-2.5 max-w-[22rem] text-[clamp(14px,4.2vw,17px)] font-semibold leading-snug sm:mt-5 sm:max-w-none sm:text-[20px]">Book Your First Free 20-Minute Discovery Session</p>
            <div className="mt-3.5 sm:mt-6">
              <Link href="/contact-8" className="btn-dark">
                Book Your Session
              </Link>
            </div>
          </div>
          <picture>
            <source media="(min-width: 640px)" srcSet={heroDesktop} sizes="100vw" />
            <img
              {...heroMobile}
              alt="beingendless-hero-illustration-updated.png"
              className="absolute inset-0 h-full w-full object-cover object-bottom sm:relative sm:inset-auto sm:aspect-[1672/941] sm:h-auto lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:object-right"
            />
          </picture>
        </div>
      </section>

      {/* On phones/tablets the live site moves "How it Works" below the blogs; flex order mirrors that without duplicating markup. */}
      <div className="flex flex-col">
        <AboutIntro />
        <AreaOfFocus />
        <HowItWorks className="order-last lg:order-none" />
        <ProgramGrid title="Mental Wellness Programs" items={homePrograms} />
        <BlogGrid posts={posts.slice(0, 3)} />
        <WhyChooseUs className="order-last lg:order-none" />
        <Faq className="order-last lg:order-none" />
      </div>
    </>
  );
}
