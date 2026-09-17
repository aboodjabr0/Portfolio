import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        surface: "var(--color-surface)",
        "surface-raised": "var(--color-surface-raised)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
      },
      boxShadow: {
        button: "0 10px 30px rgba(47, 140, 255, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
