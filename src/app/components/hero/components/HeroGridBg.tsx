"use client";
import { useState } from "react";

const GRID_SIZE = 20; // 10x10 grid
const FADE_DURATION = 500; // how long each cell stays inverted (ms)

export default function HeroGridBg() {
  const [activeCells, setActiveCells] = useState<Record<number, boolean>>({});

  const handleHover = (i: number) => {
    // 🔹 Activate the hovered cell
    setActiveCells((prev) => ({ ...prev, [i]: true }));

    // 🔹 Deactivate the cell after a delay (unless hovered again)
    setTimeout(() => {
      setActiveCells((prev) => {
        if (!prev[i]) return prev; // still active
        const updated = { ...prev };
        delete updated[i];
        return updated;
      });
    }, FADE_DURATION);
  };

  return (
    <div
      className="absolute inset-0 z-10 grid w-full h-full"
      style={{
        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
      }}
    >
      {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
        const isActive = !!activeCells[i];

        return (
          <div
            key={i}
            onMouseEnter={() => handleHover(i)}
            className="aspect-square transition-all duration-200 ease-out"
            style={{
              backdropFilter: isActive ? "invert(1)" : "invert(0)",
            }}
          />
        );
      })}
    </div>
  );
}