import type { Metadata } from "next";
import Link from "next/link";

import { SmoothScrollProvider } from "../components/smooth-scroll-provider";
import "./globals.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/traditions", label: "Traditions" },
  { href: "/provinces", label: "Provinces" },
  { href: "/definitions", label: "Definitions" },
  { href: "/na-ivosavosa-vakaviti", label: "Na iVosavosa vakaViti" },
  { href: "/noda-yau", label: "Noda iYau" },
  { href: "/protocol", label: "Protocol" },
  { href: "/about", label: "About" },
] as const;

export const metadata: Metadata = {
  metadataBase: new URL("https://qimaqama.org"),
  manifest: "/manifest.webmanifest",
  title: "Qima Qama",
  description: "Discover Fiji’s culture, traditions, and stories.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Qima Qama",
    description: "Discover Fiji’s culture, traditions, and stories.",
    images: ["/logo.png"],
    type: "website",
    url: "https://qimaqama.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qima Qama",
    description: "Discover Fiji’s culture, traditions, and stories.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-[#f6efe3] text-slate-900 antialiased">
        <SmoothScrollProvider />
        <header className="site-header sticky top-0 z-50 border-b border-stone-300/70 bg-[#f9f4ea]/92 shadow-sm shadow-stone-900/5 backdrop-blur">
          <div className="masi-header-edge" />
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-6 py-4">
            <Link href="/" className="brand-mark font-black tracking-tight text-slate-950">
              Qima Qama
            </Link>

            <nav
              aria-label="Primary navigation"
              className="hidden gap-1 text-sm font-semibold text-slate-700 md:flex"
            >
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 pb-4 text-sm font-semibold text-slate-700 md:hidden"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="mobile-nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {children}

        <footer className="masi-footer mt-20 border-t border-stone-300/70 bg-[#1e2f2a] text-stone-100">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-white">Qima Qama</p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-stone-300">
                  Preserving the wisdom, traditions, and living heritage of the vanua through a digital cultural knowledge platform.
                </p>
              </div>

              <div className="text-sm text-stone-300">
                © 2026 Qima Qama. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
