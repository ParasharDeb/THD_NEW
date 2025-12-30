"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LearnMoreButton() {
  return (
    <Link href="/learn-more" className="inline-flex px-4 py-2 rounded-full bg-bgcream items-center gap-x-2">
      <span className="text-lg font-normal text-white">Learn More</span>
      <ArrowRight color="white" />
    </Link>
  );
}
