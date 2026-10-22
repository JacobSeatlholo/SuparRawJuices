"use client";

import { motion } from "framer-motion";
import { Citrus, CupSoda, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type Category = "smoothie" | "juice";

interface MenuItem {
  name: string;
  ingredients: string[];
  category: Category;
  price: string;
  blurb: string;
}

const menu: MenuItem[] = [
  {
    name: "The Fruity",
    ingredients: ["Strawberry", "Blueberry", "Apple", "Banana", "Pineapple"],
    category: "smoothie",
    price: "R40",
    blurb: "The favourite on the blackboard. Sweet and creamy.",
  },
  {
    name: "The Tropical",
    ingredients: ["Mango", "Passionfruit", "Banana", "Pineapple", "Apple"],
    category: "smoothie",
    price: "R40",
    blurb: "Mango and passionfruit, blended thick. Tastes like summer.",
  },
  {
    name: "Energy Booster",
    ingredients: ["Beetroot", "Ginger", "Apple", "Carrot", "Lemon", "Kale"],
    category: "juice",
    price: "R45",
    blurb: "Beetroot and ginger with a citrus kick. Good for the afternoon slump.",
  },
  {
    name: "Super Juice",
    ingredients: ["Apple", "Pineapple", "Orange", "Carrot"],
    category: "juice",
    price: "R40",
    blurb: "Sweet and sharp. Our best all rounder.",
  },
  {
    name: "Green Juice",
    ingredients: ["Spinach", "Kale", "Pineapple", "Cucumber", "Lemon"],
    category: "juice",
    price: "R40",
    blurb: "Spinach and kale, with pineapple to keep it sweet.",
  },
  {
    name: "Ginger Royal",
    ingredients: ["Apple", "Carrot", "Lemon", "Ginger"],
    category: "juice",
    price: "R40",
    blurb: "Strong on ginger. Wakes you right up.",
  },
  {
    name: "Lemonade",
    ingredients: ["Apple", "Lemon"],
    category: "juice",
    price: "R30",
    blurb: "Just apple and lemon. Sweet and sour.",
  },
  {
    name: "Orange",
    ingredients: ["Oranges. That's it."],
    category: "juice",
    price: "R30",
    blurb: "Orange juice. Squeezed to order. Nothing added.",
  },
];

const tabs = [
  { value: "all", label: "Everything", icon: Citrus },
  { value: "smoothie", label: "Smoothies", icon: CupSoda },
  { value: "juice", label: "Juices", icon: Leaf },
];

function MenuCard({ item }: { item: MenuItem }) {
  const isSmoothie = item.category === "smoothie";
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-leaf/10"
      )}
    >
      <div
        aria-hidden
        className={cn(
          "h-2 w-full",
          isSmoothie ? "bg-beet" : "bg-pulp"
        )}
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Badge
              variant="secondary"
              className={cn(
                "mb-2 text-[10px] font-bold uppercase tracking-widest",
                isSmoothie
                  ? "bg-beet/10 text-beet"
                  : "bg-pulp/10 text-pulp-deep"
              )}
            >
              {isSmoothie ? "Smoothie" : "Juice"}
            </Badge>
            <h3 className="font-display text-xl tracking-wide text-leaf">
              {item.name}
            </h3>
          </div>
          <span className="rounded-full bg-leaf px-3 py-1 font-display text-sm tracking-wide text-cream">
            {item.price}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-bark">{item.blurb}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {item.ingredients.map((ing) => (
            <li
              key={ing}
              className="rounded-full border border-border bg-cream px-2.5 py-1 text-[11px] font-semibold text-leaf"
            >
              {ing}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function MenuSection() {
  return (
    <section
      id="menu"
      aria-label="Menu"
      className="border-y border-border bg-leaf-mist/60 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 flex flex-col items-start gap-3"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-pulp">
            The menu
          </p>
          <h2 className="font-display text-4xl leading-tight text-leaf sm:text-5xl">
            Picked. Pressed. Poured.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-bark">
            This menu comes straight off our stand banners. It&apos;s the same
            smoothies and juices Ave serves on Kloof Street. Everything is made
            to order, right in front of you.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 h-auto flex-wrap justify-start gap-1 bg-card p-1.5">
            {tabs.map((t) => (
              <TabsTrigger
                key={t.value}
                value={t.value}
                className="gap-1.5 px-4 py-2 text-sm font-bold data-[state=active]:bg-leaf data-[state=active]:text-cream"
              >
                <t.icon className="h-4 w-4" aria-hidden />
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {menu.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="smoothie" className="mt-0">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {menu
                .filter((m) => m.category === "smoothie")
                .map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="juice" className="mt-0">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {menu
                .filter((m) => m.category === "juice")
                .map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <p className="mt-8 text-xs italic text-bark">
          Demo prices only. Ave will confirm the final prices. Sizes and
          specials can change.
        </p>
      </div>
    </section>
  );
}
