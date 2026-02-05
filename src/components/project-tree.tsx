"use client";

import { ProjectIcon } from "./project-icons";

const tree = [
  {
    folder: "ai",
    projects: [{ name: "Algernon", desc: "24/7 coding rat" }],
  },
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
];

// Get only project items (no folders) for navigation
export function getProjectCount() {
  return tree.reduce((acc, g) => acc + g.projects.length, 0);
}

interface ProjectTreeProps {
  selected: number;
  onSelect: (index: number) => void;
}

export function ProjectTree({ selected, onSelect }: ProjectTreeProps) {
  let projectIndex = 0;

  return (
    <div className="w-full font-mono" style={{ maxWidth: "clamp(280px, 40vw, 600px)", fontSize: "clamp(10px, 1.1vw, 18px)" }}>
      {tree.map((group) => {
        return (
          <div key={group.folder}>
            {/* Folder header — not selectable */}
            <div className="py-0.5 px-1 text-text-secondary -mx-[50vw] px-[50vw]">
              {group.folder}/
            </div>

            {/* Project items — selectable */}
            {group.projects.map((project) => {
              const idx = projectIndex++;
              const isSelected = selected === idx;

              return (
                <div
                  key={project.name}
                  onClick={() => onSelect(idx)}
                  className={`cursor-pointer py-0.5 px-1 transition-colors -mx-[50vw] px-[50vw] ${
                    isSelected
                      ? "bg-text-primary text-bg"
                      : "text-text-primary hover:bg-text-primary/10"
                  }`}
                >
                  <ProjectIcon name={project.name} inverted={isSelected} />{project.name}
                  {project.desc && (
                    <span className={`ml-2 ${isSelected ? "text-bg/60" : "text-text-tertiary"}`}>
                      {project.desc}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
