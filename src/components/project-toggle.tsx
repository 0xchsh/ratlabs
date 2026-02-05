"use client";

type Category = "crypto" | "ai";

interface ProjectToggleProps {
  active: Category;
  onChange: (category: Category) => void;
}

export function ProjectToggle({ active, onChange }: ProjectToggleProps) {
  return (
    <div
      className="flex items-center gap-0 rounded-lg p-[3px] font-mono"
      style={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)",
        boxShadow:
          "inset 0 1px 3px rgba(0,0,0,0.6), inset 0 -1px 1px rgba(255,255,255,0.05), 0 1px 2px rgba(0,0,0,0.4)",
      }}
    >
      <button
        onClick={() => onChange("crypto")}
        className="relative rounded-md px-5 py-2 text-xs cursor-pointer transition-all duration-150"
        style={
          active === "crypto"
            ? {
                background: "linear-gradient(180deg, #e8e8e8 0%, #c8c8c8 100%)",
                color: "#0a0a0a",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 1px rgba(0,0,0,0.1)",
                textShadow: "0 1px 0 rgba(255,255,255,0.4)",
              }
            : {
                background: "transparent",
                color: "#525252",
                boxShadow: "none",
              }
        }
      >
        crypto
      </button>
      <button
        onClick={() => onChange("ai")}
        className="relative rounded-md px-5 py-2 text-xs cursor-pointer transition-all duration-150"
        style={
          active === "ai"
            ? {
                background: "linear-gradient(180deg, #e8e8e8 0%, #c8c8c8 100%)",
                color: "#0a0a0a",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 1px rgba(0,0,0,0.1)",
                textShadow: "0 1px 0 rgba(255,255,255,0.4)",
              }
            : {
                background: "transparent",
                color: "#525252",
                boxShadow: "none",
              }
        }
      >
        ai
      </button>
    </div>
  );
}
