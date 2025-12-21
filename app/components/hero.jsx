'use client';

import { NAVIGATION, HERO } from '../constants';
import Learnmore from "../components/button";

const IMAGES = [
  "./main.JPG",
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
    <div>
      <section className="bg-gradient-to-b from-bgsecondary from-30% to-bgMain to-30% h-[650px] flex flex-col items-center py-8 px-6">

        {/* NAVBAR */}
        <nav className="flex w-full justify-between items-center px-8 max-w-4xl text-textGreen text-base font-medium mb-4 tracking-wide">
          <div className="flex gap-12">
            <a href="#" className="hover:underline">{NAVIGATION.home}</a>
            <a href="#" className="hover:underline">{NAVIGATION.retreats}</a>
          </div>

          <h1 className="text-[28px] font-serif text-textGreen tracking-wide">
            {HERO.title}
          </h1>

          <div className="flex gap-12">
            <a href="#" className="hover:underline">{NAVIGATION.shop}</a>
            <a href="#" className="hover:underline">{NAVIGATION.contact}</a>
          </div>
        </nav>

        {/* SCROLLER 1 — INFINITE IMAGES */}
        <div className="w-full overflow-hidden">
          <div className="flex w-max gap-6 px-6 py-8 animate-scroll">
            {[...IMAGES, ...IMAGES].map((img, i) => (
              <img
                key={i}
                src={img}
                className="h-64 w-96 flex-shrink-0 rounded-xl transition-transform hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/* DESCRIPTION + BUTTON */}
        <div className="w-full flex flex-col items-center pt-5">
          <p className="text-center text-textGreen max-w-xl font-light text-[15px] mb-2">
            {HERO.description}
          </p>
          <Learnmore />
        </div>

      </section>

      {/* SCROLLER 2 — TEXT TICKER */}
      <div className="w-full overflow-hidden bg-yellow py-2">
        <div className="flex w-max gap-12 px-6 font-serif text-lg animate-scroll-slow">
          {Array(100).fill("The Hargila Desk").map((text, i) => (
            <span key={i} className="whitespace-nowrap">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
