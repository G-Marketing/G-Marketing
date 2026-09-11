import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07090e",
        panel: "#10141c",
        line: "rgba(244,246,250,0.12)",
        mist: "#9aa3b5",
        paper: "#f4f6fa",
        cobalt: "#3d7cff",
        gold: "#d4a853",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(61,124,255,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
