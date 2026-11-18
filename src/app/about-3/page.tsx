import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { seo } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = seo({
  title: "About | Being Endless",
  description:
    "Learn about Being Endless and our approach to confidential, LGBTQ-affirmative counselling and mental wellness support for anxiety, depression, relationships, stress and personal growth.",
  path: "/about-3",
});

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vishwas Gera",
  jobTitle: "Counselling Psychologist",
  image: `${site.url}/images/counsellor-vishwas-gera.png`,
  worksFor: { "@type": "Organization", name: site.name, url: site.url },
  memberOf: [
    { "@type": "Organization", name: "British Psychological Society" },
    { "@type": "Organization", name: "Canadian Counselling and Psychotherapy Association" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personLd} />

      <section className="bg-mist py-16 sm:py-24">
        <div className="container-site max-w-[860px] text-center">
          <p className="font-accent text-[20px] font-bold uppercase tracking-[0.2em]">The Full Story</p>
          <h1 className="heading-section mt-4">About Being Endless</h1>
          <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-relaxed sm:text-[18px]">
            Being Endless is a space for inner growth, self-discovery, and emotional balance. We blend modern psychological understanding with
            mindfulness and spiritual awareness to support meaningful transformation.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-site">
          <h2 className="heading-section text-center">Meet Your Counsellor</h2>
          <div className="mt-12 grid items-start gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14">
            <div className="mx-auto w-full max-w-[420px]">
              <div className="relative aspect-[1189/1323] overflow-hidden bg-mist">
                <Image
                  src="/images/counsellor-vishwas-gera.png"
                  alt="Vishwas Gera, Counselling Psychologist at Being Endless"
                  fill
                  sizes="(min-width:768px) 420px, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="font-serif text-[28px]">Vishwas Gera</p>
                <p className="mt-1 font-serif text-[20px] text-brand">Counselling Psychologist</p>
                <p className="mt-3 text-[15px] leading-relaxed">
                  <strong>Member:</strong> British Psychological Society &amp; Canadian Counselling and Psychotherapy Association
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-[30px]">About Me</h2>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed">
                <p>
                  I understand that life can sometimes feel overwhelming whether you’re experiencing constant overthinking, emotional pressure,
                  anxiety, relationship challenges, or simply feeling disconnected from yourself.
                </p>
                <p>
                  I hold a Master’s degree in Psychology and am a Member of the British Psychological Society (BPS). My approach to counselling
                  combines Cognitive Behavioral Therapy (CBT), mindfulness, and spirituality, creating a supportive space to explore your thoughts,
                  emotions, values, and sense of purpose.
                </p>
                <p>
                  Together, we work at your pace to understand unhelpful thought patterns, develop healthier ways of coping, and reconnect with
                  your inner awareness and strengths. My goal is to help you move toward greater clarity, emotional balance, self-awareness, and
                  personal growth.
                </p>
                <p>
                  You don’t have to have everything figured out before you begin. Sometimes, the first step is simply having a safe place to
                  talk.
                </p>
              </div>
              <Link href="/contact-8" className="btn-dark mt-8">
                Book Your Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
