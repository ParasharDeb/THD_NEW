'use client';

import CircularGallery from "../bitscomponents/circularGallery";
import { NAVIGATION, HERO } from '../constants';

export default function HeroSection() {
  return (
    <section className="bg-bgMain h-[550px] flex flex-col items-center py-8 px-6">
      
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
      <div style={{ height: '900px', position: 'relative', width: '100%' }}>
        <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
      </div>

      {/* Description & Button */}
      <div className="mt-8 w-full flex flex-col items-center">
        <p className="text-center text-textGreen max-w-xl font-light text-[15px] leading-snug mb-2">
          {HERO.description}
        </p>
        <p className="text-center text-textGreen max-w-xl font-light text-[14px] mb-4">
          {HERO.subDescription}
        </p>
        <button className="px-7 py-1.5 bg-bgCream hover:bg-bgcream rounded-full text-[15px] border border-accent text-textGreen font-semibold transition cursor-pointer">
          {HERO.ctaButton}
        </button>
      </div>
    </section>
  );
}
