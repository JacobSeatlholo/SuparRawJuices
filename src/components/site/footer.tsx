import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/site/logo";

export function Footer() {
  return (
    <footer
      id="contact"
      aria-label="Contact"
      className="mt-auto border-t-4 border-pulp bg-leaf-deep text-cream"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Logo className="h-14 w-14" variant="light" />
            <div className="leading-none">
              <p className="font-display text-xl tracking-wide">SUPER RAW</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-sun">
                Juices
              </p>
            </div>
          </div>
          <p className="font-display text-lg tracking-widest text-sun">
            RAW. REAL. REVITALIZING.
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-cream/75">
            Cape Town&apos;s Travelling Juice Man. Fresh juices &amp; smoothies,
            pressed to order wherever the people are.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
          <p className="font-display text-base tracking-widest text-cream/90">
            QUICK LINKS
          </p>
          {[
            { href: "#menu", label: "The Menu" },
            { href: "#story", label: "Our Story" },
            { href: "#find-us", label: "Find Us" },
            { href: "#book", label: "Book the Juice Man" },
            { href: "#gallery", label: "Gallery" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="w-fit text-cream/75 transition-colors hover:text-sun"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <p className="font-display text-base tracking-widest text-cream/90">
            HOLLA AT THE JUICE MAN
          </p>
          <a
            href="tel:+27788486888"
            className="flex items-center gap-2 text-cream/85 transition-colors hover:text-sun"
          >
            <Phone className="h-4 w-4 text-sun" aria-hidden />
            078 848 6888
          </a>
          <a
            href="tel:+27671892340"
            className="flex items-center gap-2 text-cream/85 transition-colors hover:text-sun"
          >
            <Phone className="h-4 w-4 text-sun" aria-hidden />
            067 189 2340
          </a>
          <a
            href="https://wa.me/27788486888"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cream/85 transition-colors hover:text-sun"
          >
            <Mail className="h-4 w-4 text-sun" aria-hidden />
            WhatsApp the stand
          </a>
          <a
            href="https://instagram.com/suparrawjuices"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cream/85 transition-colors hover:text-sun"
          >
            <Instagram className="h-4 w-4 text-sun" aria-hidden />
            @suparrawjuices
          </a>
          <p className="mt-2 flex items-start gap-2 text-cream/75">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden />
            Pop-ups at Spar Kloof Street, Gardens &amp; markets around Cape
            Town, South Africa
          </p>
        </div>
      </div>

      <div className="overflow-hidden border-t border-cream/10">
        <p
          aria-hidden
          className="mx-auto max-w-6xl select-none whitespace-nowrap px-4 pt-4 font-display text-[13vw] leading-none text-cream/[0.06] sm:text-7xl lg:text-8xl"
        >
          SUPER RAW JUICES
        </p>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-cream/60 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Super Raw Juices. All rights reserved.</p>
          <p>Demo site — built with fresh code and fresh fruit.</p>
        </div>
      </div>
    </footer>
  );
}
