import { Megaphone } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { About } from "@/components/site/about";
import { MenuSection } from "@/components/site/menu-section";
import { FindUs } from "@/components/site/find-us";
import { Booking } from "@/components/site/booking";
import { Gallery } from "@/components/site/gallery";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* announcement bar */}
      <a
        href="#book"
        className="flex items-center justify-center gap-2 bg-leaf-deep px-4 py-2.5 text-center text-xs font-semibold text-cream transition-colors hover:bg-leaf sm:text-sm"
      >
        <Megaphone className="h-4 w-4 shrink-0 text-sun" aria-hidden />
        <span>
          Catch the stand outside Spar on Kloof Street — or book the Juice Man
          for your event
        </span>
      </a>

      <Navbar />

      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <MenuSection />
        <FindUs />
        <Booking />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}
