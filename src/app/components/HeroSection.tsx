export default function HeroSection() {

  return (
    <section
      id="home"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('/postprime-hero.png')",
      }}
      className="min-h-screen bg-cover bg-center flex flex-col justify-end items-center text-center p-6"
    >
      <div className="text-white max-w-3xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-orange-500/80 text-shadow-sm">
          Listen to Your Favorite <br /> Basketball Podcast
        </h2>

      </div>
    </section>
  );
}