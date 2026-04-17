import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhisperArchive from "@/components/WhisperArchive";

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <WhisperArchive />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
