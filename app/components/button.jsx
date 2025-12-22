import { ArrowRight } from "lucide-react";

export default function LearnMoreButton() {
  return (
    <button className="px-4 py-2 rounded-full bg-bgcream flex justify-center items-center gap-x-2">
      <span className="text-lg font-normal text-white">Learn More</span>
      <ArrowRight color="white" />
    </button>
  );
}
