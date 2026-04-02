"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, focusRing } from "@/lib/constants";

const linkClass =
  "relative inline-block text-[15px] text-[#8E8E9A] transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-[width] after:duration-200 after:ease-out hover:after:w-full";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const barClass = scrolled
    ? "backdrop-blur-md bg-[rgba(10,10,12,0.85)] transition-all duration-300"
    : "bg-transparent transition-all duration-300";

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full ${barClass}`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <Link
            href="/"
            className={`gradient-text text-[22px] font-bold ${focusRing} rounded-sm`}
          >
            SNC
          </Link>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className={`${linkClass} ${focusRing} rounded-sm`}>
                {item.label}
              </Link>
            ))}
            <Link
              href="#offer"
              className={`gradient-bg rounded-full px-5 py-2.5 text-[14px] font-medium text-white transition hover:opacity-90 ${focusRing} ring-offset-base`}
            >
              Get Demo
            </Link>
          </nav>

          <button
            type="button"
            className={`rounded-md p-2 text-primary md:hidden ${focusRing}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <Menu className="h-6 w-6" aria-hidden />
          </button>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] flex flex-col backdrop-blur-md md:hidden bg-[#0A0A0C]/95"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between px-6 py-4">
            <span className="gradient-text text-[22px] font-bold">SNC</span>
            <button
              type="button"
              className={`rounded-md p-2 text-primary ${focusRing}`}
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" aria-hidden />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-8 px-6" aria-label="Mobile">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[18px] text-[#8E8E9A] ${focusRing} rounded-sm`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#offer"
              className={`gradient-bg rounded-full px-8 py-3 text-[15px] font-medium text-white ${focusRing} ring-offset-base`}
              onClick={() => setOpen(false)}
            >
              Get Demo
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
