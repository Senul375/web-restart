"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/constants";

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" as const },
};

export function Process() {
  return (
    <motion.section
      id="process"
      className="bg-base py-[80px] md:py-[140px]"
      {...sectionMotion}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center text-[32px] font-bold tracking-[-0.01em] text-primary md:text-[44px]">
          {process.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-[560px] text-center text-[17px] leading-[1.75] text-[#8E8E9A]">
          {process.intro}
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step) => (
            <div
              key={step.num}
              className="rounded-[16px] border border-white/[0.08] bg-[#111116] p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(79,70,229,0.15)]"
            >
              <p className="gradient-text mb-4 text-[12px] font-bold uppercase tracking-[0.1em]">
                {step.num}
              </p>
              <h3 className="mb-3 text-[18px] font-bold text-[#F5F5F7]">
                {step.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#8E8E9A]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
