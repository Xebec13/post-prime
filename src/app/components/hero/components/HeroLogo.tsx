"use client";
import Image from "next/image";


export default function HeroLogo() {


  return (
    <div className="-z-50 absolute inset-0 pointer-events-none isolate">
      <div
        className={`flex flex-col justify-center items-center`}>
        {/* === 🏀 Basketball === */}
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
      </div>
    </div >
  );
}