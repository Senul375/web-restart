"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { hero, focusRing } from "@/lib/constants";

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" as const },
};

export function Hero() {
  return (
    <motion.section
      className="relative flex min-h-screen items-center overflow-hidden bg-base pt-20 md:pt-24"
      {...sectionMotion}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.08),transparent_70%)]" />

      <div className="dot-grid absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 px-6 py-[80px] md:grid-cols-2 md:py-[140px]">
        <div>
          <p className="mb-4 text-[12px] uppercase tracking-[0.1em] text-[#8E8E9A]">
            {hero.eyebrow}
          </p>
          <h1 className="text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-primary sm:text-[52px] lg:text-[64px]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[520px] text-[18px] leading-[1.75] text-[#8E8E9A]">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#offer"
              className={`gradient-bg inline-flex items-center justify-center rounded-full px-8 py-4 text-center text-[16px] font-medium text-white transition hover:opacity-90 ${focusRing} ring-offset-base`}
            >
              {hero.primaryCta}
            </Link>
            <Link
              href="#how-it-works"
              className={`inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-center text-[16px] text-white transition hover:bg-white/5 ${focusRing} ring-offset-base`}
            >
              {hero.secondaryCta}
            </Link>
          </div>
          <p className="mt-6 text-[13px] text-[#8E8E9A]">{hero.trustLine}</p>
        </div>

        <div className="relative flex h-[400px] w-full items-center justify-center sm:h-[500px]">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ y: [0, -16, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="absolute left-[15%] top-[10%] h-[320px] w-[320px] rounded-full bg-[#4F46E5] opacity-50 blur-[80px]"
              aria-hidden
            />
            <div
              className="absolute bottom-[10%] right-[10%] h-[280px] w-[280px] rounded-full bg-[#7C3AED] opacity-40 blur-[80px]"
              aria-hidden
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
