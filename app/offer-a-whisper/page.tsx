import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ConfessionForm from "@/components/ConfessionForm";

export default function OfferAWhisperPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="pt-28">
        <section className="mx-auto max-w-4xl px-6 pb-24">
          <div className="space-y-8">
            <div className="rounded-none border border-surface-3 bg-surface-2 p-10">
              <p className="font-label uppercase tracking-[0.35em] text-[10px] text-tertiary">
                Offer a Whisper
              </p>
              <h1 className="mt-4 font-headline text-5xl leading-tight text-on-surface">
                What is the weight you carry today?
              </h1>
              <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                Type your whisper below and seal it away in the archive. Every confession is anonymous by design.
              </p>
            </div>

            <div className="rounded-none border border-surface-3 bg-surface-2 p-10">
              <ConfessionForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
