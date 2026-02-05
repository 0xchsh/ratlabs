import Image from "next/image";

const iconMap: Record<string, string> = {
  "RGB": "/images/06.svg",
  "Noundation": "/images/04.svg",
  "Gerund": "/images/03.svg",
  "Squads": "/images/01.svg",
  "Lag Sucks": "/images/02.svg",
  "Nounhood": "/images/05.svg",
  "Nounable": "/images/07.svg",
  "Algernon": "/images/algernon.png",
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
