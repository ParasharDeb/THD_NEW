"use client";

import { useState } from "react";
import { NAVIGATION, HERO } from "../constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="w-full px-4 sm:px-8 max-w-4xl mx-auto text-emerald-800 p-4">
        
        {/* DESKTOP */}
        <div className="hidden md:flex justify-between items-center text-base font-medium tracking-wide">
          <div className="flex gap-8 lg:gap-12">
            <Link href="/#hero" className="hover:underline">
              {NAVIGATION.home}
            </Link>
            <Link href="/#magazine" className="hover:underline">
              {NAVIGATION.retreats}
            </Link>
          </div>

          <h1 className="text-2xl lg:text-[28px] font-serif tracking-wide">
            {HERO.title}
          </h1>

          <div className="flex gap-8 lg:gap-12">
            <Link href="/#meettheteam" className="hover:underline">
              {NAVIGATION.shop}
            </Link>
            <Link href="/#footer" className="hover:underline">
              {NAVIGATION.contact}
            </Link>
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-serif tracking-wide">
              {HERO.title}
            </h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-emerald-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="absolute left-0 right-0 top-16 bg-white shadow-lg border-t border-emerald-100 z-50">
              <div className="flex flex-col gap-1 p-4 text-base font-medium tracking-wide">

                <Link
                  href="/#hero"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-emerald-50 px-4 py-3 rounded-lg"
                >
                  {NAVIGATION.home}
                </Link>

                <Link
                  href="/#magazine"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-emerald-50 px-4 py-3 rounded-lg"
                >
                  {NAVIGATION.retreats}
                </Link>

                <Link
                  href="/#meettheteam"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-emerald-50 px-4 py-3 rounded-lg"
                >
                  {NAVIGATION.shop}
                </Link>

                <Link
                  href="/#footer"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-emerald-50 px-4 py-3 rounded-lg"
                >
                  {NAVIGATION.contact}
                </Link>

              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
