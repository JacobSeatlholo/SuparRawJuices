import type { Metadata } from "next";
import { Anton, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Super Raw Juices — Raw. Real. Revitalizing.",
  description:
    "Cold-pressed juices and smoothies made from 100% fresh fruit. Find the Travelling Juice Man at Spar Kloof Street and markets around Cape Town — or book him for your event.",
  keywords: [
    "Super Raw Juices",
    "juice Cape Town",
    "smoothies Kloof Street",
    "cold pressed juice",
    "mobile juice bar",
    "Travelling Juice Man",
  ],
  authors: [{ name: "Super Raw Juices" }],
  openGraph: {
    title: "Super Raw Juices — Raw. Real. Revitalizing.",
    description:
      "100% fresh juices & smoothies. Catch the Travelling Juice Man at Spar Kloof Street, markets around Cape Town — or book him for your event.",
    siteName: "Super Raw Juices",
    type: "website",
    images: [{ url: "/images/ave-kloof.jpg", width: 1080, height: 1620 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Raw Juices — Raw. Real. Revitalizing.",
    description:
      "100% fresh juices & smoothies. Cape Town's Travelling Juice Man.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${anton.variable} ${dmSans.variable} ${geistMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
