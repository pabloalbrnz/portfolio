/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        stretch: "Stretch Pro, sans-serif",
        source: "Source Code Pro, monospace",
      },
    },
  },
  plugins: [],
};
