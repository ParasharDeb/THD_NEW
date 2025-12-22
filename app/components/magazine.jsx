"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Leftarrow from "../icons/leftarrow";
import Rightarrow from "../icons/rightarrow";
import { MAGAZINE } from "../constants";
import { Book } from "lucide-react";

export default function RetreatMagazineSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % MAGAZINE.magazines.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent(
      (prev) =>
        (prev - 1 + MAGAZINE.magazines.length) % MAGAZINE.magazines.length
    );
  };

  return (
    <section className="w-full h-fit bg-yellow-100 flex flex-col items-center py-8 px-4">
      {/* Heading */}
      <h2 className="text-[2rem] font-serif text-textBrown text-center max-w-fit mx-auto font-semibold mb-6">
        {MAGAZINE.title}
      </h2>

      {/* Carousel */}
      <div className="relative flex justify-center min-h-[60vh] max-w-[70vw]  items-center">
        {/* Left Arrow */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 rounded-full text-textBrown hover:bg-accent/10 transition z-10"
        >
          <Leftarrow />
        </button>

        {/* Card */}
        <div className="flex-col flex sm:flex-row w-full h-fit bg-white border border-bgMain rounded shadow-md overflow-hidden">
          {/* Image */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.img
              key={MAGAZINE.magazines[current].image + current}
              src={MAGAZINE.magazines[current].image}
              alt={MAGAZINE.magazines[current].title}
              className="object-cover w-[280px] h-full shrink-0 hidden md:inline-flex"
              draggable={false}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 40 : -40 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>

          {/* Text Container */}
          <div className="flex flex-col flex-1 h-full p-6 bg-bgCream overflow-hidden">
            {/* Scrollable text */}
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <AnimatePresence mode="wait">
                <motion.div
                  key={MAGAZINE.magazines[current].title + current}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-serif font-semibold text-textBrown mb-1">
                    {MAGAZINE.magazines[current].title}
                  </h3>

                  <p className="text-[13px] text-neutral-500 font-light mb-2 leading-snug">
                    {MAGAZINE.magazines[current].description1}
                  </p>

                  <p className="text-[13px] text-neutral-500 font-light mb-2 leading-snug">
                    {MAGAZINE.magazines[current].description2}
                  </p>

                  <p className="text-[13px] text-neutral-500 font-light mb-3 leading-snug">
                    {MAGAZINE.magazines[current].description3}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA */}

            <button
              onClick={() =>
                window.open(MAGAZINE.magazines[current].magazinelink)
              }
              className="border-accent w-max px-4 py-1 rounded-full border bg-bgcream hover:scale-3d cursor-pointer font-medium text-textBrown text-[15px] transition shadow mt-4 text-white flex justify-center items-center gap-x-2"
            >
              {MAGAZINE.ctaButton}
              <Book size="13px" />
            </button>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          aria-label="Next"
          onClick={next}
          className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 rounded-full text-textBrown hover:bg-accent/10 transition z-10"
        >
          <Rightarrow />
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-5">
        {MAGAZINE.magazines.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              i === current
                ? "bg-black"
                : "bg-bgMain border border-textBrown"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
