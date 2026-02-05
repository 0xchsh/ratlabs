"use client";

import { useState } from "react";

type Category = "crypto" | "ai";

interface Project {
  name: string;
  label: string;
}

const cryptoProjects: Project[] = [
  { name: "RGB", label: "Protocol" },
  { name: "Noundation", label: "Design" },
  { name: "Gerund", label: "Apparel" },
  { name: "Squads", label: "Community" },
  { name: "Lag Sucks", label: "Media" },
  { name: "Nounhood", label: "Art" },
  { name: "Nounable", label: "Goods" },
];

const aiProjects: Project[] = [
  { name: "TBD", label: "Coming Soon" },
];

interface ProjectListProps {
  category: Category;
}

export function ProjectList({ category }: ProjectListProps) {
  const projects = category === "crypto" ? cryptoProjects : aiProjects;
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="w-full max-w-md">
      <ul className="flex flex-col">
        {projects.map((project, i) => (
          <li
            key={project.name}
            onClick={() => setSelected(i)}
            className={`flex items-center justify-between py-3 px-2 cursor-pointer font-mono transition-colors ${
              selected === i
                ? "bg-text-primary text-bg"
                : "text-text-primary hover:bg-text-primary/10"
            }`}
          >
            <span className={`text-sm ${selected === i ? "text-bg" : ""}`}>
              {selected === i ? "> " : "  "}{project.name}
            </span>
            <span className={`text-xs ${selected === i ? "text-bg/70" : "text-text-tertiary"}`}>
              {project.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
