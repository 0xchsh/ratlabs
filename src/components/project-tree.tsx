"use client";

interface Project {
  name: string;
  desc: string;
}

function Win95Folder({ inverted }: { inverted?: boolean }) {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 16 14"
      fill="none"
      className="inline-block align-middle -mt-0.5 mr-1"
    >
      <path d="M0 2V13H16V4H7L5 2H0Z" fill={inverted ? "#0a0a0a" : "#FFCC33"} />
      <path d="M0 2H5L7 4H16V5H0V2Z" fill={inverted ? "#1a1a1a" : "#FFE680"} />
      <path d="M0 2V13H16V4H7L5 2H0Z" stroke={inverted ? "#333" : "#CC9900"} strokeWidth="0.5" />
    </svg>
  );
}

const tree = [
  {
    folder: "crypto",
    projects: [
      { name: "RGB", desc: "Onchain color protocol" },
      { name: "Noundation", desc: "Design studio for DAOs" },
      { name: "Gerund", desc: "Crypto-native apparel" },
      { name: "Squads", desc: "Community coordination" },
      { name: "Lag Sucks", desc: "Gaming media & content" },
      { name: "Nounhood", desc: "Generative art collection" },
      { name: "Nounable", desc: "Nounish goods & merch" },
    ],
  },
  {
    folder: "ai",
    projects: [{ name: "Coming soon", desc: "" }],
  },
];

// Flatten tree into a selectable list with indices
function flatItems() {
  const items: { type: "folder" | "item"; label: string; desc?: string; isLast: boolean; folderIdx: number; isLastFolder: boolean }[] = [];
  tree.forEach((group, gi) => {
    const isLastFolder = gi === tree.length - 1;
    items.push({ type: "folder", label: group.folder, isLast: false, folderIdx: gi, isLastFolder });
    group.projects.forEach((p, pi) => {
      items.push({
        type: "item",
        label: p.name,
        desc: p.desc,
        isLast: pi === group.projects.length - 1,
        folderIdx: gi,
        isLastFolder,
      });
    });
  });
  return items;
}

const items = flatItems();

interface ProjectTreeProps {
  selected: number;
  onSelect: (index: number) => void;
}

export function ProjectTree({ selected, onSelect }: ProjectTreeProps) {
  return (
    <div className="w-full max-w-md font-mono text-xs">
      <div className="text-text-tertiary mb-1">.</div>
      {items.map((item, i) => {
        const isSelected = selected === i;

        if (item.type === "folder") {
          const prefix = item.isLastFolder ? "└── " : "├── ";
          return (
            <div
              key={`folder-${item.label}`}
              onClick={() => onSelect(i)}
              className={`cursor-pointer py-0.5 px-1 transition-colors -mx-[50vw] px-[50vw] ${
                isSelected
                  ? "bg-text-primary text-bg"
                  : "text-text-secondary hover:bg-text-primary/10"
              }`}
            >
              {prefix}<Win95Folder inverted={isSelected} /> {item.label}/
            </div>
          );
        }

        const parentPrefix = item.isLastFolder ? "    " : "│   ";
        const childPrefix = item.isLast ? "└── " : "├── ";

        return (
          <div
            key={`item-${item.label}`}
            onClick={() => onSelect(i)}
            className={`cursor-pointer py-0.5 px-1 transition-colors -mx-[50vw] px-[50vw] ${
              isSelected
                ? "bg-text-primary text-bg"
                : "text-text-primary hover:bg-text-primary/10"
            }`}
          >
            <span className={isSelected ? "text-bg" : "text-text-tertiary"}>
              {parentPrefix}{childPrefix}
            </span>
            {item.label}
            {item.desc && (
              <span className={`ml-2 ${isSelected ? "text-bg/60" : "text-text-tertiary"}`}>
                {item.desc}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
