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
        "green-custom": "#e2f4e8",
        "yellow-custom": "#c9a74d",
        "blue-custom": "#56cfe1",
      },
      fontSize: {
        "2xs": "0.625rem",
        "2.5xl": "1.6875rem",
      },
      spacing: {
        1.25: "0.3125rem",
        4.5: "1.125rem",
        8.5: "2.125rem",
        18: "4.5rem",
        70: "17.5rem",
        88: "22rem",
      },
      width: {
        88: "22rem",
        200: "50rem",
      },
      borderWidth: {
        1: "1px",
        6: "6px",
      },
      height: {
        70: "17.5rem",
      },
      maxHeight: {
        76: "19rem",
      },
      margin: {
        12.5: "3.125rem",
      },
    },
  },
  plugins: [],
};
export default config;
