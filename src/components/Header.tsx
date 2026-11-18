"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, type NavItem } from "@/lib/site";

function normalize(href: string) {
  try {
    return decodeURIComponent(href);
  } catch {
    return href;
  }
}

function isActive(item: NavItem, pathname: string): boolean {
  const path = normalize(pathname);
  if (item.href && normalize(item.href) === path) return true;
  return !!item.children?.some((c) => isActive(c, pathname));
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  // Close the mobile menu on navigation (reset-on-prop-change pattern, no effect needed).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setExpanded(null);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-[86px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-8">
        <Link href="/" aria-label="Being Endless — Home" className="shrink-0">
          <Image src="/images/logo.png" alt="Logo" width={179} height={63} priority className="h-[52px] w-auto sm:h-[63px]" />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1 2xl:gap-3">
            {mainNav.map((item) => {
              const active = isActive(item, pathname);
              const cls = `block whitespace-nowrap px-3 py-2 text-[16px] transition-colors hover:text-brand ${active ? "text-brand" : "text-ink"}`;
              return (
                <li key={item.label} className="group relative">
                  {item.href ? (
                    <Link href={item.href} className={cls} aria-current={active && item.href ? "page" : undefined}>
                      {item.label}
                    </Link>
                  ) : (
                    <button type="button" className={cls} aria-haspopup="true">
                      {item.label}
                    </button>
                  )}
                  {item.children && (
                    <div className="invisible absolute left-0 top-full z-50 min-w-[260px] translate-y-1 pt-2 opacity-0 transition-all duration-150 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <ul className="border border-black/10 bg-white py-2 shadow-lg">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href!}
                              className={`block px-5 py-2.5 text-[15px] transition-colors hover:bg-mist hover:text-brand ${
                                isActive(child, pathname) ? "text-brand" : "text-ink"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 h-0.5 w-6 bg-ink transition-all ${open ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-6 bg-ink transition-all ${open ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={`fixed inset-x-0 bottom-0 top-[86px] overflow-y-auto bg-white px-4 pb-10 transition-opacity xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="divide-y divide-black/10">
          {mainNav.map((item) => {
            const active = isActive(item, pathname);
            const isOpen = expanded === item.label;
            return (
              <li key={item.label}>
                <div className="flex items-center justify-between">
                  {item.href ? (
                    <Link href={item.href} className={`block flex-1 py-4 text-lg ${active ? "text-brand" : "text-ink"}`}>
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className={`block flex-1 py-4 text-left text-lg ${active ? "text-brand" : "text-ink"}`}
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                    >
                      {item.label}
                    </button>
                  )}
                  {item.children && (
                    <button
                      type="button"
                      className="flex h-11 w-11 items-center justify-center"
                      aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label}`}
                      aria-expanded={isOpen}
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                    >
                      <svg className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.children && isOpen && (
                  <ul className="pb-3 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href!}
                          className={`block py-2.5 text-base ${isActive(child, pathname) ? "text-brand" : "text-ink-soft"}`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
          {/* Extra item shown only in the live site's mobile menu */}
          <li>
            <Link
              href="/coming-soon-01"
              className={`block py-4 text-lg ${normalize(pathname) === "/coming-soon-01" ? "text-brand" : "text-ink"}`}
            >
              Contact us
            </Link>
          </li>
        </ul>
        <Link href="/contact-8" className="btn-dark mt-6 w-full py-3">
          Book Your Session
        </Link>
      </nav>
    </header>
  );
}
