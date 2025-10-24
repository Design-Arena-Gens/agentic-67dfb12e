"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/fixtures", label: "Fixtures" },
  { href: "/teams", label: "Teams" },
  { href: "/insights", label: "Insights" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-slate-950/95 via-blue-950/90 to-slate-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 font-semibold">
            ⚽
          </span>
          <div className="leading-tight">
            <span className="block text-sm font-medium text-slate-300">
              The Beautiful Game
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">
              Football Central
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-100 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 transition ${
                  isActive
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-1 -bottom-1 block h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 text-base font-medium text-slate-100 sm:px-6 lg:px-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-2 transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
