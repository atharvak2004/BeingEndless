import Image from "next/image";
import Link from "next/link";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-white pb-24 pt-12 sm:pb-12">
      <div className="container-site flex flex-col items-center text-center">
        <Link href="/" aria-label="Being Endless — Home">
          <Image src="/images/logo.png" alt="Logo" width={296} height={104} className="h-auto w-[220px] sm:w-[296px]" />
        </Link>
        <nav aria-label="Footer" className="mt-6">
          <ul className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-10">
            {footerNav.map((item) => (
              <li key={item.label}>
                <Link href={item.href!} className="inline-block py-1 text-[15px] underline underline-offset-4 hover:text-brand sm:text-[14px]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-8 max-w-[640px] text-[15px] leading-relaxed">{site.tagline}</p>
      </div>
    </footer>
  );
}
