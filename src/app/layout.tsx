import Link from "next/link";

import { SmoothScrollProvider } from "../components/smooth-scroll-provider";
import "./globals.css";

export const metadata = {
  title: "Qima Qama",
  description: "A digital cultural knowledge platform for exploring iTaukei traditions, practices, stories, language, and identity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <SmoothScrollProvider />
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-bold tracking-tight text-slate-900">
              Qima Qama
            </Link>

            <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
              <Link href="/" className="hover:text-emerald-700">
                Home
              </Link>
              <Link href="/traditions" className="hover:text-emerald-700">
                Traditions
              </Link>
              <Link href="/provinces" className="hover:text-emerald-700">
               Provinces
              </Link>
              <Link href="/noda-yau" className="hover:text-emerald-700">
                Noda iYau
              </Link>
              <Link href="/protocol" className="hover:text-emerald-700">
                Protocol
              </Link>
              <Link href="/about" className="hover:text-emerald-700">
                About
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="mt-20 border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-slate-900">Qima Qama</p>
                <p className="mt-2 max-w-xl text-sm text-slate-600">
                  Preserving the wisdom, traditions, and living heritage of the vanua through a digital cultural knowledge platform.
                </p>
              </div>

              <div className="text-sm text-slate-500">
                © 2026 Qima Qama. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
