const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Archivo", ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      // or have default horizontal padding
      padding: "1rem",

      screens: {
        DEFAULT : "1440px",
      },
    },
  },
  plugins: [],
};
