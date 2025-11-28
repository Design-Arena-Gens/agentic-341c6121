import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";
import { Navigation } from "../components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentic Hello",
  description: "A friendly greeting experience powered by Next.js"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-950 text-slate-100">
          <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-lg font-semibold tracking-tight text-emerald-400">
                Agentic Hello
              </Link>
              <Navigation />
            </nav>
          </header>
          <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
          <footer className="border-t border-slate-800 bg-slate-900/60">
            <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>Built with Next.js and deployed on Vercel.</p>
              <p className="font-mono">agentic-341c6121</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
