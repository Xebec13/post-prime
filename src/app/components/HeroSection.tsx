import Logo from "../styles/Logo"

const heroContent = {
  title: ["Post", "Prime"],
  subtitle: "Basketball Podcast",
  description: [
    "Pasja, autentyczność, energia",
    "Rozmowy tworzone z serca do koszykówki",
  ],
  year: "2020",
};
export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-[200vh] bg-orange-700 flex flex-col gap-6 p-3 sm:p-6"
    >

      {/* === MAIN TITLE === */}
      <div className="min-h-screen translate-y-1/6">
        <div className=" grid grid-cols-2 gap-1 text-[clamp(1.5rem,15vw,20rem)] font-black uppercase text-nowrap text-transparent logo-text -z-50">
          <h1
            className="text-left bg-gradient-to-bl from-gray-200 to-gray-300 bg-clip-text scale-y-260">
            {heroContent.title[0]}
          </h1>
          <h1 className="text-right bg-gradient-to-br from-gray-200 to-gray-300 bg-clip-text scale-y-260">
            {heroContent.title[1]}
          </h1>
          {/* === ICONS (HAND + BALL) === */}
        <Logo />
        </div>

        {/* === DESCRIPTION & YEAR === */}
        <div className="grid grid-cols-2 gap-1 uppercase mt-10 sm:mt-20">
          {/* Left column - podcast description */}
          <div className="w-3/4 pl-1 sm:pl-2.5 text-left z-20">
            <h2 className="text-xl sm:text-3xl font-extrabold uppercase">
              {heroContent.subtitle}
            </h2>
            {heroContent.description.map((line, index) => (
              <p key={index} className="text-sm md:text-lg text-gray-300">
                {line}
              </p>
            ))}
          </div>

          {/* Right column - year */}
          <p className="self-start pr-1 md:pr-2.5 text-right text-xs md:text-sm font-bold leading-none text-gray-300">
            {heroContent.year}
          </p>
        </div>
      </div>
    </section>
  );
}