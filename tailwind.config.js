const flowbite = require("flowbite-react/tailwind");
import { mtConfig } from "@material-tailwind/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [flowbite.content(), "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      hambra: ["Hammersmith One", "sans-serif"],
      signika: ["Signika", "sans-serif"],
    },
  },
  plugins: [flowbite.plugin()],
};
