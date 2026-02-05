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
    <span className="inline-flex items-center justify-center w-4 h-4 mr-1.5 align-middle" style={{ display: "inline-flex" }}>
      <Image
        src={src}
        alt={name}
        width={12}
        height={12}
        className={`object-contain ${inverted ? "invert" : ""}`}
        style={{ width: 12, height: 12 }}
      />
    </span>
  );
}
