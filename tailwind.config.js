const flowbite = require("flowbite-react/tailwind");
const withMT = require("@material-tailwind/react/utils/withMT");


/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [flowbite.content(),"./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [flowbite.plugin(),],
// };

 
module.exports = withMT({
  content: [flowbite.content(),"./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(),],
});