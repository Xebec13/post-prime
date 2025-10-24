import { Nav, Hero, About, PlatformSection, YtSection, FbSection, } from "./components";
export default function Home() {
  return (
    <>
      <Nav />
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