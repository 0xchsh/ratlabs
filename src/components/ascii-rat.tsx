"use client";

import { useEffect, useState } from "react";

const frames = [
  ` ~    .--. \n  \\  /o  o\\\n   '-|  |-'\n     |__|  \n     /  \\  `,
  `  ~   .--. \n   \\ /o  o\\\n    '-|  |-'\n     |__|  \n     /  \\  `,
  `   ~  .--. \n    \\/o  o\\\n    '-|  |-'\n     |__|  \n     /  \\  `,
  `  ~   .--. \n   \\ /o  o\\\n    '-|  |-'\n     |__|  \n     /  \\  `,
];

export function AsciiRat() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frames.length);
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <pre
      className="text-text-secondary font-mono text-xs leading-tight select-none h-[5.5em]"
      aria-hidden="true"
    >
      {frames[frame]}
    </pre>
  );
}
