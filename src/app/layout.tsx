import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Football Central",
    default: "Football Central — Football News, Fixtures & Tactical Analysis",
  },
  description:
    "Comprehensive football coverage with live fixtures, league tables, tactical insights, and player analysis from across the global game.",
  metadataBase: new URL("https://agentic-67dfb12e.vercel.app"),
  openGraph: {
    title: "Football Central",
    description:
      "Dive into tactical analysis, live match coverage, and in-depth football storytelling.",
    type: "website",
    locale: "en_GB",
    url: "https://agentic-67dfb12e.vercel.app",
    siteName: "Football Central",
  },
  twitter: {
    card: "summary_large_image",
    title: "Football Central",
    description:
      "Tactical breakdowns, fixtures, and data-driven football coverage in one destination.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 bg-[radial-gradient(circle_at_top,_rgba(15,118,110,0.18),_transparent_45%),_linear-gradient(180deg,_rgba(15,23,42,0.9),_rgba(2,6,23,0.95))]">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
