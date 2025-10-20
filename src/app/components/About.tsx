"use client";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const aboutContent = {
  subtitle:
    "Post Prime to podcast o koszykówce, tworzony przez pasjonatów dawno po swoim prime.",
  description:
    "W każdym odcinku rozmawiamy o pasji, rywalizacji i historii, które inspirują zarówno zawodników, jak i fanów. Naszym celem jest pokazanie autentycznej strony koszykówki — z emocjami, energią i pełnym zaangażowaniem.",
  button: "Więcej o nas",
};

export default function About() {
  // Detect scroll position to trigger background color transition
  const isScrolled = useScrollPosition({ offset: 600 });

  return (
    <section
      className={`h-screen p-3 sm:p-6 transition-colors duration-700 flex flex-col items-center ${
        isScrolled ? "bg-second" : "bg-first"
      }`}
    >
      {/* === Section Subtitle === */}
      <h2 className="max-w-4xl bg-gradient-to-b from-gray-200 to-gray-400 bg-clip-text text-transparent text-3xl sm:text-5xl font-medium text-center">
        {aboutContent.subtitle}
      </h2>

      {/* === About Content Grid === */}
      <div className="grid sm:grid-cols-2 place-items-center my-auto">
        {/* Left column - text content */}
        <div className="space-y-4 p-2">
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            {aboutContent.description}
          </p>

          {/* Button with icon */}
          <button className="py-2 border-b-2 border-b-orange-500 inline-flex items-center gap-1 uppercase group">
            {aboutContent.button}
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Right column - image */}
        <div className="w-full h-full p-2">
          <Image
            src="/postprime-hero.png"
            alt="Post Prime logo"
            width={400}
            height={400}
            priority
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}