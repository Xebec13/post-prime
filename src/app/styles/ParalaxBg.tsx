"use client";
import { ParallaxBanner } from "react-scroll-parallax";

interface ParalaxBgProps {
  imageUrl: string; // ścieżka do obrazu
  gradient?: string; // gradient CSS
  background?: string; // dodatkowe klasy Tailwinda np. bg-cover, bg-center
}

export default function ParalaxBg({ imageUrl, gradient, background }: ParalaxBgProps) {
  return (
    // Tło pinned do sekcji
    <div className="pointer-events-none absolute inset-0 -z-10">
      <ParallaxBanner
        layers={[
          {
            children: (
              <div
                className={`absolute inset-0 h-full w-full ${background ?? "bg-cover bg-center bg-no-repeat"}`}
                style={{
                  backgroundImage: gradient
                    ? `${gradient}, url('${imageUrl}')`
                    : `url('${imageUrl}')`,
                }}
              />
            ),
            speed: -50,
          },
        ]}
        className="h-full w-full"
      />
    </div>
  );
}