"use client";

import {
  Bell,
  Cloud,
  Database,
  Monitor,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import {
  Background,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import { useEffect, useMemo, useState } from "react";

export type ArchitectureNodeId = "mobile" | "web" | "api" | "postgres" | "media" | "push";

export type ArchitectureNodeInfo = {
  id: ArchitectureNodeId;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
};

type ArchitectureNodeData = ArchitectureNodeInfo & {
  isMuted: boolean;
  onSelect: (id: ArchitectureNodeId) => void;
  onHover: (id: ArchitectureNodeId | null) => void;
};

type ArchitectureFlowNode = Node<ArchitectureNodeData, "architecture">;

type ArchitectureDiagramProps = {
  selectedId: ArchitectureNodeId;
  activeId: ArchitectureNodeId | null;
  onSelect: (id: ArchitectureNodeId) => void;
  onHover: (id: ArchitectureNodeId | null) => void;
};

const nodeInfo: ArchitectureNodeInfo[] = [
  {
    id: "mobile",
    title: "Flutter Mobile App",
    subtitle: "iOS / Android",
    description:
      "Member-facing Tempo application for workouts, nutrition, classes, bookings, progress, check-ins, and related gym experiences.",
    icon: Smartphone,
  },
  {
    id: "web",
    title: "Web Management Platform",
    subtitle: "Administration",
    description: "Management interface used to operate and administer Tempo's gym platform.",
    icon: Monitor,
  },
  {
    id: "api",
    title: "ASP.NET Core API",
    subtitle: "Backend",
    description:
      "Core backend layer responsible for API requests, application logic, and access to persistent application data.",
    icon: Server,
  },
  {
    id: "postgres",
    title: "PostgreSQL",
    subtitle: "Relational Database",
    description: "Primary relational data store for Tempo's application and operational data.",
    icon: Database,
  },
  {
    id: "media",
    title: "Media Delivery",
    subtitle: "Cloudflare",
    description:
      "Tempo's media-delivery path uses Cloudflare to improve access to application media and assets.",
    icon: Cloud,
  },
  {
    id: "push",
    title: "Push Notifications",
    subtitle: "Member Devices",
    description:
      "Notification delivery allows Tempo to communicate updates and relevant events to member devices.",
    icon: Bell,
  },
];

const edgeDefinitions: Array<[ArchitectureNodeId, ArchitectureNodeId]> = [
  ["mobile", "api"],
  ["web", "api"],
  ["api", "postgres"],
  ["api", "media"],
  ["api", "push"],
];

function ArchitectureNode({ id, data, selected }: NodeProps<ArchitectureFlowNode>) {
  const Icon = data.icon;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      aria-label={`${data.title}, ${data.subtitle}`}
      onClick={() => data.onSelect(id as ArchitectureNodeId)}
      onFocus={() => data.onHover(id as ArchitectureNodeId)}
      onBlur={() => data.onHover(null)}
      onMouseEnter={() => data.onHover(id as ArchitectureNodeId)}
      onMouseLeave={() => data.onHover(null)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          data.onSelect(id as ArchitectureNodeId);
        }
      }}
      className={`relative w-[190px] rounded-[7px] border px-4 py-3 text-left transition-[border-color,opacity,background-color,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${data.isMuted ? "border-white/[0.06] bg-[#0a1015]/70 opacity-40" : selected ? "-translate-y-0.5 border-accent/70 bg-[#101c27] shadow-[0_12px_32px_rgba(12,73,130,0.16)]" : "border-white/[0.12] bg-[#0c141b] hover:border-accent/50"}`}
    >
      <Handle type="target" position={Position.Top} className="!h-1 !w-1 !border-0 !bg-accent opacity-0" />
      <div className="flex items-start gap-3">
        <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[5px] border ${selected ? "border-accent/40 bg-accent/10 text-[#8dbfff]" : "border-white/[0.1] bg-white/[0.035] text-[#8295a7]"}`}>
          <Icon className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block text-[12px] font-medium leading-[1.25] text-[#e1eaf1]">{data.title}</span>
          <span className="mt-1 block text-[10px] leading-none text-[#8091a1]">{data.subtitle}</span>
        </span>
      </div>
      <Handle type="source" position={Position.Bottom} className="!h-1 !w-1 !border-0 !bg-accent opacity-0" />
    </div>
  );
}

const nodeTypes = { architecture: ArchitectureNode };

export function ArchitectureDiagram({ selectedId, activeId, onSelect, onHover }: ArchitectureDiagramProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const updateBreakpoint = () => setIsMobile(mediaQuery.matches);

    updateBreakpoint();
    mediaQuery.addEventListener("change", updateBreakpoint);
    return () => mediaQuery.removeEventListener("change", updateBreakpoint);
  }, []);

  const nodes = useMemo<ArchitectureFlowNode[]>(() => {
    const positions: Record<ArchitectureNodeId, { x: number; y: number }> = isMobile
      ? {
          mobile: { x: 90, y: 24 },
          web: { x: 90, y: 142 },
          api: { x: 90, y: 282 },
          postgres: { x: 90, y: 438 },
          media: { x: 90, y: 556 },
          push: { x: 90, y: 674 },
        }
        : {
          mobile: { x: 24, y: 90 },
          web: { x: 24, y: 350 },
          api: { x: 320, y: 216 },
          postgres: { x: 620, y: 350 },
          media: { x: 620, y: 490 },
          push: { x: 620, y: 630 },
        };

    const connectedIds = new Set<ArchitectureNodeId>();
    if (activeId) {
      edgeDefinitions.forEach(([source, target]) => {
        if (source === activeId) connectedIds.add(target);
        if (target === activeId) connectedIds.add(source);
      });
    }

    return nodeInfo.map((info) => ({
      id: info.id,
      type: "architecture",
      position: positions[info.id],
      selected: selectedId === info.id,
      draggable: false,
      data: {
        ...info,
        isMuted: activeId !== null && activeId !== info.id && !connectedIds.has(info.id),
        onSelect,
        onHover,
      },
    }));
  }, [activeId, isMobile, onHover, onSelect, selectedId]);

  const edges = useMemo<Edge[]>(
    () =>
      edgeDefinitions.map(([source, target]) => {
        const active = activeId === source || activeId === target;
        return {
          id: `${source}-${target}`,
          source,
          target,
          type: "smoothstep",
          markerEnd: { type: MarkerType.ArrowClosed, color: active ? "#5ea7ff" : "rgba(127, 151, 173, 0.42)" },
          style: {
            stroke: active ? "#5ea7ff" : "rgba(127, 151, 173, 0.3)",
            strokeWidth: active ? 1.5 : 1,
          },
        };
      }),
    [activeId],
  );

  return (
    <div className="h-[760px] rounded-[8px] border border-white/[0.1] bg-[#080f15] p-2 sm:h-[620px] lg:h-[620px]" aria-label="Tempo system architecture diagram">
      <ReactFlow
        key={isMobile ? "mobile" : "desktop"}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.16, minZoom: 0.6, maxZoom: 1.1 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        selectNodesOnDrag={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling
        proOptions={{ hideAttribution: false }}
        onNodeClick={(_, node) => onSelect(node.id as ArchitectureNodeId)}
        onNodeMouseEnter={(_, node) => onHover(node.id as ArchitectureNodeId)}
        onNodeMouseLeave={() => onHover(null)}
      >
        <Background color="rgba(125, 151, 173, 0.08)" gap={28} size={1} />
      </ReactFlow>
    </div>
  );
}

export { nodeInfo };
