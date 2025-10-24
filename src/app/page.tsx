import { Navbar, Hero, About, PlatformSection, YtSection, FbSection, } from "./components";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
      <Hero/>
      <About/>
      <YtSection />

      </main>
      {/* <PlatformSection/>
      <FbSection/> */}
    </>


  );
}