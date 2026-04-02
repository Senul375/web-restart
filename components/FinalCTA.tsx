"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { finalCta, focusRing } from "@/lib/constants";

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" as const },
};

export function FinalCTA() {
  return (
    <motion.section
      id="final-cta"
      className="relative overflow-hidden bg-base py-[80px] md:py-[140px]"
      {...sectionMotion}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
        aria-hidden
      >
        <div
          className="h-[700px] w-[700px] rounded-[9999px]"
          style={{
            background:
              "radial-gradient(circle, rgba(79,70,229,0.25), transparent 65%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <h2 className="relative z-10 mx-auto max-w-[640px] text-[36px] font-bold leading-tight tracking-[-0.01em] text-primary sm:text-[44px] md:text-[52px]">
          {finalCta.heading}
        </h2>
        <p className="relative z-10 mx-auto mt-6 max-w-[480px] text-[17px] leading-[1.75] text-[#8E8E9A]">
          {finalCta.body}
        </p>
        <Link
          href="#offer"
          className={`relative z-10 mt-10 inline-flex rounded-full border-none text-[18px] font-semibold text-white transition-opacity duration-200 ease-in-out hover:opacity-90 ${focusRing} ring-offset-base`}
          style={{
            background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
            padding: "20px 56px",
          }}
        >
          {finalCta.cta}
        </Link>
        <p className="relative z-10 mt-5 text-[14px] text-amber-400/70">
          {finalCta.subtext}
        </p>
      </div>
    </motion.section>
  );
}
