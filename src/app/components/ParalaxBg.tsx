"use client";
import { ParallaxBanner } from "react-scroll-parallax";

interface ParalaxBgProps {
  imageUrl: string; // ścieżka do obrazka tła
  gradient?: string; // gradient CSS, np. "radial-gradient(...)"
}

export default function ParalaxBg({ imageUrl, gradient }: ParalaxBgProps) {
  return (
    // Background layer pinned to the section (no impact on layout flow)
    <div className="pointer-events-none absolute inset-0 -z-10">
      <ParallaxBanner
        layers={[
          {
            children: (
              <div
                className="absolute inset-0 h-full w-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: gradient
                    ? `${gradient}, url('${imageUrl}')`
                    : `url('${imageUrl}')`,
                }}
              />
            ),
            speed: -40,
          },
        ]}
        className="h-full w-full"
      />
    </div>
  );
}