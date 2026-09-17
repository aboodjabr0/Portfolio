"use client";

import { useState } from "react";
import { ArchitectureDiagram, nodeInfo, type ArchitectureNodeId } from "@/components/case-study/ArchitectureDiagram";

const howItWorks = [
  "Tempo clients send requests to the ASP.NET Core API.",
  "The backend processes application logic and coordinates access to persistent data.",
  "PostgreSQL stores the platform's relational application data.",
  "Media is delivered through Tempo's media infrastructure using Cloudflare.",
  "Push notifications allow the platform to communicate with member devices.",
];

export function ArchitectureSection() {
  const [selectedId, setSelectedId] = useState<ArchitectureNodeId>("api");
  const [hoveredId, setHoveredId] = useState<ArchitectureNodeId | null>(null);
  const selectedNode = nodeInfo.find((node) => node.id === selectedId) ?? nodeInfo[2];

  return (
    <section id="architecture" aria-labelledby="architecture-heading" className="mx-auto w-full max-w-[1420px] border-t border-white/[0.06] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="max-w-[700px]">
        <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">02 / ARCHITECTURE</p>
        <h2 id="architecture-heading" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
          System Architecture
        </h2>
        <p className="mt-6 max-w-[680px] text-[15px] leading-[1.75] text-[#9aa8b6]">
          Tempo uses a client-server architecture centered around an ASP.NET Core API. The mobile application and management platform communicate with the backend, which handles application logic and data access while PostgreSQL provides persistent relational storage. Media delivery and push notifications are handled through supporting infrastructure.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(270px,0.75fr)] lg:items-start lg:gap-10">
        <div>
          <ArchitectureDiagram
            selectedId={selectedId}
            activeId={hoveredId ?? selectedId}
            onSelect={setSelectedId}
            onHover={setHoveredId}
          />
          <p className="mt-3 px-1 text-[10px] text-[#687888]">Select a component to inspect its role in the platform.</p>
        </div>

        <aside className="rounded-[8px] border border-white/[0.1] bg-[#0a1015]">
          <div className="border-b border-white/[0.08] p-5 sm:p-6">
            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#7f8e9e]">Selected component</p>
            <h3 className="mt-3 text-[18px] font-medium tracking-[-0.035em] text-[#e5edf3]">{selectedNode.title}</h3>
            <p className="mt-1 text-[11px] text-[#7fa9d4]">{selectedNode.subtitle}</p>
            <p className="mt-4 text-[13px] leading-[1.7] text-[#aebbc7]">{selectedNode.description}</p>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#7f8e9e]">How it works</p>
            <ol className="mt-4 space-y-4">
              {howItWorks.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="font-mono text-[10px] text-[#5b91c3]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[12px] leading-[1.55] text-[#aebbc7]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </section>
  );
}
