import Image from "next/image";


export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center min-h-screen p-3 md:p-6"
    >

      {/* === MAIN TITLE === */}
      <div className="mt-auto grid grid-cols-2 gap-1 text-[clamp(1.5rem,15vw,20rem)] font-black uppercase text-nowrap text-transparent logo-text -z-20">
        <h1
          className="text-left bg-gradient-to-bl from-orange-50 to-orange-600 bg-clip-text scale-y-280 leading-tight">
          Post
        </h1>
        <h1 className="text-right bg-gradient-to-br from-orange-100 to-orange-600 bg-clip-text scale-y-280 leading-tight">
          Prime
        </h1>
      </div>

      {/* === DESCRIPTION & YEAR === */}
      <div className="grid grid-cols-2 gap-1 uppercase mt-auto">
        {/* Left column - podcast description */}
        <div className="w-3/4 pl-1 md:pl-2.5 text-left">
          <h2 className="text-xl md:text-3xl font-extrabold uppercase">
            Basketball Podcast
          </h2>
          <p className="text-sm md:text-lg text-gray-300">
            Podcast o pasji, autentyczności i energii
          </p>
          <p className="text-sm md:text-lg text-gray-300">
            Rozmowy tworzone z serca do koszykówki
          </p>
        </div>

        {/* Right column - year */}
        <p className="self-start md:self-end pr-1 md:pr-2.5 text-right text-xs md:text-sm font-bold leading-none text-gray-300">
          2020
        </p>
      </div>

      {/* === ICONS (HAND + BALL) === */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex justify-end items-end sm:justify-center sm:items-end">
        <div className="relative bottom-0 right-1 sm:right-0 flex flex-col justify-end items-end sm:justify-center sm:items-center">
          {/* Basketball */}
          <div className="relative -bottom-16 left-11 sm:left-0 sm:-bottom-24 w-75 sm:w-115">
            <Image
              src="/basketball.svg"
              alt="Basketball"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1 right-0 h-[15%] w-[30%] bg-neutral-800" />
          </div>

          {/* Hand */}
          <div className="relative bottom-0 right-12 sm:right-0 w-25 sm:w-40">
            <Image
              src="/hand6.png"
              alt="Basketball"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}