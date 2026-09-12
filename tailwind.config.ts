import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#f4f6f8",
        panel: "#ffffff",
        line: "rgba(11,18,32,0.10)",
        mist: "#5c6578",
        paper: "#0b1220",
        cobalt: "#2563eb",
        gold: "#2563eb",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 18px 50px rgba(37,99,235,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
