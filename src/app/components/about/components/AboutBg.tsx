"use client";
import { ParallaxBanner } from "react-scroll-parallax";

export default function AboutBg() {
  return (
    <>
      <ParallaxBanner
        layers={[
          // 🏀 Foreground Layer — Logo (moves slightly faster)
          {
            speed: 15,
            children: (
              <div
                className="relative w-full h-full bg-center bg-cover sm:bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/postprime-logo-1.png')" }}
              />
            ),
          },

          // 🎨 Background Layer — Hero Image with subtle scaling
          {
            children: (
              <div
                className="relative w-full h-full bg-center bg-contain bg-no-repeat scale-120"
                style={{ backgroundImage: "url('/postprime-hero.png')" }}
              />
            ),
          },
        ]}
        className="h-full w-full aspect-[4/3] rounded-lg"
      />
    </>
  );
}