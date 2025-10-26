'use client';

import { MOTO } from '../constants';

export default function MotoSection() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden min-h-[400px]">
      {/* Banner bar at very top */}
      <div className="w-full py-2 bg-accent whitespace-nowrap text-xs text-textGreen tracking-wide font-medium overflow-x-auto border-b border-accent" style={{ letterSpacing: '.09em' }}>
        {Array.from({length: 10}).map((_, idx) => (
          <span key={idx} className="inline-block mx-2">{MOTO.bannerText}</span>
        ))}
      </div>

      {/* Background image (you can use an actual image or a temporary gradient) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          zIndex: 0,
          background: "linear-gradient(to bottom left, #E3DFC6 60%, #7EA8A6 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      {/* Blur overlay (optional - for effect matching the screenshot) */}
      <div className="absolute inset-0 bg-black/15" style={{backdropFilter:'blur(0.5px)', zIndex: 1}} />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center pt-8 pb-12">
        <h2 className="text-[2rem] font-serif text-white font-normal mb-5 drop-shadow" style={{textShadow:'0 2px 10px rgba(60,60,80,.15)'}}>
          {MOTO.title}
        </h2>
        <div className="flex gap-6 md:gap-8 justify-center w-full max-w-5xl px-4">
          {MOTO.cards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md px-6 py-3 flex-1 min-w-[240px] max-w-[310px] text-center">
              <h3 className="text-lg md:text-xl font-serif font-semibold mb-2 text-textGreen">
                {card.title}
              </h3>
              <p className="text-[13px] leading-snug text-textGreen font-light">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
