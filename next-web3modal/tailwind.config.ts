import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    Curious: {
      primary: "#90edeb",
      secondary: "#e8ca7a",
      accent: "#8e8ee5",
      neutral: "#292b32",
      base: "#3f3c44",
      info: "#5582dd",
      success: "#1b794d",
      warning: "#ae8104",
      error: "#ec6755",
    },
    Stupendous: {
      primary: "#94f7ba",
      secondary: "#c41369",
      accent: "#e4a6ed",
      neutral: "#15151e",
      base: "#ffffff",
      info: "#8bb9f8",
      success: "#73e8d5",
      warning: "#f2c43a",
      error: "#f7595f",
    },
  },
  plugins: [require("daisyui")],
};
export default config;
