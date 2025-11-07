"use client";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

type Breakpoint = "base" | "sm" | "md" | "lg" | "xl";

function responsiveClasses(config: Partial<Record<Breakpoint, string | string[]>>) {
  return Object.entries(config)
    .map(([key, value]) => {
      const values = Array.isArray(value) ? value : [value];
      return values
        .map((v) => (key === "base" ? v : `${key}:${v}`))
        .join(" ");
    })
    .join(" ");
}

export default function HeroLogo() {
  const logoWrapperPosition = {
    base: "relative -bottom-1/10 left-7 border-2 border-white",
    sm: "-bottom-1/5 -right-12 ",
    md: "-bottom-10 right-0",
    lg: "",
    xl: "",
  } as const;

  const logoBallPosition = {
    base: "relative right-0 -bottom-7 w-65",
    sm: "w-15",
    md: "w-110",
    lg: "",
    xl: "w-130",
  } as const;

  const logoHandPosition = {
    base: "relative -bottom-10 right-5 w-55",
    sm: "right-0 bottom-13 w-43",
    md: "bottom-18 w-48",
    lg: "",
    xl: "",
  } as const;

  return (
    <div className="-z-50 absolute inset-0 pointer-events-none flex sm:justify-center items-start justify-end isolate">
      <div className={`flex flex-col justify-end items-end sm:justify-center sm:items-center ${responsiveClasses(logoWrapperPosition)}`}>
        {/* === 🏀 Basketball === */}
        <Parallax translateY={[0, 150, "easeOutQuad"]} startScroll={100} endScroll={500}>
          <Parallax translateY={[0, -150, "easeInQuint"]} startScroll={600} endScroll={800}>
            <div className={`${responsiveClasses(logoBallPosition)} aspect-square`}>
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

        {/* === ✋ Hand === */}
        <Parallax translateY={[0, 600, "easeInQuint"]} startScroll={0} endScroll={100}>
          <div className={`${responsiveClasses(logoHandPosition)} aspect-square`}>
            <Image
              src="/hand15.png"
              alt="Hand illustration"
              fill
              className="object-contain w-full h-full"
            />
          </div>
        </Parallax>
      </div>
    </div>
  );
}