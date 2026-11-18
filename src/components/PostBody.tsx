import Image from "next/image";
import type { PostBlock } from "@/data/posts";

/** Renders inline **bold** markers from the extracted Wix rich content. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>,
      )}
    </>
  );
}

export function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="mt-10 text-[17px] leading-[1.8]">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return <h2 key={i} className="mt-10 font-serif text-[28px] leading-snug"><Inline text={b.text} /></h2>;
          case "h3":
            return <h2 key={i} className="mt-10 font-serif text-[26px] leading-snug"><Inline text={b.text} /></h2>;
          case "h4":
          case "h5":
            return <h3 key={i} className="mt-8 font-serif text-[21px] leading-snug"><Inline text={b.text} /></h3>;
          case "p":
            return <p key={i} className="mt-5 whitespace-pre-line"><Inline text={b.text} /></p>;
          case "ul":
            return (
              <ul key={i} className="mt-5 list-disc space-y-2 pl-6 marker:text-brand">
                {b.items.map((it, j) => <li key={j}><Inline text={it} /></li>)}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mt-5 list-decimal space-y-2 pl-6">
                {b.items.map((it, j) => <li key={j}><Inline text={it} /></li>)}
              </ol>
            );
          case "img":
            return (
              <figure key={i} className="relative mt-8 aspect-[4/3] overflow-hidden bg-mist">
                <Image src={b.src} alt={b.alt} fill sizes="(min-width:760px) 740px, 100vw" className="object-cover" />
              </figure>
            );
        }
      })}
    </div>
  );
}
