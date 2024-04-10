/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      myDarkBlue:"#001020",
      myLessDarkBlue:"#3645FF",
      dangerRed:"#ff0000",
      myWhite:"#f0f4fa",
      lightGreen:"#7EC384",
    },
    extend: {

    },
  },
  plugins: [],
}