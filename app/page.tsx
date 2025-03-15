"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/About";
import Footer from "@/components/Footer";
import Recommendations from "@/components/Recommendations";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <JourneyTimeline />
        <Recommendations />
        {/* <Experience />
        <Approach /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
