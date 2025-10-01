import ParalaxBg from "./ParalaxBg";

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url('/postprime-hero3.png')`,
      }}
      className="relative h-screen bg-cover bg-center"
    >
      <ParalaxBg
        imageUrl="/postprime-logo.png"
        gradient="radial-gradient(circle, rgba(249,115,22,0.7) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.9) 100%)"
      />
      <div className="flex h-full items-end justify-center text-center">
        <h2 className="mb-6 text-4xl font-bold text-white text-shadow-orange-500/80 text-shadow-sm md:text-6xl">
          Listen to Your Favorite <br /> Basketball Podcast
        </h2>
      </div>
    </section>
  );
}