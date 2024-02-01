/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        haiti: {
          50: "#f2eeff",
          100: "#e7e0ff",
          200: "#d4c6ff",
          300: "#bda4fd",
          400: "#ab80f9",
          500: "#a061f3",
          600: "#9644e7",
          700: "#8636cc",
          800: "#6b2fa4",
          900: "#562d82",
          950: "#29153c",
        },
        "bleached-cedar": {
          50: "#f0f1fd",
          100: "#e5e6fa",
          200: "#cfd1f6",
          300: "#b2b2ef",
          400: "#9892e7",
          500: "#8678dc",
          600: "#765dce",
          700: "#664db5",
          800: "#534192",
          900: "#453a75",
          950: "#211b36",
        },
        riptide: {
          50: "#f1fcf9",
          100: "#d1f6ef",
          200: "#a3ece1",
          300: "#83e0d5",
          400: "#3fc2b6",
          500: "#26a69d",
          600: "#1c8580",
          700: "#1a6b67",
          800: "#195654",
          900: "#194846",
          950: "#092a2a",
        },
      },
      spacing: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        140: "40rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
