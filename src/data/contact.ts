import { Github, type LucideIcon } from "lucide-react";

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    value: "github.com/aboodjabr0",
    href: "https://github.com/aboodjabr0",
    icon: Github,
    external: true,
  },
];
