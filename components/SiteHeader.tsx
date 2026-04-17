"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/offer-a-whisper", label: "Post a Parinig" },
  { href: "/archive", label: "Wall" }
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-surface-2 bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <Link href="/" className="text-xl font-headline italic tracking-tight text-on-surface">
          Talinghaga
        </Link>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center border border-surface-3 bg-surface-2 px-3 py-2 text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant transition hover:text-tertiary md:hidden"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-label uppercase tracking-[0.25em] lg:tracking-[0.35em] text-xs text-on-surface-variant transition-colors hover:text-tertiary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <nav id="mobile-nav" className="border-t border-surface-2 bg-surface md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-surface-2 py-4 font-label uppercase tracking-[0.2em] text-[11px] text-on-surface-variant transition-colors hover:text-tertiary last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
