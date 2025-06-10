import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// ✅ ADD typography plugin
const typography = require("@tailwindcss/typography");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1100px',
        '2xl': '1440px',
      },
    },
    extend: {
      fontFamily: {
        readex: "var(--font-readex)",
        merri: "var(--font-merriweather)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // ✅ Add Medium-style prose overrides
      typography: {
        DEFAULT: {
          css: {
            color: "#292929",
            a: {
              color: "#1a8917",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            strong: { color: "#111" },
            h1: { fontWeight: "700", fontSize: "2.25rem" },
            h2: { fontWeight: "700", fontSize: "1.75rem" },
            h3: { fontWeight: "600", fontSize: "1.5rem" },
            blockquote: {
              fontStyle: "italic",
              color: "#555",
              borderLeftColor: "#1a8917",
              paddingLeft: "1rem",
            },
            img: {
              borderRadius: "0.5rem",
              margin: "1.5rem auto",
            },
            code: {
              backgroundColor: "#f3f4f6",
              padding: "0.2em 0.4em",
              borderRadius: "0.3rem",
              fontSize: "0.875em",
            },
          },
        },
      },
    },
  },
  plugins: [
    typography, // ✅ REGISTER the plugin
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
