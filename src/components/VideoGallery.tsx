"use client";

import Image from "next/image";
import { useState } from "react";
import type { Video } from "@/data/videos";
import { formatDuration } from "@/lib/format";
import { thumb } from "@/lib/video";


export function VideoGallery({ videos, channelName }: { videos: Video[]; channelName: string }) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const v = videos[current];

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 h-full w-full" aria-label={`Play Video: ${v.title}`}>
            <Image src={thumb(v.id, "hqdefault")} alt={channelName} fill sizes="(min-width:1100px) 1060px, 100vw" className="object-cover" priority />
            <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" aria-hidden>
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <h2 className="mt-5 font-serif text-[22px] leading-snug">{v.title}</h2>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <li key={video.id}>
            <button
              type="button"
              onClick={() => {
                setCurrent(i);
                setPlaying(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group block w-full text-left"
              aria-label={`Play Video: ${video.title}`}
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <Image src={thumb(video.id, "mqdefault")} alt={video.title} fill sizes="(min-width:1024px) 340px, (min-width:640px) 45vw, 90vw" className="object-cover transition-transform group-hover:scale-105" />
                <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-[12px] text-white">{formatDuration(video.duration)}</span>
                {i === current && (
                  <span className="absolute left-2 top-2 rounded bg-brand px-2 py-0.5 text-[12px] text-white">Now Playing</span>
                )}
              </div>
              <h3 className="mt-3 text-[15px] font-semibold leading-snug group-hover:text-brand">{video.title}</h3>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
