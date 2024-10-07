import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',  // Custom primary color
        secondary: '#FBBF24', // Custom secondary color
        // You can define more colors as needed
      },
      textColor: {
        primary: '#1D4ED8', // Set a global text color
        secondary: '#FBBF24', // Set another global text color
      },
    },
  },
  plugins: [],
};
export default config;


