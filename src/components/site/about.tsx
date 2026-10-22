"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CalendarClock,
  MapPinned,
  Store,
} from "lucide-react";

const perks = [
  {
    icon: MapPinned,
    title: "Where the people are",
    body: "No fixed shop, no dead hours. The stand pops up where the foot traffic already is — Kloof Street, markets, festivals.",
  },
  {
    icon: CalendarClock,
    title: "Fresh by the day",
    body: "Fruit is bought and stacked the morning of every setup. If it isn't fresh, it doesn't make the table.",
  },
  {
    icon: Store,
    title: "Bookable, not findable",
    body: "Want the Juice Man at your event or outside your shop? He plugs in, piles the fruit high and starts pressing.",
  },
];

export function About() {
  return (
    <section id="story" aria-label="Our story" className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-3xl border-4 border-leaf/90 shadow-xl shadow-leaf/10">
            <Image
              src="/images/ave-kloof.jpg"
              alt="Ave smiling behind the Super Raw Juices stand outside Spar on Kloof Street, Cape Town"
              width={1080}
              height={1620}
              className="h-auto w-full object-cover"
              priority={false}
            />
          </div>
          <div className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-2xl border-2 border-leaf bg-cream px-4 py-2.5 shadow-lg sm:-right-6">
            <BadgeCheck className="h-5 w-5 text-pulp" aria-hidden />
            <div className="leading-tight">
              <p className="font-display text-sm tracking-wide text-leaf">
                AVE — THE JUICE MAN
              </p>
              <p className="text-[11px] font-semibold text-bark">
                Kloof St, outside Spar
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-pulp">
            Our story
          </p>
          <h2 className="font-display text-4xl leading-tight text-leaf sm:text-5xl">
            You can&apos;t pin us down.
            <span className="block text-pulp">That&apos;s the point.</span>
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-bark">
            <p>
              Super Raw Juices doesn&apos;t have a permanent home — and that is
              exactly what makes it special. Ave sets up the stand on random
              occasions outside Spar on Kloof Street and at markets around Cape
              Town, wherever a crowd needs something cold, fresh and real. One
              day it&apos;s the pavement on Kloof, the next it&apos;s a market
              stall buzzing with Saturday shoppers.
            </p>
            <p>
              Every setup is the same honest ritual: a table buried in
              pineapples, oranges, beetroot, ginger and greens; a juicer
              running all day; and smoothies blended to order while you watch.
              No shopfront, no middlemen, no shortcuts — just the Juice Man,
              the fruit and you.
            </p>
            <p>
              Being mobile isn&apos;t a limitation, it&apos;s the whole idea.
              It means the freshest juice in town comes to where you already
              are — and if where you already are is an event, a storefront or
              your own market, you can book the whole operation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="rounded-2xl border border-border bg-card p-4 shadow-sm"
              >
                <perk.icon
                  className="mb-2 h-6 w-6 text-pulp"
                  aria-hidden
                />
                <h3 className="mb-1 text-sm font-bold text-leaf">
                  {perk.title}
                </h3>
                <p className="text-xs leading-relaxed text-bark">
                  {perk.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
