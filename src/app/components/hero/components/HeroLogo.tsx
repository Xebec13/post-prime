"use client";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function HeroLogo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="-z-50 absolute inset-0 pointer-events-none flex sm:justify-center items-start justify-end isolate">
      <div className="relative -bottom-1/5 -right-12 sm:-bottom-10 sm:right-0 flex flex-col justify-end items-end sm:justify-center sm:items-center">
        
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
            <div className="relative right-0 -bottom-13 w-85 sm:w-110 will-change-transform transform-gpu">
              <Image
                src="/basketball.svg"
                alt="Basketball"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
              
              {/* === 🩵 Watermark mask (changes color with scroll) === */}
              <div
                className={`absolute bottom-1 right-0 h-[15%] w-[30%] transition-colors duration-700 ${
                  isScrolled ? "bg-second" : "bg-first"
                }`}
              />
            </div>
          </Parallax>
        </Parallax>

        {/* === ✋ Hand illustration with scroll motion === */}
        <Parallax 
          translateY={[0, 400, "easeInQuint"]} 
          startScroll={0} 
          endScroll={100} 
          shouldAlwaysCompleteAnimation={false}
        >
          <div className="relative right-22 sm:right-0 bottom-13 sm:bottom-18 w-43 sm:w-48 will-change-transform transform-gpu">
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