/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{tsx,ts,js,html,htm,css,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins","sans-serif"]
      },
      colors: {
        lightGray: "#272727",
        darkGray: "#11101d",
        muted: "#ffffffb3"
      }
    },
  },
  plugins: [],
}

/* 
font-family: 'Arimo', sans-serif;
font-family: 'Inter', sans-serif;
font-family: 'Nunito Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: 'Sora', sans-serif;
font-family: 'Work Sans', sans-serif; */
