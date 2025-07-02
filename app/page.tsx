"use client";

import React from 'react';
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Recommendations from "@/components/Recommendations";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import StructuredData from "@/components/StructuredData";

const Home = () => {
  return (
    <>
      <StructuredData />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <section id="about" aria-labelledby="about-heading">
            <About />
          </section>
          <section id="journey" aria-labelledby="journey-heading">
            <JourneyTimeline />
          </section>
          <section id="recommendations" aria-labelledby="recommendations-heading">
            <Recommendations />
          </section>
          {/* <section id="experience" aria-labelledby="experience-heading">
            <Experience />
          </section>
          <section id="approach" aria-labelledby="approach-heading">
            <Approach />
          </section> */}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
