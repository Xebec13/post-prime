import Light from "../../styles/Light";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative min-h-screen bg-neutral-900">
      {/* === Main Container with Image and Text === */}
      <div className="flex items-center justify-center lg:items-start lg:justify-end h-[75dvh] lg:h-[110dvh]">
        {/* === Text Content Overlay === */}
        <div className="absolute bottom-0 lg:bottom-1/4 lg:left-0 z-10 max-w-md lg:max-w-lg p-4 lg:p-8">
          <p className="mb-5 text-sm lg:text-2xl font-bold text-orange-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quas
            exercitationem temporibus voluptatum dolor incidunt impedit
            consequuntur velit voluptates itaque.
          </p>
          <button className="px-6 py-2 text-sm font-bold uppercase text-gray-200 bg-orange-500/90 rounded-md transition-all hover:scale-105">
            Wiecej
          </button>
        </div>

        {/* === Background Image === */}
        <div className="h-full min-w-full lg:min-w-4xl">
          <Image
            src="/pp-about.png"
            alt="Post Prime About"
            width={100}
            height={100}
            priority
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* === Decorative Bottom Light Effect === */}
      <Light variant="bottom" />
    </section>
  );
}