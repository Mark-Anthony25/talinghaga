import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/offer-a-whisper", label: "Offer a Whisper" },
  { href: "/archive", label: "The Archive" }
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-surface-2 bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl font-headline italic tracking-tight text-on-surface">
          Talinghaga
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-label uppercase tracking-[0.35em] text-xs text-on-surface-variant transition-colors hover:text-tertiary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
