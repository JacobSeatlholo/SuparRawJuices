"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#find-us", label: "Find Us" },
  { href: "#gallery", label: "Gallery" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-cream/90 backdrop-blur-md transition-shadow",
        scrolled ? "shadow-md shadow-leaf/5" : "border-transparent"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6"
      >
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Super Raw Juices. Back to top"
        >
          <Logo className="h-11 w-11" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-leaf">
              SUPER RAW
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pulp">
              Juices
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-bark transition-colors hover:text-pulp"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+27788486888"
            className="flex items-center gap-1.5 text-sm font-semibold text-leaf transition-colors hover:text-pulp"
          >
            <Phone className="h-4 w-4" aria-hidden />
            078 848 6888
          </a>
          <Button asChild className="bg-pulp text-cream hover:bg-pulp-deep">
            <a href="#book">Book the Juice Man</a>
          </Button>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-md border border-border text-leaf md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-cream px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-leaf hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+27788486888"
              className="flex items-center gap-2 rounded-md px-3 py-3 text-sm font-semibold text-leaf hover:bg-secondary"
            >
              <Phone className="h-4 w-4" aria-hidden /> 078 848 6888
            </a>
            <Button
              asChild
              className="mt-2 bg-pulp text-cream hover:bg-pulp-deep"
            >
              <a href="#book" onClick={() => setOpen(false)}>
                Book the Juice Man
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
