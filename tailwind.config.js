/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sl-primary": "hsl(75, 94%, 57%)",
        // neutral
        "sl-white": "hsl(0, 0%, 100%)",
        "sl-grey": "hsl(0, 0%, 20%)",
        "sl-dark-grey": "hsl(0, 0%, 12%)",
        "sl-off-black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        body: "14px",
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      screens: {
        desktop: "1440px",
        mobile: "375px",
      },
    },
  },
  plugins: [],
};
