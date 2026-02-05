export function AsciiBanner() {
  return (
    <pre
      className="text-text-primary font-mono select-none overflow-hidden max-w-full"
      aria-label="RAT LABS"
      style={{
        textTransform: "none",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "clamp(4px, 1.1vw, 12px)",
        lineHeight: 1.15,
      }}
    >
      {`██▀███   ▄▄▄     ▄▄▄█████▓    ██▓    ▄▄▄       ▄▄▄▄     ██████
▓██ ▒ ██▒▒████▄   ▓  ██▒ ▓▒   ▓██▒   ▒████▄    ▓█████▄ ▒██    ▒
▓██ ░▄█ ▒▒██  ▀█▄ ▒ ▓██░ ▒░   ▒██░   ▒██  ▀█▄  ▒██▒ ▄██░ ▓██▄
▒██▀▀█▄  ░██▄▄▄▄██░ ▓██▓ ░    ▒██░   ░██▄▄▄▄██ ▒██░█▀    ▒   ██▒
░██▓ ▒██▒ ▓█   ▓██▒ ▒██▒ ░    ░██████▒▓█   ▓██▒░▓█  ▀█▓▒██████▒▒
░ ▒▓ ░▒▓░ ▒▒   ▓▒█░ ▒ ░░      ░ ▒░▓  ░▒▒   ▓▒█░░▒▓███▀▒▒ ▒▓▒ ▒ ░
  ░▒ ░ ▒░  ▒   ▒▒ ░   ░       ░ ░ ▒  ░ ▒   ▒▒ ░▒░▒   ░ ░ ░▒  ░ ░
  ░`}
    </pre>
  );
}
