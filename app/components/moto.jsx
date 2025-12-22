"use client";

import { MOTO } from "../constants";

export default function MotoSection() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden min-h-fit p-4 lg:p-10 bg-bgcream">
      <div className="w-full">
        <h2
          className="text-[2rem] font-serif text-white text-center font-medium mb-6 drop-shadow w-full mx-auto max-w-fit"
          style={{ textShadow: "0 2px 10px rgba(60,60,80,.15)" }}
        >
          {MOTO.title}
        </h2>
        <div className="flex gap-6 md:gap-8 justify-center w-full max-w-5xl px-4 flex-wrap mx-auto">
          {MOTO.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md px-6 py-3 flex-1 min-w-60 max-w-[310px] text-center"
            >
              <h3 className="text-lg md:text-xl font-serif font-semibold mb-2 text-textGreen">
                {card.title}
              </h3>
              <p className="text-sm text-neutral-400 text-textGreen font-light">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
