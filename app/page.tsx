import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Map from "./components/Map";
import Story from "./components/Story";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Story />
      <Contact />
      <Map />
    </main>
  );
}
