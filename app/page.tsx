const A = "#818CF8"; // accent
const NEW_HOME = "https://www.idontcry.com/friendbookagram";

// Retired 2026-08-02: the standalone site stepped down and the concept moved
// into the iDontCry playground. This page is a quiet pointer, nothing more.
export default function Friendbookagram() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-[#e8edf5]">
      <div className="mx-auto max-w-xl px-5 py-16 text-center">

        <div className="mb-12 inline-flex items-baseline text-lg font-black tracking-tight">
          <span className="text-[#e8edf5]">Friendbookagram</span>
          <span style={{ color: A }}>.com</span>
        </div>

        <div className="mb-6 text-6xl">🫂</div>
        <h1 className="mb-5 text-[clamp(1.7rem,10vw,2.25rem)] font-black leading-tight sm:text-5xl">
          This idea found a new home.
        </h1>
        <p className="mx-auto mb-10 max-w-md text-lg font-semibold leading-8 text-[#94a3b8]">
          Friendbookagram — the friend feed, minus the noise — now lives inside
          iDontCry, the family&apos;s digital playground, as a creative concept page.
        </p>

        <a
          href={NEW_HOME}
          style={{ background: A, color: "#0b1220" }}
          className="inline-block rounded-full px-8 py-4 text-sm font-black uppercase tracking-[0.12em] transition hover:opacity-90"
        >
          Visit it on iDontCry →
        </a>

        <p className="mx-auto mt-12 max-w-md text-xs font-semibold leading-6 text-[#64748b]">
          Friendbookagram was an Open Mirror concept explored in 2026. The best of it
          is preserved on iDontCry — no accounts, no waitlist, just the idea.
        </p>

      </div>
    </main>
  );
}
