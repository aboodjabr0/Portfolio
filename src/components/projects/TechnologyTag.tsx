export function TechnologyTag({ children, size = "default" }: { children: string; size?: "default" | "hero" }) {
  const isHero = size === "hero";

  return (
    <span className={`${isHero ? "rounded-[5px] border-white/[0.15] px-2.5 py-1.5 text-[10px] text-[#aab8c6]" : "rounded-[4px] border-white/[0.1] px-2 py-1 text-[9px] text-[#9baaba]"} border bg-white/[0.025] font-medium leading-none`}>
      {children}
    </span>
  );
}
