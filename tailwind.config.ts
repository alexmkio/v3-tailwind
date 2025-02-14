import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: "red",
      },
      screens: {
        xl: "480px",
      }
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
  corePlugins: {
    float: false,
  },
} satisfies Config;
