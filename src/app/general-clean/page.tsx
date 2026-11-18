import Link from "next/link";
import { HowItWorks } from "@/components/sections";
import { seo } from "@/lib/seo";

export const metadata = seo({
  title: "How it Works | Being Endless",
  description:
    "Learn how Being Endless provides online counselling, mental wellness support, mindfulness guidance, and LGBTQ-affirmative counselling services. Understand the counselling process, booking steps, confidentiality, and how we help clients achieve emotional wellbeing, resilience, and personal growth.",
  path: "/general-clean",
});

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorks as="h1" />
      <section className="bg-white py-14 text-center">
        <p className="font-serif text-[22px]">Book Your First Free 20-Minute Discovery Session</p>
        <Link href="/contact-8" className="btn-dark mt-5">
          Book Your Session
        </Link>
      </section>
    </>
  );
}
