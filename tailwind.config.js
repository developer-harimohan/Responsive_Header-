// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        md: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        average: `'Average Sans', sans-serif`,
      },
    },
  },
  plugins: [],
};
