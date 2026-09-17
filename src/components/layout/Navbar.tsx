import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Navbar({ isCaseStudy = false }: { isCaseStudy?: boolean }) {
  return (
    <header className="relative z-20 border-b border-white/[0.08] bg-[#070b0e]/75">
      <div className="mx-auto flex h-[66px] w-full max-w-[1420px] items-center justify-between px-6 sm:px-8 lg:px-12">
        <a
          href={isCaseStudy ? "/" : "#home"}
          aria-label="Abdullah Sauafth — home"
          className="group flex h-9 w-9 items-center justify-start text-[16px] font-semibold tracking-[-0.08em] text-[#cfe5ff] transition-colors hover:text-white"
        >
          <span aria-hidden="true">AS</span>
        </a>

        <nav aria-label="Primary navigation" className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <ul className="flex items-center gap-9 text-[12px] text-muted">
            {siteConfig.navigation.map((item, index) => (
              <li key={item.label}>
                <a
                  href={isCaseStudy && index === 0 ? "/" : isCaseStudy && index === 1 ? "/#projects" : item.href}
                  className={`transition-colors hover:text-[#e9f2fc] ${index === 0 ? "text-[#e9f2fc]" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={isCaseStudy ? "/#contact" : "#contact"}
          className="group inline-flex h-10 items-center gap-2 rounded-[7px] border border-accent/80 bg-accent/[0.04] px-4 text-[12px] font-medium text-[#dbeeff] transition-all hover:bg-accent/[0.14] hover:shadow-[0_0_24px_rgba(47,140,255,0.12)]"
        >
          Let&apos;s Talk
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.8} />
        </a>
      </div>
    </header>
  );
}
