"use client";

import { useState, useEffect, useRef } from "react";
import { NAVIGATION, HERO } from "../constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  /* ---------------- SMOOTH SCROLL ---------------- */
  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* ---------------- CLOSE MENU ON OUTSIDE CLICK ---------------- */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  /* ---------------- ACTIVE LINK ON SCROLL (TYPE SAFE) ---------------- */
  useEffect(() => {
    // ✅ FIX: HTMLElement generic
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const onScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/70">
      <nav className="w-full px-4 sm:px-8 max-w-4xl mx-auto text-emerald-800 p-4">

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex justify-between items-center text-sm font-medium tracking-wide">
          <div className="flex gap-6 lg:gap-8">
            <Link
              href="/#hero"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("hero");
              }}
              className={`hover:underline ${
                activeSection === "hero" ? "underline font-semibold" : ""
              }`}
            >
              {NAVIGATION.home}
            </Link>

            <Link
              href="/#activity"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("activity");
              }}
              className={`hover:underline ${
                activeSection === "activity" ? "underline font-semibold" : ""
              }`}
            >
              {NAVIGATION.activity}
            </Link>

            <Link
              href="/#magazine"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("magazine");
              }}
              className={`hover:underline ${
                activeSection === "magazine" ? "underline font-semibold" : ""
              }`}
            >
              {NAVIGATION.retreats}
            </Link>
          </div>

          <h1 className="text-2xl lg:text-[28px] font-serif tracking-wide">
            {HERO.title}
          </h1>

          <div className="flex gap-6 lg:gap-8">
            <Link
              href="/#footer"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("footer");
              }}
              className={`hover:underline ${
                activeSection === "footer" ? "underline font-semibold" : ""
              }`}
            >
              {NAVIGATION.contact}
            </Link>

            <Link
              href="/#meettheteam"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("meettheteam");
              }}
              className={`hover:underline ${
                activeSection === "meettheteam" ? "underline font-semibold" : ""
              }`}
            >
              {NAVIGATION.shop}
            </Link>

            <Link href="/articles" className="hover:underline">
              ARTICLES
            </Link>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
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
            <div
              ref={menuRef}
              className="absolute left-0 right-0 top-16 bg-white shadow-lg border-t border-emerald-100 z-50"
            >
              <div className="flex flex-col gap-1 p-4 text-base font-medium tracking-wide">

                <Link
                  href="/#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("hero");
                    setIsOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg hover:bg-emerald-50 ${
                    activeSection === "hero" ? "bg-emerald-50 font-semibold" : ""
                  }`}
                >
                  {NAVIGATION.home}
                </Link>

                <Link
                  href="/#activity"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("activity");
                    setIsOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg hover:bg-emerald-50 ${
                    activeSection === "activity"
                      ? "bg-emerald-50 font-semibold"
                      : ""
                  }`}
                >
                  {NAVIGATION.activity}
                </Link>

                <Link
                  href="/#magazine"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("magazine");
                    setIsOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg hover:bg-emerald-50 ${
                    activeSection === "magazine"
                      ? "bg-emerald-50 font-semibold"
                      : ""
                  }`}
                >
                  {NAVIGATION.retreats}
                </Link>

                <Link href="/articles" onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-lg hover:bg-emerald-50">
                  ARTICLES
                </Link>

                <Link
                  href="/#meettheteam"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("meettheteam");
                    setIsOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg hover:bg-emerald-50 ${
                    activeSection === "meettheteam"
                      ? "bg-emerald-50 font-semibold"
                      : ""
                  }`}
                >
                  {NAVIGATION.shop}
                </Link>

                <Link
                  href="/#footer"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("footer");
                    setIsOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg hover:bg-emerald-50 ${
                    activeSection === "footer"
                      ? "bg-emerald-50 font-semibold"
                      : ""
                  }`}
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