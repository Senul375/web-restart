"use client";

import { motion } from "framer-motion";
import { demonstration } from "@/lib/constants";

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" as const },
};

export function Demonstration() {
  return (
    <motion.section
      id="how-it-works"
      className="bg-base py-[80px] md:py-[140px]"
      {...sectionMotion}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center text-[32px] font-bold tracking-[-0.01em] text-primary md:text-[44px]">
          {demonstration.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-[640px] text-center text-[17px] leading-[1.75] text-[#8E8E9A]">
          {demonstration.intro}
        </p>

        <div className="relative mx-auto mt-16 max-w-[560px]">
          <div
            className="absolute bottom-0 left-[19px] top-0 w-[3px] bg-gradient-to-b from-[#4F46E5] to-[#7C3AED]"
            aria-hidden
          />

          <ol className="relative list-none space-y-0 p-0">
            {demonstration.steps.map((label, index) => (
              <motion.li
                key={label}
                className="mb-7 flex items-center gap-5 last:mb-0"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                viewport={{ once: true, margin: "-80px" }}
              >
                <span
                  className="gradient-bg relative z-10 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full text-[15px] font-bold text-white"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <span className="text-[17px] font-medium text-[#F5F5F7]">
                  {label}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>

        <p className="mt-12 text-center text-[17px] italic leading-[1.75] text-[#8E8E9A]">
          {demonstration.closing}
        </p>
      </div>
    </motion.section>
  );
}
