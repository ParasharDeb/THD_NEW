'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Leftarrow from '../icons/leftarrow';
import Rightarrow from '../icons/rightarrow';
import { redirect } from 'next/navigation';

// Magazine items (update images/contents as you wish)
const magazines = [
  {
    image: './mag1.jpg',
    title: 'Full Moon Bali',
    description1: 'Unleash your inner light under the transformative glow of Bali’s full moon.',
    description2: 'This retreat guides you on a journey of self-discovery, deep healing, and spiritual awakening through yoga, meditation, sound healing, and Balinese tradition.',
    description3: 'Connect with a supportive community and return home empowered, renewed, and connected.',
    ctaButton: 'READ NOW',
  },
  {
    image: './mag2.jpg',
    title: 'Sacred Grove Escape',
    description1: 'Unleash your inner light under the transformative glow of Bali’s full moon.',
    description2: 'This retreat guides you on a journey of self-discovery, deep healing, and spiritual awakening through yoga, meditation, sound healing, and Balinese tradition.',
    description3: 'Connect with a supportive community and return home empowered, renewed, and connected.',
    ctaButton: 'READ NOW',
  },
  {
    image: './mag3.jpg',
    title: 'Zen Mountain Retreat',
    description1: 'Unleash your inner light under the transformative glow of Bali’s full moon.',
    description2: 'This retreat guides you on a journey of self-discovery, deep healing, and spiritual awakening through yoga, meditation, sound healing, and Balinese tradition.',
    description3: 'Connect with a supportive community and return home empowered, renewed, and connected.',
    ctaButton: 'READ NOW',
  },
  {
    image: './mag4.jpg',
    title: 'Oceanic Bliss Camp',
    description1: 'Unleash your inner light under the transformative glow of Bali’s full moon.',
    description2: 'This retreat guides you on a journey of self-discovery, deep healing, and spiritual awakening through yoga, meditation, sound healing, and Balinese tradition.',
    description3: 'Connect with a supportive community and return home empowered, renewed, and connected.',
    ctaButton: 'READ NOW',
  },
  {
    image: './mag3.jpg',
    title: 'Mystic Valley Journey',
    description1: 'Unleash your inner light under the transformative glow of Bali’s full moon.',
    description2: 'This retreat guides you on a journey of self-discovery, deep healing, and spiritual awakening through yoga, meditation, sound healing, and Balinese tradition.',
    description3: 'Connect with a supportive community and return home empowered, renewed, and connected.',
    ctaButton: 'READ NOW',
  },
];

export default function RetreatMagazineSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  // Controls which animation & direction is used
  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % magazines.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + magazines.length) % magazines.length);
  };

  return (
    <section className="w-full min-h-[320px] bg-bgMain flex flex-col items-center py-8 px-4">
      <h2 className="text-[2rem] font-serif text-textBrown font-semibold mb-6">
        OUR MAGAZINE
      </h2>
      {/* Card Carousel */}
      <div className="relative flex justify-center w-full max-w-3xl items-center">
        {/* Left arrow */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="absolute cursor-pointer left-[-40px] top-1/2 -translate-y-1/2 text-textBrown text-3xl p-2 hover:bg-accent rounded-full transition z-10"
        >
          <Leftarrow />
        </button>
        {/* Card */}
        <div className="flex w-full bg-white border border-bgMain rounded shadow-md overflow-hidden min-h-[200px]">
          {/* Image */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.img
              key={magazines[current].image + current}
              src={magazines[current].image}
              alt={magazines[current].title}
              className="object-cover w-[280px] min-h-[200px] shrink-0"
              draggable="false"
              initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 30 : -30 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
          {/* Text content */}
          <div className="flex flex-col flex-1 px-6 py-5 bg-bgCream justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={magazines[current].title + current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-serif font-semibold text-textBrown mb-1">
                  {magazines[current].title}
                </h3>
                <p className="text-[13px] text-textGreen mb-2 leading-snug">
                  {magazines[current].description1}
                </p>
                <p className="text-[13px] text-textGreen mb-3 leading-snug">
                  {magazines[current].description2}
                </p>
                <p className="text-[13px] text-textGreen mb-3 leading-snug">
                  {magazines[current].description3}
                </p>
                <button className="w-max px-4 py-1 rounded-full border cursor-pointer border-accent bg-yellow-100 hover:bg-bgcream font-medium text-textBrown text-[15px] transition mt-2 shadow"onClick={()=>{redirect("https://drive.google.com/drive/folders/1BIAZT6UEQJnshF2VFs7R42RwRMKPNl8X?usp=drive_link")}}>
                  {magazines[current].ctaButton}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* Right arrow */}
        <button
          aria-label="Next"
          onClick={next}
          className="absolute cursor-pointer right-[-40px] top-1/2 -translate-y-1/2 text-textBrown text-3xl p-2 hover:bg-accent/10 rounded-full transition z-10"
        >
          <Rightarrow />
        </button>
      </div>
      {/* Dots */}
      <div className="flex gap-2 mt-5">
        {magazines.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition ${i === current ? 'bg-textBrown' : 'bg-bgMain border border-textBrown'}`}
            style={{ display: 'inline-block' }}
          />
        ))}
      </div>
    </section>
  );
}
