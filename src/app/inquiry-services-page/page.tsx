import Link from "next/link";
import { seo } from "@/lib/seo";

export const metadata = seo({ title: "Inquiry Services Page | Being Endless", path: "/inquiry-services-page" });

const services = [
  {
    title: "Personalized Growth Path",
    text: "Receive a curated roadmap tailored to your specific self-help goals, leveraging key insights from our extensive blog content. This service helps you navigate your personal development journey with clear, actionable steps designed for maximum impact and steady progress.",
  },
  {
    title: "Community Masterclass Access",
    text: "Unlock exclusive access to our premium community forums and monthly masterclass sessions. Engage with like-minded individuals, share experiences, and gain deeper insights from expert-led discussions designed to accelerate your self-improvement journey.",
  },
  {
    title: "Resource Toolkit Selection",
    text: "Get a curated selection of essential digital resources and tools recommended for achieving your self-help objectives. This package includes guides, templates, and exclusive content designed to complement your learning and application of our blog's principles.",
  },
];

export default function InquiryServicesPage() {
  return (
    <>
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-site text-center">
          <h1 className="heading-section">Explore our services and get in touch</h1>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <div className="container-site max-w-[900px]">
          <h2 className="heading-section text-center">Our Services</h2>
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {services.map((s, i) => (
              <li key={s.title} className="grid gap-4 py-8 sm:grid-cols-[80px_1fr]">
                <span className="font-serif text-[28px] text-brand">{String(i + 1).padStart(2, "0")}.</span>
                <div>
                  <h2 className="font-serif text-[24px]">{s.title}</h2>
                  <p className="mt-3 text-[16px] leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-12 text-center">
            <Link href="/contact-8" className="btn-dark">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
