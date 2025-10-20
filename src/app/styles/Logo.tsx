"use client"
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Logo() {
    return (
        <div className="absolute inset-0  pointer-events-none flex sm:justify-center items-start justify-end overflow-hidden">
            <div className="relative -bottom-30 -right-10 sm:bottom-0 sm:right-0 flex flex-col justify-end items-end sm:justify-center sm:items-center">
                {/* === Basketball === */}
                <Parallax
                    translateY={[0, 600, "easeInQuint"]}
                    startScroll={0}
                    endScroll={600}
                    shouldAlwaysCompleteAnimation
                >
                    <div className="relative bottom-0 sm:-bottom-5 w-70 sm:w-110">
                        <Image
                            src="/basketball.svg"
                            alt="Basketball"
                            width={300}
                            height={300}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-1 right-0 h-[15%] w-[30%] bg-orange-700" />
                    </div>
                </Parallax>

                {/* === Hand === */}
                <Parallax
                    // speed={100}
                    translateY={[0, 800, "easeInQuint"]}
                    startScroll={0}
                    endScroll={400}
                    easing= 'easeOutQuad'
                    shouldAlwaysCompleteAnimation
                >
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