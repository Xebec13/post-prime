"use client";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { AboutTitle, AboutContent, AboutImage } from "./components";

const aboutContent = {
  subtitle:
    "Post Prime to podcast o koszykówce, w którym doświadczenie spotyka zajawkę, bo prime mija, ale pasja zostaje.",
  description:
    "Celem naszego podcastu jest pokazanie autentycznej strony koszykówki z emocjami, energią i pełnym zaangażowaniem.",
  button: "Więcej o nas",
};

export default function About() {
  const { isScrolled, duration } = useScrollPosition({ offset: 600, duration: 700 });

  return (
    <section
      className={`h-screen flex flex-col items-center  p-8 transition-colors duration-${duration} ${isScrolled ? "bg-second" : "bg-first"
        }`}
    >
      <div className="mb-5 max-w-4xl p-2">
        <AboutTitle text={aboutContent.subtitle} />
      </div>
      <div className="flex flex-col-reverse justify-center items-center sm:flex-row my-5 sm:my-auto w-full h-full">
        <AboutContent
          description={aboutContent.description}
          buttonText={aboutContent.button}
        />
        <AboutImage />
      </div>
    </section>
  );
}