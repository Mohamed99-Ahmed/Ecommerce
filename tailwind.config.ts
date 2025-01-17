import type { Config } from "tailwindcss";

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
        '4d': '2px 2px 2px #000, 4px 4px 4px #333, 6px 6px 6px #666, 8px 8px 8px #999',
      },
    },
  },
  plugins: [],
} satisfies Config;
