"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { offer, focusRing } from "@/lib/constants";

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" as const },
};

export function Offer() {
  return (
    <motion.section
      id="offer"
      className="bg-base py-[80px] md:py-[140px]"
      {...sectionMotion}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center text-[32px] font-bold tracking-[-0.01em] text-primary md:text-[44px]">
          {offer.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-[640px] text-center text-[17px] leading-[1.75] text-[#8E8E9A]">
          {offer.intro}
        </p>

        <div className="relative mx-auto mt-16 max-w-[680px]">
          <div className="relative overflow-hidden rounded-[16px] border border-white/[0.08] bg-[#111116] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(79,70,229,0.15)]">
            <div
              className="pointer-events-none absolute left-0 right-0 top-0 h-[200px] bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.06),transparent)]"
              aria-hidden
            />

            <div className="relative p-10">
              <h3 className="mb-3 text-[22px] font-bold text-[#F5F5F7]">
                {offer.cardTitle}
              </h3>
              <p className="mb-8 text-[16px] text-[#8E8E9A]">{offer.cardBody}</p>

              <p className="mb-4 text-[12px] uppercase tracking-[0.1em] text-[#8E8E9A]">
                {offer.includesLabel}
              </p>
              <ul className="space-y-3">
                {offer.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="gradient-bg inline-flex shrink-0 rounded-md p-0.5">
                      <CheckCircle2
                        className="h-3.5 w-3.5 text-white"
                        aria-hidden
                        strokeWidth={2}
                      />
                    </span>
                    <span className="text-[15px] text-[#F5F5F7]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="my-8 border-t border-white/10" />

              <p className="mb-2 text-[15px] text-[#8E8E9A]">{offer.pricingLine}</p>
              <p className="mb-8 text-[13px] text-[#8E8E9A]">{offer.addon}</p>

              <Link
                href="#final-cta"
                className={`block w-full rounded-[12px] border-none py-4 text-center text-[17px] font-semibold text-white transition-opacity duration-200 ease-in-out hover:opacity-90 ${focusRing} ring-offset-base`}
                style={{
                  background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                }}
              >
                {offer.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
