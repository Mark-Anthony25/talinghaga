import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ConfessionForm from "@/components/ConfessionForm";

export default function OfferAWhisperPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="pt-24 sm:pt-28">
        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="space-y-8">
            <div className="rounded-none border border-surface-3 bg-surface-2 p-6 sm:p-10">
              <p className="font-label uppercase tracking-[0.2em] sm:tracking-[0.35em] text-[10px] text-tertiary">
                Leave a Parinig
              </p>
              <h1 className="mt-4 font-headline text-4xl leading-tight text-on-surface sm:text-5xl">
                Say it loud without your name.
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-on-surface-variant">
                Type your parinig, rant, or indirect confession. It stays anonymous and disappears after 30 days.
              </p>
            </div>

            <div className="p-0 sm:p-0">
              <ConfessionForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
