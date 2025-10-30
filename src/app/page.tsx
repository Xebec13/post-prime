import { Navbar, Hero, About, PlatformSection, Youtube, FbSection, } from "./components";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
      <Hero/>
      <About/>
      <Youtube />

      </main>
      {/* <PlatformSection/>
      <FbSection/> */}
    </>


  );
}