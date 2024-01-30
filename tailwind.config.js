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
      },
      spacing: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        140: "40rem",
      },
    },
  },
  plugins: [],
};
