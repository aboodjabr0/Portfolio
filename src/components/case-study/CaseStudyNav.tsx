"use client";

import { useEffect, useState } from "react";

type CaseStudySection = {
  label: string;
  href: string;
  implemented?: boolean;
};

const defaultSections: CaseStudySection[] = [
  { label: "Overview", href: "#overview", implemented: true },
  { label: "Architecture", href: "#architecture", implemented: true },
  { label: "Backend", href: "#backend", implemented: true },
  { label: "Database", href: "#database", implemented: true },
  { label: "Infrastructure", href: "#infrastructure", implemented: true },
  { label: "Challenges", href: "#challenges", implemented: true },
];

export function CaseStudyNav({ projectName, sections = defaultSections }: { projectName: string; sections?: CaseStudySection[] }) {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const sectionIds = sections.map((section) => section.href.slice(1));
    if (sectionIds.includes(hash)) setActiveSection(hash);

    const sectionsToObserve = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-18% 0px -58% 0px", threshold: [0.1, 0.35, 0.7] },
    );

    sectionsToObserve.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label={`${projectName} case study sections`} className="border-b border-white/[0.08] bg-[#090f14]">
      <div className="mx-auto w-full max-w-[1420px] overflow-x-auto px-6 sm:px-8 lg:px-12">
        <ul className="flex min-w-max items-center gap-6 sm:gap-8">
          {sections.map((section) => {
            const sectionId = section.href.slice(1);
            return (
              <li key={section.label}>
                {section.implemented ? (
                  <a
                    href={section.href}
                    aria-current={activeSection === sectionId ? "page" : undefined}
                    onClick={() => setActiveSection(sectionId)}
                    className={`relative inline-flex h-14 items-center text-[11px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${activeSection === sectionId ? "text-[#edf3f8] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-accent" : "text-[#81909f] hover:text-[#b9c5d0]"}`}
                  >
                    {section.label}
                  </a>
                ) : (
                  <span aria-disabled="true" className="inline-flex h-14 items-center text-[11px] text-[#81909f]">
                    {section.label}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
