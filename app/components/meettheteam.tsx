'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion';
import { MEET_THE_TEAM } from '../constants';

const pad2 = (n: number) => String(n).padStart(2, '0');

export default function MeetTheTeamSection() {
  const [active, setActive] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  const total = MEET_THE_TEAM.teamMembers.length;
  const member = MEET_THE_TEAM.teamMembers[active];
  const counter = `${pad2(active + 1)} / ${pad2(total)}`;

  const next = () => setActive((p) => (p + 1) % total);
  const prev = () => setActive((p) => (p - 1 + total) % total);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!hasFocus) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        next();
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prev();
      }
      if (e.key === 'Home') {
        e.preventDefault();
        setActive(0);
      }
      if (e.key === 'End') {
        e.preventDefault();
        setActive(total - 1);
      }
    };

    window.addEventListener('keydown', onKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasFocus, total]);

  const heroSpring = useMemo(
    () => ({
      type: 'spring' as const,
      stiffness: 260,
      damping: 30,
      mass: 0.9,
    }),
    []
  );

  return (
    <section
      ref={sectionRef as any}
      tabIndex={0}
      onFocus={() => setHasFocus(true)}
      onBlur={() => setHasFocus(false)}
      className="w-full bg-secondary py-24 outline-none"
    >
      <LayoutGroup id="team-layout">
        <div className="mx-auto max-w-7xl px-6">
          {/* 2-row grid: main row + thumbnail row */}
          <div className="grid grid-rows-[1fr_auto] gap-y-14">
            {/* MAIN ROW */}
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[120px_360px_1fr] md:gap-16">
              {/* LEFT RAIL */}
              <div className="relative hidden h-[520px] md:block">
                <p className="absolute left-0 top-2 text-xs tabular-nums text-gray-500">
                  {counter}
                </p>

                <div className="absolute inset-0 grid place-items-center">
                  <span className="rotate-90 text-xs tracking-[0.35em] text-gray-700">
                    {MEET_THE_TEAM.leftRailLabel}
                  </span>
                </div>
              </div>

              {/* HERO IMAGE */}
              <div className="flex justify-center md:justify-start">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={active}
                    src={member.image}
                    alt={member.name}
                    draggable={false}
                    layoutId={`team-image-${active}`}
                    className="h-[520px] w-[320px] rounded-none object-cover md:h-[520px] md:w-[320px]"
                    initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.985, y: 10 }}
                    animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.99, y: -8 }}
                    transition={heroSpring}
                  />
                </AnimatePresence>
              </div>

              {/* RIGHT TEXT */}
              <div className="md:pl-6">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                    animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                    transition={{ ...heroSpring, stiffness: 240, damping: 28 }}
                    className="max-w-md"
                  >
                    <p className="text-sm text-gray-800">{member.name}</p>
                    <p className="mt-1 text-xs text-gray-500">{member.role}</p>

                    <p className="mt-8 text-lg font-medium leading-relaxed text-gray-900">
                      "{member.quote}"
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Mobile: show counter above text (since left rail is hidden) */}
                <p className="mt-8 text-xs tabular-nums text-gray-500 md:hidden">{counter}</p>
              </div>
            </div>

            {/* THUMB ROW (bottom-left like screenshot) */}
            <div className="grid grid-cols-1 md:grid-cols-[120px_360px_1fr] md:gap-16">
              <div className="hidden md:block" />
              <div className="flex items-end gap-6">
                {MEET_THE_TEAM.teamMembers.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="group"
                    aria-label={`Show ${m.name}`}
                  >
                    <motion.img
                      src={m.image}
                      alt={m.name}
                      draggable={false}
                      layoutId={`team-image-${i}`}
                      className={[
                        'h-24 w-24 object-cover',
                        active === i ? 'opacity-40' : 'opacity-100 hover:opacity-80',
                      ].join(' ')}
                      transition={heroSpring}
                    />
                  </button>
                ))}
              </div>


            </div>
          </div>


        </div>
      </LayoutGroup>
    </section>
  );
}
