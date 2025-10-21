"use client";
import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";

export default function AboutImage() {
  return (
    <div className="aspect-[5/3] w-full sm:min-w-md rounded-xl overflow-hidden"
    >

      <ParallaxBanner
        layers={[
          {
            speed: 10,
            children: (
              <Image
                src="/postprime-logo-1.png"
                alt="Post Prime logo"
                fill
                priority
                className="object-cover object-center "
              />
            ),
          },
          {
            speed: -10,
            children: (
              <Image
                src="/postprime-hero.png"
                alt="Background"
                fill
                priority
                className="object-contain object-center backdrop-blur-[2px] bg-gradient-to-t from-orange-500/70 via-orange-500/40 to-orange-500/0"
              />
            ),
          },
        ]}
        className="h-full w-full rounded-lg"
      />
    </div>
  );
}