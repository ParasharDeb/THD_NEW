'use client';

import { NAVIGATION, HERO } from '../constants';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-bgsecondary from-30% to-bgMain to-30% h-[650px] flex flex-col items-center py-8 px-6 ">
      
      {/* Nav with Title in Center */}
      <nav className="flex w-full justify-between items-center px-8 max-w-4xl text-textGreen text-base font-medium mb-4 tracking-wide">
        {/* Left Side Links */}
        <div className="flex gap-12">
          <a href="#" className="hover:underline">{NAVIGATION.home}</a>
          <a href="#" className="hover:underline">{NAVIGATION.retreats}</a>
        </div>

        {/* Center Title */}
        <h1 className="text-[28px] font-serif text-textGreen tracking-wide">
          {HERO.title}
        </h1>

        {/* Right Side Links */}
        <div className="flex gap-12">
          <a href="#" className="hover:underline">{NAVIGATION.shop}</a>
          <a href="#" className="hover:underline">{NAVIGATION.contact}</a>
        </div>
      </nav>

      {/* Circular Gallery */}
      <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-6 py-8 snap-x snap-mandatory">
            {["./main.JPG", "./main2.jpeg", "./main3.jpeg", "./main3.jpeg", "./main3.jpeg", "./main3.jpeg", "./main3.jpeg", "./main3.jpeg", "./main3.jpeg"].map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-48 w-80 flex-shrink-0 rounded-xl snap-center transition-transform hover:scale-105"
            />
          ))}
        </div>
      </div>


      {/* Description & Button */}
      <div className="w-full flex flex-col items-center">
        <p className="text-center text-textGreen max-w-xl font-light text-[15px] mb-2">
          {HERO.description}
        </p>
        {/* <p className="text-center text-textGreen max-w-xl font-light text-[14px] mb-4">
          {HERO.subDescription}
        </p> */}
        <button className="px-7 py-1.5 bg-bgcream hover:bg-bgcream rounded-full text-[15px] border border-accent text-textGreen font-semibold transition cursor-pointer">
          {HERO.ctaButton}
        </button>
      </div>
    </section>
  );
}
