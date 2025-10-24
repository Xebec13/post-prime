"use client";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

export default function AboutTitle({ text }: { text: string }) {
  const [startScroll, setStartScroll] = useState(200);

  // 🔸 Detect screen size and adjust scroll start point
  useEffect(() => {
    const updateScrollValue = () => {
      if (window.innerWidth < 640) {
        // below Tailwind's "sm" breakpoint
        setStartScroll(200);
      } else {
        setStartScroll(600);
      }
    };

    updateScrollValue(); // Run on mount
    window.addEventListener("resize", updateScrollValue);
    return () => window.removeEventListener("resize", updateScrollValue);
  }, []);

  return (
    <>
      <Parallax
        opacity={[0, 1, "easeOutQuad"]}
        translateY={[25, 0, "easeOutCubic"]}
        // translateX={[0, 50, "easeOutCubic"]}
        startScroll={startScroll}
        endScroll={800}
        shouldAlwaysCompleteAnimation
      >
        <h2 className="text-5xl text-neutral-700 uppercase">
          {text}
        </h2>
      </Parallax>
    </>
  );
}