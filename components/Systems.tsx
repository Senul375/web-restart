"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { systems } from "@/lib/constants";

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" as const },
};

export function Systems() {
  return (
    <motion.section
      id="systems"
      className="bg-base py-[80px] md:py-[140px]"
      {...sectionMotion}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center text-[32px] font-bold tracking-[-0.01em] text-primary md:text-[44px]">
          {systems.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-[600px] text-center text-[17px] leading-[1.75] text-[#8E8E9A]">
          {systems.intro}
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {systems.cards.map((card) => (
            <div
              key={card.title}
              className="gradient-border-top relative overflow-hidden rounded-[16px] border border-white/[0.08] bg-[#111116] p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(79,70,229,0.15)]"
            >
              <h3 className="mb-3 text-[20px] font-bold text-[#F5F5F7]">
                {card.title}
              </h3>
              <p className="mb-6 text-[15px] text-[#8E8E9A]">{card.body}</p>
              <ul className="space-y-3">
                {card.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="gradient-bg inline-flex shrink-0 rounded-md p-0.5">
                      <CheckCircle2
                        className="h-3.5 w-3.5 text-white"
                        aria-hidden
                        strokeWidth={2}
                      />
                    </span>
                    <span className="text-[14px] text-[#F5F5F7]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
