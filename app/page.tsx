import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="relative pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(240,189,139,0.08),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(86,107,47,0.08),_transparent_20%)] pointer-events-none" />
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-16">
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-10">
              {/* Removed 'Wall' label as requested */}
              <h1 className="font-headline text-5xl leading-tight text-on-surface sm:text-6xl">
                Talinghaga: Ang mga <span className="text-tertiary">Parinig.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-9 text-on-surface-variant">
                Public anonymous confession space for parinig, confessions, and rants. Post what you can’t say aloud.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/offer-a-whisper"
                  className="inline-flex items-center justify-center rounded-none bg-tertiary px-8 py-4 text-sm font-bold uppercase tracking-[0.35em] text-surface transition hover:bg-tertiary/90"
                >
                  Post a Parinig
                </Link>
                <Link
                  href="/archive"
                  className="inline-flex items-center justify-center rounded-none border border-outline text-sm font-bold uppercase tracking-[0.35em] text-on-surface transition hover:border-tertiary hover:text-tertiary"
                >
                  View the Archive
                </Link>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="bg-surface-2 p-10">
                <span className="font-label uppercase tracking-[0.35em] text-[10px] text-tertiary">
                  Digital Pahiwatig
                </span>
                <h2 className="mt-4 font-headline text-3xl leading-tight text-on-surface">
                  Ang pader para sa mga parinig.
                </h2>
                <p className="mt-6 text-sm leading-7 text-on-surface-variant">
                  A public archive ng unspoken truths at indirect thoughts. Basahin ang crowd whispers, o mag-iwan ng sarili mong metaphor. Pwede rin rant lang.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-none border border-surface-3 bg-surface-2 p-10">
              <span className="font-headline text-3xl leading-tight text-on-surface">
                Public, anonymous, temporary.
              </span>
              <p className="mt-6 text-sm leading-7 text-on-surface-variant">
                Say it here and let it go. All posts disappear after 30 days.
              </p>
            </div>

            <div className="rounded-none border border-surface-3 bg-surface-2 p-10">
              <p className="font-label uppercase tracking-[0.35em] text-[10px] text-tertiary">Wall</p>
              <h3 className="mt-6 font-headline text-2xl text-on-surface">Live Feed</h3>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                Recent anonymous posts from the crowd. No editorial polish, just raw parinig.
              </p>
            </div>

            <div className="rounded-none border border-surface-3 bg-surface-2 p-10">
              <p className="font-label uppercase tracking-[0.35em] text-[10px] text-tertiary">Post</p>
              <h3 className="mt-6 font-headline text-2xl text-on-surface">Post a Parinig</h3>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                Drop an anonymous rant, confession, or indirect thought. No names, no judgment.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
