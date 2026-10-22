"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const shots = [
  {
    src: "/images/stand-mall.jpg",
    alt: "Super Raw Juices stand inside a shopping centre, banner up and table covered in fresh fruit",
    caption: "Mall pop-up — banner up, table loaded",
    caption2: "Smoothies & juices under one banner",
  },
  {
    src: "/images/ave-kloof.jpg",
    alt: "Ave giving a thumbs up behind the fruit table outside Spar on Kloof Street",
    caption: "Kloof St, outside Spar",
    caption2: "The thumbs up says it all",
  },
  {
    src: "/images/ave-stand.jpg",
    alt: "Ave smiling at the stand surrounded by oranges, pineapple, ginger, beetroot and greens",
    caption: "Juice o'clock",
    caption2: "Oranges, ginger, beetroot & greens",
  },
];

export function Gallery() {
  return (
    <section id="gallery" aria-label="Gallery" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 flex flex-col items-start gap-3"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-pulp">
            Straight from the stand
          </p>
          <h2 className="font-display text-4xl leading-tight text-leaf sm:text-5xl">
            Caught on camera
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-bark">
            No stock photos — this is the actual table, the actual banner and
            the actual man. Follow the Instagram stories to catch the next
            setup live.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((shot, i) => (
            <motion.figure
              key={shot.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1080}
                  height={1350}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                />
              </div>
              <figcaption className="flex flex-col gap-0.5 p-4">
                <span className="font-display text-base tracking-wide text-leaf">
                  {shot.caption}
                </span>
                <span className="text-xs text-bark">{shot.caption2}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
