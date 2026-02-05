"use client";

import { useEffect, useCallback, useState } from "react";
import { AsciiBanner } from "@/components/ascii-banner";
import { ProjectTree, getProjectCount } from "@/components/project-tree";

export default function Home() {
  const [selected, setSelected] = useState(0);

  const total = getProjectCount();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((prev) => (prev - 1 + total) % total);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((prev) => (prev + 1) % total);
      }
    },
    [total]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="flex h-screen items-center justify-center bg-black p-6">
      <svg className="absolute h-0 w-0">
        <defs>
          <filter id="crt-barrel">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>

      <div className="crt-screen crt-warp flex h-full w-full max-w-4xl flex-col items-center justify-center gap-6 bg-bg">
        <div className="crt-scanroll" />
        <div className="crt-content flex w-full flex-col items-center gap-6 px-8">
          <AsciiBanner />

          <ProjectTree selected={selected} onSelect={setSelected} />

          <div className="flex flex-col items-center gap-1">
            <p className="text-text-tertiary text-xs font-mono">
              navigate with <span className="text-text-secondary">arrow keys</span>
            </p>
            <footer className="text-text-tertiary text-xs font-mono text-center">
              <span>&copy; {new Date().getFullYear()} Rat Labs</span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
