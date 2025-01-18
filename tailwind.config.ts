import type { Config } from "tailwindcss";
const textshadow = require('tailwindcss-textshadow');
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true, // Center the container
      padding: '1rem', // Default padding for all screens
      screens: {
        sm: '600px', // Full width on small screens
        md: '700px', // Custom width on medium screens
        lg: '990px', // Custom width on large screens
        xl: '1050px', // Custom width on extra-large screens
        '2xl': '1200px', // Custom width on 2XL screens
      }},
    extend: {
      colors: {
        sColor:"#FF4252",
        mColor:"#33a0ff"
        
      },
      textShadow: {
        '4d': '1px 0px 2px #000, 0px 1px 2px #000, -1px 0px 2px #000, 0px -1px 2px #000',
      },
      boxShadow:{
        topShadow:"0 -1px 2px #eadfdf"
      }
    },
  },
  plugins: [textshadow],
} satisfies Config;
