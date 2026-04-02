import { footer } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-[1200px] flex-row flex-wrap items-center justify-between gap-4 px-6">
        <span className="gradient-text text-[18px] font-bold">SNC</span>
        <p className="text-[13px] text-[#8E8E9A] opacity-60">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
