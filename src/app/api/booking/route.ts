import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  contact: z.string().trim().min(5, "A WhatsApp number or email is required"),
  type: z.enum(["event", "storefront", "market", "other"]),
  date: z.string().trim().optional().default(""),
  venue: z.string().trim().optional().default(""),
  guests: z.string().trim().optional().default(""),
  message: z.string().trim().optional().default(""),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message ?? "Please check the form";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const booking = await db.booking.create({
      data: {
        name: parsed.data.name,
        contact: parsed.data.contact,
        type: parsed.data.type,
        date: parsed.data.date,
        venue: parsed.data.venue,
        guests: parsed.data.guests,
        message: parsed.data.message,
        status: "new",
      },
    });

    return NextResponse.json({ ok: true, id: booking.id }, { status: 201 });
  } catch (error) {
    console.error("[booking] failed to save booking:", error);
    return NextResponse.json(
      { error: "Could not save your request. Please try again." },
      { status: 500 }
    );
  }
}
