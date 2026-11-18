import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { seo } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = seo({
  title: "Contact us | Being Endless",
  description:
    "Contact Being Endless for confidential, LGBTQ-affirmative counselling and mental wellness support for anxiety, depression, stress, relationships and personal growth.",
  path: "/coming-soon-01",
});

const orgLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  image: `${site.url}/images/logo.png`,
  address: { "@type": "PostalAddress", addressLocality: "Gurugram", addressRegion: "Haryana", addressCountry: "IN" },
  sameAs: [site.socials.youtube, site.socials.instagram],
};

const socials = [
  { href: site.socials.youtube, icon: "/images/social-youtube.png", alt: "Youtube" },
  { href: site.socials.instagram, icon: "/images/social-instagram.png", alt: "Instagram" },
  { href: site.socials.whatsapp, icon: "/images/social-whatsapp.png", alt: "Whatsapp" },
];

export default function ContactPage() {
  return (
    <section className="bg-mist py-16 sm:py-24">
      <JsonLd data={orgLd} />
      <div className="container-site max-w-[720px] text-center">
        <h1 className="heading-section">Contact</h1>
        <address className="mt-8 space-y-3 text-[18px] not-italic">
          <p>{site.location}</p>
          <p>
            <a href={site.phoneHref} className="hover:text-brand">
              {site.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-brand">
              {site.email}
            </a>
          </p>
        </address>
        <ul className="mt-8 flex justify-center gap-5">
          {socials.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.alt} className="block transition-transform hover:scale-110">
                <Image src={s.icon} alt={s.alt} width={40} height={40} />
              </a>
            </li>
          ))}
        </ul>
        <Link href="/contact-8" className="btn-dark mt-10">
          Book Your Session
        </Link>
      </div>
    </section>
  );
}
