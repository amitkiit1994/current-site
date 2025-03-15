import { FaLocationArrow } from "react-icons/fa6";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { Button } from "./ui/MovingBorders";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { AnimatedProfileImage } from "./ui/animated-tooltip";

const Hero = () => {
  const words = [
    {
      text: "A Visionary Leader",
    },
    {
      text: "A Creative Thinker",
    },
    {
      text: "A Tech Innovator",
    },
  ];
  const people = [
    {
      id: 1,
      name: "Amit Kumar Das",
      designation: "Engineer",
      image:
        "/hero-img.jpeg",
    }]
  return (
    <div
  id="hero"
  className="
    relative
    z-20
    min-h-screen  /* Make Hero fill full screen */
    flex
    flex-col
    items-center
    justify-center
    py-20         /* Even top & bottom spacing */
    scroll-mt-36  /* Offset for floating nav */
  "
>
      {/* Spotlights for background decoration */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
          absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient overlay */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
            bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Main hero content */}
      <div className="flex justify-center relative my-20 z-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Profile Picture Section */}
          <AnimatedProfileImage items={people} />

          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Leading AI Innovation
          </p>

          <TextGenerateEffect
            words="Hi! I&apos;m Amit Kumar Das"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl flex items-center justify-center">
            Cofounder
            <span className="flex items-center ml-2">
              <a href="https://ratl.ai" target="_blank" rel="noopener noreferrer">
                <img
                  src="/ratl-logo.png"
                  alt="ratl.ai Logo"
                  className="h-9"
                />
              </a>
            </span>
          </p>

          <TypewriterEffectSmooth words={words} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
