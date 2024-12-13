/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nexa: ['"Nexa"', "sans-serif"],
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
        "animate-hide": {
          from: { opacity: "1", visibility: "visible" },
          to: { opacity: "0", visibility: "hidden", display: "none" },
        },
        "animate-show": {
          from: { opacity: "0", visibility: "hidden" },
          to: { opacity: "1", visibility: "visible" },
        },
        "spin-counterclockwise": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
       


      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        hide: "animate-hide 0.3s ease-out forwards",
        show: "animate-show 0.3s ease-in forwards",
        "spin-counterclockwise": "spin-counterclockwise 1s linear infinite",
      },
      boxShadow: {
        "market-card": "0px 1px 10px 0px #0000001A",
        "tab-card": "0px 1px 1px 0px #0000001A",
        tooltip: "0px 12px 16px -4px #10182814",
      },
    },
  },
  plugins: [],
};
