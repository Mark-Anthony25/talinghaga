import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "#12140d",
        "surface-2": "#1e2018",
        "surface-3": "#292b22",
        "surface-4": "#34362d",
        background: "#12140d",
        primary: "#c8c8b0",
        tertiary: "#f0bd8b",
        olive: "#556B2F",
        vellum: "#F5F5DC",
        "on-surface": "#e3e3d6",
        "on-surface-variant": "#c5c8b8",
        outline: "#8f9284",
        "outline-variant": "#45483c"
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem"
      },
      fontFamily: {
        headline: ["Newsreader", "serif"],
        body: ["Manrope", "sans-serif"],
        label: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        "soft-surface": "0 24px 48px rgba(18,20,13,0.18)"
      }
    }
  },
  plugins: []
};

export default config;
