import { Nav, HeroSection,About, PlatformSection,YtSection, FbSection, } from "./components";
export default function Home() {
  return (
    <>
      <Nav />
      <main>
      <HeroSection />
      <About/>
      {/* <YtSection /> */}

      </main>
      {/* <PlatformSection/>
      <FbSection/> */}
    </>


  );
}