"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: `mailto:${site.email}`, icon: "/images/social-email.png", alt: "Contact email being endless", label: "Email Being Endless" },
  { href: site.socials.youtube, icon: "/images/social-youtube.png", alt: "Youtube Being Endless", label: "Being Endless on YouTube" },
  { href: site.socials.instagram, icon: "/images/social-instagram.png", alt: "Being Endless Instagram", label: "Being Endless on Instagram" },
  { href: site.socials.whatsapp, icon: "/images/social-whatsapp.png", alt: "WhatsApp contact for Being Endless counselling", label: "Chat with Being Endless on WhatsApp" },
];

/**
 * Desktop/tablet: vertical stack of contact icons (as on the live desktop site).
 * Phones: a single "…" button that expands the stack (as on the live mobile site), so icons never cover content.
 */
export function FloatingSocial() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-3 sm:bottom-8 sm:right-5">
      <ul
        id="floating-social"
        className={`flex flex-col gap-3 transition-[opacity,transform] duration-200 motion-reduce:transition-none sm:visible sm:translate-y-0 sm:opacity-100 ${
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0"
        }`}
      >
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={l.label}
              onClick={() => setOpen(false)}
              className="block rounded-full transition-transform hover:scale-110"
            >
              <Image src={l.icon} alt={l.alt} width={60} height={60} className="h-12 w-12 sm:h-[52px] sm:w-[52px]" />
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="floating-social"
        aria-label={open ? "Hide contact options" : "Show contact options"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0a84ff] text-white shadow-lg transition-transform active:scale-95 sm:hidden"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
            <circle cx="5" cy="12" r="2.2" fill="currentColor" />
            <circle cx="12" cy="12" r="2.2" fill="currentColor" />
            <circle cx="19" cy="12" r="2.2" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
}
