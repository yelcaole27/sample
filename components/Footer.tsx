export default function Footer() {
  return (
    <footer
      className="pt-8 border-t border-zinc-900 text-xs text-zinc-500 font-mono flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-in-up"
      style={{ animationDelay: "950ms" }}
    >
      <p>
        BSIT (Data Science) from Universidad de Manila (2022–2026, Dean&apos;s Lister)
      </p>
      <p className="shrink-0 text-zinc-400">
        Not Available for Work
      </p>
    </footer>
  );
}
