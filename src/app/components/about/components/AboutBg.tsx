"use client";
import { Parallax } from "react-scroll-parallax";

export default function AboutBg() {
  return (
    <div className="w-full">
      <Parallax
        scale={[2.5,0.75 ]}      // efekt skalowania podczas scrolla
        translateY={[-25, 0]}   // przesunięcie obrazu w górę
        translateX={[-100,20]}
        startScroll={300}         // start efektu na początku scrolla
        endScroll={1000}         // koniec efektu przy 600px scrolla
        
      >
        <div
          className="w-full h-screen bg-center bg-contain bg-no-repeat"
          
        >
          
        </div>
      </Parallax>
    </div>
  );
}