"use client";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { HeroTitle, HeroContent, HeroLogo, HeroLight} from "./components";

const heroContent = {
  title: ["Post", "Prime"],
  subtitle: "Podcast",
  description: [
    "Rozmowy tworzone", "z serca do koszykówki",
  ],
  year: "2020",
};

export default function Hero() {
  const { isScrolled, duration } = useScrollPosition({ offset: 600, duration: 700 });
  return (
    <>
      <section
        id="home"
        className={`relative h-[150dvh] sm:h-[175dvh] overflow-hidden flex flex-col gap-6 transition-colors duration-${duration} ${isScrolled ? "bg-second" : "bg-first"
          }`}
      >
        <HeroLight/>
        <div className="min-h-screen w-full translate-y-1/8 sm:translate-y-1/7 relative p-3 sm:p-6">
          <div className="hero-shadow-title grid grid-cols-2 gap-2 text-[clamp(1.5rem,14vw,18rem)] font-black uppercase">
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
      
    </>
  );
}