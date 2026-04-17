export default function SiteFooter() {
  return (
    <footer className="border-t border-surface-3 bg-surface py-8 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:px-6 text-center">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.35em] text-on-surface-variant">The Veil</span>
          <span className="font-label text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.35em] text-on-surface-variant">Archive Protocol</span>
          <span className="font-label text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.35em] text-on-surface-variant">Anonymity</span>
        </div>
        <p className="font-label text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.35em] text-on-surface-variant">
          © Talinghaga. Whispers encrypted in perpetuity.
        </p>
      </div>
    </footer>
  );
}
