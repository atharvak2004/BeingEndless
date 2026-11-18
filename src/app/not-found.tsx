import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: { absolute: "404 | Being Endless" }, robots: { index: false } };

export default function NotFound() {
  return (
    <section className="bg-white py-28 text-center">
      <div className="container-site">
        <h1 className="font-serif text-[32px]">There’s Nothing Here...</h1>
        <p className="mt-4 text-[16px]">
          We can’t find the page you’re looking for.
          <br />
          Check the URL, or head back home.
        </p>
        <Link href="/" className="btn-dark mt-8">
          Go Home
        </Link>
      </div>
    </section>
  );
}
