"use client";

import { motion } from "framer-motion";
import { CalendarHeart, Instagram, MapPin, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

const spots = [
  {
    icon: MapPin,
    title: "Spar, Kloof Street",
    tag: "Regular spot",
    body: "Our main spot. Table out, banner up, fruit stacked high outside Spar in Gardens. The days change, so check Instagram.",
    meta: "Kloof Street, Gardens, Cape Town",
  },
  {
    icon: Store,
    title: "Markets around Cape Town",
    tag: "Rotating",
    body: "We take the stand to markets around the city. Small ones and big ones.",
    meta: "Various locations, weekends",
  },
  {
    icon: CalendarHeart,
    title: "Your event or storefront",
    tag: "Bookable",
    body: "You can book the stand for the day. Event, shop, market. Fill in the form below.",
    meta: "Anywhere in Cape Town. See below",
  },
];

export function FindUs() {
  return (
    <section id="find-us" aria-label="Where to find us" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 flex flex-col items-start gap-3"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-pulp">
            Find us
          </p>
          <h2 className="font-display text-4xl leading-tight text-leaf sm:text-5xl">
            Where&apos;s the Juice Man today?
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-bark">
            We don&apos;t have a fixed address. Each week&apos;s spots go up on
            Instagram. Follow the stand and you&apos;ll always know where we
            are.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {spots.map((spot, i) => (
            <motion.article
              key={spot.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pulp/10">
                  <spot.icon className="h-5 w-5 text-pulp" aria-hidden />
                </span>
                <span className="rounded-full bg-leaf px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cream">
                  {spot.tag}
                </span>
              </div>
              <h3 className="font-display text-xl tracking-wide text-leaf">
                {spot.title}
              </h3>
              <p className="text-sm leading-relaxed text-bark">{spot.body}</p>
              <p className="mt-auto pt-2 text-xs font-bold uppercase tracking-wider text-pulp">
                {spot.meta}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border-2 border-leaf bg-leaf p-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xl tracking-wide text-cream">
              New spots go up every Monday
            </p>
            <p className="mt-1 text-sm text-cream/80">
              Follow us on Instagram. You can also find us on
              kloofstreet.online.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="h-12 shrink-0 bg-sun px-6 text-base font-bold text-leaf-deep hover:bg-sun/90"
          >
            <a
              href="https://instagram.com/suparrawjuices"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5" aria-hidden />
              @suparrawjuices
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
