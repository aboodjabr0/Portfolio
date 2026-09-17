"use client";

import { useEffect, useState } from "react";

const sections = ["overview", "request-flow", "contributions", "challenges"] as const;

const labels: Record<(typeof sections)[number], string> = {
  overview: "Overview",
  "request-flow": "Request Flow",
  contributions: "Contributions",
  challenges: "Challenges",
};

export function WebservNav() {
  const [activeSection, setActiveSection] = useState<(typeof sections)[number]>("overview");

  useEffect(() => {
    const hash = window.location.hash.slice(1) as (typeof sections)[number];
    if (sections.includes(hash)) setActiveSection(hash);

    const sectionsToObserve = sections
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection && sections.includes(visibleSection.target.id as (typeof sections)[number])) {
          setActiveSection(visibleSection.target.id as (typeof sections)[number]);
        }
      },
      { rootMargin: "-18% 0px -58% 0px", threshold: [0.1, 0.35, 0.7] },
    );

    sectionsToObserve.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Webserv case study sections" className="border-b border-white/[0.08] bg-[#090f14]">
      <div className="mx-auto w-full max-w-[1420px] overflow-x-auto px-6 sm:px-8 lg:px-12">
        <ul className="flex min-w-max items-center gap-6 sm:gap-8">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                aria-current={activeSection === section ? "page" : undefined}
                onClick={() => setActiveSection(section)}
                className={`relative inline-flex h-14 items-center text-[11px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${activeSection === section ? "text-[#edf3f8] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-accent" : "text-[#81909f] hover:text-[#b9c5d0]"}`}
              >
                {labels[section]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
