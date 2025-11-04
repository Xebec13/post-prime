"use client";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function HeroLogo() {
  return (
    <div className="-z-50 absolute inset-0 pointer-events-none flex sm:justify-center items-start justify-end isolate">
      <div className="relative -bottom-25 -right-7  sm:-bottom-1/5 sm:-right-12 md:-bottom-10 md:right-0 flex flex-col justify-end items-end sm:justify-center sm:items-center">
        
        {/* === 🏀 Basketball animation === */}
        {/* Phase 1 – ball stays slightly in place */}
        <Parallax 
          translateY={[0, 150, "easeOutQuad"]} 
          startScroll={100} 
          endScroll={500} 
          shouldAlwaysCompleteAnimation={false}
        >
          {/* Phase 2 – ball moves upward smoothly */}
          <Parallax 
            translateY={[0, -150, "easeInQuint"]} 
            startScroll={600} 
            endScroll={800} 
            shouldAlwaysCompleteAnimation={false}
          >
            <div className="relative right-0 -bottom-12 w-65 sm:w-85 md:w-110 will-change-transform transform-gpu">
              <Image
                src="/basketball.svg"
                alt="Basketball"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
              
              {/* === 🩵 Watermark mask (changes color with scroll) === */}
              <div
                className={`absolute bottom-1 right-0 h-[15%] w-[30%] bg-neutral-900
                }`}
              />
            </div>
          </Parallax>
        </Parallax>

        {/* === ✋ Hand illustration with scroll motion === */}
        <Parallax 
          translateY={[0, 600, "easeInQuint"]} 
          startScroll={0} 
          endScroll={100} 
          shouldAlwaysCompleteAnimation={false}
        >
          <div className="relative bottom-7 right-15 sm:right-0  sm:bottom-13 md:bottom-18 w-35 sm:w-43 md:w-48 will-change-transform transform-gpu">
            <Image
              src="/hand15.png"
              alt="Hand illustration"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </Parallax>
      </div>
    </div>
  );
}