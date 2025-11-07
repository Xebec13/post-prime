"use client";
import { HeroTitle, HeroContent, HeroLogo} from "./components";
import Light from "../../styles/Light"

const heroContent = {
  title: ["Post", "Prime"],
  subtitle: "Podcast",
  description: [
    "Rozmowy tworzone", "z serca do koszykówki",
  ],
  year: "2020",
};

export default function Hero() {

  return (
    <>
      <section
        id="home"
        className={`border-2 border-pink-500 relative min-h-screen sm:h-[175vh] overflow-hidden flex flex-col gap-6 bg-neutral-900}`}
      >
        <Light variant="top" />
        <div className="min-h-screen w-full translate-y-1/8 sm:translate-y-1/7 relative p-3 sm:p-6">
          <div className="hero-shadow-title grid grid-cols-2 gap-2 text-[clamp(1.3rem,13vw,25rem)] font-black uppercase">
            {/* === TITLE === */}
            <HeroTitle title={heroContent.title} />

            {/* === LOGO === */}
            <HeroLogo />
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