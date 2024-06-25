'use client'
import Header from "./header/page";
import About from "./about/page";
import Contact from "./contact/page";
import Hero from "./hero/page";
import Journey from "./journey/page";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Journey />
      <Contact />
    </div>
  );
}
