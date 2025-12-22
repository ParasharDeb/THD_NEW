import { BUTTON } from '../constants';

export default function LearnMoreButton() {
  return (
    <span className="flex items-center justify-center bg-bgcream rounded-full">
      <button className="group relative h-12 w-48 overflow-hidden rounded-full font-bold uppercase cursor-pointer">

        {/* Background expansion */}
        <span className="absolute inset-0 left-0 w-12 rounded-full bg-accent transition-all duration-500 ease-[cubic-bezier(0.65,0,.076,1)] group-hover:w-full" />

        {/* Arrow lane (FIXED WIDTH) */}
        <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center">
          <span className="arrow transition-transform duration-500 group-hover:translate-x-2" />
        </span>

        {/* Text lane */}
        <span className="relative z-10 ml-5 flex h-full items-center justify-center text-[#282936] transition-colors duration-500 group-hover:text-white">
          {BUTTON.learnMore}
        </span>

      </button>
    </span>
  );
}
