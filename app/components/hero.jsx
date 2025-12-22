"use client";

import { HERO } from "../constants";
import Learnmore from "../components/button";

const IMAGES = [
  "./main.JPG",
  "./main12.jpg",
  "./main2.jpeg",
  "./main3.jpeg",
  "./main4.jpeg",
  "./main5.jpeg",
  "./main6.jpeg",
  "./main7.jpeg",
  "./main8.jpeg",
];

export default function HeroSection() {
  return (
    <div className="w-full">
      <section className="min-h-[650px] flex flex-col items-center py-8 px-2 sm:px-6">
        <div className="w-full overflow-hidden">
          <div className="flex w-max gap-6 px-6 py-8 animate-scroll">
            {[...IMAGES, ...IMAGES].map((img, i) => (
              <img
                key={i}
                src={img}
                className="h-64 w-96 shrink-0 rounded-xl transition-transform hover:scale-105"
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center py-4">
          <p className="text-center text-textGreen max-w-xl font-light text-neutral-500 mb-4">
            {HERO.description}
          </p>
          <Learnmore />
        </div>
      </section>
      <div className="w-full overflow-hidden bg-yellow py-2">
        <div className="flex w-max gap-12 px-6 font-serif text-lg animate-scroll-slow">
          {Array(100)
            .fill(HERO.tickerText)
            .map((text, i) => (
              <span key={i} className="whitespace-nowrap">
                {text}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
