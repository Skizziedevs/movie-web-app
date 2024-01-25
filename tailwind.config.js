/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkishred: "#FC4747",
        black: "#10141E",
        smokeblue: "#5A698F",
        smokeblack: "#161D2F",
        white: "#FFFFFF",
      },
      screens: {
        sm: "375px", // Mobile
        md: "768px", // Tablet

        lg: "1440px", // large
      },
    },
  },
  plugins: [],
};
