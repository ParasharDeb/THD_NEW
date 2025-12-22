"use client";

import { useState } from "react";
import { NAVIGATION } from "../constants";
import { HERO } from "../constants";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="w-full">
      <nav className="w-full px-4 sm:px-8 max-w-4xl mx-auto text-emerald-800 p-4">
        <div className="hidden md:flex justify-between items-center text-base font-medium tracking-wide">
          <div className="flex gap-8 lg:gap-12">
            <a href="#" className="hover:underline">
              {NAVIGATION.home}
            </a>
            <a href="#" className="hover:underline">
              {NAVIGATION.retreats}
            </a>
          </div>
          <h1 className="text-2xl lg:text-[28px] font-serif tracking-wide">
            {HERO.title}
          </h1>
          <div className="flex gap-8 lg:gap-12">
            <a href="#" className="hover:underline">
              {NAVIGATION.shop}
            </a>
            <a href="#" className="hover:underline">
              {NAVIGATION.contact}
            </a>
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-serif tracking-wide">{HERO.title}</h1>
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
                <a
                  href="#"
                  className="hover:bg-emerald-50 px-4 py-3 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {NAVIGATION.home}
                </a>
                <a
                  href="#"
                  className="hover:bg-emerald-50 px-4 py-3 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {NAVIGATION.retreats}
                </a>
                <a
                  href="#"
                  className="hover:bg-emerald-50 px-4 py-3 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {NAVIGATION.shop}
                </a>
                <a
                  href="#"
                  className="hover:bg-emerald-50 px-4 py-3 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {NAVIGATION.contact}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
