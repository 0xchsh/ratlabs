import { AsciiBanner } from "./ascii-banner";
import { AsciiRat } from "./ascii-rat";

export function Hero() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-6 px-4">
      <AsciiBanner />
      <AsciiRat />
      <p className="text-text-tertiary text-xs tracking-widest uppercase">
        Brooklyn, NY
      </p>
    </section>
  );
}
