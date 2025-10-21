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
    <Parallax
      opacity={[0, 1, "easeOutQuad"]}
      translateY={[25, 0, "easeOutCubic"]}
      startScroll={startScroll}
      endScroll={800}
      shouldAlwaysCompleteAnimation
    >
      <h2 className="font-medium text-center text-xl sm:text-5xl bg-gradient-to-b from-gray-200 to-gray-400 bg-clip-text text-transparent">
        {text}
      </h2>
    </Parallax>
  );
}