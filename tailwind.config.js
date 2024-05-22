const withMT = require("@material-tailwind/react/utils/withMT");

// tailwind.config.js
module.exports =withMT( {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this line based on your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});