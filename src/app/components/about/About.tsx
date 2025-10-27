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
      className={`border-2 transition-colors duration-${duration} ${isScrolled ? "bg-second" : "bg-first"
        }`}
    >
      {/* --- Subtitle (Animated with Parallax) --- */}
      <div className="mb-5 text-center">
        <AboutTitle text={aboutContent.subtitle} />
      </div>

      <div className="h-[200vh] relative">
        <div className="p-4 ">

          {/* --- Hosts list (individual names) --- */}
          <div className="text-[3rem] text-white border-2 border-green-500 uppercase">
            {aboutContent.hosts.map((name, index) => (
              <p className="" key={index}>
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
        <div className="sticky inset-0 w-full h-screen border-2 border-pink-500">
          <AboutBg />
        </div>
      </div>
    </section>
  );
}