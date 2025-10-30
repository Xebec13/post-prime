"use client";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { AboutTitle, AboutHosts, AboutContent, AboutBg } from "./components";

const aboutContent = {
  subtitle: "Przy mikrofonie",
  hosts: ["Maciek", "Marcin", "Piotr"],
  description: "Wejdź do nas na parkiet.",
  button: "Więcej o nas",
};

export default function About() {
  const { isScrolled, duration } = useScrollPosition({ offset: 600, duration: 700 });

  return (

    <section

      className={`h-[100dvh] border-2 border-indigo-400 transition-colors duration-${duration} ${isScrolled ? "bg-second" : "bg-first"
        }`}
    >
      <AboutBg/>
      {/* <AboutHosts hosts={aboutContent.hosts} /> */}

    </section>
  );
}