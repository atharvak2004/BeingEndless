import Image from "next/image";
import Link from "next/link";
import { rootsAndRising, sukoonStories } from "@/data/videos";
import { thumb } from "@/lib/video";

const series = [
  { title: "Sukoon Stories", href: "/general-1-2", videos: sukoonStories },
  { title: "Roots and Rising", href: "/podcast", videos: rootsAndRising },
];

/** Overview of both podcast series, used by the podcast hub pages. */
export function PodcastIndex({ title }: { title: string }) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-site">
        <h1 className="heading-section text-center">{title}</h1>
        <ul className="mx-auto mt-12 grid max-w-[900px] gap-8 sm:grid-cols-2">
          {series.map((s) => (
            <li key={s.href} className="card-outline p-3">
              <Link href={s.href} className="group block">
                <div className="relative aspect-video overflow-hidden bg-black">
                  <Image src={thumb(s.videos[0].id)} alt={s.title} fill sizes="(min-width:640px) 430px, 90vw" className="object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="px-2 pb-3 pt-5 text-center">
                  <h2 className="font-serif text-[24px] group-hover:text-brand">{s.title}</h2>
                  <p className="mt-2 text-[14px]">{s.videos.length} episodes</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
