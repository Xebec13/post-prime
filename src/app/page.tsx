import { Navbar, Hero, About, Youtube,Social, Footer } from "./components";
import Divider from "./styles/Divider"
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Divider/>
        <Youtube />
        <Social/>
      </main>
      <footer>
        <Footer />
      </footer>
      {/* <PlatformSection/>
      <FbSection/> */}
    </>


  );
}