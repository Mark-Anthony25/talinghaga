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
              <p className="font-label uppercase tracking-[0.4em] text-[10px] text-tertiary">
                The Archive
              </p>
              <h1 className="font-headline text-5xl leading-tight text-on-surface sm:text-6xl">
                Talinghaga: Ang Pader ng mga <span className="text-tertiary">Parinig.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-9 text-on-surface-variant">
                A public archive of unspoken truths and indirect thoughts. Read the whispers of the crowd, or leave your own metaphor behind. pwede rin rant lang.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/offer-a-whisper"
                  className="inline-flex items-center justify-center rounded-none bg-tertiary px-8 py-4 text-sm font-bold uppercase tracking-[0.35em] text-surface transition hover:bg-tertiary/90"
                >
                  Offer a Whisper
                </Link>
                <Link
                  href="/archive"
                  className="inline-flex items-center justify-center rounded-none border border-outline text-sm font-bold uppercase tracking-[0.35em] text-on-surface transition hover:border-tertiary hover:text-tertiary"
                >
                  Enter the Archive
                </Link>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-none border border-surface-3 bg-surface-2 p-10">
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
              <div className="hidden rounded-none border border-surface-3 bg-surface-2 p-10 lg:block">
                <div className="h-60 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCE6v3qduWO-KskCiz_I19az1NpPMvIHl-6HWkdwC0G0zw3bwntN9aMycINWn_47DWvQyx2-olEcO6m1_T2E_RneT6DLJng7BZu0sW8ngC9fcC3HKNBZ5jkYEqUQjZfNzilvoy2gJlHKkQyV6JntW_gED2QMZhvOKkkzkw0_2Eg2kujIJHv0RSTUCbwnmVzh_o5LKM1r5hKRnTGFOSEhViZl8nLajf6riJ28svgSWjnrvutJ15zInc1isCfXzvDmPypg616nRDEKvX0') center/cover no-repeat]" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-none border border-surface-3 bg-surface-2 p-10">
              <span className="font-headline text-3xl leading-tight text-on-surface">
                Encrypted in perpetuity.
              </span>
              <p className="mt-6 text-sm leading-7 text-on-surface-variant">
                Your secrets are yours to keep, and ours to protect.
              </p>
            </div>

            <div className="rounded-none border border-surface-3 bg-surface-2 p-10">
              <span className="material-symbols-outlined text-3xl text-tertiary">auto_stories</span>
              <h3 className="mt-6 font-headline text-2xl text-on-surface">The Archive</h3>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                Wander through a curated collection of the unspoken without losing the poetry of the hidden self.
              </p>
            </div>

            <div className="rounded-none border border-surface-3 bg-surface-2 p-10">
              <span className="material-symbols-outlined text-3xl text-tertiary">edit_note</span>
              <h3 className="mt-6 font-headline text-2xl text-on-surface">Offer a Whisper</h3>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                Release your burden through a hushed form designed for focus and calm.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
