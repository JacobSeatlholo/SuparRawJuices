"use client";

import { motion } from "framer-motion";
import { Citrus, Leaf, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="top" aria-label="Intro" className="relative overflow-hidden">
      {/* soft background shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sun/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-leaf/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:pb-24 lg:pt-16">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <Badge
            variant="outline"
            className="gap-1.5 border-leaf/30 bg-leaf-mist px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-leaf"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            Cape Town, South Africa
          </Badge>

          <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-leaf sm:text-6xl lg:text-7xl">
            <span className="block">RAW.</span>
            <span className="block text-pulp">REAL.</span>
            <span className="block text-beet">REVITALIZING.</span>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-bark sm:text-lg">
            Juices and smoothies made from fresh fruit. Nothing from a
            bottle, no concentrates. Look for the stand at{" "}
            <strong className="font-semibold text-leaf">
              Spar on Kloof Street
            </strong>{" "}
            and markets around Cape Town.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 bg-pulp px-6 text-base font-bold text-cream hover:bg-pulp-deep"
            >
              <a href="#menu">See the Menu</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-2 border-leaf bg-transparent px-6 text-base font-bold text-leaf hover:bg-leaf hover:text-cream"
            >
              <a href="#book">Book the Juice Man</a>
            </Button>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-sm font-semibold text-leaf">
            <li className="flex items-center gap-1.5">
              <Citrus className="h-4 w-4 text-pulp" aria-hidden />
              100% fresh fruit
            </li>
            <li className="flex items-center gap-1.5">
              <Leaf className="h-4 w-4 text-pulp" aria-hidden />
              No concentrates
            </li>
            <li className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-pulp" aria-hidden />
              Pressed to order
            </li>
          </ul>
        </motion.div>

        {/* video card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border-4 border-leaf/90 shadow-2xl shadow-leaf/20">
            <video
              className="aspect-[4/5] w-full object-cover sm:aspect-[16/10] lg:aspect-[4/5]"
              src="/images/juice-man.mp4"
              poster="/images/ave-stand.jpg"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Video of the Super Raw Juices stand piled with fresh fruit"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-leaf-deep/70 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-sm font-bold text-cream drop-shadow">
              The stand, piled high. Oranges, beetroot, ginger and greens.
            </p>
          </div>

          {/* floating chips */}
          <div className="animate-float-soft absolute -left-3 top-6 hidden rounded-2xl border-2 border-leaf bg-cream px-4 py-2 shadow-lg sm:block">
            <p className="font-display text-sm tracking-wide text-leaf">
              SPAR KLOOF ST
            </p>
            <p className="text-[11px] font-semibold text-pulp">
              our regular spot
            </p>
          </div>
          <div className="animate-float-soft absolute -right-2 bottom-16 hidden rounded-2xl border-2 border-pulp bg-cream px-4 py-2 shadow-lg [animation-delay:1.2s] sm:block">
            <p className="font-display text-sm tracking-wide text-pulp">
              MARKETS &amp; EVENTS
            </p>
            <p className="text-[11px] font-semibold text-leaf">
              we come to you
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
