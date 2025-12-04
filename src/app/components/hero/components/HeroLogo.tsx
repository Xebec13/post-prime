"use client";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function HeroLogo() {


  return (
    <div className="-z-50 absolute inset-0 pointer-events-none isolate">
      <div
        className={`flex flex-col justify-center items-center`}>
        {/* === 🏀 Basketball === */}
        <Parallax translateY={[0, 150, "easeOutQuad"]} startScroll={100} endScroll={500}>
          <Parallax translateY={[0, -250, "easeInQuint"]} startScroll={500} endScroll={900}>
            <div
              className={`w-[clamp(20rem,50vw,60rem)] aspect-square relative`}
            >
              <Image
                src="/basketball.svg"
                alt="Basketball"
                fill
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-1 right-0 h-[15%] w-[30%] bg-neutral-900" />
            </div>
          </Parallax>
        </Parallax>
      </div>
    </div>
  );
}