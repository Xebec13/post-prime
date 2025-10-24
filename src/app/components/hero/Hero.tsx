"use client";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { HeroTitle, HeroContent, HeroLogo } from "./components";

const heroContent = {
  title: ["Post", "Prime"],
  subtitle: "Podcast",
  description: [
    "Rozmowy tworzone","z serca do koszykówki",
  ],
  year: "2020",
};

export default function Hero() {
  const { isScrolled, duration } = useScrollPosition({ offset: 600, duration: 700 });
  return (
    <section
      id="home"
      className={`h-[140dvh] sm:h-[175dvh] flex flex-col gap-6 overflow-hidden transition-colors duration-${duration} ${isScrolled ? "bg-second" : "bg-first"
        }`}
    >
      
      <div className="min-h-screen translate-y-1/8 sm:translate-y-1/7 relative p-3 sm:p-6">
        <div className="grid grid-cols-2 gap-1 text-[clamp(1.5rem,15vw,20rem)] font-black uppercase text-nowrap text-transparent">
          {/* === TITLE === */}
          <HeroTitle title={heroContent.title} />

          {/* === LOGO === */}
          <HeroLogo isScrolled={isScrolled} />
        </div>

        {/* === DESCRIPTION & YEAR === */}
        <div className="grid grid-cols-2 gap-1 uppercase mt-10 sm:mt-20">
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