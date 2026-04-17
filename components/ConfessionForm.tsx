"use client";

import { useState } from "react";

const MAX_CHARS = 300;

export default function ConfessionForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = message.trim();
    if (!trimmed) {
      setError("Please whisper something before you Ibulong.");
      setStatus("error");
      return;
    }

    if (trimmed.length > MAX_CHARS) {
      setError(`Keep your whisper under ${MAX_CHARS} characters.`);
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError(null);

    const response = await fetch("/api/whispers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: trimmed })
    });

    const payload = await response.json();

    if (!response.ok) {
      setError(payload?.error ?? "Unable to send whisper. Please try again.");
      setStatus("error");
      return;
    }

    setStatus("success");
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="rounded-none border border-surface-3 bg-surface-2 p-6">
        <label htmlFor="whisper" className="mb-3 block font-label uppercase tracking-[0.35em] text-[10px] text-tertiary">
          Confession
        </label>
        <textarea
          id="whisper"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="In the quiet of this space..."
          spellCheck={false}
          rows={14}
          maxLength={MAX_CHARS}
          className="w-full min-h-[280px] resize-none border-0 bg-surface p-6 text-lg font-mono leading-8 text-on-surface outline-none transition focus:border-0 focus:ring-2 focus:ring-tertiary/20 sm:min-h-[380px]"
        />
        <div className="mt-3 flex flex-col gap-2 text-[12px] text-on-surface-variant sm:flex-row sm:items-center sm:justify-between">
          <span>Pansinin mo ako: Hanggang 30 days lang ang parinig/rant mo boi</span>
          <span className={message.length === MAX_CHARS ? "text-tertiary" : ""}>
            {message.length} / {MAX_CHARS}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          disabled={status === "loading" || message.trim().length === 0}
          className="inline-flex items-center justify-center rounded-none bg-tertiary px-10 py-4 text-sm font-bold uppercase tracking-[0.35em] text-surface transition hover:bg-tertiary/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Ibulong..." : "Ibulong"}
        </button>

        <p className="font-label text-[10px] uppercase tracking-[0.35em] text-on-surface-variant">
          Your words are sealed into the archive. No traces remain.
        </p>

        {status === "success" && (
          <div className="rounded-none border border-olive bg-surface-2 px-5 py-4 text-sm text-olive">
            Your whisper has been sealed.
          </div>
        )}

        {status === "error" && error && (
          <div className="rounded-none border border-[#93000a] bg-surface-2 px-5 py-4 text-sm text-[#ffb4ab]">
            {error}
          </div>
        )}
      </div>
    </form>
  );
}
