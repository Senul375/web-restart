"use client";

import { motion } from "framer-motion";
import { Inbox, Zap, Filter, RefreshCw } from "lucide-react";
import { credibility } from "@/lib/constants";

const icons = [Inbox, Zap, Filter, RefreshCw];

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" as const },
};

export function Credibility() {
  return (
    <motion.section
      className="bg-base py-[80px] md:py-[140px]"
      {...sectionMotion}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center text-[32px] font-bold tracking-[-0.01em] text-primary md:text-[44px]">
          {credibility.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-[640px] text-center text-[17px] leading-[1.75] text-[#8E8E9A]">
          {credibility.intro}
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {credibility.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div
                key={card.title}
                className="rounded-[16px] border border-white/[0.08] bg-[#111116] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(79,70,229,0.15)]"
              >
                <div className="gradient-bg w-fit rounded-lg p-2.5">
                  <Icon className="h-[18px] w-[18px] text-white" aria-hidden />
                </div>
                <h3 className="mt-4 text-[17px] font-semibold text-[#F5F5F7]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#8E8E9A]">
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-16 text-center text-[17px] italic leading-[1.75] text-[#8E8E9A]">
          {credibility.closing}
        </p>
      </div>
    </motion.section>
  );
}
