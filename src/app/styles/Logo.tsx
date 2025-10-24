"use client"
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Logo() {
    return (
        <div className="absolute inset-0 -z-50 pointer-events-none flex sm:justify-center items-start justify-end overflow-hidden">
            <div className="relative -bottom-30 -right-10 sm:bottom-10 sm:right-0 flex flex-col justify-end items-end sm:justify-center sm:items-center pointer-events-none">
                {/* === Basketball === */}
                <Parallax
                    // speed={30}
                    // translateY={["0px", "-3000px"]}
                    // startScroll={0}
                    // endScroll={800}
                    easing="easeInOut"
                >
                    <div className="relative w-70 sm:w-125">
                        <Image
                            src="/basketball.svg"
                            alt="Basketball"
                            width={300}
                            height={300}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-1 right-0 h-[15%] w-[30%] bg-neutral-800" />
                    </div>
                </Parallax>

                {/* === Hand === */}
                <Parallax
                    // speed={50}
                    // translateY={["0px", "2000px"]}
                    // startScroll={0}
                    // endScroll={1000}
                    easing="easeInOut"
                >
                    <div className="relative right-22 sm:right-0 bottom-15 sm:bottom-25 w-25 sm:w-40">
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