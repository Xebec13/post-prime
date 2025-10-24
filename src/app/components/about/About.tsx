"use client";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { AboutTitle, AboutContent, AboutBg } from "./components";

const aboutContent = {
  subtitle: "Przy mikrofonie",
  hosts: ["Maciek", "Marcin", "Piotr"],
  description: "Wejdź do nas na parkiet.",
  button: "Więcej o nas",
};

export default function About() {
  const { isScrolled, duration } = useScrollPosition({ offset: 600, duration: 700 });

  return (
    // === ABOUT SECTION WRAPPER ===
    <section
      className={`relative h-[300vh] border-2 border-pink-500 transition-colors duration-${duration} ${
        isScrolled ? "bg-second" : "bg-first"
      }`}
    >
      {/* === TEXT CONTENT AREA === */}
      <div className="relative left-0 h-1/4 border-1 border-blue-700 p-4 z-10">
        {/* --- Subtitle (Animated with Parallax) --- */}
        <div className="mb-5 p-1 max-w-xl">
          <AboutTitle text={aboutContent.subtitle} />
        </div>

        {/* --- Hosts list (individual names) --- */}
        <div className="border-yellow-500 border-2 text-[3rem] text-gray-500">
          {aboutContent.hosts.map((name, index) => (
            <p className="border-2 border-white" key={index}>
              {name}
            </p>
          ))}
        </div>

        {/* --- Description and Button section --- */}
        <div className="border-2">
          <AboutContent
            description={aboutContent.description}
            buttonText={aboutContent.button}
          />
        </div>
      </div>

      {/* === BACKGROUND SECTION (STICKY PARALLAX) === */}
      <div className="sticky inset-0 w-full h-screen">
        <AboutBg />
      </div>
    </section>
  );
}