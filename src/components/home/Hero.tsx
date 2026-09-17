import { HeroContent } from "@/components/home/HeroContent";
import { HeroVisual } from "@/components/home/HeroVisual";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative min-h-[calc(100svh-66px)] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_47%,rgba(28,75,122,0.11),transparent_27%),linear-gradient(180deg,rgba(255,255,255,0.012),transparent_22%)]" />
      <div className="relative mx-auto flex min-h-[calc(100svh-66px)] w-full max-w-[1420px] items-start px-6 pb-16 pt-[12vh] sm:px-8 sm:pt-[13vh] lg:items-center lg:px-12 lg:pt-0">
        <HeroContent />
        <HeroVisual />
        <p className="absolute bottom-7 left-6 font-mono text-[9px] tracking-[0.2em] text-[#677687] sm:left-8 lg:left-12">
          SCROLL <span className="ml-1 text-[#8da1b6]">↓</span>
        </p>
      </div>
    </section>
  );
}
