/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "ghost-bg": "#0e0f13",
        "ghost-panel": "#1a1d24",
        "ghost-border": "#2a2f3a",
        "ghost-amber": "#f5c518",
        "ghost-teal": "#22d3ee",
        "ghost-lime": "#84cc16",
        "ghost-red": "#ef4444",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
        display: ["Orbitron", "sans-serif"],
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "ping-slow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(1.5)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(245,197,24,0.7)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 0 6px rgba(245,197,24,0)" },
        },
      },
      animation: {
        scan: "scan 3s linear infinite",
        "ping-slow": "ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        "pulse-dot": "pulse-dot 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
