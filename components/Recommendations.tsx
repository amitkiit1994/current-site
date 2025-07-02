"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Recommendations = () => {
  return (
    <section id="recommendations" className="py-20">
      <h2 id="recommendations-heading" className="text-3xl md:text-5xl font-bold text-center mb-8 text-neutral-800 dark:text-neutral-200">
        Professional Recommendations
      </h2>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image
                  src={company.img}
                  alt={`${company.name} company logo`}
                  width={40}
                  height={40}
                  className="md:w-10 w-5"
                />
                <Image
                  src={company.nameImg}
                  alt={`${company.name} company name`}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={30}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
