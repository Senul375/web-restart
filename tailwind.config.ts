import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0C",
        surface: "#111116",
        "border-subtle": "rgba(255, 255, 255, 0.08)",
        primary: "#F5F5F7",
        muted: "#8E8E9A",
        "accent-blue": "#4F46E5",
        "accent-purple": "#7C3AED",
      },
    },
  },
  plugins: [],
};

export default config;
