'use client';
import { HeroTitle, HeroContent } from "./components";
import Spline from '@splinetool/react-spline';

const heroContent = {
  title: ["Post", "Prime"],
  subtitle: "Podcast",
  description: ["Rozmowy tworzone", "z serca do koszykówki"],
  year: "2020",
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-neutral-900 border-2 border-pink-500"
    >

      <div className="absolute inset-0  w-full h-full">
        <Spline scene="https://prod.spline.design/8hkallnKzmQnwjQP/scene.splinecode" />
      </div>
      {/* === Text overlay === */}
      <div className="relative inset-0 z-10 text-[clamp(5rem,15vw,30rem)] scale-y-200 grid grid-cols-2 gap-2 ">
        <HeroTitle title={heroContent.title} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-8">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 uppercase text-white">
          <HeroContent
            subtitle={heroContent.subtitle}
            description={heroContent.description}
            year={heroContent.year}
          />
        </div>
      </div>
    </section>
  );
}