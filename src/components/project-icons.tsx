import Image from "next/image";

const iconMap: Record<string, string> = {
  "RGB": "/icons/06.svg",
  "Noundation": "/icons/04.svg",
  "Gerund": "/icons/03.svg",
  "Squads": "/icons/01.svg",
  "Lag Sucks": "/icons/02.svg",
  "Nounhood": "/icons/05.svg",
  "Nounable": "/icons/07.svg",
  "Algernon": "/icons/algernon.png",
};

export function ProjectIcon({ name, inverted }: { name: string; inverted?: boolean }) {
  const src = iconMap[name];
  if (!src) return null;
  return (
    <span className="inline-flex items-center justify-center mr-[0.4em] align-middle" style={{ display: "inline-flex", width: "1.2em", height: "1.2em" }}>
      <Image
        src={src}
        alt={name}
        width={16}
        height={16}
        className={`object-contain ${inverted ? "invert" : ""}`}
        style={{ width: "1em", height: "1em" }}
      />
    </span>
  );
}
