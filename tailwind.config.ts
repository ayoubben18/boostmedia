import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["bumblebee", "synthwave"],
  },

  theme: {
    extend: {
      screens: {
        xs: "450px", // Define the xs breakpoint
        sm: "640px", // Default, uncomment if you're overriding
        md: "768px", // Default, uncomment if you're overriding
        lg: "1024px", // Default, uncomment if you're overriding
        xl: "1280px", // Default, uncomment if you're overriding
        "2xl": "1536px", // Default, uncomment if you're overriding
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
