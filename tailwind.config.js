/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette (from Culinary Arts Commission guidelines)
        orange: "#F48820",
        amber: "#E89242",
        terracotta: "#DD6548",
        teal: "#84ACA7",
        "teal-light": "#7FAEA7",
        navy: "#182935",
        plum: "#621D49",
        crimson: "#AB223E",
        // Soft secondary tints
        sage: "#DDE5D7",
        lavender: "#D1CFDC",
        blush: "#E5DADF",
        ink: "#231F20",
        sand: "#F7F4EF",
      },
      fontFamily: {
        // IBM Plex Sans Arabic for headings, Tahoma fallback for body
        heading: ["var(--font-plex-arabic)", "Tahoma", "sans-serif"],
        body: ["Tahoma", "var(--font-plex-arabic)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
