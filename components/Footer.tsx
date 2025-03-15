import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Heading & Call to Action */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Connect <span className="text-purple">with</span> me?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          href="https://calendly.com/amitkiit1994/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Schedule a discussion"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Footer Bottom Section */}
      <div
        className="
          mt-16
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          w-full
          px-4
          md:px-8
        "
      >
        {/* Social Media Icons (on mobile: first, on desktop: second) */}
        <div className="order-1 md:order-2 mb-4 md:mb-0 flex items-center gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10 h-10
                cursor-pointer
                flex
                justify-center
                items-center
                backdrop-filter backdrop-blur-lg
                saturate-180
                bg-opacity-75
                bg-black-200
                rounded-lg
                border border-black-300
              "
            >
              <img src={info.img} alt="social icon" width={20} height={20} />
            </a>
          ))}
        </div>

        {/* Copyright (on mobile: second, on desktop: first) */}
        <p
          className="
            order-2 md:order-1
            md:text-base
            text-sm
            md:font-normal
            font-light
            text-center
          "
        >
          Copyright © 2025 Amit Kumar Das
        </p>
      </div>
    </footer>
  );
};

export default Footer;