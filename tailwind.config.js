const flowbite = require("flowbite-react/tailwind");
const withMT = require("@material-tailwind/react/utils/withMT");
import { mtConfig } from "@material-tailwind/react";


/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [flowbite.content(),"./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [flowbite.plugin(),],
// };

 
module.exports = withMT({
  content: [
    flowbite.content(),
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      hambra: ['Hammersmith One', 'sans-serif'],
      signika: ['Signika', 'sans-serif'],
    }
  },
  plugins: [flowbite.plugin()],
});