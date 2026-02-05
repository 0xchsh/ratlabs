export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 pb-12 pt-8 text-text-tertiary text-xs font-mono">
      <a
        href="https://warpcast.com/~/channel/ratlabs"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-text-secondary"
      >
        /ratlabs
      </a>
      <span>&copy; 2025 Rat Labs</span>
    </footer>
  );
}
