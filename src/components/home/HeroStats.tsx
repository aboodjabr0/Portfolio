import { cn } from "@/lib/utils";

const stats = [
  { value: "4+", label: "Major Projects" },
  { value: "3", label: "Domains" },
  { value: "∞", label: "Things to build" },
];

export function HeroStats() {
  return (
    <div className="mt-8 flex gap-2.5">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={cn(
            "flex h-[54px] w-[84px] flex-col justify-center rounded-[6px] border border-white/[0.11] bg-[#0d141a]/75 px-3 backdrop-blur-sm sm:w-[91px]",
            index === 2 && "sm:w-[104px]",
          )}
        >
          <strong className="text-[17px] font-medium leading-none tracking-[-0.04em] text-[#e9f1f8]">{stat.value}</strong>
          <span className="mt-1 text-[9px] leading-none text-[#8c9aa8]">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
