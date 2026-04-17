"use client";

import { useEffect, useMemo, useState } from "react";

type Whisper = {
  id: string;
  content: string;
  created_at: string;
};

export default function WhisperArchive() {
  const [whispers, setWhispers] = useState<Whisper[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filteredWhispers = useMemo(
    () => whispers.filter((whisper) => whisper.content.toLowerCase().includes(query.toLowerCase())),
    [whispers, query]
  );

  useEffect(() => {
    async function loadWhispers() {
      setLoading(true);
      const response = await fetch("/api/whispers");
      if (!response.ok) {
        setError("Unable to load whispers. Please try again.");
        setLoading(false);
        return;
      }

      const data = await response.json();
      setWhispers(data.whispers ?? []);
      setLoading(false);
    }

    loadWhispers();
  }, []);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-none border border-surface-3 bg-surface-2 p-8 sm:p-10">
          <p className="font-headline text-3xl leading-tight text-on-surface">Gathered Silence</p>
          <p className="mt-6 text-sm leading-7 text-on-surface-variant">
            A curated selection of unspoken words released into the digital ether, protected by anonymity and a quiet editorial tone.
          </p>
        </div>

        <div className="rounded-none border border-surface-3 bg-surface-2 p-8 sm:p-10">
          <p className="font-label uppercase tracking-[0.35em] text-[10px] text-tertiary">Archive</p>
          <p className="mt-4 text-sm leading-7 text-on-surface-variant">
            Recent whispers appear below. Each entry is intentionally restrained, soft, and aligned with the Talinghaga aesthetic.
          </p>
        </div>

        <div className="rounded-none border border-surface-3 bg-surface-2 p-8 sm:p-10">
          <p className="font-label uppercase tracking-[0.35em] text-[10px] text-tertiary">Search</p>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search the silence..."
            className="mt-4 w-full rounded-none border border-surface-3 bg-surface px-4 py-3 text-sm text-on-surface outline-none focus:border-tertiary focus:ring-2 focus:ring-tertiary/20"
          />
        </div>
      </div>

      {loading ? (
        <div className="rounded-none border border-surface-3 bg-surface-2 p-10 text-sm text-on-surface-variant">
          Loading whispers...
        </div>
      ) : error ? (
        <div className="rounded-none border border-[#93000a] bg-surface-2 p-10 text-sm text-[#ffb4ab]">{error}</div>
      ) : filteredWhispers.length === 0 ? (
        <div className="rounded-none border border-surface-3 bg-surface-2 p-10 text-sm text-on-surface-variant">
          No whispers match your search.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWhispers.map((whisper) => (
            <article key={whisper.id} className="group relative overflow-hidden rounded-none border border-surface-3 bg-surface-2 p-8">
              <div className="space-y-5">
                <p className="font-headline text-xl italic leading-relaxed text-on-surface">{whisper.content}</p>
                <div className="text-[10px] uppercase tracking-[0.35em] text-on-surface-variant">
                  {new Date(whisper.created_at).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
