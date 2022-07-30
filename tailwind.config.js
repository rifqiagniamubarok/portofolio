/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
        bootstrap: "#8411F6",
        tailwind: "#36B7F0",
        react: "#5ED3F3",
        node: "#60975B",
        golang: "#00A7D0",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
