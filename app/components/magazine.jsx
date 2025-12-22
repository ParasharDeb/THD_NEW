'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Leftarrow from '../icons/leftarrow';
import Rightarrow from '../icons/rightarrow';
import { redirect } from 'next/navigation';

// Magazine data
const magazines = [
  {
    image: './mag1.jpg',
    title: 'Full Moon Bali',
    description1: 'Unleash your inner light under the transformative glow of Bali’s full moon.',
    description2: 'This retreat guides you on a journey of self-discovery, deep healing, and spiritual awakening through yoga, meditation, sound healing, and Balinese tradition.',
    description3: 'Connect with a supportive community and return home empowered, renewed, and connected.',
    ctaButton: 'READ NOW',
    magazinelink:"https://drive.google.com/file/d/1rd93xq0YhGLRejlJPBcO7c-b9jPacx0K/view?usp=drive_link",
  },
  {
    image: './mag2.jpg',
    title: 'Sacred Grove Escape',
    description1: 'Unleash your inner light under the transformative glow of Bali’s full moon.',
    description2: 'This retreat guides you on a journey of self-discovery, deep healing, and spiritual awakening through yoga, meditation, sound healing, and Balinese tradition.',
    description3: 'Connect with a supportive community and return home empowered, renewed, and connected.',
    ctaButton: 'READ NOW',
    magazinelink:"https://drive.google.com/file/d/1S5gQi0W59sC8HWlUxOwpYX8MHG0CRpO-/view?usp=sharing",
  },
  {
    image: './mag3.jpg',
    title: 'Zen Mountain Retreat',
    description1: 'Unleash your inner light under the transformative glow of Bali’s full moon.',
    description2: 'This retreat guides you on a journey of self-discovery, deep healing, and spiritual awakening through yoga, meditation, sound healing, and Balinese tradition.',
    description3: 'Connect with a supportive community and return home empowered, renewed, and connected.',
    ctaButton: 'READ NOW',
    magazinelink:"https://drive.google.com/file/d/12vuuD1JOVdXJytRp97xo1lU5U34jozxz/view?usp=sharing",
  },
  {
    image: './mag4.jpg',
    title: 'Oceanic Bliss Camp',
    description1: 'Unleash your inner light under the transformative glow of Bali’s full moon.',
    description2: 'This retreat guides you on a journey of self-discovery, deep healing, and spiritual awakening through yoga, meditation, sound healing, and Balinese tradition.',
    description3: 'Connect with a supportive community and return home empowered, renewed, and connected.',
    ctaButton: 'READ NOW',
    magazinelink:"https://heyzine.com/flip-book/091e55c56a.html?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRzdgOol_JleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafTzBAmopcfMyaaGU4UlNPMjVyLa3zsEEQT-yNXGMFSTJVHyDrHw_jwD9wecg_aem_O_x_fBb6mCaTraDEdjQN3A",
  },
];

export default function RetreatMagazineSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % magazines.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + magazines.length) % magazines.length);
  };

  return (
    <section className="w-full h-[460px] bg-bgMain flex flex-col items-center py-8 px-4">
      
      {/* Heading */}
      <h2 className="text-[2rem] font-serif text-textBrown font-semibold mb-6">
        OUR MAGAZINE
      </h2>

      {/* Carousel */}
      <div className="relative flex justify-center w-full max-w-3xl items-center">

        {/* Left Arrow */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="absolute left-[-48px] top-1/2 -translate-y-1/2 p-2 rounded-full text-textBrown hover:bg-accent/10 transition z-10"
        >
          <Leftarrow />
        </button>

        {/* Card */}
        <div className="flex w-full h-[260px] bg-white border border-bgMain rounded shadow-md overflow-hidden">

          {/* Image */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.img
              key={magazines[current].image + current}
              src={magazines[current].image}
              alt={magazines[current].title}
              className="object-cover w-[280px] h-full shrink-0"
              draggable={false}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 40 : -40 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>

          {/* Text Container */}
          <div className="flex flex-col flex-1 h-full px-6 py-5 bg-bgCream overflow-hidden">

            {/* Scrollable text */}
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <AnimatePresence mode="wait">
                <motion.div
                  key={magazines[current].title + current}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-serif font-semibold text-textBrown mb-1">
                    {magazines[current].title}
                  </h3>

                  <p className="text-[13px] text-textGreen mb-2 leading-snug">
                    {magazines[current].description1}
                  </p>

                  <p className="text-[13px] text-textGreen mb-2 leading-snug">
                    {magazines[current].description2}
                  </p>

                  <p className="text-[13px] text-textGreen mb-3 leading-snug">
                    {magazines[current].description3}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA */}
            <button
              onClick={() =>
                
                  window.open(magazines[current].magazinelink)
                
              }
              className="mt-3 w-max px-4 py-1 rounded-full border border-accent bg-yellow-100 hover:bg-bgcream font-medium text-textBrown text-[15px] transition shadow"
            >
              {magazines[current].ctaButton}
            </button>

          </div>
        </div>

        {/* Right Arrow */}
        <button
          aria-label="Next"
          onClick={next}
          className="absolute right-[-48px] top-1/2 -translate-y-1/2 p-2 rounded-full text-textBrown hover:bg-accent/10 transition z-10"
        >
          <Rightarrow />
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-5">
        {magazines.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              i === current
                ? 'bg-textBrown'
                : 'bg-bgMain border border-textBrown'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
