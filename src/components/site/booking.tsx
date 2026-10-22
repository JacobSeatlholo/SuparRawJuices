"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarCheck2,
  CheckCircle2,
  Loader2,
  Megaphone,
  Music2,
  Store,
  Trees,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const offerings = [
  {
    icon: Music2,
    title: "Events & Festivals",
    body: "Weddings, birthdays, sport days, office parks. Fresh juice all day for your crowd.",
  },
  {
    icon: Store,
    title: "Storefront Pop-ups",
    body: "Host the stand outside your shop, salon or gym for a day. It pulls people in. We can agree on a day rate or a share.",
  },
  {
    icon: Trees,
    title: "Markets & Community",
    body: "School events, church fairs, community days. If there are people, the Juice Man can set up.",
  },
];

type BookingType = "event" | "storefront" | "market" | "other";

interface BookingForm {
  name: string;
  contact: string;
  type: BookingType;
  date: string;
  venue: string;
  guests: string;
  message: string;
}

const emptyForm: BookingForm = {
  name: "",
  contact: "",
  type: "event",
  date: "",
  venue: "",
  guests: "",
  message: "",
};

export function Booking() {
  const { toast } = useToast();
  const [form, setForm] = useState<BookingForm>(emptyForm);
  const [loading, setLoading] = useState(false);

  const update = (key: keyof BookingForm, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? "Something went wrong");
      }
      toast({
        title: "Booking request sent!",
        description:
          "Shukran! Ave will WhatsApp you back to sort the details.",
      });
      setForm(emptyForm);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Couldn't send the request",
        description:
          err instanceof Error
            ? err.message
            : "Please try again or call 078 848 6888.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="book"
      aria-label="Book the Juice Man"
      className="border-y-4 border-leaf-deep bg-leaf py-16 text-cream lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-sun">
            <Megaphone className="h-4 w-4" aria-hidden />
            Bookings
          </p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Book the Juice Man
            <span className="block text-sun">for your spot.</span>
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-cream/85">
            The stand moves. You bring the place, Ave brings the table. Fresh
            fruit piled high, juicer running, banner up. It makes a normal day
            feel special.
          </p>

          <div className="flex flex-col gap-4">
            {offerings.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 rounded-2xl bg-leaf-deep/60 p-4 ring-1 ring-cream/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sun/15">
                  <o.icon className="h-5 w-5 text-sun" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg tracking-wide text-cream">
                    {o.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream/75">
                    {o.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-cream/90">
            {["Day price agreed upfront", "Cape Town and nearby", "All fruit and gear included"].map(
              (t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-sun" aria-hidden />
                  {t}
                </li>
              )
            )}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        >
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 rounded-3xl bg-cream p-6 text-foreground shadow-2xl sm:p-8"
            aria-label="Booking request form"
          >
            <div className="flex items-center gap-2">
              <CalendarCheck2 className="h-5 w-5 text-pulp" aria-hidden />
              <h3 className="font-display text-2xl tracking-wide text-leaf">
                Request a booking
              </h3>
            </div>
            <p className="-mt-2 text-xs text-bark">
              Tell us where and when. Ave will WhatsApp you back with a price.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="bk-name">Your name *</Label>
                <Input
                  id="bk-name"
                  required
                  minLength={2}
                  placeholder="Thandi M."
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="bk-contact">WhatsApp or email *</Label>
                <Input
                  id="bk-contact"
                  required
                  minLength={5}
                  placeholder="072 000 0000"
                  value={form.contact}
                  onChange={(e) => update("contact", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="bk-type">Booking type *</Label>
                <Select
                  value={form.type}
                  onValueChange={(v) => update("type", v)}
                >
                  <SelectTrigger id="bk-type" aria-label="Booking type">
                    <SelectValue placeholder="Pick one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="event">Event / Festival</SelectItem>
                    <SelectItem value="storefront">
                      Storefront pop-up
                    </SelectItem>
                    <SelectItem value="market">Market / Community</SelectItem>
                    <SelectItem value="other">Something else</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="bk-date">Date (or rough date)</Label>
                <Input
                  id="bk-date"
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="bk-venue">Venue / area</Label>
                <Input
                  id="bk-venue"
                  placeholder="e.g. Kloof St, Gardens"
                  value={form.venue}
                  onChange={(e) => update("venue", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="bk-guests">Approx. people</Label>
                <Select
                  value={form.guests || undefined}
                  onValueChange={(v) => update("guests", v)}
                >
                  <SelectTrigger id="bk-guests" aria-label="Approximate guests">
                    <SelectValue placeholder="Pick a range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<20">Under 20</SelectItem>
                    <SelectItem value="20-50">20 – 50</SelectItem>
                    <SelectItem value="50-150">50 – 150</SelectItem>
                    <SelectItem value="150+">150+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="bk-message">Anything else?</Label>
              <Textarea
                id="bk-message"
                rows={3}
                placeholder="Tell us about the day. Hours, power, anything we should know."
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="h-12 bg-pulp text-base font-bold text-cream hover:bg-pulp-deep"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
                  Sending…
                </>
              ) : (
                "Send booking request"
              )}
            </Button>
            <p className="text-center text-xs text-bark">
              Prefer to talk? Call or WhatsApp{" "}
              <a
                className="font-bold text-pulp underline-offset-2 hover:underline"
                href="tel:+27788486888"
              >
                078 848 6888
              </a>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
