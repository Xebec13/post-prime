"use client";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none flex sm:justify-center items-start justify-end">
      <div className="relative -bottom-30 -right-10 sm:bottom-0 sm:right-0 flex flex-col justify-end items-end sm:justify-center sm:items-center pointer-events-none">
        
        {/* === Basketball === */}
        <Parallax translateY={[0, 600, "easeInQuint"]} startScroll={0} endScroll={600}>
          <div className="relative bottom-0 sm:-bottom-5 w-70 sm:w-110">
            <Image
              src="/basketball.svg"
              alt="Basketball"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
            {/* Dynamic background cover */}
            <div
              className={`absolute bottom-1 right-0 h-[15%] w-[30%] transition-colors duration-700 ${
                isScrolled ? "bg-black" : "bg-orange-700"
              }`}
            />
          </div>
        </Parallax>

        {/* === Hand === */}
        <Parallax translateY={[0, 800, "easeInQuint"]} startScroll={0} endScroll={400}>
          <div className="relative right-22 sm:right-0 bottom-15 sm:bottom-18 w-25 sm:w-40">
            <Image
              src="/hand6.png"
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